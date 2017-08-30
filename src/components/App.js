import React, {Component} from 'react';
import '../styles/App.css';
class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
constructor(props){
  super(props);
  this.state = {
    vehicles: [],
    value: '',
    pilot: ''
  }
}
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
 handleNameChange = (e) =>{
   this.setState({
     value: e.target.value
   })
 }
  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleFormSubmit = (e) =>{
    e.preventDefault()
    this.setState ({
      pilot: this.state.value,
      value: ''
    })
  }
  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount(){
    var url ='https://swapi.co/api/vehicles/'
    fetch(url)
      .then(response => {
          return response.json();
      })
      .then(data => {
          this.setState({vehicles:data.results});
      })
  }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:
  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    return (
      <div className="App">
        <div className="wrapper">
          <div className="jumbotron">
            <h1>Star Wars</h1>
            <p>The Vehicles of Star Wars</p>
          </div>
            <div className="jumbotron">
              <div className="form">
                  <form onSubmit={this.handleFormSubmit}>
                    <h3>State your name, pilot?</h3>
                    <input type="text" placeholder="Well?" onChange={this.handleNameChange} name="name" id="pilot"/><br />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    <p>{this.state.pilot}</p>
                  </form>
              </div>
            </div>
          <div className="container">
                  {this.state.vehicles.map(item => (
                    <div className="card">
                      <div className="card-block">
                        <div className="card-wrapper" key={item.name}>
                          <h4 className="card-title">Vehicle: {item.name}</h4>
                          <div>Model: {item.model}</div>
                            <div>Specs;</div>
                            <div>Manufacturer: {item.manufacturer}</div>
                            <div>Class: {item.vehicle_class}</div>
                            <div>Passengers: {item.passengers}</div>
                            <div>Crew: {item.crew}</div>
                            <div>Length: {item.length}</div>
                            <div>Max Speed: {item.max_atmosphering_speed}</div>
                            <div>Cargo Capacity: {item.cargo_capacity}</div>
                        </div>
                      </div>
                    </div>
                ))}
          </div>
        </div>
      </div>
        );
      }
}
export default App;
