import React,{useState} from 'react';
import { Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AddMovie = ({addMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setnewMovie] = useState([])
    const handleChange=(e)=>{
        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    return (
        <div className="borderbox">
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Year</Form.Label>
            <Form.Control onChange={handleChange} name="Year" type="text" placeholder="Enter year" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={handleChange} name="description" type="text" placeholder="Enter description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control onChange={handleChange} name="rating" type="number" placeholder="Enter rating" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Movie poster</Form.Label>
            <Form.Control onChange={handleChange} name="posterUrl" type="text" placeholder="Enter URL of the poster" />
        </Form.Group>
        </Form>
        <Link to="/MovieList">
         <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
            Save Changes
          </Button>
          </Link>
        </div>
    )
}
export default AddMovie;
