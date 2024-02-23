import AllPosts from "./components/AllPosts";
import SpecificPost from "./components/SpecificPost";
import AddNewPost from "./components/AddNewPost";
import UpdatePost from "./components/UpdatePost";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <div>
      <AllPosts /> 
      <SpecificPost /> 
      <AddNewPost/>
      <UpdatePost PostId={4} />
      <DeletePost PostId={2} />
    </div>
  );
};

export default App;
