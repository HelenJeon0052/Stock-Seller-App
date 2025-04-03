import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/lib/prisma'



export async function GET(request:NextRequest) {

    const data = await prisma.user.findMany()

    return NextResponse.json(data, {status:200})
}

/* export async function POST (request:NextRequest) {
    
  const body=await request.json()

    if (!body.title) {
      return NextResponse.json({ error: "title is required" }, { status: 200 });
    }
    
  console.log('title'+body.title)
    
  const newPost = await db.post.create({
      data: {
        title:body.title,
        category:body.category,
        status:body.status,
      },
    });

  return NextResponse.json(newPost, {status:201})

}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}) {

    const response={
        message:'todos/:id deleted',
        data:{
            id:params.id,
        }
    }

    const findPost = await db.post.findUnique({
        where:{id:parseInt(params.id)}
    })

    if (!findPost) {
        return NextResponse.json({ error: "ACCOUNT DOES NOT EXISTS" }, { status: 404 });
    }

    const deletePost=await db.post.delete({
        where:{id:parseInt(params.id)}
    })

    return NextResponse.json(response, {status:200})
} */