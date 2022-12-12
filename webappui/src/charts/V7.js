import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv750 = 'http://localhost:8080/v7ppm'
const urlv7ppm = 'http://localhost:8080/v750'





export default function V7() {


  const [v750, setv750] = useState([])
  const [v7ppm, setv7ppm] = useState([])

  useEffect(() => {
    axios.get(urlv750)
      .then((response) => {
        console.log(response.data)
        setv750(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv7ppm)
      .then((response) => {
        console.log(response.data)
        setv7ppm(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  const v7chart = {
    labels: v7ppm.map(d => d.time),

    datasets: [

      {
        label: 'V7ppm',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v7ppm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'fifty'
        },
        "yAxisID":'ppm'
      },
      {
        label: 'V750',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v750,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'ppm',
        },
        "yAxisID":'fifty'
      }, 
    ]
  }

  const options = {
    type: 'line',
    responsive: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    plugins: {},

    scales: {




      x: {
        type: "linear",
        max: 2022,
        title: {
          display: true,
          text: "time in years",
        },
      ppm: {
          type: 'linear',
          display:true,
          position: 'left',
        },
      fifty: {
          type: 'linear',
          display:true,
          position: 'right',
          
        }
      },
    },
  }
  return (
    <div>
      <Line options={options} data={v7chart} />
    </div >
  )
}