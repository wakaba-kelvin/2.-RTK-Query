import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => "posts", // Removed the leading "/"
    }),

    getPostById: builder.query({
      query: (id) => `posts/${id}`, // Removed the leading "/"
    }),

    addNewPost: builder.mutation({
      query: (newpost) => ({
        url: "posts", // Removed the "/add" and changed method to "POST"
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newpost, // Use the newpost directly, assuming it's a valid JSON object
      }),
    }),

    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `posts/${id}`, // Removed the leading "/"
        method: "PUT", // Changed the method to "PUT" for update
        headers: { "Content-Type": "application/json" },
        body: updatedPost,
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`, // Removed the leading "/"
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
