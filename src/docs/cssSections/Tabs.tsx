import DemoCode from "../components/DemoCode"

export default function TabsPage() {
    return (
        <>
            <p>
                Tabs just with HTML and CSS, no JavaScript needed. The state is managed by the radio input elements.
                <br />
                The tabs <code>.blue-tab</code> are designed to look just like <code>.nav-tabs .nav-link</code> by
                Bootstrap.
            </p>

            <DemoCode>
                <div role="tablist" className="blue-tabs">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="blue-tab"
                        aria-label="Tab 1"
                        defaultChecked
                    />
                    <div role="tabpanel" className="blue-tab-content p-3">
                        Tab content 1
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="blue-tab" aria-label="Tab 2" />
                    <div role="tabpanel" className="blue-tab-content p-3">
                        Tab content 2
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="blue-tab" aria-label="Tab 3" />
                    <div role="tabpanel" className="blue-tab-content p-3">
                        Tab content 3
                    </div>
                </div>
            </DemoCode>
        </>
    )
}
