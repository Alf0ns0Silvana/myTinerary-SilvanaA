
const SignIn = () => {
  return (
    <div className="singIn">
      <h2 className='pages-subtitles'>Sign in to start travel !</h2>
        <div className='container'>
          <div className='window'>
            <div className='overlay'></div>
            <div className='content'>
              <div className='welcome'>Hello There!</div>
              <div className='subtitle'>Before using our services you need to login or create an account.</div>
              <div className='input-fields'>
                <input type='email' placeholder='Email' className='input-line full-width'></input>
                <input type='password' placeholder='Password' className='input-line full-width'></input>
              </div>
              <div><button className='ghost-round full-width'>Create Account</button></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn