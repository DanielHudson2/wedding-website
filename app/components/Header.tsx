import React from 'react';

function Header() {
    return (
        <header>
            <span className="logo"><a href="/">C&D</a></span>

            <nav>
                <ul>
                    <li><a href="/#ourStory">Our Story</a></li>
                    <li><a href="/the-big-day">The Big Day</a></li>
                    <li><a href="/venue">Venue</a></li>
                    <li><a href="/accomodation">Accomodation</a></li>
                </ul>
            </nav>

            <div className="header-button">

                <a href="/rsvp" className="button button--secondary">RSVP</a>

            </div>
            
        </header>
    )
}

export default Header;