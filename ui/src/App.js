import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {DockerMuiThemeProvider} from "@docker/docker-mui-theme";
import VCluster from "./vcluster/Vcluster";
import Branding from "./branding/Branding";
import {Box, Stack} from "@mui/material";

export default function App() {
    const [show, setShow] = React.useState(false);

    const handleClickCreateVC = () => {
        setShow(true);
    };

    let component
    if (show) {
        component = <VCluster/>;
    } else {
        component = <Branding handleClickCreateVC={handleClickCreateVC}/>;
    }

    return (<DockerMuiThemeProvider>
        <CssBaseline/>
        <Stack direction="column" spacing={2}>
            <Box
                component="img"
                sx={{
                    alignSelf: "center",
                    height: 100,
                    width: 300,
                    maxHeight: {xs: 150, md: 350},
                    maxWidth: {xs: 150, md: 350},
                }}
                src="https://d33wubrfki0l68.cloudfront.net/0ba1c19e054b699c5642c768cdb3145123611f8b/0d4b0/images/vcluster-logo.svg"
            />
        </Stack>
        {component}
    </DockerMuiThemeProvider>);
}