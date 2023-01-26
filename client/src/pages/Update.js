import React, {useEffect, useState} from "react";
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
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Update = () => {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    const fetchData = async () => {
        const {data} = await axios.get(`https://travels-7b04.onrender.com/api/travel/${id}`)
        setTitle(data.travel.title)
        setDesc(data.travel.desc)
        setImage(data.travel.image)
    }

    const updateSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`https://mern-app-travel-crud.herokuapp.com/api/travel/${id}`, {
            title,
            desc,
            image
        })
        navigate('/')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Form onSubmit={updateSubmit} className="mt-3">
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
                            value={title}
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
                            value={desc}
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
                        value={image}
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

export default Update
