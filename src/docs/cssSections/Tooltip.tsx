import HashLink from "../components/HashLink"
import DemoCode from "../components/DemoCode"

export default function Tooltip() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-tooltip">
                    <code>.blue-tooltip</code>
                </HashLink>
                <p>
                    CSS only solution for tooltips. For accessibility reasons, only wrap around interactive elements
                    like buttons or links. To use, add the <code>data-tooltip</code> attribute to the wrapping element.
                </p>
                <DemoCode>
                    <div
                        data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
                        className="blue-tooltip"
                    >
                        <button className="btn btn-link">Hover me!</button>
                    </div>
                </DemoCode>
            </article>

            <article className="mb-5">
                <HashLink id="blue-tooltip-up">
                    <code>.blue-tooltip-up</code>, <code>.blue-tooltip-down</code>, <code>.blue-tooltip-start</code>,{" "}
                    <code>.blue-tooltip-end</code>
                </HashLink>
                <p>
                    Change the position of the tooltip. To be used together with <code>data-tooltip</code>.
                </p>
                <DemoCode>
                    <div data-tooltip="Up" className="blue-tooltip-up">
                        <button className="btn btn-link">Up!</button>
                    </div>
                    <div data-tooltip="Down" className="blue-tooltip-down">
                        <button className="btn btn-link">Down!</button>
                    </div>
                    <div data-tooltip="Start" className="blue-tooltip-start">
                        <button className="btn btn-link">Start!</button>
                    </div>
                    <div data-tooltip="End" className="blue-tooltip-end">
                        <button className="btn btn-link">End!</button>
                    </div>
                </DemoCode>
            </article>

            <article className="mb-5">
                <HashLink id="blue-tooltip-content">
                    <code>.blue-tooltip-content</code>
                </HashLink>
                <p>This is how you can customize the tooltip content with HTML.</p>
                <DemoCode>
                    <div className="blue-tooltip">
                        <div className="blue-tooltip-content" role="tooltip">
                            <strong>Some</strong> <i>custom</i> <u>content</u> <s>here</s>.
                        </div>
                        <button className="btn btn-link">Hover me!</button>
                    </div>
                </DemoCode>
            </article>
        </>
    )
}
