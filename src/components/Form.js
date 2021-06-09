import React, { useState } from "react";
const Form = ({ initialSong, handleSubmit, history }) => {
 
  const [formData, setFormData] = useState(initialSong);
 
  const handleChange = (event) => {
    
    const newState = { ...formData };
   
    newState[event.target.name] = event.target.value;
    
    setFormData(newState);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.artist}
        name="artist"
      />
         <input
        type="text"
        onChange={handleChange}
        value={formData.time}
        name="time"
      />
      <input type="submit" value="Add Song!" />
    </form>
  );
};
export default Form;