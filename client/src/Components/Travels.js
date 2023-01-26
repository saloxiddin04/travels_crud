import React, {useEffect, useState} from "react";
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
import {Link} from "react-router-dom";
import axios from "axios";

const Travels = () => {

    const [travels, setTravel] = useState([])
    const [id, setId] = useState('')

    const fetchData = async () => {
        const {data} = await axios.get("https://auth-pmhp.onrender.com/api/travel")
        setTravel(data.travels)
    }

    const deletePost = async (e) => {
        e.preventDefault()
        await axios.delete(`https://auth-pmhp.onrender.com/api/travel/${id}`)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="my-3">
            {travels.map(tb => (
                <Container className="my-3" key={tb._id}>
                    <Row>
                        <Col md={5}>
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
                    </Row>
                </Container>
            ))}

        </div>
    )
}

export default Travels
