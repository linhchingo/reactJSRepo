import React, { Component } from 'react'

export default class PromptEx extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            value
        })
    }

    render() {
        
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Input test</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Type something to block transitions" 
                                value={this.state.value} 
                                onChange={this.handleChange}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        )
    }
}
