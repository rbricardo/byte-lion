import React from 'react'
import GoogleLogin from 'react-google-login'

interface Props {
  responseGoogle: (response: any) => void
}

const Header: React.FC<Props> = ({ responseGoogle }) => {
  return (
    <div className="flex flex-row justify-around items-center bg-white py-4">
      <div className="w-20 md:w-60">
        <img src="/images/bytelion-logo.png" />
      </div>
      <div>
        <GoogleLogin
          clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default Header
