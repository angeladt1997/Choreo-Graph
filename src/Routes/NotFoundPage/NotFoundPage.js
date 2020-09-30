
import React from 'react';

//my goal for this page is figuring out how to incorporate a single
//back button that allows users to backtrack wherever they intended to go
//I'd also like to make an unauthorized page for users attempting to get 
//to content they shouldn't be using
const NotFoundPage = (props) => {
  return (
    <div className="notFound">
      <h2>404 - Page not found</h2>
      <p>Graphtastic exploring, but you have graphed a bit too far. Go ahead and back 
        graph up!</p> 
    </div>
  );
}

NotFoundPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NotFoundPage;