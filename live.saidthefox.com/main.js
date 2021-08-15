
var express = require('express');
var app = express();
var http = require ('http').Server(app);
var io = require('socket.io')(http);
var os = require('os-utils');

app.use(express.static('html'));

var cpuHistogram = [];
var histogramLength = 61;
var interval = 1000;



http.listen(3001, function(){

    for(var i = 0; i < histogramLength; i++){
        cpuHistogram[i] = [i,0];
    }

    setInterval(function(){

        os.cpuUsage(function(value){
            updateCpuHistogram(Math.round(value * 100));
            io.emit('cpu histogram', cpuHistogram);
        });


    }, interval);

});

app.get('/', function (req, res) {
    res.sendFile("/usr/app/html/cpumonitor.html");
})

function updateCpuHistogram(cpuLoad) {
    if(cpuHistogram.length >= histogramLength)
        cpuHistogram.shift();

    cpuHistogram.push([0, cpuLoad]);

    for(var i = 0; i < histogramLength; i++)
        cpuHistogram[i][0] = i;
}
