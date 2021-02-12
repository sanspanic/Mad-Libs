import React, { useState } from "react";

const TopicSelectionForm = ({ submitChoice }) => {
  const [topic, setTopic] = useState("React");

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitChoice(topic);
  };

  return (
    <>
      <h3>Select a topic to learn about.</h3>
      <form>
        <label htmlFor="topic">Topic</label>
        <select value={topic} id="topic" name="topic" onChange={handleChange}>
          <option value="Ethereum">Ethereum</option>
          <option value="React">React</option>
          <option value="Reddit">Reddit</option>
        </select>
        <button onClick={handleSubmit}>Submit choice</button>
      </form>
    </>
  );
};

export default TopicSelectionForm;
