"use client";
import { createCamps } from "@/utils/action";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
const SubmitButton = ()=>{
    const {pending} = useFormStatus()
    return <button type="submit" disabled={pending} className="bg-red-300">
        {pending
        ?'Submitting'
    :'Submit'
    }
    </button>
}
const Form = () => {
    const [message,formAction] = useActionState(createCamps,null)
  return (
    <>
    {message &&<h1>{message}</h1> }
    <form action={formAction}>
      <input
        type="text"
        className="border"
        name="title"
        placeholder="Camping Name"
        defaultValue="Korat Route 3060"
        size={20}
      />
      <input
        type="text"
        className="border"
        name="location"
        placeholder="Camping Detail"
        defaultValue={"Korat"}
        size={20}
      />
      <SubmitButton/>
    </form>
    </>
  );
};
export default Form;
