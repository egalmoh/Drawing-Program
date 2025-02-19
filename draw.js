const svg = d3.select('#svg');
let drawing = false;
let prevCoords = null;

function draw_point() {
    const coords = d3.mouse(this);
    if (!drawing) 
        return;
    
    let size = document.querySelector('#size').value;
    let color = document.querySelector('#color').value;

    svg.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', size)
        .attr('fill', color);

    if (prevCoords) {
        svg.append('line')
            .attr('x1', prevCoords[0])
            .attr('y1', prevCoords[1])
            .attr('x2', coords[0])
            .attr('y2', coords[1])
            .attr('stroke', color)
            .attr('stroke-width', size * 2 );
    }

    prevCoords = coords;
}

svg.on('mousemove', draw_point);

svg.on('mousedown', () => {
    drawing = true;
    prevCoords = null;
});

svg.on('mouseup', () => {
    drawing = false;
    prevCoords = null;
});

document.querySelector('#clear').addEventListener('click', () => {
    svg.selectAll('*').remove()
});