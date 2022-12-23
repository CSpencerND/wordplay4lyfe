import { ReactNode } from "react"

type Props = { children: ReactNode }

export const DrawerContent  = ({ children }: Props) => {
    return (
        <div className="drawer-content flex flex-col">
            {children}
        </div>
    )
}

