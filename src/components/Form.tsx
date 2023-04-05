import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
    </form>
  );
};

export default Form;
