import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient()



//fetch all categories
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()
     //   console.log(categories,"categories");
        return new NextResponse(
            JSON.stringify(categories),
            { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something Went Wrong!!" }),
            { status: 500 });
    }
   
}