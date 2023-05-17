import { memo } from "react";
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Bar, Tooltip, Legend, } from "recharts";
import { data,data2,data1 } from './Data1chart'
import {options,option1,option2} from './Data1chart'
import { Line, Bar} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,//x axis
  LinearScale,// y axis
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

function DemoContent() {
  return (
    <>
    {/* Line Chart */}
      <h4>Threat Aging - Last 7 Days</h4>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Line
          data={data}
          options={options}
        ></Line>
      </div>

      {/* Vertical Bar Chart */}

      <h1>Vertical Bar chart</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data1}
        options={option1}
        ></Bar>
      </div>

      {/* straight Bar */}
      <h1>straight Bar</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data2}
        options={option2}
        ></Bar>
      </div>
      

    </>
  );
}

export default memo(DemoContent);
