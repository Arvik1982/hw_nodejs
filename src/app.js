const http = require('http');
const { URL } = require('url'); 
const getUsers= require('./modules/users')


const server = http.createServer((request,response)=>{
const url = new URL(request.url, 'http://127.0.0.1:3000'); 
const helloValue = url.searchParams.get('hello');
const urlSearch = url.search
const pathName = url.pathname
const searchParameters = url.searchParams

if(request.url === '/?users')
{
    response.status = 200;
    response.statusMessage = "OK";
    response.header ="Content-Type: application/json";
    response.write(getUsers())
    response.end() 
    return;
}


if (helloValue!==null & urlSearch!=='?hello=')
{
    console.log(`1_${searchParameters}`)
    response.status = 200;
    response.statusMessage = "OK";
    response.header ="Content-Type: text/plain";
    response.write(`hello_${helloValue}`)
    response.end();
    console.log(helloValue);
    return;
}


if(urlSearch === '?hello=')
{
    console.log(`2_${searchParameters}`)
    response.statusMessage = "OK";
    response.header ="Content-Type: text/plain";
    response.status = 400;
    response.write('Enter NAME') 
    response.end()  
    return;

}

if(helloValue === null)
console.log(`3_${searchParameters}`)

{
    if(urlSearch!=='?hello=')
    {

        console.log(url)
        response.statusMessage = "err";
        response.header ="Content-Type: text/plain";
        response.status = 500;
        response.write('ERR') 
        response.end()  
        return;
    }

    
    response.statusMessage = "OK";
    response.header ="Content-Type: text/plain";
    response.status = 200;
    response.write('hello world') 
    response.end()  
    return;
}




});

server.listen(3000, ()=>{
    console.log("Сервер запущен по адресу http://127.0.0.1:3000")
})