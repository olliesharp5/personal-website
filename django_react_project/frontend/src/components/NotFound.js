import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem', color: 'white' }}>
            <h1>404</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className='coloured-button button-404'>
                Go back to the homepage
            </Link>
        </div>
    );
};

export default NotFound;