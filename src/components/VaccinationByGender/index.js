import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="graphContainer">
      <h1 className="heading2">Vaccination by gender</h1>

      <PieChart width={1000} height={350}>
        <Pie
          cx="50%" // This centers the Pie Chart horizontally.
          cy="50%" // This centers the Pie Chart vertically (adjusted to '50%').
          data={vaccinationByGender}
          startAngle={180}
          endAngle={0}
          innerRadius="40%" // Relative radius to keep size proportional.
          outerRadius="70%" // Relative outer radius.
          dataKey="count"
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
