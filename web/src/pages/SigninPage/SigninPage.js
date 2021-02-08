import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)

    logIn({ email: data.email, password: data.password })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error))
  }

  const onClickGH = () => {
    setError(null)
    logIn({ provider: 'github' })
      .then((data) => {
        console.log('data: ', data)
        navigate(routes.home())
      })
      .catch((error) => console.log(error))
  }

  return (
    <GlobalLayout>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
      <div>
        <p>or Sign In using GitHub</p>
        <button onClick={onClickGH}>GitHub</button>
      </div>
    </GlobalLayout>
  )
}

export default SigninPage
