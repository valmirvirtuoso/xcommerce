import { styled } from "..";

export const HomeContainer = styled("div", {

    display: "grid",
    gridTemplateColumns: "427px 1fr",
    gap: "1.875rem",
    alignItems: "flex-start",
    marginTop: "5rem",
    marginBottom: "1.25rem",

    "@media (max-width: 1400px)": {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },

});