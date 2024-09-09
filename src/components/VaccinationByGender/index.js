import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="graphContainer">
      <h1 className="heading2">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx="50%" // Centering the Pie Chart horizontally
            cy="80%" // Adjusting the vertical position to leave space for the legend below
            data={vaccinationByGender}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill=" #f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal" // Displaying the labels horizontally
            verticalAlign="bottom" // Positioning the legend at the bottom
            align="center" // Center-aligning the legend
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
