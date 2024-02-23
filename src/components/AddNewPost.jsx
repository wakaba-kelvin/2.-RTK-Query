import React from 'react';
import { useAddNewPostMutation } from "../app/service/dummyData";

const AddNewPost = () => {
  const [addNewPost, { data, error, isLoading }] =
    useAddNewPostMutation();

  const handleAddPost = async () => {
    try {
      const newPostData = {
        title: "Amazing T-Shirt",
        description: "This is one of the best and amazing t-shirt in the market",
      };

      await addNewPost(newPostData);
    } catch (err) {
      console.error("Error adding new Post:", err);
    }
  };

  return (
    <div>
      {error && <h1>Error: {error.message}</h1>}
      
      {data && (
        <div>
          {/* <h1>{data.id}</h1> */}
          <h1>{data.title}</h1>
          <h1>{data.description}</h1>
        </div>
      )}

      <button onClick={handleAddPost} disabled={isLoading}>
        Add New Post
      </button>
    </div>
  );
};

export default AddNewPost;
