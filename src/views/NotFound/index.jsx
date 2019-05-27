import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material Helpers
import { withStyles } from '@material-ui/core';

// Material Components 
import { Grid, Typography } from '@material-ui/core';

// Component Styles
const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 4
    },
    content: {
        marginTop: '150px',
        textAlign: 'center'
    },
    image: {
        display: 'inline-block',
        marginTop: '50px',
        maxWidth: '100%',
        width: '554px'
    }
});

const img = {
    src: '/images/common/not_found.png',
    alt: 'Under development'
};

class NotFound extends Component {
    render() {
        const { classes } = this.props;
        const notFoundImageUrl = '/images/common/not_found.png';

        return (
            <div className={classes.root}>
                <Grid
                    container
                    justify="center"
                    spacing={4} 
                >
                    <Grid
                        item
                        lg={6}
                        xs={12}
                    >
                        <div className={classes.content}>
                            <Typography variant="h1">
                                404: This isn't the page you are looking for
                            </Typography>
                            <Typography variant="subtitle2">
                                You either tried some shady route or you came here by mistake.
                                Whichever it is, try using the navigation.
                            </Typography>
                            <img
                                alt={img.alt}
                                className={classes.image}
                                src={img.src}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);