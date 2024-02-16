const apiEndPoint = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
const fetchData = fetch(apiEndPoint).then(response => response.json())

fetchData.then(data => {
    console.log(data.data, typeof data.data)
    document.getElementById("2013").innerHTML = data.data[8].Year
    document.getElementById("2014").innerHTML = data.data[7].Year
    document.getElementById("2015").innerHTML = data.data[6].Year
    document.getElementById("2016").innerHTML = data.data[5].Year
    document.getElementById("2017").innerHTML = data.data[4].Year
    document.getElementById("2018").innerHTML = data.data[3].Year
    document.getElementById("2019").innerHTML = data.data[2].Year
    document.getElementById("2020").innerHTML = data.data[1].Year
    document.getElementById("2021").innerHTML = data.data[0].Year

    document.getElementById("2013-population").innerHTML = data.data[8].Population
    document.getElementById("2014-population").innerHTML = data.data[7].Population
    document.getElementById("2015-population").innerHTML = data.data[6].Population
    document.getElementById("2016-population").innerHTML = data.data[5].Population
    document.getElementById("2017-population").innerHTML = data.data[4].Population
    document.getElementById("2018-population").innerHTML = data.data[3].Population
    document.getElementById("2019-population").innerHTML = data.data[2].Population
    document.getElementById("2020-population").innerHTML = data.data[1].Population
    document.getElementById("2021-population").innerHTML = data.data[0].Population
});
