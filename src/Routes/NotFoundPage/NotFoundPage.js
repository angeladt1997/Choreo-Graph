
import React from 'react';

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