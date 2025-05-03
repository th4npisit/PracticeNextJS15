const AboutDetailPage = async({params}) => {
    const { id } = await params;
    const param = id;
    console.log(param);
  return (
    <div>AboutDetailPage: {id}</div>
  )
}
export default AboutDetailPage