import React from 'react'

const Main = ({frontImage}) => {
    return (
        <div className="main">
            <div className="leftIntro">
                <div className="greetings">
                    <h3>Welcome to<br/><span>Goodie Portfolio</span></h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className="rightIntro" style={{ backgroundImage: `url(${frontImage})` }}>
                <div className="overlay" />
            </div>
        </div>
    )
}

export default Main
