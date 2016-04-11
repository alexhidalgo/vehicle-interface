var React = require('react')
var ReactDOM = require('react-dom')
var FuzzySearch = require('react-fuzzy-search')

var vehicleInfo = [{
  'make': 'AM General',
  'model': 'Hummer',
  'year': 1998
}, {
  'make': 'Audi',
  'model': 'S6',
  'year': 2013
}, {
  'make': 'Audi',
  'model': 'S6',
  'year': 2014
}]

var VehicleListContainer = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <h1>Vehicle Database</h1>
        <SearchBar />
        <VehicleList />
      </div>
    )
  }
})

var VehicleList = React.createClass({
  render: function () {
    var id = 0
    var vehicleItems = this.props.vehicles.map(function (vehicle) {
      return (
        <tr key={id++}>
          <td>{vehicle.make}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.year}</td>
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

var SearchBar = React.createClass({
  render: function () {
    return (
      <div>
        <FuzzySearch
          idField='id'
          items={vehicles}
          nameField='name'
          searchField='name'
       />
      </div>
    )
  }
})

ReactDOM.render(
  <VehicleListContainer vehicles={vehicleInfo} />,
  document.getElementById('app')
)
