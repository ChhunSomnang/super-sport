import React from 'react';
import Slider from '../Component/prevSlide';
import Newproduct from '../Component/Newproduct';
import Discount from '../Component/Discount';
import PopularProduct from '../Component/PopularProduct';




const Home = () => {
    return (
        <div>
            <Slider/>
            <Newproduct/>
            <Discount/>
            <PopularProduct/>
        </div>
    );
}

export default Home;
