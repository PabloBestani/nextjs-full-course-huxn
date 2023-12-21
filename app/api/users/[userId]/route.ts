import { usersList } from "@/lib/db";
import { NextResponse } from "next/server";

export function GET(_: any, response: {
    params: {
        userId: number;
    }
}) {
    const { userId } = response.params;
    const user = usersList.find(user => user.id === +userId);
    if (!user) {
        return NextResponse.json('User not found.', { status: 404 })
    }
    return NextResponse.json(user, { status: 200 })
}