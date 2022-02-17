const http = require("http");

const routeHandler = (req, res) => {
  const method = req.method;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Login</title></head>");
    res.write(
      '<body><h1>UserName: </h1><form action="/users" method="POST"><input type="text" name="username"><button type="submit">Submit</button></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/users" && method === "POST") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body><h1>Welcome</h1></body>");
    return res.end();
  }
};

module.exports = routeHandler;
