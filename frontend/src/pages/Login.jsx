import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Brand from '../components/Brand';
import loginRobot from '../assets/images/login-robot.svg';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/app');
  }

  return (
    <div className="login-page">
      <div className="login-art">
        <Link to="/"><Brand /></Link>
        <img className="login-robot" src={loginRobot} alt="Friendly AuraGen AI assistant" />
        <h1>Welcome back to adaptive work.</h1>
        <p>Enter the AuraGen control centre and see your interface respond in real time.</p>
      </div>

      <form className="login-card" onSubmit={handleSubmit}>
        <small>AURAGEN ACCESS</small>
        <h2>Sign in</h2>
        <p>Use any email and password for this frontend demo.</p>

        <label>
          Email
          <input required type="email" placeholder="user@auragen.ai" />
        </label>

        <label>
          Password
          <div className="password">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
            />
            <button type="button" onClick={() => setShowPassword((value) => !value)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </label>

        <div className="row">
          <label className="check"><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="btn full">Enter AuraGen</button>
        <span className="demo-note">Demo credentials are not required.</span>
      </form>
    </div>
  );
}
