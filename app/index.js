import React, { PropTypes } from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import fuzzy from 'fuzzy'
// import vehicleInfo from '../vehicleInfo.js'
const vehicleInfo = [
  {
    'id': 0,
    'make': 'AM General',
    'model': 'Hummer',
    'year': 1998
  },
  {
    'id': 1,
    'make': 'Chevrolet',
    'model': 'Tahoe',
    'year': 2007
  }
]

const VisibleVehicleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleList)

const getVisibleVehicleItems = (vehicles, filter) => {

}

const mapStateToProps = (state) => {
  return {
    vehicles: getVisibleVehicleItems(state.vehicles, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick: (id) => {
      dispatch(deleteVehicle(id))
    }
  }
}

const App = () => (
  <div>
    <VisibleVehicleList />
  </div>
)

const VehicleItem = ({ vehicle, onDeleteClick }) => {
  <tr>
    <td>{vehicle.make}</td>
    <td>{vehicle.model}</td>
    <td>{vehicle.year}</td>
    <td>
      <button onClick={() => onDeleteClick(vehicle.id)} type='button' className='btn btn-danger'>Delete</button>
    </td>
  </tr>
}

VehicleItem.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  vehicle: PropTypes.object.isRequired
}

const VehicleList = ({ vehicles, onDeleteClick }) => {
  <table>
    <tbody>
      {vehicles.map(vehicle =>
        <VehicleItem
          key={vehicle.id}
          {...vehicle}
          onClick={onDeleteClick}
        />
      )}
    </tbody>
  </table>
}

VehicleList.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

let store = createStore(vehicleApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/*
const VehicleListContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1>Vehicle Database</h1>
        <SearchBar />
        <VehicleList vehicles={this.props.vehicles}/>
      </div>
    )
  }
})
*/
/*
const VehicleList = React.createClass({
  render: function () {
    let id = 0
    let vehicleItems = this.props.vehicles.map(function (vehicle, onClick) {
      return (
        <tr key={id++}>
          <td>{vehicle.make}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.year}</td>
          <td>
            <button onClick={onClick} type='button' className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      )
    })
    return (
      <table className='table table-striped'>
        <tbody>
          <tr>
            <td>Make</td>
            <td>Model</td>
            <td>Year</td>
          </tr>
          {vehicleItems}
        </tbody>
      </table>
    )
  }
})

const SearchBar = React.createClass({
  render: function () {
    let options = {
      pre: '<',
      post: '>',
      extract: function (el) { return el.make }
    }
    let makeResults = fuzzy.filter('audi', vehicleInfo, options)
    let matches = makeResults.map(function (el) {
      console.log(el)
    })
    return (
      <form className='form-inline'>
        <div className='form-group'>
          <label for='inputMake'>Make</label>
          <input type='text' className='form-control' id='inputMake' placeholder='Toyota'></input>
        </div>
        <div className='form-group'>
          <label for='inputModel'>Model</label>
          <input type='text' className='form-control' id='inputModel' placeholder='Camry'></input>
        </div>
        <div className='form-group'>
          <label for='inputYear'>Make</label>
          <input type='text' className='form-control' id='inputYear' placeholder='2007'></input>
        </div>
        <button type='submit' className='btn btn-primary'>Search</button>
        <button type='submit' className='btn btn-success'>Add</button>
      </form>
    )
  }
})
/*
const VehicleListContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1>Vehicle Database</h1>
        <SearchBar />
        <VehicleList vehicles={this.props.vehicles}/>
      </div>
    )
  }
})
*/
/*
const VehicleListContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1>Vehicle Database</h1>
        <SearchBar />
        <VehicleList vehicles={this.props.vehicles}/>
      </div>
    )
  }
})
*/
/*
const VehicleListContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1>Vehicle Database</h1>
        <SearchBar />
        <VehicleList vehicles={this.props.vehicles}/>
      </div>
    )
  }
})
/*
const VisibleVehicleList = React.createClass({
  render: function () {
    return (
      <div>visible filtered list</div>
    )
  }
})

ReactDOM.render(
  <VehicleListContainer vehicles={vehicleInfo} />,
  document.getElementById('app')
)
*/
