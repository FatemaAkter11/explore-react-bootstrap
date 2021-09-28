import React from 'react';
import { Col, Card } from 'react-bootstrap';

const News = (props) => {
    const { title, author, urlToImage, description } = props.news;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title>{author}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;