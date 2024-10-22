const { createServer } = require("node:http");

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    const today = new Date();
    const content = `
    <h1>Sever Side</h1>
    <p>${today.toISOString()}</p>
    `;
    res.end(content);
});

server.listen(3000, "localhost", () => {
    console.log("Server running is 3000. Press Ctrl + C to stop");
});

