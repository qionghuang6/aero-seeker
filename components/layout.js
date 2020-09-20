import Head from 'next/head'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Header = () => {
    return(
        <div>
            <Head>
                <title>AeroSeeker</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
            </Head>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    AeroSeeker
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header