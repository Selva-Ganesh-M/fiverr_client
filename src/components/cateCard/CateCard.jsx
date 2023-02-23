import React from 'react'
import "./cateCard.scss"
import { Link } from "react-router-dom"

const CateCard = ({ item }) => {
    return (
        <Link to="/gigs?cat=design">
            <div className="cateCard">
                <img src={item.img} alt="category-img" />
                <div className="abs">
                    <span className="desc">{item.desc}</span>
                    <span className="title">{item.title}</span>
                </div>
            </div>
        </Link>
    )
}

export default CateCard