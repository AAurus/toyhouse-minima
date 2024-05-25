import React from "react";

import {Title} from '../../../components/page/TextBlocks.js';
import BlockRule from "./BlockRule.js";

export default class TitleRule extends BlockRule {

    pattern = /^(# .+)([\s\S]*)/;

    render (raw, renderer) {
        let matched = this.match(raw);
        if (matched) {
            let parsed = matched[1].replace("# ", "");
            let body = matched[2].trim();
            return  <>
                        <Title content={parsed} />
                        {renderer.parseRaw(body)}
                    </>;
        }
        return super.render(raw);
    }
}