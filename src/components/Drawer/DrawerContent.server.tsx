import { FC, ReactNode } from "react"

type Props = { children: ReactNode }

export const DrawerContent: FC<Props> = ({ children }) => {
    return (
        <div className="drawer-content flex flex-col">
            {children}
        </div>
    )
}

