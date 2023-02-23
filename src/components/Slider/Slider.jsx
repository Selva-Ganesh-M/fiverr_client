import React from 'react'
import "./slider.scss"
import Slider from "infinite-react-carousel"

const SliderC = ({ children, arrowsScroll, slidesToShow }) => {
    return (
        <div className="slider">
            <div className="container">
                <Slider
                    arrowsScroll={arrowsScroll}
                    slidesToShow={slidesToShow}
                >
                    {
                        children
                    }
                </Slider>
            </div>
        </div>
    )
}

export default SliderC