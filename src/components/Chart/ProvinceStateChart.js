import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchConfirmedData } from "../../api";
import styles from "./Chart.module.css";

const ProvinceStateChart = ({ data: { confirmed, recovered, deaths, active, lastUpdate }, provinceState }) => {
  const [confirmedData, setConfirmedData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialConfirmedData = await fetchConfirmedData();

      setConfirmedData(initialConfirmedData);
    };

    fetchMyAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed Cases", "Recovery Rate", "Total Deaths", "Active Cases"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(25, 99, 174, 0.7)",
              "rgba(30, 174, 25, 0.7)",
              "rgba(171, 18, 26, 0.7)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Latest COVID-19 Statistics for ${provinceState} as of ${new Date(lastUpdate).toDateString()} ` },
      }}
    />
  ) : null;

  const lineChart = confirmedData[0] ? (
    <Line 
      data={{
        labels: confirmedData.map(({ date }) => date),
        datasets: [
          {
            data: confirmedData.map((data) => data.confirmed),
            label: "Cases Confirmed",
            borderColor: "#3333ff",
            backgroundColor: "rgba(25, 99, 174, 0.7)",
            fill: true,
          },
          {
            data: confirmedData.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(30, 174, 25, 0.7)",
            fill: true,
          },
          {
            data: confirmedData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{provinceState ? barChart : lineChart}</div>
  );
};

export default ProvinceStateChart;
