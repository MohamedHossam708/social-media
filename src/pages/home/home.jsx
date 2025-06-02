import { useLoaderData, useNavigation } from "react-router-dom";

const Home = () => {
  const posts = useLoaderData();
  console.log(posts);
  console.log(navigation);
  
  return (
    <>
      <div>Home</div>;
    </>
  );
};

export default Home;
