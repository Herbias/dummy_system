import { Component } from "react";

class SettingsModal extends Component {
  state = {
    user: "",
    accessKey: "",
    url: "",
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case "URL":
        this.setState({ ...this.state, url: e.target.value });
        break;
      case "accesskey":
        this.setState({ ...this.state, accessKey: e.target.value });
        break;
      case "username":
        this.setState({ ...this.state, user: e.target.value });
        break;
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="w-screen flex flex-col items-center justify-center absolute text-white">
        <div className="w-2/4 p-4 shadow rounded-t-lg bg-teal-300">
          <h1 className="text-lg">Settings</h1>
        </div>
        <div className="flex-col items-center w-2/4 p-4 shadow rounded-b-lg bg-white">
          <form>
            <p className="text-sm mb-2 text-gray-600">URL</p>
            <input
              className="bg-white text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="URL"
              onChange={this.handleChange}
            />
            <p className="text-sm mb-2 text-gray-600">Username</p>
            <input
              className="bg-white text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              name="username"
              onChange={this.handleChange}
            />
            <p className="text-sm mb-2 text-gray-600">Access Key</p>
            <input
              className="bg-white text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-2 block w-full appearance-none leading-normal"
              name="accesskey"
              onChange={this.handleChange}
            />
            <label className="text-sm mb-2 text-gray-600 flex items-center">
              Save Settings?&nbsp;
              <input type="checkbox" className="leading-tight" />
            </label>

            <div className="flex justify-end mt-2">
              <button
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  this.props.SetSettings({
                    url: this.state.url,
                    user: this.state.user,
                    accessKey: this.state.accessKey,
                  })
                }
              >
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SettingsModal;
