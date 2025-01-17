import { Page, Body } from "blue-react"
import { logo, appTitle } from "../Global"
import { Bootstrap, BoxSeam, Braces, Code, WindowSidebar } from "react-bootstrap-icons"
import { Footer } from "../components/Footer"
import IntroductionSections from "../components/IntroductionSections"

const packageJson = require("../../../package.json")

export const HomePage = () => (
    <Page>
        <Body className="pt-0" containerClass="no-container d-flex flex-column docs-min-height-100vh">
            <main className="flex-grow-1">
                <div className="welcome-jumbotron pt-3 bg-theme text-white">
                    <div className="container pt-3 mt-3 pt-md-0">
                        <div className="d-md-flex">
                            <div className="flex-grow-1">
                                <h1
                                    className="display-2 d-inline-flex align-items-center"
                                    style={{ fontWeight: "600" }}
                                >
                                    <img src={logo} alt={appTitle} style={{ height: "1em" }} className="me-3" /> Blue
                                    Web
                                </h1>

                                <p className="h2">UI library based on Bootstrap 5</p>
                                <div className="h2">
                                    <Bootstrap /> <Braces /> <Code /> <WindowSidebar /> <BoxSeam />
                                </div>
                            </div>

                            <div>
                                <div className="d-flex align-content-center gap-3">
                                    <span
                                        className="text-white rounded-3 px-3 py-2"
                                        style={{ boxShadow: "var(--neu-shadow-3), var(--neu-shadow-inset-3)" }}
                                    >
                                        {packageJson.version}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 rounded-top-3 bg-body" style={{ height: "1rem" }} />
                </div>

                <div className="container">
                    <h2 className="page-header">Use Blue Web</h2>

                    <p>
                        Install with NPM:
                        <br />
                        <code>npm i blue-web</code>
                    </p>

                    <IntroductionSections />
                </div>
            </main>

            <Footer />
        </Body>
    </Page>
)
