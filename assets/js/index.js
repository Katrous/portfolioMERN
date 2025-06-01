
document.addEventListener('DOMContentLoaded', checkScreenSize);

function checkScreenSize(){
  let query = window.matchMedia("(max-width: 700px)");
  if(query.matches) {
    document.querySelector("#d3-container").style.display = "none";
  } else {
    const data = [
      {skill: 'Javascript', score: 90},
      {skill: 'CSS3/SCSS', score: 80},
      {skill: 'HTML5', score: 90},
      {skill: 'Node.js', score: 70},
      {skill: 'PHP', score: 60},
      {skill: 'Wordpress', score: 60}
  ];
  
  const width = 800;
  const height = 400;
  const margin = { top: 50, bottom: 50, left: 50, right:50};
  
  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand().domain(d3.range(data.length)).range([margin.left, width - margin.right]).padding(0.1);
  const y = d3.scaleLinear().domain([0, 100]).range([height-margin.bottom, margin.top]);
  
  svg.append('g').attr('fill', "#775A47").selectAll('rect').data(data.sort((a, b) => d3.descending(a.score, b.score))).join('rect').attr('x', (d, i) => x(i))
  .attr('y', (d) => y(d.score)).attr('height', d => y(0) - y(d.score)).attr('width', x.bandwidth());
  
  function xAxis(g) {
      g.attr("transform", `translate(0,${height - margin.bottom})`)
      g.call(d3.axisBottom(x).tickFormat(i => data[i].skill))
      .attr("class", 'd3Graph');
  }
  
  function yAxis(g) {
      g.attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).ticks(null, data.format))
        .attr("class", 'd3Graph');
    }
  
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
  svg.node();
  
  function checkScreenSize(){
    let query = window.matchMedia("(max-width: 600px)");
    console.log(query);
    if(query.matches) {
      document.querySelector("#d3-container").style.display = "none";
    }
  }
  }
}

