import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) return <p>Постов нет</p>
    return syncPosts.map(post => <Post post={post} key={post.id} i={post.id} /> )
}

const mapStateToProps = state => {
    return {
        syncPosts: state.post.posts
    }
}

export default connect(mapStateToProps, null)(Posts)