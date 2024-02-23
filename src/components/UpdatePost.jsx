import React from 'react';
import { useAddNewPostMutation } from "../app/service/dummyData";

const AddNewPost = () => {
  const [addNewPost, { data, error, isLoading }] = useAddNewPostMutation();

  const handleAddPost = async () => {
    try {
      const newPostData = {
        title: "Amazing T-Shirt",
        description: "This is one of the best and amazing t-shirt in the market",
      };

      await addNewPost({ body: newPostData }); // Use the POST method here
    } catch (err) {
      console.error("Error adding new Post:", err);
    }
  };

  return (
    <div>
      {error && <h1>Error: {error.message}</h1>}
      
      {data && (
        <div>
          <h1>New Post Added Successfully!</h1>
          <h2>Title: {data.title}</h2>
          <p>Description: {data.description}</p>
        </div>
      )}

      <button onClick={handleAddPost} disabled={isLoading}>
        Update Post
      </button>
    </div>
  );
};

export default AddNewPost;
