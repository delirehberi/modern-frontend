var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return <div className="header">Merhaba webpack!</div>
  }
}

ReactDOM.render(
    <App/>, document.getElementById("app")
    )
