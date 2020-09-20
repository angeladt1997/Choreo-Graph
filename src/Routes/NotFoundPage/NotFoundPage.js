
import React from 'react';

const NotFoundPage = (props) => {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>Graphtastic exploring, but you have graphed a bit too far.</p> 
    </div>
  );
}

NotFoundPage.defaultProps = {
  history: {
    push: () => {},
  },
}

export default NotFoundPage;