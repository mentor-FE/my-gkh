
import Nav from './Nav'
import HeaderMobile from './HeaderMobile'
import HeaderDesctop from "./HeaderDesctop"

const TheHeader = () => {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesctop />
      <Nav />
    </header>
  )
}

export { TheHeader }
