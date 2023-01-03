import { NextResponse } from "next/server";

export function middleware(req, res) {
    const url = req.nextUrl.clone()
    if (url.pathname === '/admin/login') {
       return NextResponse.next()
    }

    const token = req.cookies.get("token");
    if (!token) {
        url.pathname = '/admin/login'
        return NextResponse.redirect(url)
    }

    NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
