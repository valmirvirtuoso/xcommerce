import { styled } from "..";

export const ModalContainer = styled("div", {

    position: "fixed",

    top:0,
    right:0,
    bottom:0,
    left:0,

    backgroundColor: "rgba(0, 0, 0, 0.55)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

});

export const ModalContent = styled("div", {

    backgroundColor: "$gray100",
    width: "300px",

    padding: "1.5rem",
    borderRadius: "8px",

    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",

});

export const HeaderContainer = styled("header", {

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h3: {

        color: "$blue800",
        fontSize: "$lg",
        
    },

    button: {

        border: "none",
        backgroundColor: "trasnparent",
        fontSize: "$xl",
        cursor: "pointer",

        "&:hover": {

            opacity: "0.5"

        },

    }

});

export const FormContainer = styled("form", {

    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",

    div: {

        display: "flex",
        flexDirection: "column",
        gap: "0.3125rem",

        label: {

            color: "$blue800",
            fontSize: "$md",
            fontWeight: 600,

        },

        ".error": {

            color: "$red500",
            fontSize: "$md",
            fontWeight: 700,

        }

    },

    input: {

        border: "none",
        borderRadius: "8px",

        padding: "0.625rem",

        "&:focus": {

            outline: "none",

        },

        "&:focus-within": {

            outline: "2px solid $blue200",
    
        }


    },

    "button": {

        backgroundColor: "$red500",

        border: "none",
        borderRadius: "8px",

        padding: "0.625rem",

        color: "$gray100",

        "&:hover": {

            backgroundColor: "$red700",
            cursor: "pointer",

        },

    },

});