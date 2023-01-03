import { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
