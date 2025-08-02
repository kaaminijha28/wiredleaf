'use client';

import Spline from '@splinetool/react-spline';

export default function SplineDesign() {
  return (
    <div className="w-full h-[500px]">
      {/* Temporarily commented out until you have a real Spline URL */}
      {/* <Spline scene="YOUR_SPLINE_URL_HERE" /> */}
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Spline 3D content will appear here</p>
      </div>
    </div>
  );
}
