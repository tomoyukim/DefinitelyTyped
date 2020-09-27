// Type definitions for mermaid 8.8
// Project: https://github.com/mermaid-js/mermaid
// Definitions by: Geoffrey Gilmore <https://github.com/ggilmore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import mermaidAPI from './mermaidAPI';
import config from './config';

declare function init(): void;

declare function initialize(config: config.Config): void;

/**
 * ##contentLoaded
 * Callback function that is called when page is loaded. This functions fetches configuration for mermaid rendering and
 * calls init for rendering the mermaid diagrams on the page.
 */
declare function contentLoaded(): void;

export interface Mermaid {
    startOnLoad: boolean;
    htmlLabels: boolean;

    mermaidAPI: typeof mermaidAPI;
    parse: typeof mermaidAPI.parse;
    render: typeof mermaidAPI.render;

    init: typeof init;
    initialize: typeof initialize;

    contentLoaded: typeof contentLoaded;
}

declare const mermaid: Mermaid;

export default mermaid;

export as namespace mermaid;
