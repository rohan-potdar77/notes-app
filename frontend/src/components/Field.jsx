const Field = (props) => {
  const { id, handleRemove, handleFieldValue } = props;

  const handleChange = (event) => {
    const value = event.target.value;
    handleFieldValue(value, id);
  };

  const handleClick = () => {
    handleRemove(id);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Field;
