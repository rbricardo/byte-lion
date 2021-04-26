import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { RootStateOrAny, useSelector } from 'react-redux'

interface Props {
  onLoginGoogle: (response: any) => void
  onLogoutGoogle: () => void
}

const Header: React.FC<Props> = ({ onLoginGoogle, onLogoutGoogle }) => {
  const userData = useSelector((state: RootStateOrAny) => state.user.userData)

  return (
    <div className="flex flex-row justify-around items-center bg-white py-4">
      <div className="w-20 md:w-60">
        <img src="/images/bytelion-logo.png" />
      </div>
      <div>
        {!userData ? (
          <GoogleLogin
            clientId="790677542375-nrtgsqt1v9op8t1brt7v7mvcmv4rkcc6.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={onLoginGoogle}
            onFailure={onLoginGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn
          />
        ) : (
          <GoogleLogout
            clientId="790677542375-nrtgsqt1v9op8t1brt7v7mvcmv4rkcc6.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={onLogoutGoogle}
            onFailure={() => console.log('failure')}
          />
        )}
      </div>
    </div>
  )
}

export default Header
