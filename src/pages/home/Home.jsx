import React from 'react'
import CateCard from '../../components/cateCard/CateCard'
import Featured from '../../components/featured/Featured'
import SliderC from '../../components/Slider/Slider'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards } from '../../data'
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <SliderC slidesToShow={4} arrowsScroll={5} >
                {
                    cards.map(item => <CateCard item={item} key={item.key} />)
                }
            </SliderC>
        </div>
    )
}

export default Home