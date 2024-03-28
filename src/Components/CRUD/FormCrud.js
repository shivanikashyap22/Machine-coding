import React, { useState } from "react";

const FormCrud = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState("");

  const handleClick = () => {
    if (isEdit) {
      const newData = [...data];
      newData[isEdit] = formData;
      setData(newData);
      setIsEdit(false);
    } else {
      setData([...data, formData]);
    }
    setFormData("");
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    setIsEdit(index);
    setFormData(data[index]);
  };

  return (
    <div>
      <div>
        <h2>To Do List</h2>
        <input
          type="text"
          placeholder="Enter the Data"
          onChange={(e) => setFormData(e.target.value)}
          name="name"
          value={formData}
        />
        <button onClick={handleClick}>
          {isEdit !== false ? "Edit" : "Add"}
        </button>
      </div>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>{item}</p>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormCrud;
