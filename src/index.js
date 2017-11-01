const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const net = require('os');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.write('Hesus ');
    var ifaces = net.networkInterfaces();
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                res.write(iface.address + ' ');
            } else {
                // this interface has only one ipv4 adress
                res.write(iface.address + ' ');
            }
            ++alias;
        });
    });
    res.end();
});

server.listen(port, hostname, () => {
    console.log('server started on port ' + 3000);
    console.log('http://' + hostname + ':' + port);
});