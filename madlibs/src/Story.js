import React from "react";

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
    <>
      <h3>Your story</h3>
      <div>{StoryOptions[topic]}</div>
      <button onClick={restart}>Restart</button>
    </>
  );
};

export default Story;
