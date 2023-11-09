import React from 'react';
import { Link } from 'react-router-dom';
import boat from '../assets/video/videoplayback.mp4';

const SignIn = () => {
  return (
    <section id="signin">
      
      <div className="main text-center">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup mb-4">
          <form>
            <div className='login-input'>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input className='input-items' type="text" name="txt" placeholder="User name" required />
              <input className='input-items' type="email" name="email" placeholder="Email" required />
              <input className='input-items' type="password" name="pswd" placeholder="Password" required />
              <button className='btn-signup' type="button">Sign up</button>
            </div>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input className='input-items' type="email" name="email" placeholder="Email" required />
            <input className='input-items' type="password" name="pswd" placeholder="Password" required />
            <button className='btn-login' type="button">Login</button> {/* Changed to type="button" to prevent form submission */}
          </form>
        </div>
      </div>

    </section>

  );
};

export default SignIn;
