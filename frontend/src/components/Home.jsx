import { useState } from "react";
import Field from "./Field";

const generateRandomId = () => {
  const id = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  return id;
};

export default function Home() {
  const [data, setData] = useState([{ id: generateRandomId(), note: "" }]);

  const handleAdd = () => {
    const newField = { id: generateRandomId(), note: "" };
    const newData = [...data, newField];
    setData(newData);
  };

  const handleRemove = (id) => {
    if (data.length > 1) {
      const filteredData = data.filter((object) => object.id !== id);
      setData(filteredData);
    }
  };

  const handleFieldValue = (value, id) => {
    const updatedData = data.map((object) => {
      if (object.id === id) {
        object.note = value;
      }
      return object;
    });

    setData(updatedData);
  };

  const handleSubmit = () => {
    fetch("http://localhost:4000/note", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => alert(response.statusText));
  };

  return (
    <>
      <div>
        {data?.map((dataObject) => (
          <Field
            key={dataObject.id}
            id={dataObject.id}
            handleRemove={handleRemove}
            handleFieldValue={handleFieldValue}
          />
        ))}
      </div>

      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
