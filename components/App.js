var React = require("react");

var App = React.createClass({

  getInitialState: function() {
    return {
      title: title    // this title is from the global set in index.ejs
    };
  },

  render: function() {
    return (
      <div>
        <h1>{this.state.title}</h1>

        Hey there, don't you love {this.state.title}?
      </div>
    );
  }
});


React.render(<App />, document.body);
