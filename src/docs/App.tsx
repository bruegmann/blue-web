import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import { Layout, MenuItem, SidebarMenu, SidebarMenuItem } from "blue-react"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"

import {
    List,
    House,
    CodeSquare,
    Tools,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill,
    HouseFill,
    Eye,
    LayersHalf,
    LayersFill,
    BracesAsterisk
} from "react-bootstrap-icons"

import UtilitiesPage from "./pages/UtilitiesPage"
import { logo } from "./Global"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import NeumorphismPage from "./pages/NeumorphismPage"
import { CssPage } from "./pages/CssPage"

function App() {
    const onHashChange = () => {
        if (window.location.hash !== "" && window.location.hash.includes("css")) {
            let hash = decodeURIComponent(window.location.hash.substring(1)).replace("home/", "")

            const { colorMode, css } = JSON.parse(hash)

            for (const linkEl of document.querySelectorAll(".docs-css")) {
                linkEl.remove()
            }

            document.documentElement.setAttribute("data-bs-theme", colorMode)
            document.getElementById("docs-inline-style")!.innerHTML = css
        } else if (window.location.hash !== "") {
            setTimeout(() => {
                document.querySelector(window.location.hash)?.scrollIntoView({
                    behavior: "smooth"
                })
            }, 500)
        }
    }

    useEffect(() => {
        onHashChange()
        window.addEventListener("hashchange", onHashChange)
        return () => {
            window.removeEventListener("hashchange", onHashChange)
        }
    }, [])

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/demo">
                    <DemoApp />
                </Route>

                <Route path="/action-menu-example">
                    <Layout pages={[]}>
                        <SidebarMenu>
                            <MenuItem href="#" label="Home" icon={<span>🏠</span>} isHome />
                        </SidebarMenu>
                    </Layout>
                </Route>

                <Route path="/">
                    <nav className="docs-nav">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Blue Logo" width="32" height="32" className="d-block" /> Blue Web
                        </Link>

                        <div className="navbar-nav">
                            <a
                                href="https://bruegmann.github.io/blue-web"
                                className="nav-link active"
                                aria-current="page"
                            >
                                Web
                            </a>
                            <a href="https://bruegmann.github.io/blue-react" className="nav-link">
                                React
                            </a>
                            <a href="https://bruegmann.github.io/blue-blazor" className="nav-link">
                                Blazor
                            </a>
                        </div>
                    </nav>

                    <Layout
                        unrouteable
                        sidebarToggleIconComponent={<List />}
                        statusIcons={{
                            danger: <XCircleFill />,
                            info: <InfoCircleFill />,
                            success: <CheckCircleFill />,
                            warning: <ExclamationCircleFill />
                        }}
                        disableHeaders
                        className="docs-layout"
                    >
                        <SidebarMenu
                            sidebarClass="overflow-visible"
                            menuClass="overflow-visible"
                            bottomContent={
                                <>
                                    <SidebarMenuItem
                                        to="/demo#intro"
                                        elementType={Link}
                                        icon={<Eye />}
                                        label="Demo App"
                                    />

                                    <SidebarMenuItem
                                        href="https://github.com/bruegmann/blue-react"
                                        icon={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </>
                            }
                        >
                            <SidebarMenuItem
                                icon={<House />}
                                iconForActive={<HouseFill />}
                                label="Start"
                                elementType={NavLink}
                                exact
                                to="/"
                            />
                            <SidebarMenuItem
                                icon={<LayersHalf />}
                                iconForActive={<LayersFill />}
                                label="Neumorphism"
                                elementType={NavLink}
                                to="/neu"
                            />

                            <SidebarMenuItem
                                icon={<BracesAsterisk />}
                                label="CSS Classes"
                                elementType={NavLink}
                                to="/css"
                            />
                            <SidebarMenuItem icon={<Tools />} label="Utilities" elementType={NavLink} to="/utilities" />
                        </SidebarMenu>

                        <div className="router-page active">
                            <Route path="/utilities">
                                <UtilitiesPage />
                            </Route>

                            <Route path="/neu">
                                <NeumorphismPage />
                            </Route>

                            <Route path="/css/:selectedSection?">
                                <CssPage />
                            </Route>

                            <Route path="/license-report">
                                <LicenseReportPage />
                            </Route>

                            <Route path="/" exact>
                                <HomePage />
                            </Route>
                        </div>
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
