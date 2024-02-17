const apiEndPoint = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
const fetchData = fetch(apiEndPoint).then(response => response.json());
const tbody = document.querySelector("tbody");


function createTableRow(year,population){
    let tr = document.createElement("tr");
    let tdYear = document.createElement("td");
    let tdPopulation = document.createElement("td");
    tdYear.appendChild(document.createTextNode(year))
    tr.appendChild(tdYear);
    tdPopulation.appendChild(document.createTextNode(population))
    tr.appendChild(tdPopulation);
    tbody.appendChild(tr);
}


fetchData.then(data => {
    console.log(data.data, typeof data.data)
    for(var i = 8; i > -1 ; i--){
        createTableRow(data.data[i].Year, data.data[i].Population);
    }
});
