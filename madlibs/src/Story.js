import React from "react";
import "./Story.css";

const Story = ({ adj1, noun1, noun2, restart, topic }) => {
  const StoryOptions = {
    Ethereum: `Ethereum is a ${adj1}, open-source ${noun1} featuring smart ${noun2} functionality. 
            Ethereum was proposed in 2013 by programmer Vitalik Buterin.`,
    React: `React (also known as React.js or ReactJS) is an open-source, ${adj1}, 
            JavaScript ${noun1} for building user interfaces or UI components. 
            It is maintained by ${noun2} and a community of individual developers and companies.`,
    Reddit: `Reddit is a website comprising user-generated content—including photos, videos, links, 
            and text-based posts—and discussions of this content in what is essentially 
            a bulletin ${adj1} ${noun1} ${noun2}.`,
  };
  return (
    <div className="Story-container">
      <h3 className="Story-h3">Your story</h3>
      <div className="Story-story">{StoryOptions[topic]}</div>
      <button className="btn" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default Story;
