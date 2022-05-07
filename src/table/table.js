import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FaMapMarkedAlt } from  'react-icons/fa';
import { BsChevronUp } from  'react-icons/bs';
import './table.css'

const BasicTable = () => {
  return (
    <MDBTable striped>
      <MDBTableHead className='heed'>
        <tr className='tbhead'>
          <th >Vehicle# <BsChevronUp/></th>
          <th>Start Date</th>
          <th>Distance</th>
          <th>Odometer Start</th>
          <th>Odometer End</th>
          <th>Avg Speed</th>
          <th>Max Speed</th>
          <th>Engine(hrs)</th>
          <th>Spent fuel</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>KAGH8291L <FaMapMarkedAlt/></td>
          <td>16 Jan 2022</td>
          <td>300 km</td>
          <td>29123</td>
          <td>29723</td>
          <td>60 km/hr</td>
          <td>80 km/hr</td>
          <td>10</td>
          <td>-</td>
          
        </tr>
        <tr>
        <td>KAGH8291L <FaMapMarkedAlt/></td>
          <td>16 Jan 2022</td>
          <td>300 km</td>
          <td>29123</td>
          <td>29723</td>
          <td>60 km/hr</td>
          <td>80 km/hr</td>
          <td>10</td>
          <td>-</td>
        </tr>
        <tr>
        <td>KAGH8291L <FaMapMarkedAlt/></td>
          <td>16 Jan 2022</td>
          <td>300 km</td>
          <td>29123</td>
          <td>29723</td>
          <td>60 km/hr</td>
          <td>80 km/hr</td>
          <td>10</td>
          <td>-</td>
        </tr>
        <tr>
        <td>KAGH8291L <FaMapMarkedAlt/></td>
          <td>16 Jan 2022</td>
          <td>300 km</td>
          <td>29123</td>
          <td>29723</td>
          <td>60 km/hr</td>
          <td>80 km/hr</td>
          <td>10</td>
          <td>-</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default BasicTable;