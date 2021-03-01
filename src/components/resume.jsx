import React, { Fragment } from 'react';
import Button from './ui/button'

import {
    Grid,
    Link
} from '@material-ui/core'

const Resume = () => {
    return ( 
        <Fragment> 
            <Grid container>
                <Grid container item xs={6}>
                    1 {/* Images */}
                </Grid>
                <Grid container item xs={6}>
                    <Link href="/">
                        <Button>Download CV</Button>
                    </Link>
                </Grid>
            </Grid>
        </Fragment>
     );
}
 
export default Resume;