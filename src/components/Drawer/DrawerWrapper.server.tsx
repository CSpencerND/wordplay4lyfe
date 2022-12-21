import { FC, ReactNode } from "react"

type Props = { children: ReactNode }

export const DrawerWrapper: FC<Props> = ({ children }) => {
    return (
        <div className="drawer">
            <input id="sidebar" className="drawer-toggle" type="checkbox" />
            {children}
        </div>
    )
}
