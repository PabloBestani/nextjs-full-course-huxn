import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(req: Request, { params }: {
    params: {
        id: string;
    }
}) {
    const { id } = params;
    const user = usersList.find(user => user.id === +id);
    if (!user) {
        return NextResponse.json(
            { error: 'User not found', ok: false },
            { status: 404 }
        );
    }
    return NextResponse.json(
        { user, ok: true },
        { status: 201 }
    );
};

// LOGIN
export async function POST(req: Request, { params }: {
    params: {
        id: string;
    }
}) {
    const { email, password } = await req.json();
    const { id } = params;
    const user = usersList.find(user => user.id === +id);
    if (!user) return NextResponse.json(
        { error: 'User not found', ok: false },
        { status: 404 }
    );
    const { email: uEmail, password: uPassword } = user;
    if (email !== uEmail || password !== uPassword) {
        return NextResponse.json(
            { error: 'Invalid credentials', ok: false },
            { status: 403 }
        )
    };
    return NextResponse.json(
        { res: 'Login successful', ok: true },
        { status: 200 }
    );
}