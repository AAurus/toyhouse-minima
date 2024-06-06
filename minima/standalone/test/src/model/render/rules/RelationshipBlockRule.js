import React from "react";

import { RelationshipBlock } from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class RelationshipBlockRule extends BlockRule {

    pattern = /^(?:\[RELATIONSHIP\|(.+)\])([\s\S]*)/;

//    render (raw, renderer) {
//        let matched = this.match(raw);
//        if (matched) {
//            let parsed = matched[1];
//            let parsedList = parsed.split("|");
//            let body = matched[2].trim();
//            return  <>
//                        {this.generateImage(this.parseImage(parsedList))}
//                        {renderer.parseRaw(body)}
//                    </>;
//        }
//        return super.render(raw);
//    }

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            return <RelationshipBlock name="test" status="test2" content="test3"/>;
        }
    }

//    parseImage(parsedList) {
//        console.log(parsedList);
//        let direction, link, alt, caption;
//        let textEntryOffset = 1;
//
//        if (parsedList[0].toLowerCase() == "right" ||
//            parsedList[0].toLowerCase() == "left") {
//            direction = parsedList[0].toLowerCase();
//            link = parsedList[1];
//            textEntryOffset = 2;
//        } else {
//            direction = "left";
//            link = parsedList[0];
//        }
//
//        for (let i = textEntryOffset; i < parsedList.length; i++) {
//            let altMatch = parsedList[i].match(/\((.+)\)/);
//            if (altMatch) {
//                alt = altMatch[1];
//            } else {
//                caption = parsedList[i];
//            }
//        }
//
//        return  {
//                    direction: direction,
//                    link: link,
//                    alt: alt,
//                    caption: caption
//                };
//    }
//
//    generateImage(imageObject) {
//        return <EmbedImage  src={imageObject.link}
//                            direction={imageObject.direction}
//                            alt={imageObject.alt}
//                            caption={imageObject.caption} />;
//    }

}