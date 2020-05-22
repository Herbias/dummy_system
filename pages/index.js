import { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "../Layouts/MainLayout";
import UserInformation from "../components/UserInformation";

class Index extends Component {
  state = {
    message: {
      style: "text-red-500",
      str: "It seems web services is not configure correctly",
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userInfo != this.props.userInfo)
      this.setState({
        message: {
          style: "text-green-500",
          str: "Welcome to VTiger Web Services",
        },
      });
  }

  render() {
    return (
      <MainLayout>
        <div className="p-4 shadow rounded bg-white">
          <h1 className={this.state.message.style + " leading-normal mb-2"}>
            {" "}
            {this.state.message.str}
          </h1>
          {this.props.credentials.userId != "" && <UserInformation />}
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

export default connect(mapStateToProps)(Index);
