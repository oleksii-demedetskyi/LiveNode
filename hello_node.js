var http = require('http');
var messages = [];

function main = function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    if(res.url == '/')
    {
        res.write(messages.join("\n"));
    }
    else if (req.url !== '/favicon.ico')
    {
        var message = decodeURIComponent(req.url.substr(1));
        messages.push(message);
        console.log('Recieve message: '+message);
        res.write(messages.join("\n"));
        res.write('ok');
    }
    res.end();
}

http.createServer(main).listen(4000,"127.0.0.1");
console.log('Server running at http://127.0.0.1:4000');
