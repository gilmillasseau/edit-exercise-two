import React, { Component } from "react";
import { graphql } from 'react-apollo';
import ProjectDetailQuery from './graphql/query';
import ProjectDetailQueryOptions from './graphql/options';

class ProjectDetail extends Component {
  render() {
    return (
        <div>
          <div>{this.props.title}</div>
        </div>
    );
  }
}

export default graphql(ProjectDetailQuery, ProjectDetailQueryOptions)(ProjectDetail);
