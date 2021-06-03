import React from 'react';
import Post from './Post';

export default (props) => {
    if (!props.posts.length) return <button className="btn btn-primary">Загрузить</button>
    return props.posts.map(post => <Post post={post} key={post} /> )
}