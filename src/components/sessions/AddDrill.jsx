import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';
// MUI Stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuItem from '@material-ui/core/MenuItem'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
// Redux stuff
import { connect } from 'react-redux';
import { getUserDrills, addDrillToSession, clearErrors } from '../../redux/actions/dataActions';

const styles = (theme) => ({
    ...theme.spreadThis,
    submitButton: {
        position: 'relative',
        float: 'right',
        marginTop: 10
    },
    progressSpinner: {
        position: 'absolute'
    },
    closeButton: {
        position: 'absolute',
        left: '91%',
        top: '1%'
    }
});

class AddDrill extends Component {
    state = {
        open: false,
        errors: {},
        drillToBeAdded: ""
    };
    handle = this.props.user.credentials.handle
    handleOpen = () => {
        this.setState({ open: true });
        console.log(this.handle)
        this.props.getUserDrills(this.handle)
        
    };
    handleClose = () => {
        this.props.clearErrors();
        this.setState({ open: false, errors: {} });
    };
    handleChange = (event) => {
        this.setState({ drillToBeAdded: event.target.value });
        console.log(this.state)
    };
    sendDrill = (event) => {
        event.preventDefault();
        this.props.addDrillToSession(this.state.drillToBeAdded);
        console.log(this.state.drillToBeAdded)
    };
    componentDidMount() {
        
        
    }
    render() {
        const { errors } = this.state;
        const { yourDrills } = this.props.data;
        
        const {
            classes,
            UI: { loading }
        } = this.props;
        return (
            <Fragment>
                <MyButton onClick={this.handleOpen} tip="Create New Drill">
                    <AddIcon />
                    <Typography variant={"h6"}>Add Your Drill</Typography>

                </MyButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <MyButton
                        tip="Close"
                        onClick={this.handleClose}
                        tipClassName={classes.closeButton}
                    >
                        <CloseIcon />
                    </MyButton>
                    <DialogTitle>Add Your Drills</DialogTitle>
                    <DialogContent>
                        <form >
                            <TextField
                                name="userDrill"
                                label="Your Drills"
                                select
                                rows="1"
                                error={errors.body ? true : false}
                                helperText={errors.body}
                                className={classes.textField}
                                
                                onChange={this.handleChange}
                                fullWidth
                            >
                                {yourDrills.map((drill) => (
                                    <MenuItem key={drill.drillId} value={drill.name}>
                                        {drill.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            {/* <TextField
                                name="instructorDrills"
                                select 
                                label="Instructor Drills"
                                error={errors.body ? true : false}
                                helperText={errors.body}
                                className={classes.textField}
                                onChange={this.handleChange}
                                fullWidth
                            >

                            </TextField> */}
                            
                            <Button
                                type="sendDrill"
                                variant="contained"
                                color="primary"
                                className={classes.submitButton}
                                disabled={loading}
                                onClick={this.sendDrill}
                            >
                                Submit
                {loading && (
                                    <CircularProgress
                                        size={30}
                                        className={classes.progressSpinner}
                                    />
                                )}
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </Fragment>
        );
    }
}

AddDrill.propTypes = {
    getUserDrills: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI,
    data: state.data,
    user: state.user
});

export default connect(
    mapStateToProps,
    { getUserDrills, addDrillToSession, clearErrors }
)(withStyles(styles)(AddDrill));