import React from 'react';

function Header() {
    return (
        <header>
            <h1><a href="/">C&D</a></h1>

            <nav>
                <ul>
                    <li><a href="/#ourStory">Our Story</a></li>
                    <li><a href="/the-big-day">The Big Day</a></li>
                    <li><a href="/venue">Venue</a></li>
                    <li><a href="/accomodation">Accomodation</a></li>
                </ul>
            </nav>

            <div className="header-button">

                <a href="/rsvp" className="button">RSVP</a>

            </div>
            
        </header>
    )
}

export default Header;