import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import age from '../images/age.jpg';
import age2 from '../images/Age-img-2.jpg';
import age3 from '../images/Age-img-1.webp';

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={age}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={age2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={age3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </>
    );
}

export default Home;
