import { styled } from "..";

export const BestSellersContainer = styled("aside", {

    color: "$gray900",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    gap: "2.125rem",

});

export const HeaderContainer = styled("header", {

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",

    h3: {

        color: "$blue800",
        fontSize: "$xl",

    },

    "div button": {

        border: "none",

        backgroundColor: "transparent",

        color: "$blue200",
        fontSize: "1.5rem",

        cursor: "pointer",

        "&:hover": {

            opacity: 0.5,

        },

    },

    "@media (max-width: 1400px)": {

        width: "100vw",

    },

});

export const BestSellersContent = styled("div", {

    width: "100%",

    backgroundColor: "$gray100",
    borderRadius: "8px",

    padding: "1.875rem",

    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.9375rem",

    "@media (max-width: 1400px)": {

        width: "100vw",

    },

});

export const BestSellersProducts = styled("div", {

    maxWidth: "170px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    img: {

        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",

    },

    "p span": {

        color: "$gray300",
        fontSize: "0.875rem",

    },

    "p span:first-child": {

        color: "$gray300",
        fontWeight: "bold",
        fontSize: "0.875rem",

        marginRight: "0.75rem",

    },

    p: {

        color: "$blue200",
        fontSize: "0.875rem",
        fontWeight: 600,

    },

    "img + p": {

        margin: "0.875rem 0 0.3125rem 0",
        display: "flex",

        "span:last-child": {

           display: "-webkit-box",
           " -webkit-line-clamp": 1,
           "-webkit-box-orient": "vertical",  
           overflow: "hidden",

        },

    }

});

export const Pages = styled("div", {

    alignSelf: "flex-end",

    fontSize: "0.875rem",
    color: "$gray800",
    fontWeight: 600,

    "@media (max-width: 1400px)": {

        alignSelf: "center",

    },

});