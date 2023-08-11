import { NextResponse } from "next/server"

export const successResponse = (data: any, status: number) => {
    return NextResponse.json({ data }, { status })
}

export const errorResponse = (error: any, status: number) => {
    return NextResponse.json({ error }, { status })
}