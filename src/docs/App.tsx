import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import { Layout, MenuItem, SidebarMenu } from "blue-react"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"

import {
    List,
    House,
    CodeSquare,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill,
    HouseFill,
    Eye,
    LayersHalf,
    LayersFill,
    Braces,
    Back
} from "react-bootstrap-icons"

import { logo } from "./Global"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import DemoApp from "./components/DemoApp"
import NeumorphismPage from "./pages/NeumorphismPage"
import { CssPage } from "./pages/CssPage"
import GridLayoutExample from "./examples/css/GridLayoutExample"
import { JsPage } from "./pages/JsPage"

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
                <Route path="/grid-layout-example">
                    <GridLayoutExample />
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
                                    <MenuItem to="/demo#intro" elementType={Link} icon={<Eye />} label="Demo App" />

                                    <MenuItem
                                        href="https://github.com/bruegmann/blue-react"
                                        icon={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </>
                            }
                        >
                            <MenuItem
                                icon={<House />}
                                iconForActive={<HouseFill />}
                                label="Start"
                                elementType={NavLink}
                                exact
                                to="/"
                            />

                            <MenuItem icon={<Back />} label="CSS" elementType={NavLink} to="/css" />
                            <MenuItem icon={<Braces />} label="JavaScript" elementType={NavLink} to="/js" />
                            <MenuItem
                                icon={<LayersHalf />}
                                iconForActive={<LayersFill />}
                                label="Neumorphism"
                                elementType={NavLink}
                                to="/neu"
                            />
                        </SidebarMenu>

                        <div className="router-page active">
                            <Route path="/css/:selectedSection?">
                                <CssPage />
                            </Route>

                            <Route path="/js/:selectedSection?">
                                <JsPage />
                            </Route>

                            <Route path="/neu">
                                <NeumorphismPage />
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
