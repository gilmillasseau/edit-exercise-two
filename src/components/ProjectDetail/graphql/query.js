import gql from "graphql-tag";

export default gql`
    query GetProjectById($id: ID!) {
        project:Project(id: $id) {
            id
            description
            title
            projectImages {
                url
                id
                fileName
            }
        }
    }
`;
