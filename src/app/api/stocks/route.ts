import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'



export async function GET(request:NextRequest) {

    const data = await prisma.stock.findMany()

    console.log(data)

    return NextResponse.json(data, {status:200})
}

export async function POST (request:NextRequest) {
    
  const body=await request.json()

    if (!body.title || !body.images) {
      return NextResponse.json({ error: "contents required" }, { status: 400 });
    }
    
  const newPost = await prisma.stock.create({
      data: {
        title:body.title as string,
        tags:body.tags || "",
        images:body.images as string[],
        desc:body.desc as string,
        price:body.price as number,
        userId:body.user as string
      },
    });

  return NextResponse.json(newPost, {status:201})

}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {

    const response={
        message:'stocks/:id deleted',
        data:{
            id:params.id,
        }
    }

    const findPost = await prisma.stock.findUnique({
        where:{id:parseInt(params.id)}
    })

    if (!findPost) {
        return NextResponse.json({ error: "ACCOUNT DOES NOT EXISTS" }, { status: 404 });
    }

    const deletePost=await prisma.stock.delete({
        where:{id:parseInt(params.id)}
    })

    return NextResponse.json(response, {status:200})
}