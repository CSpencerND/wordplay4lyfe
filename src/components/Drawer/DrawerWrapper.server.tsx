import { ReactNode } from "react"

type Props = { children: ReactNode }

export const DrawerWrapper = ({ children }: Props) => {
    return (
        <div className="drawer">
            <input id="sidebar" className="drawer-toggle" type="checkbox" />
            {children}
        </div>
    )
}
