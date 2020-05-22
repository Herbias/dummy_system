import { Component } from "react";
import Navigation from "../components/Navigation";
import SettingsModal from "../components/SettingsModal";
import { connect } from "react-redux";
import md5 from "md5";

import { SetSettings, SetCredential, SetUserInfo } from "../redux/action";

class MainLayout extends Component {
  state = {
    showModal: false,
    accessKey: "",
  };

  showModal = () => {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal,
      accessKey: "",
    });
  };

  createSettings = (data) => {
    this.setState({ ...this.state, showModal: !this.state.showModal });
    this.props.SetSettings(data);
  };

  getChallenge() {
    let a = FetchData("GET", this.props.settings.url, {
      operation: "getchallenge",
      username: this.props.settings.user,
    }).then((res) => {
      if (res.success) {
        this.getCredential(
          md5(res.result.token + this.props.settings.accessKey)
        );
        // this.setState({
        //   ...this.state,
        //   accessKey: md5(res.result.token + this.props.settings.accessKey),
        // });
      }
    });
  }

  getCredential(accessKey) {
    let a = FetchData("POST", this.props.settings.url, {
      operation: "login",
      username: this.props.settings.user,
      accessKey: accessKey,
    }).then((res) => {
      if (res.success)
        this.props.SetCredential({
          sessionName: res.result.sessionName,
          userId: res.result.userId,
        });
    });
  }

  getUserInfo() {
    let a = FetchData("GET", this.props.settings.url, {
      operation: "query",
      sessionName: this.props.credentials.sessionName,
      query: `SELECT user_name, first_name, last_name FROM Users WHERE id = ${this.props.credentials.userId};`,
    }).then((res) => {
      if (res.success) {
        this.props.SetUserInfo(res.result[0]);
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.settings !== this.props.settings) {
      this.getChallenge();
    }

    if (prevProps.credentials !== this.props.credentials) {
      this.getUserInfo();
    }
  }

  render() {
    return (
      <>
        <Navigation Show={this.showModal} />
        {this.props.children}
        {this.state.showModal && (
          <SettingsModal SetSettings={this.createSettings} />
        )}
      </>
    );
  }
}

let FetchData = (method, url, data) => {
  return new Promise((resolve, reject) => {
    switch (method) {
      case "GET":
        fetch(url + `/webservice.php?${encodeFormData(data)}`, {
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
            Mode: "no-cors",
          },
        })
          .then((res) => {
            try {
              if (res.ok) return res.json();
            } catch (err) {
              console.warn(e);
            }
          })
          .then((data) => {
            resolve(data);
          });
        break;
      case "POST":
        let body = encodeFormData({
          operation: "login",
          username: data.username,
          accessKey: data.accessKey,
        });

        fetch(url + `/webservice.php`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body,
        })
          .then((res) => {
            try {
              if (res.ok) return res.json();
            } catch (err) {
              console.warn(e);
            }
          })
          .then((data) => {
            resolve(data);
          });
        break;
    }
  });
};

const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const mapDispatchToProps = { SetSettings, SetCredential, SetUserInfo };

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    credentials: state.credentials,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
