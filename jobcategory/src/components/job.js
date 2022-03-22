import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [jobcategory, setJobcategory] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { jobcategory };
      const response = await fetch("http://localhost:5000/job", {
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
      <h1 className="text-center mt-5">job-Category</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
        
          type="text"
          className="form-control"
          placeholder="Job-Category"
          value={jobcategory}
          onChange={e => setJobcategory(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
