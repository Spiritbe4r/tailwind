import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react'
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg'
import { Tab, Tabs } from '@mui/material';

function ElevationScroll(props: any) {
    const { children } = props;

    const trigger = useScrollTrigger({

        disableHysteresis: true,
        threshold: 0
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    })
}
const useStyles = makeStyles((theme: any) => ({
    toolbarMargin: {
        ...theme?.mixins?.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        marginLeft: "25px",
        color: "white"
    }
}))
const Header = () => {

    const classes = useStyles();
    return (
        <>
            <ElevationScroll>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <img alt='company logo' className={classes.logo} src={logo} />
                        <Tabs className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home" />
                            <Tab className={classes.tab} label="Services" />
                            <Tab className={classes.tab} label="The Revolution" />
                            <Tab className={classes.tab} label="About us" />
                            <Tab className={classes.tab} label="Contact us" />
                        </Tabs>

                    </Toolbar>

                </AppBar>

            </ElevationScroll>
            <div className={classes.toolbarMargin}>
            </div>
        </>
    )
}

export default Header