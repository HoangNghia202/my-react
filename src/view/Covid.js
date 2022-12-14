import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import useFeck from "../customize/FeckData";

const Covid = () => {
  const { data:dataCovid, isLoading, isError } = useFeck(
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
  );

  return (
    <div>
      <table class="container">
        <thead>
          <tr>
            <th>
              <h1>Confirmed</h1>
            </th>
            <th>
              <h1>Active</h1>
            </th>
            <th>
              <h1>Deaths</h1>
            </th>
            <th>
              <h1>Recovered</h1>
            </th>
            <th>
              <h1>Date</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading===false && dataCovid && dataCovid.length>0 && dataCovid.map((item, index) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                  <td>{item.Date}</td>
                </tr>
              );
            })
          }

          {
            isLoading===true&& <tr><td colspan='5' style={{'text-align':'center'}}>isLoading...</td></tr>
          }
          {
            isError===true && isLoading===false &&<tr><td colspan='5' style={{'text-align':'center'}}>Something wrong...</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default Covid;


