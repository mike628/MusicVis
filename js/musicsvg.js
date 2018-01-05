var draw = SVG('drawing').size(1200, 300)
//var rect = draw.rect(100, 100).attr({ fill: '#f06' })
y=10;
var lines = ["E","G","B","D","G"];
for(var x= 0;x<5;x++)
{

    var Line = draw.line(0, y, 1200, y)
    Line.attr("id",lines[x])
    Line.style("padding","10px")
    Line.stroke({ color: 'black', width: 3, linecap: 'round'})
    Line.click(function() {
        this.stroke({ color: '#f06' })
    })
    y=y+25;

}
