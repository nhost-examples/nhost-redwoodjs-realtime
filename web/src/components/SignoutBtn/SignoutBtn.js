import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
 
const SignoutBtn = () => {
  const { logOut } = useAuth();

  const onClick = () => {
    logOut().then(() => navigate(routes.home()))
  }
  
  return <button onClick={() => onClick()}>Sign Out</button>
}

export default SignoutBtn
