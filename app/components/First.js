var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>Reactron</h1>
      </div>
    )
  }
});

var Info = React.createClass({
  render: function() {
    return (
      <div className="container">
        <p>Wubba lubba dub dub!</p>
      </div>
    )
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div className="container">
        <a href="#/" type="submit" id="back">
          <span className="glyphicon glyphicon-menu-left pull-left" aria-hidden="true"></span>
        </a>
        <a href="#/next" type="submit" id="next">
          <span className="glyphicon glyphicon-menu-right pull-right" aria-hidden="true"></span>
        </a>
      </div>
    )
  }
});

var First = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Info />
        <Nav />
      </div>
    )
  }
});

module.exports = First;
