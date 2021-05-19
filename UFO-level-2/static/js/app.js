// from data.js
var tableData = data;
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // Clear out any existing data
  tbody.html("");
  // Loop through each item in the data and append it to each row in the table
  data.forEach((dataRow) => {
    // Append a row to the table body (tbody)
    var row = tbody.append("tr");
    // Loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}



// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);


// Keep Track of all filters, make a dict
var filters = {};

function updateFilters() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Save the element, value, and id of the filter that was changed using "this"
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value to the filters dict. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  console.log(filterId);
  console.log(elementValue);
  console.log(filters);
  // Pass to filterTable() function to apply all filters and rebuild the table
  filterTable();
}



function filterTable() {
  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that matches the filter values. filters is a dict generated above used as the filter criteria here. 
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(rowtiger => rowtiger[key] === value);
  });
  // Finally, rebuild the table using the filteredData
  buildTable(filteredData);
}



// Build the table when the page loads
buildTable(tableData);