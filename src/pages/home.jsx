import React, { Component } from 'react'
import { Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types';

// Components
import Post from '../components/post/Post'
import Profile from '../components/profile/Profile'
import PostSkeleton from '../util/PostSkeleton';
import { Hidden, Box } from '@material-ui/core'

// Redux 
import { connect } from 'react-redux'
import { getPosts } from '../redux/actions/dataActions';
import theme from '../util/theme';

const styles = (theme) =>({
    ...theme.spreadThis,
    homeGrid: {
        marginTop: 50,
    }
})

export class home extends Component {
    
    componentDidMount() {
        this.props.getPosts();
    }
    
    render() {
        const { classes } = this.props
        const { posts, loading } = this.props.data;
        let recentPostsMarkup = !loading ? (
        posts.map(post => <Post key={post.postId} post={post}/>)
        ) : <PostSkeleton />
        return (
            <Box mt={10}>
                <Grid className={classes.homeGrid} container spacing={2}>
                    <Hidden smDown>
                        <Grid item md={4} sm={12}>
                            <Profile />
                        </Grid>
                    </Hidden>
                    <Grid item md={6} style={{ paddingLeft: 25, paddingRight: 25 }} sm={12}>
                        {recentPostsMarkup}
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    { getPosts }
)(withStyles(styles)(home));

