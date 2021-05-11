const dev = {
  API: {
    URL: "http://localhost:4000"
  }
};

const prod = {
  API: {
    URL: "https://[prod-url].azurewebsites.net"
  }
};

const config = process.env.REACT_APP_ENV === 'production' ? prod : dev;
