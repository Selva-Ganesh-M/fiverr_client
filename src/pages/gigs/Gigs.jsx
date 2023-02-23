import React, { useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'
import "./gigs.scss"

const Gigs = () => {
    //#region : declarations

    //#endregion

    //#region : custom-declarations
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false)
    const [sortBy, setSortBy] = useState("sales")

    //#endregion

    //#region : side-effects

    //#endregion

    //#region : functions
    const reSort = (type) => {
        setSortBy(type)
        setIsSortMenuOpen(false)
    }

    //#endregion

    //jsx rendering
    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">
                    FIVERR &gt; GRAPHIC & DESIGN &gt;
                </span>
                <h1>AI Artists</h1>
                <p>Explore the bounadaries of art and technology with Fiverr&apos;s AI artists</p>
                <div className="menu">
                    <div className="left">
                        <span>Budget:</span>
                        <input type="text" placeholder='min' />
                        <input type="text" placeholder='max' />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className='sortBy' >SortBy:</span>
                        <span className='sortType'>
                            {sortBy === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img
                            src="./img/down.png"
                            alt=""
                            onClick={() => setIsSortMenuOpen(prev => !prev)}
                        />
                        {
                            isSortMenuOpen && (
                                <div className="rightMenu">
                                    {
                                        sortBy === "sales" ? (
                                            <span onClick={() => reSort("createdAt")} >Newest</span>
                                        ) : (
                                            <span onClick={() => reSort("sales")}>Best Selling</span>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="cards">
                    {
                        gigs.map((gig) => <GigCard key={gig.id} item={gig} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Gigs