import { Query } from "react-apollo";
import CalendarPresenter from "./calendarPresenter";
import { CALENDAR_QUERY } from "./calendarQueries";

export default class extends React.Component {
  state = {
    searchTerm: ""
  };
  render() {
    const { searchTerm } = this.state;
    return (
      <Query query={CALENDAR_QUERY} variables={{ searchTerm }}>
        {({ data }) => (
          <CalendarPresenter
            searchTerm={searchTerm}
            updateSearchTerm={this._updateSearchTerm}
            data={data}
          />
        )}
      </Query>
    );
  }
  _updateSearchTerm = () => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };
}
