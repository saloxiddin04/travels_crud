import React, {useState} from "react";
import {
    Form,
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Add = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('https://mern-app-travel-crud.herokuapp.com/api/travel/add', {
            title,
            desc,
            image
        })
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit} className="mt-3">
            <Container>
                <Col md={12}>
                    <FormGroup>
                        <Label for="title">
                            Title
                        </Label>
                        <Input
                            id="title"
                            placeholder="Title"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">
                            Description
                        </Label>
                        <Input
                            id="description"
                            placeholder="Description"
                            type="text"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                <Row>
                </Row>
                <FormGroup>
                    <Label for="link">
                        Image link
                    </Label>
                    <Input
                        id="link"
                        placeholder="Image link"
                        type="text"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </Container>
        </Form>

    )
}

export default Add
