import { Component } from "react";

class State extends Component {
  
    render() {
        var  covidResultData = this.props.covidResultData;
           return (
            <div className="card" style={{marginTop:'50px'}}>
            <div className="card-body" style={{overflow:'auto', height:'500px'}}>
            <table className="table">
          <thead>
            <tr>
            <th>State</th>
            <th>State Code</th>
            <th>Active</th>
             <th>Confirmed</th>
             <th>Deaths</th>
             <th>Delta Confirmed</th>
             <th>Delta Deaths</th>
             <th>Delta Recovered</th>
             <th>Last Updated Time</th>
             <th>Migratedother</th>
             <th>Recovered</th>
            </tr>
         
          </thead>
          <tbody>
          { covidResultData.map((data, index) => (
        <tr key={index}>
            <td>{data.state}</td>
            <td>{data.statecode}</td>
            <td>{data.active}</td>
            <td>{data.confirmed}</td>
            <td>{data.deaths}</td>
            <td>{data.deltaconfirmed}</td>
            <td>{data.deltadeaths}</td>
            <td>{data.deltarecovered}</td>
            <td>{data.lastupdatedtime}</td>
            <td>{data.migratedother}</td>
            <td>{data.recovered}</td>
        </tr>
    ))}
          </tbody>
       
       
   
      </table>
     
            </div>
        </div>
     
           );
       }

}

export default State;