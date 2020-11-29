import { Component } from "react";

class Days extends Component {
   
    render() {
     var  covidResultData = this.props.covidResultData;
        return (
          <div className="card" style={{marginTop:'50px'}}>
              <div className="card-body" style={{overflow:'auto', height:'500px'}}>
              <table className="table">
            <thead>
              <tr>
              <th>Daily Confirmed</th>
               <th>Daily Deceased</th>
               <th>Daily Recovered</th>
               <th>Date</th>
               <th>Dateymd</th>
               <th>Total Confirmed</th>
               <th>Total Deceased</th>
               <th>Total Recovered</th>
              </tr>
           
            </thead>
            <tbody>
            { covidResultData.map((data, index) => (
          <tr key={index}>
              <td>{data.dailyconfirmed}</td>
              <td>{data.dailydeceased}</td>
              <td>{data.dailyrecovered}</td>
              <td>{data.date}</td>
              <td>{data.dateymd}</td>
              <td>{data.totalconfirmed}</td>
              <td>{data.totaldeceased}</td>
              <td>{data.totalrecovered}</td>
          </tr>
      ))}
            </tbody>
         
         
     
        </table>
       
              </div>
          </div>
       );
    }
}

export default Days;