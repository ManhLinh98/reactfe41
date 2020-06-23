import React, { Component } from "react";
import BtvnItem from "./BtvnItem";

export default class BtvnListItem extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-4">
          <BtvnItem />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BtvnItem />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BtvnItem />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <BtvnItem />
        </div>
      </div>
    );
  }
}
