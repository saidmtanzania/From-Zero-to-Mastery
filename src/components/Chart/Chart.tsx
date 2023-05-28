/* eslint-disable @typescript-eslint/no-explicit-any */
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props: any) {
  const dataPointValue = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaxmum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxmum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
