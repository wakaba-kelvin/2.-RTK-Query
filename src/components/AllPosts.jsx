import React from 'react';
import { useGetAllPostQuery } from "../app/service/dummyData";

const AllPosts = () => {
  const { data, isError, isLoading, error } = useGetAllPostQuery();
  console.log(data);

  if (isError) {
    console.error("Error fetching data:", error);
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data && data.posts && data.posts.map((p) => (
        <React.Fragment key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.description}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllPosts;
