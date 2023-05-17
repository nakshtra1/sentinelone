import { memo } from "react";
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Bar, Tooltip, Legend, } from "recharts";
import { data,data2,data1,data3,data4,data5,data6,options,option1,option2,option3,option4,option5,option6, option7, data7} from './Data1chart'
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

      <h1>Security Posture</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data3}
        options={option3}
        ></Bar>
      </div>

      <h1>Analyst Verdicts - Threats</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data4}
        options={option4}
        ></Bar>
      </div>

           {/* Indected EndPoint*/}

           <h1>Infected Endpoints</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data5}
        options={option5}
        ></Bar>
      </div>

      {/* Unmitigated Threats */}

      <h1>Unmitigated Threats</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data6}
        options={option6}
        ></Bar>
      </div>

           {/* Agents Requiring Attention */}

           <h1>Agents Requiring Attention</h1>
      <div style={
        {
          width: '100%',
          height: '300px',
          padding: '20px'
        }
      }>
        <Bar
        data={data7}
        options={option7}
        ></Bar>
      </div>
      

    </>
  );
}

export default memo(DemoContent);
