import { createMuiTheme } from "@material-ui/core/styles";

const acrBlue = "#0B72B9";
const arcOrange = "#FFBA60";
export const theme = createMuiTheme({
    palette: {
        common: {
            black: `${acrBlue}`,
            white: `${arcOrange}`,
        },
        primary: {
            main: `${acrBlue}`,
        },
        secondary: {
            main: `${arcOrange}`,
        },

    },
    typography: {

        tab: {

        },
        h3: {
            fontWeight: 300,
        }
    }
})