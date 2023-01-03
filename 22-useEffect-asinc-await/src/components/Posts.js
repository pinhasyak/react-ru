import { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseP = await fetch(API_URL);
        const postArr = await responseP.json();
        setPosts(postArr);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <h1>Error :{error}</h1>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        posts.map((post) => {
          return <Post key={posts.id} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
