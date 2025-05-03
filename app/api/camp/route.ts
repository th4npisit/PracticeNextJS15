import { fetchCamps } from "@/utils/action"
import { NextResponse } from "next/server"

export const GET = async(req:NextResponse) => {
    console.log(req)
    const {searchParams} = new URL(req.url);
    const search = searchParams.get('search');
    console.log(search);
    const camps = await fetchCamps()
    // return Response.json({camps})
    return NextResponse.redirect(new URL('/',req.url))
}