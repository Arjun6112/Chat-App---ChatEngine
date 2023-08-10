import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://chat-app-chatengine.onrender.com/authenticate", {
        username: value,
      })
      .then((res) => props.onAuth({ ...res.data, secret: value }))
      .catch((err) => console.log(err));
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" required />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
      <div className="made-by">Made by Arjun with ❤️</div>
    </div>
  );
};

export default AuthPage;
