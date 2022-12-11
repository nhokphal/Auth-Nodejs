import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [error, setError] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})

    const handleClick = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(data);
      } catch {
        setError(true);
      }
      setLoading(false)
    };
    return (
      <div className="container">

        <span className="user">{}</span>
        <form>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button disabled={!username || !password} onClick={handleClick}>  
          {loading ? "please wait" : "Login"}
          </button>
          <span
            data-testid="error" style={{ visibility: error ? "visible" : "hidden" }}>      
          </span>
        </form>
      </div>
    );
  };
  
  export default Login;