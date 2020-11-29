import { Component } from "react";

class Tested extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        var  covidResultData = this.props.covidResultData;
           return (
               <table className="table">
               <thead>
                 <tr>
                 <th>dailyconfirmed</th>
                  <th>dailydeceased</th>
                  <th>dailyrecovered</th>
                  <th>date</th>
                  <th>dateymd</th>
                  <th>totalconfirmed</th>
                  <th>totaldeceased</th>
                  <th>totalrecovered</th>
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
          
           );
       }
}

export default Tested;