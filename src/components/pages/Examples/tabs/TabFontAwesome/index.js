import React from 'react'
import {Trans} from "react-i18next";
import {faExternalLinkAlt, faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function TabFontAwesome() {

    return (
        <div>

            <label>Size:</label>
            <br/>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" className={"mr-3"}/>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" className={"mr-3"}/>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="3x" className={"mr-3"}/>
            <div className="card mt-3 mb-4">
                <div className="card-body">
                    <code><pre>{`import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

<FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/>
<FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/>
<FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/>`}</pre></code>
                </div>
            </div>

            <label>Rotation:</label>
            <br/>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" className={"mr-3"} rotation={270}/>
            <div className="card mt-3 mb-4">
                <div className="card-body">
                    <code><pre>{`<FontAwesomeIcon icon={faExternalLinkAlt} size="lg" rotation={270}/>`}</pre></code>
                </div>
            </div>

            <label>Animation:</label>
            <br/>
            <FontAwesomeIcon icon={faSyncAlt} size="lg" className={"mr-3"} rotation={270} spin={true}/>
            <div className="card mt-3 mb-4">
                <div className="card-body">
                    <code><pre>{`<FontAwesomeIcon icon={faSyncAlt} size="lg" rotation={270} spin={true}/>`}</pre></code>
                </div>
            </div>

            <a href="https://www.npmjs.com/package/@fortawesome/react-fontawesome" target="_blank" rel="noopener noreferrer"><Trans defaults={'examples:guide'}/></a>
        </div>
    )
}