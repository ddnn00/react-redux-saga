import React from 'react'
import { connect } from 'react-redux'

const SumPosts = ({ sumPosts }) => {
    return (
        <p>Всего постов: <b>{ sumPosts.length }</b></p>
    )
}

const mapStateToProps = (state) => ({
    sumPosts: state.post.posts
})

export default connect(mapStateToProps, null)(SumPosts)