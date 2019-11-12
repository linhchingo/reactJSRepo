import React, { Component } from 'react'
import { toast } from 'react-toastify';


export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            isSigned: false,
            defaulUserName: 'ltsan',
            defaultPassword: '123456'
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const {
            userName,
            passWord,
            defaulUserName,
            defaultPassword,
            isSigned
        } = this.state
        if (userName === defaulUserName && passWord === defaultPassword) {
            this.setState({
                userName: '',
                passWord: '',
                isSigned: true
            })
            localStorage.setItem('isLogin', isSigned)
            toast.info('👌 Login is successfuly!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            this.setState({
                passWord: '',
            })
            toast.error('💔 Username or password is correct!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }

        event.preventDefault();
    }

    handleSubmitLogoutForm = (event) => {
        const {isSigned} = this.state
        this.setState({
            isSigned: false
        })
        localStorage.setItem('isLogin', isSigned)
        event.preventDefault();
    }

    checkLogin = (isSigned) => {
        let xForm = null
        const { userName, passWord } = this.state
        if (!isSigned) {
            xForm =
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <input
                        type="text"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        name="userName"
                        value={userName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        name="passWord"
                        value={passWord}
                        onChange={this.handleInputChange}
                    />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
        } else {
            xForm =
                <form className="form-signin" onSubmit={this.handleSubmitLogoutForm}>
                    <h1 className="h3 mb-3 font-weight-normal">Hello</h1>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Logout</button>
                </form>
        }
        return xForm
    }


    render() {
        const { isSigned } = this.state
        console.log(isSigned);
        

        return (

            <div className="row justify-content-md-center">
                <div className="col-md-3 text-center">
                    {this.checkLogin(isSigned)}
                </div>
            </div>




        )
    }
}
