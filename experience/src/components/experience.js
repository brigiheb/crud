import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [experience, setExperience] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { experience };
      const response = await fetch("http://localhost:5000/experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>  
      <h1 className="text-center mt-5">Experience</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
        
          type="text"
          className="form-control"
          placeholder="Nombre d'experience"
          value={experience}
          onChange={e => setExperience(e.target.value)}
        />
       
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
