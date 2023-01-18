import { styled } from "..";

export const ProductFinderStyled = styled("div", {

    backgroundColor: "$blue700",
    padding: "3.75rem 3.125rem 2.06rem 3.125rem",

});

export const ProductFinderContainer = styled("div", {

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottom: "1px solid rgba(255, 255, 255, 0.10)",

    "h2, input": {

        marginBottom: "3.75rem",

    },

    h2: {

        fontSize: "$2xl",

    },

    input: {

        border: "none",
        borderRadius: "8px",

        padding: "0.9375rem",

        width: "427px",

    },

});

export const FilterButtons = styled("div", {

    display: "flex",
    alignItems: "center",
    gap: "0.9375rem",

});

export const FilterButtonsContainer = styled("div", {

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "2.06rem",

    button: {

        backgroundColor: "$red500",

        color: "$white",

        padding: "8px",

        border: "none",
        borderRadius: "8px",

        "&:hover": {

            backgroundColor: "$red700",
            cursor: "pointer",

        },

    },

});