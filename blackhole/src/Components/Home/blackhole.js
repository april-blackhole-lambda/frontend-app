import React from 'react';

const Blackhole = props => {
  return (
    <div className="Blackhole">
      <h3>{props.title}</h3>
      <strong>{props.category} Subject</strong>
      <p>{props.text} Tell the blackhole anything</p>
    </div>
  );
};

Blackhole.defaultProps = {
  title: '',
  text: '',
  category: '',
  days_to_destruct: ''
};

render () {
  
}

export default Blackhole;

