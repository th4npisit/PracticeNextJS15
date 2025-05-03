'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { title } from "process";

export const createCamps = async(prevState:any,formData:FormData)=>{
    await new Promise((resolve)=>setInterval(resolve,1000));
    const rawData = Object.fromEntries(formData)
    console.log(rawData);
    //prisma.camp.create()
    revalidatePath('/camp');
    // redirect('/');
    return 'create camp success!!!'
}

export const fetchCamps = async()=>{
    // prisma.camp.findMany({})
    const camps = [
        {id:1,title:'Khon Kean'},{id:2,title:'Bangkok'},{id:3,title:'Buriram'}
    ]
    return camps
}