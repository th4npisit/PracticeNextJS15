import { fetchCamps } from "@/utils/action";
const CampList = async () => {
  const camps = await fetchCamps();
  console.log(camps);
  return (
    <div>
      {camps.map((item, index) => {
        return <li key={index}>
          {item.id}:{item.title}
        </li>;
      })}
    </div>
  );
};
export default CampList;
