import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
    return (
        <Container>
            <Row>
                {images.map((image, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <img
                            src={image}
                            alt={`Image ${index}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ImageGrid;
