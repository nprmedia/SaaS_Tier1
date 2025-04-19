import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * 🔐 Middleware — Global Edge Logic
 * - Bot protection
 * - Auth redirect for secure routes
 * - Future-ready geo, locale, A/B testing
 */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block known bots
  const userAgent = request.headers.get('user-agent')?.toLowerCase()
  if (userAgent && userAgent.includes('bot')) {
    return new Response('Blocked for bots', { status: 403 })
  }

  // Secure route enforcement
  const isProtectedRoute = pathname.startsWith('/dashboard')
  const session = request.cookies.get('session_token')?.value

  if (isProtectedRoute && !session) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/((?!_next|static|favicon.ico).*)'],
}
