import { Component } from "react";

class SideMenu extends Component {

    handleClick = (e, data)=>{
        e.preventDefault()
        this.props.displayData(data);
    }
    
    render() {
       
        return (
            <ul className="nav flex-column">
            <li className="nav-item">
                
              <a onClick={ (e)=> this.handleClick(e, 'state') } href="#state" className="nav-link active">State wise</a>
            </li>
            <li className="nav-item">
              <a onClick={ (e)=> this.handleClick(e, 'day') } href="#day" className="nav-link" >Day wise</a>
            </li>
            <li className="nav-item">
              <a onClick={ (e)=> this.handleClick(e, 'tested') } href="#tested" className="nav-link" >Tested</a>
            </li>
            
          </ul>
        );
    }
}

export default SideMenu;