import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    //#region : declarations
    const { pathname } = useLocation()
    //#endregion

    //#region : custom-declarations
    const [active, setActive] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    //#endregion

    //#region : side-effects
    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    //#endregion

    //#region : functions
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    //#endregion

    //jsx rendering
    return (
        <div className={active || pathname !== "/" ? "navbar active" : 'navbar'} >
            <div className="container">
                <div className="logo">
                    <Link className='link' to="/" >
                        <span className='text' >fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Liverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {
                        currentUser && (
                            <div className="user" onClick={() => setIsMenuOpen(prev => !prev)} >
                                <img src="https://sportshub.cbsistatic.com/i/2021/04/09/7ad108ac-5470-4483-8264-87d329b7a9a5/goku-1215472.jpg" alt="profile-img" />
                                <span>{currentUser.username}</span>
                                {
                                    isMenuOpen &&

                                    <div className="options">
                                        {
                                            currentUser.isSeller && (
                                                <>
                                                    <Link className='link' to="/mygigs">Gigs</Link>
                                                    <Link className='link' to="/add">Add new gig</Link>
                                                </>
                                            )
                                        }
                                        <Link className='link' to="/orders">Order</Link>
                                        <Link className='link' to="/messages">Messages</Link>
                                        <Link className='link' to="/">Logout</Link>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {
                active || pathname !== "/" && <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            Graphics & Design
                        </Link>
                        <Link className="link menuLink" to="/">
                            Video & Animation
                        </Link>
                        <Link className="link menuLink" to="/">
                            Writing & Translation
                        </Link>
                        <Link className="link menuLink" to="/">
                            AI Services
                        </Link>
                        <Link className="link menuLink" to="/">
                            Digital Marketing
                        </Link>
                        <Link className="link menuLink" to="/">
                            Music & Audio
                        </Link>
                        <Link className="link menuLink" to="/">
                            Programming & Tech
                        </Link>
                        <Link className="link menuLink" to="/">
                            Business
                        </Link>
                        <Link className="link menuLink" to="/">
                            Lifestyle
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar