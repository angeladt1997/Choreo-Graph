import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1>
        About Choreo-Graph
      </h1>
    </div>
  );
}

About.defaultProps = {
    history: {
      push: () => {},
    },
  }

export default About;