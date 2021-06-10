import React from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../redux/actions';
import './posts.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
    }

    deleteHandler (e, id) {
        this.props.deletePost(id);
    }

    render() {
        return (
            <div className="card my-1">
                <div className="card-body">
                    <div className="row justify-content-between">
                        <div className="col-4">
                            <h5 className="card-title">{ this.props.post.title }</h5>
                        </div>
                        <div className="col-1">
                            <div onClick={(e) => this.deleteHandler(e, this.props.post.id)} className="post-close">&times;</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { deletePost })(Post)