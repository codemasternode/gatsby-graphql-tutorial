import React from 'react'
import {Link} from 'gatsby'

const Navigation = () => (
    <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/articles">Articles</Link>
    </ul>
)

export default Navigation