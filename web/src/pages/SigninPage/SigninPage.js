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
      .catch((error) => setError(error.response.data.message))
  }

  const onClickGH = () => {
    setError(null)
    logIn({ provider: 'github' })
      .then(() => navigate(routes.home()))
      .catch((error) => setError(error.message))
  }

  return (
    <GlobalLayout>
      <div className="w-full rounded-lg px-32 py-20 bg-gray-50">
        <button className="w-full" onClick={onClickGH}>
          <div className="relative text-center bg-black text-white p-3 rounded">
            <div className="absolute inset-y-0 flex items-center">
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <div className="font-bold text-lg">Sign in with Github</div>
          </div>
        </button>
        <div className="flex items-center py-5">
          <div className="w-full bg-gray-300" style={{ height: '1px' }} />
          <div className="px-3 text-gray-600">or</div>
          <div className="w-full bg-gray-300" style={{ height: '1px' }} />
        </div>
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
                Sign In
              </Submit>
            </div>
          </Form>
        </div>
      </div>
    </GlobalLayout>
  )
}

export default SigninPage
