import Axios from "axios";
import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Days from "./Result/Days";
import Tested from "./Result/Tested";
import State from "./Result/State";
import SideMenu from "./SideMenu";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cases_time_series: [],
            statewise :[],
            tested :[],
            display: 'day'
         };
        
     
    }

    displayData = (type)=>{
        this.setState({
            display: type
        })
    }

 componentDidMount(){
  
this.getCovidResult();
 }

 getCovidResult(){

    Axios.get('https://api.covid19india.org/data.json').then( response => {
    this.setState({
              cases_time_series : response.data.cases_time_series,
              statewise :response.data.statewise,
              tested : response.data.tested,
          })
      }).catch(error => {
          //console.log(error);
      })
 }
    render() {
        return (       
            <div>
                 <Header></Header>
                <div className="container">
                <div className="row">
                    <div  className="col-md-3">
                      <SideMenu displayData={ this.displayData }></SideMenu>
                    </div>
                <div className="col-md-9">  
                { this.state.cases_time_series && this.state.cases_time_series.length>0 && this.state.display === 'day'? 
                    <Days covidResultData={this.state.cases_time_series} />
                :<div></div> }
                
                { this.state.statewise && this.state.statewise.length>0 && this.state.display === 'state'? 
                    <State covidResultData={this.state.statewise} />
                    
                :<div></div> }
                   { this.state.tested && this.state.tested.length>0 && this.state.display === 'tested'? 
                    <Tested covidResultData={this.state.tested} />
                :<div></div> }
                
                    </div>
                    </div>
                </div>
{/* <Footer></Footer> */}
</div>        
);
}
}

export default Dashboard;