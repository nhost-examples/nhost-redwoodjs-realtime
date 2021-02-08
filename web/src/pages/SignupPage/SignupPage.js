import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { routes, navigate } from '@redwoodjs/router'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const SignupPage = () => {
  const { signUp } = useAuth()
  const [error, setError] = React.useState(null)

  const onSubmit = (data) => {
    setError(null)
    signUp({ email: data.email, password: data.password })
      .then(() => navigate(routes.signin()))
      .catch((error) => setError(error.message))
  }

  return (
    <GlobalLayout>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </GlobalLayout>
  )
}

export default SignupPage
