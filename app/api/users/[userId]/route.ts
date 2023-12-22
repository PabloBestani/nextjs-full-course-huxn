import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(request: Request, { params }: {
    params: {
        userId: string;
    }
}) {
    const { userId } = params;
    const user = usersList.find(user => user.id === +userId);
    if (!user) {
        return NextResponse.json('User not found.', { status: 404 })
    }
    return NextResponse.json(user, { status: 200 })
}