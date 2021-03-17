import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpaceXLaunch from './components/spacexlaunch.js';

//api call default https://api.spacexdata.com/v3/launches?limit=100

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      launches: undefined
    };
    this.getLaunches();
  }

  getLaunches = async() => {
    const api_call = await fetch(`https://api.spacexdata.com/v3/launches?limit=100`);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      launch_data: JSON.parse(response)
    });
    this.forceUpdate();
  }

  render() {

    //launches
    const launches = this.state.launch_data;
    console.log(launches);

    return(
      <div className="page">
        <h3>SpaceX Launch Programs</h3>
        <div className="row">
          <div className="col-3 launch-menu">
              <h4 style={{textAlign: "left"}}>Filters</h4>

              
              <div className="launch-year">
                  <span className="filter-choice">Launch Year</span>
                  <hr className="filter-bar"/>
                  <div className="btn-group">
                    <button className="button">2006</button>
                    <button className="button">2007</button>
                    <br/>
                    <button className="button">2008</button>
                    <button className="button">2009</button>
                    <br/>
                    <button className="button">2010</button>
                    <button className="button">2011</button>
                    <br/>
                    <button className="button">2012</button>
                    <button className="button">2013</button>
                    <br/>
                    <button className="button">2014</button>
                    <button className="button">2015</button>
                    <br/>
                    <button className="button">2016</button>
                    <button className="button">2017</button>
                    <br/>
                    <button className="button">2018</button>
                    <button className="button">2019</button>
                    <br/>
                    <button className="button">2020</button>
                    <button className="button">2021</button>
                  </div>
              </div>

              <div className="launch-success">
                  <span className="filter-choice">Successful Launch</span>
                  <hr className="filter-bar"/>
                  <div className="btn-group">
                    <button className="button">True</button>
                    <button className="button">False</button>
                  </div>
              </div>

              <div className="landing-success">
                  <span className="filter-choice">Successful Landing</span>
                  <hr className="filter-bar"/>
                  <div className="btn-group">
                    <button className="button">True</button>
                    <button className="button">False</button>
                  </div>
              </div>
              
          </div>
          <div className="col-9">
              <div className="row">
                {
                  launches.map(launch => {
                    return <SpaceXLaunch
                              launch_image={launch.links.mission_patch_small}
                              launch_name={launch.mission_name}
                              mission_id={launch.flight_number}
                              launch_year={launch.launch_year}
                              launch_success={launch.launch_success}/>;
                  })
                }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
