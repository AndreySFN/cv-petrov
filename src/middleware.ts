import { NextRequest, NextResponse, userAgent } from 'next/server';
import { strToBoolean } from './utils';

const USE_MIDDLEWARE = strToBoolean(process.env.MIDDLEWARE)

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
  
  const newUrl = new URL('/device-not-supported', request.nextUrl.origin);
  if (request.nextUrl !== newUrl && viewport === 'mobile' && USE_MIDDLEWARE) {
    return NextResponse.rewrite(new URL('/device-not-supported', request.url)) //TODO: Почему-то стили отвалисаются
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/cv/:path*',
}