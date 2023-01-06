import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(point => point.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(point => 
        <ChartBar 
          key={point.label}
          value={point.value} 
          maxValue={totalMax} 
          label={point.label}  
        />)}
    </div>
  )
}

export default Chart;