import useFeck from "../customize/FeckData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";
import { useEffect, useState } from "react";
const Blogs = () => {
  let navigate = useNavigate();
  const [newData, setNewData] = useState([]);
  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useFeck("https://jsonplaceholder.typicode.com/posts", false);

//   const switchToAddBlogPage = () => {
//     navigate("/add-blog");
//   };
  console.log("Blogs.js check data >>>", dataBlogs);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length>0) {
        let data = dataBlogs.splice(0, 9);
        setNewData(data);
        console.log("run into useEffect");
    }
   
  }, [dataBlogs]);

  const handleAddNewBlog = (newBlog) => {
        console.log(">>> check newBlog", newBlog);
        let d = [...newData];
        d.unshift(newBlog);
        console.log(">>> check data", d);
       setNewData(d);
        console.log("run into handleAddNewBlog");
  };

  const handleDeleteBtn=(id)=>{
    let data=[... newData];
    data= data.filter((item)=>item.id!==id);
    setNewData(data);
  }

  return (
    <>
      <div>
        <AddBlog handleAddNewBlog={handleAddNewBlog}></AddBlog>
      </div>
      <div className="all-blog row container justify-content-center mx-auto">
        {newData &&
          newData.map((item, index) => {
            return (
              <Card
                className="col-md-3 m-2"
                key={index}
                style={{
                  background: "white",
                  color: "black",
                  fontSize: "13px",
                  textAlign: "left",
                }}
              >
                <Card.Img src="https://picsum.photos/200/100"></Card.Img>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
                <Button className="btn btn-primary mb-2 ">Detail</Button>
                <Button className="btn btn-danger  mb-2" onClick={()=>{handleDeleteBtn(item.id)}}>Delete</Button>
              </Card>
            );
          })}

        {isLoading === true && <div>Loading...</div>}
      </div>
    </>
  );
};

export default Blogs;
