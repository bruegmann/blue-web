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
                <div className="welcome-jumbotron pt-5 bg-theme text-white">
                    <div className="container pt-3 mt-5 pt-md-0">
                        <section className="d-flex justify-content-between">
                            <div>
                                <h1>UI library based on Bootstrap 5</h1>
                                <div className="h2">
                                    <Bootstrap /> <Braces /> <Code /> <WindowSidebar /> <BoxSeam />
                                </div>
                                <div className="h3 mt-3 d-flex align-content-center gap-3">
                                    <span
                                        className="badge text-white"
                                        style={{ boxShadow: "var(--neu-shadow-3), var(--neu-shadow-inset-3)" }}
                                    >
                                        {packageJson.version}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h1
                                    className="display-1 d-inline-flex align-items-center"
                                    style={{ fontWeight: "900" }}
                                >
                                    <img src={logo} alt={appTitle} style={{ height: "1em" }} className="me-3" /> Blue
                                    Web
                                </h1>
                            </div>
                        </section>
                    </div>

                    <div className="mt-5 rounded-top bg-body" style={{ height: "1rem" }} />
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

            <div className="RoundedBottom bg-theme pb-1" style={{ height: "1rem" }}>
                <div className="rounded-bottom bg-body w-100 h-100" />
            </div>
        </Body>
    </Page>
)
