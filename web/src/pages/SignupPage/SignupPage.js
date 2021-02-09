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
      <div className="w-full rounded-lg px-32 py-20 bg-gray-50">
        <div>
          <Form onSubmit={onSubmit}>
            {error && <p>{error}</p>}
            <div className="mb-6">
              <TextField
                name="email"
                placeholder="email"
                className="w-full p-3 border-2 border-gray-300 outline-none focus:border-blue-700 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <PasswordField
                name="password"
                placeholder="password"
                className="w-full p-3 border-2 border-gray-300 outline-none focus:border-blue-700 rounded-lg"
              />
            </div>
            <div>
              <Submit className="block transition duration-300 ease-in-out font-medium rounded-md justify-center w-full bg-blue-500 text-white h-12">
                Sign Up
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </GlobalLayout>
  )
}

export default SignupPage
