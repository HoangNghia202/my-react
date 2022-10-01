import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
const AddBlog = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {handleAddNewBlog}= props;
  let handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  let handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  let handleAddBtn = async() => {
    console.log("title", title);
    console.log("content", content);
    if (!title) {
      alert("Please enter title");
      return;
    }

    if (!content) {
      alert("Please enter content");
      return;
    }

    let data = {
        title: title,
        body: content,
        userId:1,
    }

    let res= await axios.post("https://jsonplaceholder.typicode.com/posts",data);
    console.log(">>> check res",res);
    let newBlog= res.data;
    console.log(">>> check newBlog",newBlog);
    setContent("");
    setTitle("");
    setShow(false);
    handleAddNewBlog(newBlog);
   
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new blog
      </Button>

   
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="mx-auto p-3 rounded">
              <Form.Group className="">
                <Form.Label>Title </Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Enter title"
                  onChange={(event) => {
                    handleChangeTitle(event);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  value={content}
                  placeholder="Enter content"
                  onChange={(event) => {
                    handleChangeContent(event);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={() => handleAddBtn()}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
};

export default AddBlog;
