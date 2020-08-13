// from data.js
var tableData = data;

// YOUR CODE HERE!
//Grab handles

var tbody = d3.select('tbody')
var button = d3.select('#filter-btn')
var dateEnter = d3.select('#datetime')
var columnheaders = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Populate the table with data
tableData.forEach(row => {
    var newRow = tbody.append("tr");
		
        newRow.append("td").text(row.datetime)
        newRow.append("td").text(row.city)
        newRow.append("td").text(row.state)
        newRow.append("td").text(row.country)
        newRow.append("td").text(row.shape)
        newRow.append("td").text(row.durationMinutes)
        newRow.append("td").text(row.comments)
});	


function filterTable () {
    d3.event.preventDefault();
    var inputElement = dateEnter.property('value')
    var f_table = tableData.filter(item => inputElement === item.datetime)
    tbody.html("")
    f_table.forEach(row => {
        var newRow = tbody.append("tr");
            
            newRow.append("td").text(row.datetime)
            newRow.append("td").text(row.city)
            newRow.append("td").text(row.state)
            newRow.append("td").text(row.country)
            newRow.append("td").text(row.shape)
            newRow.append("td").text(row.durationMinutes)
            newRow.append("td").text(row.comments)
    });	
console.log(d3.event)

}

button.on("click", filterTable)

