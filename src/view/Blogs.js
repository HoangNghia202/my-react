import useFeck from "../customize/FeckData";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";


const Blogs =()=>{
    const { data: dataBlogs, isLoading, isError } = useFeck("https://jsonplaceholder.typicode.com/posts", false);
   
    console.log ('Blogs.js check data >>>', dataBlogs);
    let newData= dataBlogs.splice(0, 9);
    return(
        <div className="all-blog row container justify-content-center mx-auto">
            {
                newData && newData.map((item, index) => {
                    return (
                        <Card className="col-md-3 m-2" key={index} style={{background:"white", color:"black", fontSize:'13px', textAlign:'left'}}>
                            <Card.Img src="https://picsum.photos/200/100"></Card.Img>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.body}
                                </Card.Text>
                               
                            </Card.Body>
                            <Button className="btn btn-primary mb-2">Detail</Button>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default Blogs;