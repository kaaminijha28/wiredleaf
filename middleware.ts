import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the user token from the cookies
  const authToken = request.cookies.get('auth-token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
  const isBookingPage = request.nextUrl.pathname.startsWith('/book-consultation');

  // If trying to access booking page without auth
  if (isBookingPage && !authToken) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // If trying to access auth page while already authenticated
  if (isAuthPage && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
