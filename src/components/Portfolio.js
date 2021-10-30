import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = ({imageGallery}) => {
    return (
        <div className="portfolio">
            <div className="heading">
                <h3>Our Products</h3>
            </div>
            {
                imageGallery.map((item)=>{
                    return (
                        <Link key={item.Id} to={`/${item.Id}`}>
                            <div style={{ backgroundImage: `url(${item.HeadImageURL})` }} className="tile">
                                <div className="description">
                                    <h4>{item.Title}</h4>
                                    <span>{item.Description}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Portfolio
