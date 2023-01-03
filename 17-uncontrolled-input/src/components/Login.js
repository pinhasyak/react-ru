function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputUserData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    alert(JSON.stringify(inputUserData));
  };

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" name="username"></input>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
