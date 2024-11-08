import { NavBar, Footer } from "./../../_components";
const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <NavBar/>
      <h1>{params.id}</h1>
    <Footer />
    </>
  );
};

export default Page;
