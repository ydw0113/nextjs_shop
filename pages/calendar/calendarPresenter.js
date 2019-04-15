import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { DatePicker, TimePicker, Calendar, Badge } from "antd";
import { Layout, Alert, Input } from "antd";
import CartButton from "../../components/CartButton";
import { CALENDAR_QUERY } from "./calendarQueries";
import moment from "moment";
import "moment/locale/ko";
moment.locale("ko");

const format = "HH:mm";

const { Content } = Layout;

export default class extends React.Component {
  state = { value: [], dateString: "", searchTerm: "" };

  onChange = (value, dateString) => {
    this.setState({ value: JSON.stringify(value) });
    this.setState({ dateString: JSON.stringify(dateString) });
    this.setState({ searchTerm: value });
  };

  render() {
    return <Query query={CALENDAR_QUERY} variables={{ searchTerm }} />;
  }

  render() {
    return (
      <>
        <Head>
          <title>Home | ShoppingMall</title>
        </Head>
        <Header
          centerColumn={<h4>ShoppingMall</h4>}
          rightColumn={<CartButton />}
          leftColumn={<Button href="/search" text="Search" />}
        />
        <div>
          <Alert message={this.state.value} />
        </div>
        <Content style={{ padding: "0 50px" }}>
          <div>
            <br />
            <DatePicker onChange={this.onChange} />
            <br />
            <br />
            <TimePicker
              defaultValue={moment("12:08", format)}
              format={format}
              onChange={this.onChange}
            />
            {this.props.data &&
              this.props.data.reservations.map(reservation => (
                <ProductCard
                  key={reservation.id}
                  id={reservation.id}
                  name={reservation.ondate}
                />
              ))}
            <br />
            <br />
            <br />
            <br />
            <div
              style={{
                padding: "42px 24px 50px",
                color: "rgba(0,0,0,0.65)",
                border: "1px solid #ebedf0"
              }}
            >
              <Calendar
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
              />
            </div>
          </div>
        </Content>
        <Button href="/" text="Home" />
      </>
    );
  }
}

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "방문상담" },
        { type: "success", content: "예약" }
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "방문상담" },
        { type: "success", content: "예약" },
        { type: "error", content: "예약불가" }
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "방문상담" },
        { type: "success", content: "예약" },
        { type: "error", content: "예약불가" }
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}
