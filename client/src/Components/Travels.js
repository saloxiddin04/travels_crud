import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Row,
    Col,
    Container
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Travels = () => {

    const [travels, setTravel] = useState([])
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')

    const fetchData = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get("https://travels-7b04.onrender.com/api/travel")
            setTravel(data.travels)
            setLoading(false)
        } catch (e) {
            console.log(e.message)
            setLoading(false)
        }
    }

    const deletePost = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.delete(`https://travels-7b04.onrender.com/api/travel/${id}`)
            fetchData()
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return 'Loading...'

    return (
        <div className="my-3">
            <Container className="my-3">
                <Row className="d-flex gap-5">
                    {travels.map(tb => (
                        <Col md={5} key={tb._id}>
                            <Card>
                                <img
                                    alt={tb.title}
                                    src={tb.image}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {tb.title}
                                    </CardTitle>
                                    <CardText>
                                        {tb.desc}
                                    </CardText>
                                    <div className="d-flex align-items-center">
                                        <Link
                                            className="text-decoration-none text-white btn btn-primary"
                                            to={`/update/${tb._id}`}>
                                            Update
                                        </Link>
                                        <form onSubmit={deletePost}>
                                            <button onClick={() => setId(tb._id)} className="btn btn-danger ms-2">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Travels
