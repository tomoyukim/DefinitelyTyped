declare namespace config.sequence {
    // config.sequence.messageFont.!ret

    /**
     *
     */
    interface MessageFontRet {
        /**
         *
         */
        fontFamily?: string;

        /**
         *
         */
        fontSize?: number;

        /**
         *
         */
        fontWeight?: number;
    }
}

declare namespace config.sequence {
    // config.sequence.noteFont.!ret

    /**
     *
     */
    interface NoteFontRet {
        /**
         *
         */
        fontFamily?: string;

        /**
         *
         */
        fontSize?: number;

        /**
         *
         */
        fontWeight?: number;
    }
}
declare namespace config.sequence {
    // config.sequence.actorFont.!ret

    /**
     *
     */
    interface ActorFontRet {
        /**
         *
         */
        fontFamily?: string;

        /**
         *
         */
        fontSize?: number;

        /**
         *
         */
        fontWeight?: number;
    }
}

interface FlowchartConfig {
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramPadding | amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**The amount of padding around the diagram as a whole so that embedded diagrams have margins, expressed in pixels
     * **Default value: 8**.
     */
    diagramPadding?: number;
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | htmlLabels | Flag for setting whether or not a html tag should be used for rendering labels on the edges. | Boolean| Required | True, False|
     *
     * **Notes: Default value: true**.
     */
    htmlLabels?: boolean;
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | nodeSpacing | Defines the spacing between nodes on the same level | Integer| Required | Any positive Numbers |
     *
     * **Notes:
     * Pertains to horizontal spacing for TB (top to bottom) or BT (bottom to top) graphs, and the vertical spacing for LR as well as RL graphs.**
     * **Default value 50**.
     */
    nodeSpacing?: number;
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | rankSpacing | Defines the spacing between nodes on different levels | Integer | Required| Any Positive Numbers |
     *
     * **Notes: pertains to vertical spacing for TB (top to bottom) or BT (bottom to top), and the horizontal spacing for LR as well as RL graphs.
     * **Default value 50**.
     */
    rankSpacing?: number;
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | curve | Defines how mermaid renders curves for flowcharts. | String | Required | Basis, Linear, Cardinal|
     *
     * **Notes:
     * Default Vaue: Linear**
     */
    curve?: string;
    /**
     * Only used in new experimental rendering
     * represents the padding between the labels and the shape
     */
    padding?: number;
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;
}

interface SequenceConfig {
    /**
     * widt of the activation rect
     * **Default value 10**.
     */
    activationWidth?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramMarginX | margin to the right and left of the sequence diagram | Integer | Required | Any Positive Values |
     *
     * **Notes:**
     * **Default value 50**.
     */
    diagramMarginX?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramMarginY | Margin to the over and under the sequence diagram | Integer | Required | Any Positive Values|
     *
     * **Notes:**
     * **Default value 10**.
     */
    diagramMarginY?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | actorMargin | Margin between actors. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 50**.
     */
    actorMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | width | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 150**.
     */
    width?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | height | Height of actor boxes | Integer | Required | Any Positive Value|
     *
     * **Notes:**
     * **Default value 65**..
     */
    height?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * **Default value 10**.
     */
    boxMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | boxTextMargin| margin around the text in loop/alt/opt boxes | Integer | Required| Any Positive Value|
     *
     * **Notes:**
     *
     * **Default value 5**.
     */
    boxTextMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | noteMargin | margin around notes. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * **Default value 10**.
     */
    noteMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageMargin | Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     * **Default value 35**.
     */
    messageMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageAlign | Multiline message alignment | Integer | Required | left, center, right |
     *
     * **Notes:**center **default**
     */
    messageAlign?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | mirrorActors | mirror actors under diagram. | Boolean| Required | True, False |
     *
     * **Notes:**
     *
     * **Default value true**.
     */
    mirrorActors?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards. | Integer | Required | Any Positive Value |
     *
     * **Notes:**Depending on css styling this might need adjustment.
     * **Default value 1**.
     */
    bottomMarginAdj?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See Notes | Boolean | Required | True, False |
     *
     * **Notes:**
     * when this flag is set to true, the height and width is set to 100% and is then scaling with the
     * available space. If set to false, the absolute space required is used.
     * **Default value: True**.
     */
    useMaxWidth?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | rightAngles | display curve arrows as right angles| Boolean | Required | True, False |
     *
     * **Notes:**
     *
     * This will display arrows that start and begin at the same node as right angles, rather than a curve
     * **Default value false**.
     */
    rightAngles?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | showSequenceNumbers | This will show the node numbers | Boolean | Required | True, False |
     *
     * **Notes:**
     * **Default value false**.
     */
    showSequenceNumbers?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | actorFontSize| This sets the font size of the actor's description | Integer | Require | Any Positive Value |
     *
     * **Notes:**
     * **Default value 14**..
     */
    actorFontSize?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | actorFontFamily |This sets the font family of the actor's description | 3 | 4 | Open-Sans, Sans-Serif |
     *
     * **Notes:**
     * **Default value "Open-Sans", "sans-serif"**.
     */
    actorFontFamily?: string;

    /**
     * This sets the font weight of the actor's description
     * **Default value 400.
     */
    actorFontWeight?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | noteFontSize |This sets the font size of actor-attached notes. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 14**..
     */
    noteFontSize?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | noteFontFamily| This sets the font family of actor-attached notes. | String | Required |  trebuchet ms, verdana, arial |
     *
     * **Notes:**
     * **Default value: trebuchet ms **.
     */
    noteFontFamily?: string;

    /**
     * This sets the font weight of the note's description
     * **Default value 400.
     */
    noteFontWeight?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | noteAlign | This sets the text alignment of actor-attached notes. | string | required | left, center, right|
     *
     * **Notes:**
     * **Default value center**.
     */
    noteAlign?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageFontSize | This sets the font size of actor messages. | Integer | Required | Any Positive Number |
     *
     * **Notes:**
     * **Default value 16**.
     */
    messageFontSize?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageFontFamily | This sets the font family of actor messages. | String| Required | trebuchet ms", verdana, aria |
     *
     * **Notes:**
     * **Default value:"trebuchet ms**.
     */
    messageFontFamily?: string;

    /**
     * This sets the font weight of the message's description
     * **Default value 400.
     */
    messageFontWeight?: number;

    /**
     * This sets the auto-wrap state for the diagram
     * **Default value false.
     */
    wrap?: boolean;

    /**
     * This sets the auto-wrap padding for the diagram (sides only)
     * **Default value 10.
     */
    wrapPadding?: number;

    /**
     * This sets the width of the loop-box (loop, alt, opt, par)
     * **Default value 50.
     */
    labelBoxWidth?: number;

    /**
     * This sets the height of the loop-box (loop, alt, opt, par)
     * **Default value 20.
     */
    labelBoxHeight?: number;

    /**
     *
     * @return
     */
    messageFont?: () => config.sequence.MessageFontRet;

    /**
     *
     * @return
     */
    noteFont?: () => config.sequence.NoteFontRet;

    /**
     *
     * @return
     */
    actorFont?: () => config.sequence.ActorFontRet;
}

interface GanttConfig {
    /**
     * ### titleTopMargin
     *
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | titleTopMargin | Margin top for the text over the gantt diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 25**.
     */
    titleTopMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | barHeight | The height of the bars in the graph | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 20**.
     */
    barHeight?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | barGap | The margin between the different activities in the gantt diagram. | Integer | Optional |Any Positive Value |
     *
     * **Notes:**
     * **Default value 4**.
     */
    barGap?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | topPadding | Margin between title and gantt diagram and between axis and gantt diagram. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 50**.
     */
    topPadding?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | leftPadding | The space allocated for the section name to the left of the activities. | Integer| Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 75**.
     */
    leftPadding?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | gridLineStartPadding | Vertical starting position of the grid lines. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 35**.
     */
    gridLineStartPadding?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | fontSize | Font size| Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 11**.
     */
    fontSize?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | fontFamily | font Family | string | required |"Open-Sans", "sans-serif" |
     *
     * **Notes:**
     *
     * **Default value '"Open-Sans", "sans-serif"'**.
     */
    fontFamily?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | numberSectionStyles | The number of alternating section styles | Integer | 4 | Any Positive Value |
     *
     * **Notes:**
     * **Default value 4**.
     */
    numberSectionStyles?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | axisFormat | Datetime format of the axis. | 3 | Required | Date in yy-mm-dd |
     *
     * **Notes:**
     *
     *  This might need adjustment to match your locale and preferences
     * **Default value '%Y-%m-%d'**.
     */
    axisFormat?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;
}

interface JourneyConfig {
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramMarginX | margin to the right and left of the sequence diagram | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 50**.
     */
    diagramMarginX?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramMarginY | margin to the over and under the sequence diagram. | Integer | Required | Any Positive Value|
     *
     * **Notes:**
     * **Default value 10**..
     */
    diagramMarginY?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | actorMargin | Margin between actors. | Integer | Required | Any Positive Value|
     *
     * **Notes:**
     * **Default value 50**.
     */
    actorMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | width | Width of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 150**.
     */
    width?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | height | Height of actor boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 65**.
     */
    height?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | boxMargin | Margin around loop boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 10**.
     */
    boxMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | boxTextMargin | margin around the text in loop/alt/opt boxes | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     */
    boxTextMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | noteMargin | margin around notes. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     * **Default value 10**.
     */
    noteMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageMargin |Space between messages. | Integer | Required | Any Positive Value |
     *
     * **Notes:**
     *
     * Space between messages.
     * **Default value 35**.
     */
    messageMargin?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | messageAlign |Multiline message alignment | 3 | 4 | left, center, right |
     *
     * **Notes:**default:center**
     */
    messageAlign?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | bottomMarginAdj | Prolongs the edge of the diagram downwards. | Integer | 4 | Any Positive Value |
     *
     * **Notes:**Depending on css styling this might need adjustment.
     * **Default value 1**.
     */
    bottomMarginAdj?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | rightAngles | Curved Arrows become Right Angles,  | 3 | 4 | True, False |
     *
     * **Notes:**This will display arrows that start and begin at the same node as right angles, rather than a curves
     * **Default value false**.
     */
    rightAngles?: boolean;
}

interface ClassConfig {
    /**
     *
     */
    arrowMarkerAbsolute?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;
}

interface GitConfig {
    /**
     *
     */
    arrowMarkerAbsolute?: boolean;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;
}

interface StateConfig {
    /**
     *
     */
    dividerMargin?: number;

    /**
     *
     */
    sizeUnit?: number;

    /**
     *
     */
    padding?: number;

    /**
     *
     */
    textHeight?: number;

    /**
     *
     */
    titleShift?: number;

    /**
     *
     */
    noteMargin?: number;

    /**
     *
     */
    forkWidth?: number;

    /**
     *
     */
    forkHeight?: number;

    /**
     * Used
     */
    miniPadding?: number;

    /**
     * Font size factor, this is used to guess the width of the edges labels before rendering by dagre
     * layout. This might need updating if/when switching font
     */
    fontSizeFactor?: number;

    /**
     *
     */
    fontSize?: number;

    /**
     *
     */
    labelHeight?: number;

    /**
     *
     */
    edgeLengthFactor?: string;

    /**
     *
     */
    compositTitleSize?: number;

    /**
     *
     */
    radius?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See notes | Boolean | 4 | True, False |
     *
     * **Notes:**when this flag is set the height and width is set to 100% and is then scaling with the
     * available space if not the absolute space required is used.
     *
     * **Default value true**.
     */
    useMaxWidth?: boolean;
}

interface ERConfig {
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | diagramPadding | amount of padding around the diagram as a whole | Integer | Required | Any Positive Value |
     *
     * **Notes:**The amount of padding around the diagram as a whole so that embedded diagrams have margins, expressed in pixels
     * **Default value: 20**.
     */
    diagramPadding?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | layoutDirection | Directional bias for layout of entities. | String | Required | "TB", "BT","LR","RL" |
     *
     * **Notes:**
     * 'TB' for Top-Bottom, 'BT'for Bottom-Top, 'LR' for Left-Right, or 'RL' for Right to Left.
     *  T = top, B = bottom, L = left, and R = right.
     * **Default value: TB **.
     */
    layoutDirection?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | minEntityWidth | The mimimum width of an entity box, | Integer | Required| Any Positive Value  |
     *
     * **Notes:**expressed in pixels
     * **Default value: 100**.
     */
    minEntityWidth?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | minEntityHeight| The minimum height of an entity box, | Integer | 4 | Any Positive Value |
     *
     * **Notes:**expressed in pixels
     * **Default value: 75 **
     */
    minEntityHeight?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | entityPadding|minimum internal padding betweentext in box and  box borders| Integer | 4 | Any Positive Value |
     *
     * **Notes:**The minimum internal padding betweentext in an entity box and the enclosing box borders, expressed in pixels.
     * **Default value: 15 **
     */
    entityPadding?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | stroke | Stroke color of box edges and lines | String | 4 | Any recognized color |
     * **Default value: gray **
     */
    stroke?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | fill | Fill color of entity boxes | String | 4 | Any recognized color |
     *
     * **Notes:**
     * **Default value:'honeydew'**
     */
    fill?: string;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | fontSize| Font Size in pixels| Integer |  | Any Positive Value |
     *
     * **Notes:**Font size (expressed as an integer representing a number of pixels)
     * **Default value: 12 **
     */
    fontSize?: number;

    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See Notes | Boolean | Required | true, false |
     *
     * **Notes:**
     * When this flag is set to true, the diagram width is locked to 100% and
     * scaled based on available space. If set to false, the diagram reserves its
     * absolute width.
     * **Default value: true**.
     */
    useMaxWidth?: boolean;
}

interface PieConfig {
    /**
     * | Parameter | Description |Type | Required | Values|
     * | --- | --- | --- | --- | --- |
     * | useMaxWidth | See Notes | Boolean | Required | true, false |
     *
     * **Notes:**
     * When this flag is set to true, the diagram width is locked to 100% and
     * scaled based on available space. If set to false, the diagram reserves its
     * absolute width.
     * **Default value: true**.
     */
    useMaxWidth?: boolean;
}

/**
 * **Configuration methods in Mermaid version 8.6.0 have been updated, to learn more[[click here](8.6.0_docs.md)].**
 *
 * ## **What follows are config instructions for older versions**
 * These are the default options which can be overridden with the initialization call like so:
 * **Example 1:**
 * <pre>
 * mermaid.initialize({
 *   flowchart:{
 *     htmlLabels: false
 *   }
 * });
 * </pre>
 *
 * **Example 2:**
 * <pre>
 * &lt;script>
 *   var config = {
 *     startOnLoad:true,
 *     flowchart:{
 *       useMaxWidth:true,
 *       htmlLabels:true,
 *       curve:'cardinal',
 *     },
 *
 *     securityLevel:'loose',
 *   };
 *   mermaid.initialize(config);
 * &lt;/script>
 * </pre>
 * A summary of all options and their defaults is found [here](#mermaidapi-configuration-defaults). A description of each option follows below.
 *
 * @name Configuration
 */
declare namespace config {
    type Theme = 'default' | 'forest' | 'dark' | 'neutral' | null;
    enum LogLevel {
        Debug = 1,
        Info,
        Warn,
        Error,
        Fatal,
    }

    interface Config {
        /**
         *  theme , the CSS style sheet
         *
         *  theme , the CSS style sheet
         *
         * | Parameter | Description |Type | Required | Values|
         * | --- | --- | --- | --- | --- |
         * | Theme |Built in Themes| String | Optional | Values include, default, forest, dark, neutral, null|
         *
         * **Notes:**To disable any pre-defined mermaid theme, use "null".
         *  <pre>
         *   "theme": "forest",
         *   "themeCSS": ".node rect { fill: red; }"
         *  </pre>
         */
        theme?: Theme;

        /**
         * maxTextSize** - The maximum allowed size of the users text diamgram
         */
        maxTextSize?: number;

        /**
         * | Parameter | Description |Type | Required | Values|
         * | --- | --- | --- | --- | --- |
         * |fontFamily | specifies the font to be used in the rendered diagrams| String | Required | Verdana, Arial, Trebuchet MS,|
         *
         * **notes: Default value is \\"trebuchet ms\\".
         */
        fontFamily?: string;

        /**
         * | Parameter | Description |Type | Required | Values|
         * | --- | --- | --- | --- | --- |
         * | logLevel |This option decides the amount of logging to be used.| String | Required | 1, 2, 3, 4, 5 |
         *
         *
         * **Notes:**
         * -   debug: 1.
         * -   info: 2.
         * -   warn: 3.
         * -   error: 4.
         * -   fatal: 5(default).
         */
        logLevel?: LogLevel;

        /**
         * | Parameter | Description |Type | Required | Values|
         * | --- | --- | --- | --- | --- |
         * | securitylevel | Level of trust for parsed diagram|String | Required | Strict, Loose, antiscript |
         *
         * **Notes:
         * -   **strict**: (**default**) tags in text are encoded, click functionality is disabeled
         * -   **loose**: tags in text are allowed, click functionality is enabled
         * -   **antiscript**: html tags in text are allowed, (only script element is removed), click functionality is enabled
         */
        securityLevel?: string;

        /**
         * | Parameter | Description |Type | Required | Values|
         * | --- | --- | --- | --- | --- |
         * | startOnLoad| Dictates whether mermaind starts on Page load | Boolean | Required | True, False |
         *
         * **Notes:**
         * **Default value: true**
         */
        startOnLoad?: boolean;

        /**
         * | Parameter | Description |Type | Required |Values|
         * | --- | --- | --- | --- | --- |
         * | arrowMarkerAbsolute | Controls whether or arrow markers in html code are absolute paths or anchors | Boolean | Required |  True, False |
         *
         *
         * ## Notes**: This matters if you are using base tag settings.
         * **Default value: false**.
         */
        arrowMarkerAbsolute?: boolean;

        /**
         * This option controls which currentConfig keys are considered _secure_ and can only be changed via
         * call to mermaidAPI.initialize. Calls to mermaidAPI.reinitialize cannot make changes to
         * the `secure` keys in the current currentConfig. This prevents malicious graph directives from
         * overriding a site's default security.
         */
        secure?: Array<string>;

        /**
         * The object containing configurations specific for flowcharts
         */
        flowchart?: FlowchartConfig;

        /**
         * The object containing configurations specific for sequence diagrams
         */
        sequence?: SequenceConfig;

        /**
         * The object containing configurations specific for gantt diagrams*
         */
        gantt?: GanttConfig;

        /**
         * The object containing configurations specific for journey diagrams
         */
        journey?: JourneyConfig;

        class?: ClassConfig;

        git?: GitConfig;

        state?: StateConfig;

        /**
         * The object containing configurations specific for entity relationship diagrams
         */
        er?: ERConfig;

        /**
         * The object containing configurations specific for pie diagrams
         */
        pie?: PieConfig;
    }
}

export default config;
