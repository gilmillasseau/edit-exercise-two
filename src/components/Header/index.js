import React, { Component } from "react";
import { graphql } from "react-apollo/index";

import HeaderQuery from "./graphql/query";
import HeaderQueryOptions from "./graphql/options";

import "./styles.css";

class Header extends Component {
  static defaultProps = {
    name: "",
    description: "",
    photo: {
      url: ""
    },
    linkedInUrl: "",
    facebookUrl: "",
    twitterUrl: ""
  };

  render() {
    const {
      name,
      photo,
      description,
      twitterUrl,
      facebookUrl,
      linkedInUrl
    } = this.props;

    return (
      <header>
        <div className={"header-container"}>
          <img src={null} alt={""} className="header-photo" />
          <h1>My Name</h1>
          <p>My Description</p>
          <div className={"header-social-container"}>
            <a href={twitterUrl} target="_blank">
              <i className="fab fa-twitter" /> Twitter
            </a>
            <a href={facebookUrl} target="_blank">
              <i className="fab fa-facebook-f" /> Facebook
            </a>
            <a href={linkedInUrl} target="_blank">
              <i className="fab fa-linkedin-in" /> LinkedIn
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default graphql(HeaderQuery, HeaderQueryOptions)(Header);
