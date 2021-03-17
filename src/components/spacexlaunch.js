import React from 'react';

const SpaceXLaunch = props => {
	return(
		<div className="col-3">
            <div className="launch-card">
              <img src={props.launch_image} style={{width: "100%"}} alt="SpaceXLaunch" /> 
              <h3 className="title">{props.launch_name}</h3>
              <p><span className="sub-title">Mission ID: </span><span className="content">{props.mission_id}</span></p>
              <p><span className="sub-title">Launch Year: </span><span className="content">{props.launch_year}</span></p>
              <p><span className="sub-title">Successful Launch: </span><span className="content">{props.launch_success}</span></p>
              <p><span className="sub-title">Successful Landing: </span><span className="content">NA</span></p>
            </div>
        </div>
	);
}

export default SpaceXLaunch;