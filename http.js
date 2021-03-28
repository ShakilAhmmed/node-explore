const http = require("http")

const server = http.createServer((request,response)=>{
    console.log(request.url)
    response.end("Hello");
});

server.listen(8080,()=>{
    console.log("Server From 8080")
})