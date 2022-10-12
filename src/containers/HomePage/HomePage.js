import React, { Component } from "react";

import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return <span>hello</span>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
