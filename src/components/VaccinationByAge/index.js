import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="graphContainer">
      <h1 className="heading2">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            cx="50%" // Centering the Pie Chart horizontally
            cy="40%" // Moving the Pie Chart up to leave space for the legend
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="0%" // Complete solid circle (no inner radius)
            outerRadius="70%" // Adjusting the outer radius for desired size
            dataKey="count"
          >
            <Cell name="18-44" fill=" #2d87bb" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
