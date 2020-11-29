import { Component } from "react";
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            redirect: false,
        };
    }

    loginSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.userName === 'admin' && this.state.password === 'admin') {
            this.setState({
                redirect: true
            })
        } else {
            alert('Invalid username and password.');
        }
    }

    changeHandler = (event) => {

        this.setState({
            [event.target.name]: event.target.value

        })

    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/dashboard' />
            )
        }
        const { userName, password } = this.state;
        return (
            <div className="container" style={{ marginTop: '50px' }}>
                <div className="row">
                    <div className="col-lg-4 col-md-4">

                        <div className="card">
                            <div className="card-body">
                                <h2>Project description</h2>
                                <p>This is the sample covid demo app. we can see the covid results by day, state and by tested results.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <form onSubmit={this.loginSubmit}>
                            <div className="card">
                                <div className="card-body">
                                    <h4>User Login</h4>
                                    <hr />
                                    <div className="form-group">
                                        <input className="form-control" name="userName" required value={userName} onChange={this.changeHandler} placeholder="User Name" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" name="password" required value={password} onChange={this.changeHandler} type="password" placeholder="password" />
                                    </div>
                                    <div className="form-group">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </div>
                                <p style={{textAlign:'center', color:'blue'}}>Hint : username is "admin" and password is "admin"</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;