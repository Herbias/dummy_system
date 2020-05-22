import MainLayout from "../Layouts/MainLayout";
import { connect, useSelector } from "react-redux";
import { Component } from "react";
import { FetchData } from "../utils/helper";
import { useState, useEffect } from "react";

const GetQueryData = (id) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if (id == 11) setData({ column: "accountname", name: "Accounts" });
    if (id == 19) setData({ column: "user_name", name: "Users" });
    if (id == 20) setData({ column: "groupname", name: "Groups" });
  }, []);
  return data;
};

const Cell = ({ id }) => {
  let credentials = useSelector((state) => state.credentials);
  let settings = useSelector((state) => state.settings);
  let queryData = GetQueryData(id.replace(/([x]\d).*/, ""));
  const [result, setResult] = useState("");
  const [cellData, setCellData] = useState("");

  useEffect(() => {
    setResult(
      `SELECT ${queryData.column} FROM ${queryData.name} WHERE id = ${id};`
    );
  }, [queryData]);

  useEffect(() => {
    FetchData("GET", settings.url, {
      operation: "query",
      sessionName: credentials.sessionName,
      query: result,
    }).then((res) => {
      setCellData(res.result);
    });
  }, [result]);
  return (
    <>
      <td className="border px-4 py-2">
        {cellData ? cellData[0][Object.keys(cellData[0])[0]] : ""}
      </td>
    </>
  );
};

const Row = ({ data }) => {
  return (
    <>
      {data.map((data, i) => {
        return (
          <tr key={i} id={data.id}>
            <td className="border px-4 py-2">
              {data.id.replace(/.(\d[x])/, "")}
            </td>
            <td className="border px-4 py-2">{data.ticket_no}</td>
            <td className="border px-4 py-2">{data.ticket_title}</td>
            <Cell id={data.parent_id} />
            <td className="border px-4 py-2">{data.ticketpriorities}</td>
            <td className="border px-4 py-2">{data.ticketstatus}</td>
            <Cell id={data.assigned_user_id} />
            <Cell id={data.modifiedby} />
          </tr>
        );
      })}
    </>
  );
};

class tickets extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    FetchData("GET", this.props.settings.url, {
      operation: "query",
      sessionName: this.props.credentials.sessionName,
      query: `SELECT id, ticket_no, ticket_title, parent_id, ticketpriorities, ticketstatus,assigned_user_id, modifiedby  FROM HelpDesk;`,
    }).then((res) => {
      this.setState({ list: res.result });
    });
  }
  render() {
    return (
      <MainLayout>
        <div className="p-4 shadow rounded bg-white">
          <h1>Tickets</h1>
          <div className="flex">
            <div>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Number</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Organization</th>
                    <th className="px-4 py-2">Priority</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Assigned To</th>
                    <th className="px-4 py-2">Modified By</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.list && <Row data={this.state.list} />}
                </tbody>
              </table>
            </div>
            <div className="shadow rounded p-4 ml-2">
              <h1>Add new record</h1>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    credentials: state.credentials,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(tickets);
