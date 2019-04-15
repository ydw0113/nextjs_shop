import { Query } from "react-apollo";
import { withRouter } from "next/router";
import CategoryPresenter from "./categoryPresenter";
import { CATEGORY_QUERY } from "./categoryQueries";

class CategoryContainer extends React.Component {
  static async getInitialProps(props) {
    console.log(props);
    const {
      query: { name }
    } = props;
    return {
      name
    };
  }
  render() {
    const { name } = this.props;
    return (
      <Query query={CATEGORY_QUERY} variables={{ name }}>
        {({ data }) => <CategoryPresenter data={data} />}
      </Query>
    );
  }
}

export default withRouter(CategoryContainer);
