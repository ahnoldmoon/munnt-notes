import React, { Component } from 'react';
// import client from "./clientState"; //이걸 해줘야 에러가 안날때가 있음
import { Query } from "react-apollo";
import { GET_NOTES } from "./queries";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_NOTES}>{() => null}</Query>
      </div>
    );
  }
}

export default App;
