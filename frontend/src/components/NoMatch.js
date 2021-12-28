import React from 'react'
import {Link, useLocation} from 'react-router-dom';

const NoMatch = () => {
    let location = useLocation();
    return (
        <div>
          <h2>Nothing to see here!</h2>
          <div>PAGE ...{location.pathname} NOT FOUND!</div>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </div>
    );
}

export default NoMatch