import Navigation from 'src/components/Navigation/Navigation'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <header>
        <div className="w-full border-b">
          <div className="container h-64px mx-auto flex justify-between items-center p-3">
            <div>
              <img
                src="https://nhost.io/images/nhost-logo.svg"
                style={{ height: '35px' }}
                alt="logo"
              />
            </div>
            <div className="flex items-center">
              <Navigation />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container mx-auto pt-12 max-w-2xl flex flex-col justify-center items-center">
          {children}
        </div>
      </main>
    </>
  )
}

export default GlobalLayout
