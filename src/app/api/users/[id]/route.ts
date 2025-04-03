import { NextRequest, NextResponse } from 'next/server'
import db from '@/db'



export async function GET(request:NextRequest, {params}:{params:{id:string}}) {

    const reqId = parseInt(params.id)

    const getUser = await db.user.findUnique({
        where: { id: reqId }
    })

    if(!getUser) {
        return NextResponse.json({ error: "USER NOT FOUND" }, { status: 404 });
    }

    return NextResponse.json(getUser, {status:200})
}

export async function PUT(request:NextRequest, {params}:{params:{id:string}}) {

    const getUser = await db.user.findUnique({
        where: {
            id:parseInt(params.id)
        }
    })

    if(!getUser) {
        return NextResponse.json({ error: "USER NOT FOUND" }, { status: 404 });
    }

    const updateUserInfo = await db.user.update({
        where: {
            id: parseInt(params.id),
            data: {
                /* */
            }
        }
    })

    return NextResponse.json(updateUserInfo, {status:201})
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {

    const findUser = await db.user.findUnique({
        where:{id:parseInt(params.id)}
    })

    if (!findUser) {
        return NextResponse.json({ error: "USER DOES NOT EXISTS" }, { status: 404 });
    }

    const deleteUser=await db.user.delete({
        where:{id:parseInt(params.id)}
    })

    return NextResponse.json(deleteUser, {status:201})
}