import React from 'react'

class MusicForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: ''
        }
    }

    formSubmit = (event) => {
        event.preventDefault()

        console.log(this.state.name)
    }

    inputChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input type="text" onChange={this.inputChange} />
                <button type="submit">button</button>
            </form>
        )
    }
}

export default MusicForm