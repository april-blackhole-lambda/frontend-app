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
                days_to_destruct={blackhole.days_to_destruct}
                key={blackhole.id}
                deletePost={blackhole.deletePost}
                updateblackholes={blackhole.updateblackholes}
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

export default Blackholes;
