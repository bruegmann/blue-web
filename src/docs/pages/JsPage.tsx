import { createElement, useEffect, useState } from "react"
import { useParams, NavLink, Link } from "react-router-dom"
import { Page, Search } from "blue-react"
import { appTitle } from "../Global"
import PageBodyWithSide from "../components/PageBodyWithSide"
import jsSections from "../data/jsSections.json"

const sections = jsSections.map((s) => ({
    title: s,
    body: createElement(require(`../jsSections/${s}`).default)
}))

export const JsPage = () => {
    const { selectedSection } = useParams<any>()

    // State of input Search value
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        const routerPageElement = document.querySelector(".router-page.active")
        if (routerPageElement) {
            routerPageElement.scrollTo(0, 0)
        }
    }, [selectedSection])

    return (
        <Page title={`${selectedSection ? `${selectedSection} - ` : ""}JS - ${appTitle}`}>
            <PageBodyWithSide
                side={
                    <>
                        <Search
                            body
                            onChange={({ target }) => {
                                setValue(target.value)
                            }}
                            value={value}
                            className="mb-1 ms-5 ms-md-0 neu-input"
                            placeholder="Search..."
                        />

                        <div
                            className="overflow-auto"
                            style={{
                                maxHeight: "calc(100vh - 5rem)"
                            }}
                        >
                            <nav className="nav nav-pills flex-column">
                                <NavLink to="/js" exact className="nav-link">
                                    All
                                </NavLink>
                                {sections.map(
                                    (s, i) =>
                                        (value === "" ||
                                            JSON.stringify(s).toLowerCase().includes(value.toLowerCase())) && (
                                            <div key={i} className="nav-item">
                                                <NavLink to={`/js/${encodeURIComponent(s.title)}`} className="nav-link">
                                                    {s.title}
                                                </NavLink>
                                            </div>
                                        )
                                )}
                            </nav>
                        </div>
                    </>
                }
            >
                <h1 className="page-header">JavaScript</h1>

                <p className="lead">Pure JavaScript solutions for common scenarios.</p>

                {sections.map(
                    (s, i) =>
                        (!selectedSection || selectedSection === s.title) && (
                            <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                <h2 className="page-header blue-opacity-hover">
                                    {s.title}{" "}
                                    <Link
                                        to={`/js/${encodeURIComponent(s.title)}`}
                                        className="blue-opacity-hover-content-active"
                                    >
                                        #
                                    </Link>
                                </h2>
                                {s.body}
                            </article>
                        )
                )}
            </PageBodyWithSide>
        </Page>
    )
}
