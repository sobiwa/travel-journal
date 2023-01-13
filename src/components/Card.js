import React from 'react';
import mark from '../assets/marker.png';

function LocationDetails(props) {
  return (
    <div className="location-details">
      <div className="location--row1">
        <img src={mark} height='12px' alt="location marker icon" />
        <span className="location--region">{props.location}</span>
        <a className="location--maps-link" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
      </div>
      <h1 className="location--title">{props.title}</h1>
    </div>
  );
}

function CalculateDistance(props) {
  return (
  <div className="track--distance">
    <div>{`${props.num} kilometers`}</div>
    <div className='gray'>{`(${Math.round(props.num * 0.62137)} miles)`}</div>
  </div>
  )
}

function TrackDetails(props) {
  return (
    <div className="track-details">
      <CalculateDistance num={props.distance} />
      <div className='track--row2'>
        <div className='track--duration'>{props.duration}</div>
        <div className='track--type'>{props.type}</div>
      </div>
      <div className='track--grade'>{props.difficulty}</div>
      <p>{props.description}</p>
    </div>
  );
}

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} width='200px' alt="location" />
      <div className="info">
        <LocationDetails {...props} />
        <TrackDetails {...props} />
      </div>
    </div>
  );
}
