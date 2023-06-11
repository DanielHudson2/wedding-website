import React from 'react';

function Header() {
    return (
        <header>
            <h1><a href="/">Daniel & Celine</a></h1>
            <p>Thursday 11th April 2024 | Eastington Park, Gloucestershire</p>

            <nav>
                <ul>
                    <li><a href="/our-story">Our Story</a></li>
                    <li><a href="/the-big-day">The Big Day</a></li>
                    <li><a href="/venue">Venue</a></li>
                    <li><a href="/accomodation">Accomodation</a></li>
                    <li><a href="/rsvp">RSVP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;