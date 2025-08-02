'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SkipperProps {
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
  onComplete?: () => void;
}

export function Skipper({ steps, onComplete }: SkipperProps) {
  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto p-6">
      <div className="space-y-6">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Step content */}
        <div className="min-h-[200px]">
          <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
          <div className="prose max-w-none">
            {steps[currentStep].content}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button onClick={handleNext}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep ? 'bg-primary w-4' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
