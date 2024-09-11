// Write your code here
import './index.css'
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  // Data formatter to convert large numbers into 'k' format
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toFixed(1)}k`
    }
    return number.toString()
  }

  return (
    <div className="graphContainer">
      <h1 className="heading2">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={500}
        data={last7DaysVaccination}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="dose_1"
          name="Dose 1"
          fill="#2d87bb"
          barSize="20%"
        />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="dose_2"
          name="Dose 2"
          fill="#f54394"
          barSize="20%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
