import React from 'react'
import CateCard from '../../components/cateCard/CateCard'
import Featured from '../../components/featured/Featured'
import ProjectCard from '../../components/projectCard/ProjectCard'
import SliderC from '../../components/Slider/Slider'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from '../../data'
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <SliderC slidesToShow={4} arrowsScroll={4} >
                {
                    cards.map(item => <CateCard item={item} key={item.key} />)
                }
            </SliderC>

            {/* first features */}
            <div className="features">
                <div className="container">
                    <div className="left item">
                        <h1>A whole world of freelance talent at your fingertips.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Quality work done quickly
                        </div>
                        <p>
                            Find the right freelancer to begin working on your project within
                            minutes.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Protected payments, every time
                        </div>
                        <p>
                            Always know what you&apos;ll pay upfront. Your payment isn&apos;t released
                            until you approve the work.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                    </div>
                    <div className="right item">
                        <video src="./img/video.mp4" controls ></video>
                    </div>
                </div>
            </div>



            {/* second features */}
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>
                            liverr <i>business</i>
                        </h1>
                        <h1>
                            A business solution designed for <i>teams</i>
                        </h1>
                        <p>
                            Upgrade to a curated experience packed with tools and benefits,
                            dedicated to businesses
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to freelancers with proven business experience
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage teamwork and boost productivity with one powerful workspace
                        </div>
                        <button>Explore Liverr Business</button>
                    </div>
                    <div className="item right">
                        <img
                            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <SliderC slidesToShow={4} arrowsScroll={4}>
                {projects.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </SliderC>
        </div >
    )
}

export default Home