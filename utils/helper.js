const FetchData = (method, url, data) => {
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

export { FetchData };
