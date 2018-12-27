import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div className="pageContent">
    <div className="heading">
      <h1>Home Page</h1>
    </div>
    <div className="pageBody">
    
    </div>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
