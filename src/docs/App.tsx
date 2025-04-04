import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom"
import { ActionMenu, HeaderTitle, Layout, MenuItem, SidebarMenu } from "blue-react"

import "./docs.scss"
import { HomePage } from "./pages/HomePage"

import {
    House,
    CodeSquare,
    HouseFill,
    LayersHalf,
    LayersFill,
    Braces,
    Back,
    Palette,
    PaletteFill
} from "react-bootstrap-icons"

import { logo } from "./Global"
import LicenseReportPage from "./pages/LicenseReportPage"
import { useEffect } from "react"
import NeumorphismPage from "./pages/NeumorphismPage"
import { CssPage } from "./pages/CssPage"
import { JsPage } from "./pages/JsPage"
import CustomizePage from "./pages/CustomizePage"
import ThemeGenerator, { ThemeGeneratorSwitch } from "./components/ThemeGenerator"

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
                <Route path="/">
                    <Layout
                        noPageBorder
                        header={
                            <>
                                <HeaderTitle
                                    appTitle="Blue Web"
                                    logo={logo}
                                    logoAlt="Blue Logo"
                                    to="/"
                                    elementType={Link}
                                />

                                <nav className="docs-nav">
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

                                <ActionMenu break="sm">
                                    <MenuItem
                                        href="https://github.com/bruegmann/blue-web"
                                        icon={<CodeSquare />}
                                        label="Code on GitHub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                </ActionMenu>
                            </>
                        }
                        side={
                            <>
                                <SidebarMenu>
                                    <MenuItem
                                        icon={<House />}
                                        iconForActive={<HouseFill />}
                                        label="Start"
                                        elementType={NavLink}
                                        exact
                                        to="/"
                                    />

                                    <MenuItem
                                        icon={<Palette />}
                                        iconForActive={<PaletteFill />}
                                        label="Customize"
                                        elementType={NavLink}
                                        to="/customize"
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
                                    <ThemeGeneratorSwitch />
                                </SidebarMenu>
                            </>
                        }
                    >
                        <Route path="/customize">
                            <CustomizePage />
                        </Route>

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
                    </Layout>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
