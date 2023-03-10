import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Head from 'next/head'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [domLoaded, setDomLoaded] = useState(false)
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (domLoaded) {
    return (
      <>
        <div className="absolute w-full h-2 bg-gradient-to-r from-amber-500 to-pink-500" />
        <div className="flex flex-col flex-1 mx-auto w-full max-w-[1400px] min-h-screen">
          <Navigation />
          {children}
          <Footer />
        </div>
      </>
    )
  }
  return <></>
}

export default Layout
