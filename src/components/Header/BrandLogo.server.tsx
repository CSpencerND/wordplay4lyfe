import { Link, Image } from "@shopify/hydrogen"
import logo from "./wordplay-logo.avif"

const BrandLogo = () => {
    return (
        <Link to="/">
            <Image
                id="logo"
                className="max-h-14 w-full drop-shadow-[-1px_2px_4px_rgb(0,0,0)]"
                // className="max-h-14 w-full drop-shadow-[-1px_2px_4px_#777]"
                // className="max-h-14 w-full drop-shadow-[-1px_2px_4px_#0b84b0]"
                src={logo}
                alt="Wordplay 4 Lyfe logo"
                height={36}
                width={36}
            />
        </Link>
    )
}

export default BrandLogo
