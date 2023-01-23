import { globalCss } from ".";

export const globalStyles = globalCss({

    "*": {

        margin: 0,
        padding: 0,
        boxSizing: "border-box",

    },

    body: {

        backgroundColor: "$white",
        color: "$gray100",
        "-webkit-font-smoothing": "antialiased",

    },

    "body, input, textarea, button": {

        fontFamily: "Inter",
        fontWeight: 400,

    },

    ".ContainerContent": {

        width: "100%",
        maxWidth: "1400px",

        margin: "0 auto",

    }

})