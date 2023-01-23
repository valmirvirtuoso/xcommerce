import { styled } from "@stitches/react";

export const Container = styled("div", {

    height: "100%",

    display: "flex",
    flexDirection: "column",
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

    }

});

export const AllProductsContainer = styled("div", {

    display: "flex",
    flexDirection: "column",
    flex: "1",

    padding: "0 1.8rem",
    backgroundColor: "$gray100",

    borderRadius: "8px",

    h3: {

        fontSize: "$xl",
        color: "$blue800",

    },

    "@media (max-width: 1400px)": {

        width: "100vw",
        overflowX: "scroll",

    },

});

export const ProductList = styled("div", {

    flex: "1",

    marginTop: "2rem",

    table: {

        width: "100%",
        minWidth: "883px",

        borderCollapse: "collapse",
        padding: "1.875rem",

        borderRadius: "8px",

        thead: {

            borderBottom: "1px solid  rgba(0, 0, 0, 0.1)",
            color: "$gray200",
            textAlign: "left",

            th: {

                paddingBottom: "1.25rem",
                fontWeight: 600,

            },

        },

        tbody: {

            color: "black",

            td: {

                padding: "1.1875rem 0",
                color: "$gray300",
                fontSize: "$md",
                marginRight: "-7rem",

                img: {

                    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",

                },

                button: {

                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",

                    img: {

                        boxShadow: "none",

                    },

                },

            },

            "td:first-child": {

                display: "flex",
                alignItems: "center",

                gap: "1.875rem",

                img: {

                    width: "85px",
                    height: "85px",

                },

                div: {

                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",

                    width: "218px",
                    marginRight: "2.5rem",

                    "p:first-child": {

                        color: "$blue200",
                        fontSize: "$md",
                        fontWeight: 600,

                    },

                    p: {

                        color: "$gray300",
                        fontSize: "$md",
                        fontWeight: 600,

                    },

                },

            },



        },

        "tbody > tr + tr": {

            borderTop: "1px dashed rgba(0, 0, 0, 0.1)",

        },

    },

});

export const PriceStyled = styled("p", {

    color: "$gray300",
    fontWeight: 700,

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