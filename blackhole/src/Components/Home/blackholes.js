import React, { Component } from 'react';

import Blackhole from './Blackhole';

class Blackholes extends Component {
  render() {
    return (
      <div className="BlackHole">
        <h1>BlackHole</h1>
        <ul>
          {this.props.blackholes.map(blackhole => {
            return (
              <Blackhole
                title={blackhole.title}
                id={blackhole.id}
                category={blackhole.category}
                description={blackhole.text}
                key={blackhole.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Blackhole.defaultProps = {
 blackholes: [],
};

export default blackholes;
