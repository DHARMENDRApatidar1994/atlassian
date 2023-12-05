import React, { useState } from 'react';
import "./AtlasTableTwo.css";

const AtlasTableTwo = () => {
  const [selectedOption, setSelectedOption] = useState('option1'); // Default selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const tableData = {
    option1: [
      { total: '30', integrated: '120', standard: '$27,000', enterprise: '$46,440' },
      { total: '40', integrated: '160', standard: '$36,000', enterprise: '$61,920' },
      { total: '50', integrated: '200', standard: '$45,000', enterprise: '$77,400' },
      { total: '60', integrated: '240', standard: '$54,000', enterprise: '$92,880' },
      { total: '70', integrated: '280', standard: '$63,000', enterprise: '$108,360' },
      { total: '80', integrated: '320', standard: '$72,000', enterprise: '$123,840' },
      { total: '90', integrated: '260', standard: '$81,000', enterprise: '$139,320' },
      { total: '100', integrated: '400', standard: '$90,000', enterprise: '$154,800' },
      { total: '100', integrated: '440', standard: '$99,000', enterprise: '$170,280' },
      { total: '120', integrated: '480', standard: '$108,000', enterprise: '$185,760' },
      { total: '130', integrated: '520', standard: '$110,000', enterprise: '$189,007' },
      { total: '140', integrated: '560', standard: '$112,000', enterprise: '$192,864' },

],
    option2: [
          { total: '150', integrated: '600', standard: '$115,200', enterprise: '$196,800' },
          { total: '160', integrated: '640', standard: '$122,880', enterprise: '$209,920' },
          { total: '170', integrated: '680', standard: '$130,560', enterprise: '$223,040' },
          { total: '180', integrated: '720', standard: '$134,840', enterprise: '$229,344' },
          { total: '190', integrated: '760', standard: '$137,592', enterprise: '$234,024' },
          { total: '200', integrated: '800', standard: '$140,400', enterprise: '$238,800' },
          { total: '225', integrated: '900', standard: '$157,950', enterprise: '$268,650' },
          { total: '250', integrated: '1,000', standard: '$176,312', enterprise: '$273,600' },
          { total: '275', integrated: '1,100', standard: '$180,168', enterprise: '$300,960' },
          { total: '300', integrated: '1,200', standard: '$195,182', enterprise: '$308,400' },
          { total: '325', integrated: '1,300', standard: '$210,196 ', enterprise: '$334,100' },
          { total: '350', integrated: '1,400', standard: '$215,537', enterprise: '$359,800' },
          { total: '375', integrated: '1,500', standard: '$219,936', enterprise: '$370,440' },
          { total: '400', integrated: '1,600', standard: '$233,682', enterprise: '$378,000' },
          { total: '425', integrated: '1,700', standard: '$247,428', enterprise: '$401,625' },
          { total: '450', integrated: '1,800', standard: '$112,000', enterprise: '$425,250' },
          { total: '475', integrated: '1,900', standard: '$254,510', enterprise: '$438,648' },
],
    option3: [
          { total: '500', integrated: '2,000', standard: '$259,704', enterprise: '$447,600' },
          { total: '600', integrated: '2,400', standard: '$299,472', enterprise: '$517,200' },
          { total: '700', integrated: '2,800', standard: '$339,240', enterprise: '$586,800' },
          { total: '800', integrated: '3,200', standard: '$379,008', enterprise: '$656,400' },
          { total: '900', integrated: '3,600', standard: '$418,776', enterprise: '$726,000' },
          { total: '1,000', integrated: '4,000', standard: '$458,544', enterprise: '$795,600' },
          { total: '1,200', integrated: '4,800', standard: '$538,080', enterprise: '$934,800          ' },

],
        option4: [
          { total: '100', integrated: '400', standard: '$90,000', enterprise: '$154,800' },
          { total: '110', integrated: '440', standard: '$99,000', enterprise: '$170,280' },
          { total: '120', integrated: '480', standard: '$108,000', enterprise: '$185,760' },
        ],
        option5: [
          { total: '500', integrated: '2,000', standard: '$259,704', enterprise: '$447,600' },
          { total: '600', integrated: '2,400', standard: '$299,472', enterprise: '$517,200' },
          { total: '700', integrated: '2,800', standard: '$339,240', enterprise: '$586,800' },
          { total: '800', integrated: '3,200', standard: '$379,008', enterprise: '$656,400' },
          { total: '900', integrated: '3,600', standard: '$418,776', enterprise: '$726,000' },
          { total: '1,000', integrated: '4,000', standard: '$458,544', enterprise: '$795,600' },
          { total: '1,200', integrated: '4,800', standard: '$538,080', enterprise: '$934,800          ' },
        ],
  };

  const renderTableRows = tableData[selectedOption].map((row, index) => (
    <tr key={index}>
      <td>{row.total}</td>
      <td>{row.integrated}</td>
      <td>{row.standard}</td>
      <td>{row.enterprise}</td>
    </tr>
  ));

  return (
    <div className="TableTwo">
      <div className="TableTop">
        <h3>Software cost estimator</h3>
        <div className="btm">
          <div className="one">
            <p>User tier ?</p>
            <select className="form-select" value={selectedOption} onChange={handleOptionChange}>
              <option value="option1">30-140</option>
              <option value="option2">150-475</option>
              <option value="option3">500-1,200</option>
              <option value="option4">1,400-5,000</option>
              <option value="option5">5,200-10,000</option>
            </select>
          </div>
          <div className="one">
            <h5>Have questions?</h5>
            <button><a href="/">Contact us</a></button>
          </div>
        </div>
      </div>
      <table className="AtlasTableTwo">
        <thead>
          <tr>
            <th colSpan="2" style={{backgroundColor:"rgb(242, 242, 242)"}}>Total Users</th>
            <th colSpan="2" style={{backgroundColor:"rgb(242, 242, 242)"}}>Estimated Annual Cost</th>
          </tr>
          <tr>
            <th>Jira Align</th>
            <th>Integrated</th>
            <th>Standard</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRows}
        </tbody>
      </table>
      <div className="TableBottom">
        <p>Pricing for advisory services like Technical Account Management and practice development workshops are not included in the above pricing as pricing will vary based on your specific needs. Please view our <a href="/">advisory services</a> page or speak with an Atlassian Enterprise Advocate for further details. </p>
      </div>
    </div>
  );
}

export default AtlasTableTwo;
