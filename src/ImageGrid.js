import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageGrid = ({ images }) => {
    return (
        <Container>
            {images.map((image, index) => (
                <img
                    src={image}
                    alt={`Image ${index}`}
                    style={{ width: '72px', height: '72px', padding: '1px' }}
                />
            ))}
        </Container>
    );
};

export default ImageGrid;
