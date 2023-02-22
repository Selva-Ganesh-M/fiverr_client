import React, { useEffect, useState } from 'react'
import "./navbar.scss"
// import { Link } from "react-router-dom"

const Navbar = () => {
    //#region : declarations

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
        <div className={active ? "navbar active" : 'navbar'} >
            <div className="container">
                <div className="logo">
                    {/* <Link to="/" > */}
                    <span className='text' >fiverr</span>
                    {/* </Link> */}
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
                                                    <span>Gigs</span>
                                                    <span>Add new gig</span>
                                                </>
                                            )
                                        }
                                        <span>Order</span>
                                        <span>Messages</span>
                                        <span>Logout</span>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {
                active && <>
                    <hr />
                    <div className="menu">
                        <span>Test1</span>
                        <span>Test2</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar