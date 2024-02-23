import { useGetPostByIdQuery } from "../app/service/dummyData";

const SpecificPost = () => {
  const { data, isError, isLoading } = useGetPostByIdQuery(10);

  if (isError) {
    return <h1>OOOhNoooo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.body}</h1>
      <h1>{data?.userId}</h1>
    </div>
  );
};

export default SpecificPost;