import React from 'react';
import '../assets/styles/components/WorldPopulationRegion.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const WorldPopulationRegion = ({ data }) => {
  const dataArray = [];

  if (typeof data.items !== 'undefined') {
    data.items.map((item) => {
      dataArray.push({
        continent: item.continent,
        Population: item.population,
        /* rank: item.rank, */
      });
    });
  }
  console.log(dataArray);

  return (
    <div className='cambiarNombreDeClase'>
      <div style={{ width: '100%', height: 500 }}>
        <h1>Chart World Population by Region</h1>
        <ResponsiveContainer>
          <BarChart
            /* width={900}
              height={500} */
            data={dataArray}
            margin={{ top: 50, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='continent' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey='Population'
              fill='#82ca9d'
              background={{ fill: '#eee' }}
              label={{ position: 'top' }}
            />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorldPopulationRegion;
