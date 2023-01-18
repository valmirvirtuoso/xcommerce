import { createStitches } from "@stitches/react";

export const {

    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,

}  = createStitches({

    theme: {

        colors: {

            white: "#FFFFFF",
            blue200: "#235EE7",
            blue700: "#17223E",
            blue800: "#061237",
            red500: "#D32811",
            red700: "#752528",
            gray900: "#101828",
            gray800: "#636363",
            gray300: "#6B7183",
            gray200: "#99A0B0",
            gray100: "#F3F5F9"

        },

        fontSizes: {

            md: "0.875rem",
            lg: "1rem",
            xl: "1.5rem",
            "2xl": "2.25rem",

        }

    }

});