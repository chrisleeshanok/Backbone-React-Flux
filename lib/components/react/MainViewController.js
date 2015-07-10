var React = require('react');

var MainViewController = React.createClass({
    showAlert: function () {
        alert('Alert!');
    },

    render: function () {
        return (
            <div onClick={this.showAlert}>
                I AM THE MAIN VIEW CONTROLLER. TREMBLE BEFORE ME
            </div>
        );
    }
});

module.exports.MainViewController = MainViewController;
