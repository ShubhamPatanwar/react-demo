import { Component } from "react";

class Tested extends Component {
 
    render() {
        var  covidResultData = this.props.covidResultData;
           return (
            <div className="card" style={{marginTop:'50px'}}>
            <div className="card-body" style={{overflow:'auto', height:'500px'}}>
            <table className="table">
          <thead>
            <tr>
           
            <th>Daily Samples IRMR Application</th>
            <th>Individuals Tested Per Confirmed Case</th>
            <th>Positive Cases From Samples Reported</th>
             <th>Sample Reported Today</th>
             <th>Source</th>
             <th>Delta Confirmed</th>
             <th>Delta Deaths</th>
             <th>Test Positivity Last 7days</th>
             <th>Test Positivity Rate</th>
             <th>Tests Conducted by Private labs</th>
             <th>Tests Per Confirmed Case</th>
             <th>Tests Per Million</th>
             <th>Total Individuals Tested</th>
             <th>Total Positive Cases</th>
             <th>Total RTPCR Samples Collected ICMR application</th>
             <th>Total Samples Tested</th>
             <th>Update Time Stamp</th>
            </tr>
         
          </thead>
          <tbody>
          { covidResultData.map((data, index) => (
        <tr key={index}>
            <td>{data.dailyrtpcrsamplescollectedicmrapplication}</td>
            <td>{data.individualstestedperconfirmedcase}</td>
            <td>{data.positivecasesfromsamplesreported}</td>
            <td>{data.samplereportedtoday}</td>
            <td>{data.source}</td>
            <td>{data.deltaconfirmed}</td>
            <td>{data.deltadeaths}</td>
            <td>{data.testpositivitylast7days}</td>
            <td>{data.testpositivityrate}</td>
            <td>{data.testsconductedbyprivatelabs}</td>
            <td>{data.testsperconfirmedcase}</td>
            <td>{data.testspermillion}</td>
            <td>{data.totalindividualstested}</td>
            <td>{data.totalpositivecases}</td>
            <td>{data.totalrtpcrsamplescollectedicmrapplication}</td>
            <td>{data.totalsamplestested}</td>
            <td>{data.updatetimestamp}</td>
        </tr>
    ))}
          </tbody>
       
       
   
      </table>
     
            </div>
        </div>
     
           );
       }
}

export default Tested;