// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     // GET 요청으로 "/" 경로에 접근할 경우 index.html 파일을 읽어서 회원가입 폼을 반환
//     fs.readFile("public/index.html", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   } else if (req.method === "POST" && req.url === "/register") {
//     // POST 요청으로 "/register" 경로에 접근할 경우 회원정보를 받아서 처리
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       const userInfo = JSON.parse(body);
//       // 받아온 회원정보를 파일로 저장
//       fs.writeFile("users.json", JSON.stringify(userInfo), (err) => {
//         if (err) {
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end("Internal Server Error");
//           return;
//         }
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "회원가입이 완료되었습니다." }));
//       });
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });

//404error 경로 확인 중

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});