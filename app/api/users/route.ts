import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(usersList);
}