import { Component } from "react";
import { Redirect} from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            password:'',
            redirect: false
         };
    }

    loginSubmit = (event) => {
        event.preventDefault();
        console.log( this.state );
        if(this.state.userName === 'admin' && this.state.password === 'admin'){
            this.setState({
                redirect: true
            })
        }else{
alert('Invalid username and password.');
        }
    }

    changeHandler = (event) => {
       
        this.setState({
          [ event.target.name] :  event.target.value
            
        })
      
    }
  
    render() {
        if(this.state.redirect){
            return(
                <Redirect to='/dashboard' />
            )
        }
    const {userName, password} = this.state;
        return (
            <div className="container" style={{marginTop:'50px'}}>
                <div className="col-md-4"></div>
                <div className="col-md-6">
                <form  onSubmit={this.loginSubmit}>

                   <div className="form-group">
                       <input className="form-control"  name="userName" required value={userName} onChange={this.changeHandler} placeholder="User Name" type="text"/>
                   </div>
                   <div className="form-group">
                   <input className="form-control"   name="password" required value={password} onChange={this.changeHandler}  type="password" placeholder="password"/>
                   </div>
                   <div className="form-group">
                   <input   className="btn btn-primary" type="submit" value="Login"/>
                   </div>
               </form>
              </div>
              <div className="col-md-4"></div>
            </div>
        );
    }
}

export default Login;