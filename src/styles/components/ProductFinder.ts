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

    h2: {

        fontSize: "$2xl",
        marginBottom: "3.75rem",

    },

    input: {

        border: "none",
        borderRadius: "8px",

        padding: "0.9375rem",

        width: "100%",

        maxWidth: "427px",
        
        "&:focus": {

            outline: "none",

        },

    },

    "@media (max-width: 550px)": {

        flexDirection: "column",

    },

});

export const InputContainer = styled("div", {

    display: "flex",
    alignItems: "center",

    width: "100%",

    backgroundColor: "$white",

    paddingLeft: "1.25rem",

    marginBottom: "3.75rem",

    borderRadius: "8px",

    "&:focus-within": {

        outline: "3px solid $blue200",

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

        padding: "0.5rem",

        border: "none",
        borderRadius: "8px",

        "&:hover": {

            backgroundColor: "$red700",
            cursor: "pointer",

        },

    },

    "@media (max-width: 1400px)": {

        justifyContent: "center",
        gap: "0.9375rem",

    },

});