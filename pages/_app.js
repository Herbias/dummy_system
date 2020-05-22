import "../styles/index.css";

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createStore } from "redux";
import { wrapper } from "../redux/reducer";
import App from "next/app";

// const store = () => {
//   return createStore(reducer);
// };

// const MyApp = ({ Component, pageProps, store }) => {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
