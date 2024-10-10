import { Header, HeaderTitle, Layout, MenuItem, SidebarMenu } from "blue-react"
import { Link } from "react-router-dom"

export default function GridLayoutExample() {
    return (
        <Layout className="blue-grid-layout">
            <header className="blue-grid-layout-header">
                <Header>
                    <HeaderTitle>Header</HeaderTitle>
                </Header>
            </header>
            <nav className="blue-grid-layout-side">
                <SidebarMenu>
                    <MenuItem to="/css/Grid Layout" elementType={Link} label="Docs" icon={<span>📖</span>} />
                </SidebarMenu>
            </nav>
            <main className="blue-grid-layout-main">
                Main content
                <div className="text-bg-primary text-end">End test</div>
            </main>
        </Layout>
    )
}
