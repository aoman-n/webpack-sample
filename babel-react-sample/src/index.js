import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <React.Fragment>
      <h1>Hello Webpack, React, Babel</h1>
      <p>これでReactの環境構築をマスター</p>
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)