import React from 'react';
import Slider from 'react-slick';

// Custom arrow components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-next" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-prev" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        </div>
    );
};

const Carousel = ({ images, title }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="image-carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.images} alt={`${title} image ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
