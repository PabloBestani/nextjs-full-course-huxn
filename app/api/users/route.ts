import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(usersList);
}

export async function POST(req: Request, res: Response) {
    const { name, age, email, password } = await req.json();

    if (!name || !age || !email || !password) {
        return NextResponse.json(
            { error: "required field not found.", ok: false },
            { status: 404 }
        );
    }

    return NextResponse.json(
        { res: "User created successsfully.", ok: true },
        { status: 201 }
    );
}