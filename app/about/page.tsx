import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos/";
const fetchTodos = async() =>{
  await new Promise((resolve)=>setInterval(resolve,1000));
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data;
}
type Data ={
  completed:boolean,
  id:number,
  userId:number,
  title:string
}
const AboutPage = async() => {
  const data:Data[] = await fetchTodos();
  console.log(data);
  return (
    <div>AboutPage
      {
        data.map((item,index)=>{
          return <li key={index}>{item.title}</li>
        })
      }
    </div>
  )
}
export default AboutPage