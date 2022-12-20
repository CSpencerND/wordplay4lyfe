import { FC, ReactNode } from "react"

type Props = { children: ReactNode }

export const DrawerWrapper: FC<Props> = ({ children }) => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" className="drawer-toggle" type="checkbox" />
            {children}
        </div>
    )
}
