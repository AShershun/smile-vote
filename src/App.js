import React from 'react';
import './App.css';

import SmileVote from './components/SmileVote';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <SmileVote />
        </>
    );
  }
}
export default App;
