import { Fragment, useEffect, useState } from "react";

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/note")
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Fragment>
      {list?.map((data) => (
        <Fragment key={data._id}>
          <p>Id: {data.id}</p>
          <p>Note: {data.note}</p>
          <p>Created At: {data.createdAt}</p>
          <p>Updated At: {data.updatedAt}</p>
          <hr />
        </Fragment>
      ))}
    </Fragment>
  );
}
