import React from 'react';

const Blackhole = props => {
  return (
    <div className="Blackhole">
      <h3>{props.title}</h3>
      <strong>{props.category} tall</strong>
      <p>{props.description} Tell the blackhole anything</p>
    </div>
  );
};

Blackhole.defaultProps = {
  title: '',
  text: '',
  category: ''
};

export default Blackhole;

