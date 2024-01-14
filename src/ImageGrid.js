import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
    return (
        <Container>
            {images.map((image, index) => (
                <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{ width: '144px', height: '144px', padding: '2px' }}
                />
            ))}
        </Container>
    );
};

export default ImageGrid;
