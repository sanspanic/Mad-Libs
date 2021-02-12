import React, { useState } from "react";

const Form = ({ addNewWords }) => {
  const initialState = { adj1: "", noun1: "", noun2: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewWords(formData);
    setFormData(initialState);
  };

  return (
    <>
      <div>Enter a random word.</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="adj1">Adjective</label>
        <input
          id="adj1"
          name="adj1"
          placeholder="adjective"
          type="text"
          value={formData.adj1}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="noun1">Noun</label>
        <input
          id="noun1"
          name="noun1"
          placeholder="Noun"
          type="text"
          value={formData.noun1}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="noun2">Noun</label>
        <input
          id="noun2"
          name="noun2"
          placeholder="Noun"
          type="text"
          value={formData.noun2}
          onChange={handleChange}
          required
        ></input>
        <button>Make story!</button>
      </form>
    </>
  );
};

export default Form;
