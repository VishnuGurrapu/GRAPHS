// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    try {
      const response = await fetch(vaccinationDataApiUrl)
      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = {
          last7DaysVaccination: fetchedData.last_7_days_vaccination,
          vaccinationByAge: fetchedData.vaccination_by_age,
          vaccinationByGender: fetchedData.vaccination_by_gender,
        }
        console.log(updatedData)
        this.setState({
          vaccinationData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVaccinationData = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = vaccinationData
    return (
      <div className="graphsContainer">
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failureContainer">
      <img
        className="failureimage"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />

      <h1>something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    return (
      <div className="outerContainer">
        <div className="bgContainer">
          <div className="logoContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              className="logo"
              alt="website logo"
            />
            <p className="logoHeading">Co-Win</p>
          </div>
          <h1 className="heading">CoWIN Vaccination in India</h1>
          {(() => {
            switch (apiStatus) {
              case apiStatusConstants.success:
                return this.renderVaccinationData()
              case apiStatusConstants.failure:
                return this.renderFailureView()
              case apiStatusConstants.inProgress:
                return this.renderLoadingView()
              default:
                return null
            }
          })()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
