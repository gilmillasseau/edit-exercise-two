export default {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  },

  props: (result) => {
    return { ...result.data.project };
  }
};
