import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import List from './List';
import Header from './Header';
import ebi from './images/ebi.jpg';

// class App extends React.Component {
//   render() {
//     return (
//       <div styleName='root'>
//         <h1>Hello Webpack!!testseee</h1>
//       </div>
//     )
//   }
// }

function App() {
  return (
    <div>
      <Header />
      <List />
      <img src={ebi} />
    </div>
  )
}

export default CSSModules(App, styles, { allowMultiple: true });