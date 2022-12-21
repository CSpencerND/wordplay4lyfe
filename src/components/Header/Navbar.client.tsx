import { ShoppingCart, User } from "react-feather"
import { Twirl as Hamburger } from "hamburger-react"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Navbar: FC<Props> = ({ children }) => {
    return (
        <header className="sticky top-0 z-50">
            <nav className="navbar lg:container lg:mx-auto p-3">
                <div className="flex-1 gap-3">
                    {/** Hamburger **/}
                    <label
                        htmlFor="sidebar"
                        className="drawer-button btn btn-ghost btn-circle"
                        aria-labelledby="menuButtonText"
                    >
                        <Hamburger rounded size={24} label="Menu Button Icon" />
                        <span id="menuButtonText" className="sr-only">
                            MENU
                        </span>
                    </label>

                    {/** Brand Logo **/}
                    {children}
                </div>

                {/** Navbar Items **/}
                <div className="flex-none">
                    {/** Shopping Cart **/}
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <ShoppingCart />
                                <span className="badge badge-sm indicator-item">
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/** Account **/}
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <User />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
