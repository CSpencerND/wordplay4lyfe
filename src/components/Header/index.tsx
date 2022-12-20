import Navbar from "./Navbar.client"
import BrandLogo from "./BrandLogo.server"

const MainHeader = () => {
    return <Navbar children={<BrandLogo />} />
}

export default MainHeader
