import config from './config';

declare namespace mermaidAPI {
    /**
     * ##render
     * Function that renders an svg with a graph from a chart definition. Usage example below.
     *
     * ```
     * mermaidAPI.initialize({
     *      startOnLoad:true
     *  });
     *  $(function(){
     *      const graphDefinition = 'graph TB\na-->b';
     *      const cb = function(svgGraph){
     *          console.log(svgGraph);
     *      };
     *      mermaidAPI.render('id1',graphDefinition,cb);
     *  });
     * ```
     * @param id the id of the element to be rendered
     * @param txt the graph definition
     * @param cb callback which is called after rendering is finished with the svg code as inparam.
     * @param container selector to element in which a div with the graph temporarily will be inserted. In one is
     * provided a hidden div will be inserted in the body of the page instead. The element will be removed when rendering is
     * completed.
     */
    function render(
        id: string,
        txt: string,
        cb: (svgCode: string, bindFunctions: (element: Element) => void) => void,
        container?: string,
    ): string;

    function parse(text: string): any;

    function initialize(options: config.Config): void;

    function getConfig(): config.Config;
}

export default mermaidAPI;
