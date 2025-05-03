import Link from "next/link"

// rafce
const page = async() => {
  await new Promise((resolve)=>setInterval(resolve,1000));
    //JavaScript
  return (
    <>
    <h1>Hello World!</h1>
    <p>Rodtang</p>
    </>
  )
}
export default page
//rfce
// async function page() {
//   return (
//     <div>page</div>
//   )
// }
// export default page