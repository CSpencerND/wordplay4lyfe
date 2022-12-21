import { FC } from "react"
import { Link } from "@shopify/hydrogen"

export const SideBar: FC = () => {
    return (
        <div className="drawer-side mt-20">
            <label
                htmlFor="sidebar"
                className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-64 md:w-80">
                <li>
                    <Link to="/">Home</Link>
                </li>
                {/* <li className="menu-title"><span>Collections</span></li> */}
                <li>
                    <Link to="">Summer Collection</Link>
                </li>
                <li>
                    <Link to="">Staff Picks</Link>
                </li>
                <li>
                    <Link to="">Mindset Tees</Link>
                </li>
                <li>
                    <Link to="">Creative Minds</Link>
                </li>
                <li>
                    <Link to="">Lifestyle Tess</Link>
                </li>
                <li>
                    <Link to="">All Products</Link>
                </li>
            </ul>
        </div>
    )
}
