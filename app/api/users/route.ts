import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = usersList;
    return NextResponse.json({ data }, { status: 200 });
}

// SIGN UP
export async function POST(req: Request) {
    const { name, email, password, gender } = await req.json();

    if (!name || !email || !password) {
        return NextResponse.json(
            { error: 'Required fields not found', ok: false },
            { status: 400 }
        );
    };
    const newUser = usersList.push({
        id: usersList.length,
        name,
        email,
        password,
        gender: gender || 'Male'
    });
    return NextResponse.json(
        { newUser, ok: true },
        { status: 200 }
    )
}