import React from 'react';
import Nav from './components/Nav';
import Card from './components/Card';
import Foot from './components/Foot';
import data from './data';

export default function App() {
  return (
    <div>
      <Nav />
      <div className="main">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
      <Foot />
    </div>
  );
}
