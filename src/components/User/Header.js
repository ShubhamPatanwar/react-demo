import { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div  style={{height: "50px", float: 'right'}}>
              <a href={'/'}>Logout</a>
          </div>  
        );
    }
}

export default Header;