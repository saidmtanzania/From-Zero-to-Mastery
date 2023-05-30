/* eslint-disable @typescript-eslint/no-explicit-any */
function AddUSer(props: any) {
  const addUserHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username ">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUSer;
