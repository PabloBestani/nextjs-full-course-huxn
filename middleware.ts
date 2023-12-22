import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // return NextResponse.redirect(new URL('/login', request.url));
    return NextResponse.json({ success: 'ran successfully' });
}

export const config = {
    matcher: ['/users/:path*']
}