import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const { title } = this.state

        if (title == '') return;

        const newPost = {
            title,
            id: Date.now().toString()
        }
        
        this.props.createPost(newPost)
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={(e) => this.submitHandler(e)}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input name="title" type="text" className="form-control" id="title" onChange={this.changeInputHandler}/>
                </div>
                <button className="btn btn-success mt-1" type="submit">Создать</button>
            </form>
        )
    }
}

export default connect(null, { createPost })(PostForm)