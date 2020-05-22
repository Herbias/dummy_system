const SetSettings = (data) => {
  // console.log(data);
  return {
    type: "SET_SETTINGS",
    payload: {
      url: data.url,
      user: data.user,
      accessKey: data.accessKey,
    },
  };
};

const SetCredential = (data) => {
  return {
    type: "SET_CREDENTIAL",
    payload: data,
  };
};

const SetUserInfo = (data) => {
  return {
    type: "SET_USERINFO",
    payload: data,
  };
};

export { SetSettings, SetCredential, SetUserInfo };
