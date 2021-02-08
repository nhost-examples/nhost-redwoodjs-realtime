import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from 'nhost-js-sdk'
import ReactDOM from 'react-dom'

import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const nhostClient = createClient({
  baseURL: 'https://backend-dfeaw3to.nhost.app',
  autoLogin: false,
})

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={nhostClient} type="nhost" skipFetchCurrentUser={false}>
      <RedwoodApolloProvider>
         <Routes />
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
