var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <h1>*Sigh*</h1>
      </div>
    );
  }
});

var Info = React.createClass({
  render: function() {
    return (
      <div className="container">
        <p>This is the last page.. should we kiss?</p>
      </div>
    );
  }
});

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div className="container">
//         <a href="/next" type="submit" id="next">
//           <span className="glyphicon glyphicon-menu-left pull-left" aria-hidden="true"></span>
//         </a>
//         <a href="/" type="submit" id="next">
//           <span className="glyphicon glyphicon-menu-right pull-right" aria-hidden="true"></span>
//         </a>
//       </div>
//     );
//   }
// });

var Last = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Info />
      //  <Nav />
      </div>
    );
  }
});

module.exports = Last;
