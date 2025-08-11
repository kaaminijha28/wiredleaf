import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isBookingPage = request.nextUrl.pathname.startsWith('/book-consultation')

  // Store the requested URL to redirect after login
  if (isBookingPage && !session) {
    const redirectUrl = new URL('/auth/signin', request.url)
    redirectUrl.searchParams.set('redirectUrl', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If trying to access auth page while already authenticated
  if (isAuthPage && session) {
    // Check if there's a redirectUrl in the query params
    const redirectUrl = request.nextUrl.searchParams.get('redirectUrl')
    if (redirectUrl && redirectUrl.startsWith('/')) {
      return NextResponse.redirect(new URL(redirectUrl, request.url))
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}
