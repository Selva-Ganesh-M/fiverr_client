import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md"
import { MdNavigateBefore } from "react-icons/md"
import "./NSlider.css"


const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-button next">
            <button className='next-btn' onClick={onClick}>
                <MdNavigateNext className={"icon"} />
            </button>
        </div>
    )
}

const SampleBeforeArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-button before" >
            <button className='before-btn' onClick={onClick}>
                <MdNavigateBefore className={"icon"} />
            </button>
        </div>
    )
}
const Categories = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleBeforeArrow />,
        // responsive: [
        //     {
        //         breakpoint: 786,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //     {
        //         breakpoint: 426,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    };
    return (
        <>
            <section className="category">
                <div className="content">
                    <Slider className={'NSslider'} {...settings}>
                        <img
                            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        <img
                            src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Categories