import renderHydrogen from "@shopify/hydrogen/entry-server"
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen"
import { Suspense } from "react"

/** Components */
import { DrawerWrapper, DrawerContent, SideBar } from "./components/Drawer"
import MainHeader from "./components/Header/"

const App = () => {
    return (
        <Suspense fallback={null}>
            <ShopifyProvider>
                <Router>
                    <DrawerWrapper>
                        <DrawerContent>
                            <MainHeader />
                            <main className="container mx-auto p-6">
                                <FileRoutes />
                            </main>
                        </DrawerContent>
                        <SideBar />
                    </DrawerWrapper>
                </Router>
            </ShopifyProvider>
        </Suspense>
    )
}

export default renderHydrogen(App)
