// This is method 1, the basic method 


// This is the basic method to build up a table
// from data.js
var tableData = data;
// get table references
let tbody = d3.select("tbody");

function buildTable(data) {
  // Clear out any existing data
  tbody.html("");

  // Loop through each item in the data list and append it to each row in the table
  data.forEach(function(elt) {
    let nextRow = tbody.append("tr");

    nextRow.append("td").text(elt["datetime"]);
    nextRow.append("td").text(elt["city"]);
    nextRow.append("td").text(elt["state"]);
    nextRow.append("td").text(elt["country"]);
    nextRow.append("td").text(elt["shape"]);
    nextRow.append("td").text(elt["durationMinutes"]);
    nextRow.append("td").text(elt["comments"]);
  });
}



// Attach an event to listen for the actual filter button on HTML and pass the handleClick function to its definition below
d3.selectAll("#filter-btn").on("click", handleClick);

function handleClick() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from html
  let date = d3.select("#datetime").property("value");
  console.log(date);

  let filteredData = tableData.filter(function(person) {
    if(person["datetime"] === date) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredData);

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Build the table when the page loads
buildTable(tableData);





// // This is method 2, the more advanced method, faster for building a table with many columns

// // from data.js
// var tableData = data;
// // get table references
// let tbody = d3.select("tbody");

// function buildTable(data) {
//   // Clear out any existing data
//   tbody.html("");
//   // Loop through each item in the data list and append it to each row in the table
//   data.forEach((dataRow) => {
//     // Append a row to the table body (tbody)
//     let nextRow = tbody.append("tr");
//     // Loop through each field in the dataRow and add each value as a table cell (td)
//     Object.values(dataRow).forEach((val) => {
//       var nextCell = nextRow.append("td");
//       nextCell.text(val);
//       }
//     );
//   });
// }


// function handleClick() {
//   // Grab the datetime value from html
//   let date = d3.select("#datetime").property("value");
//   let filteredData = tableData;

//   // When you enter a date in the filter, the filter will filter the data using that date.
//   if (date) {
//     // Apply `filter` to the table data to keep the rows where the `datetime` value matches the filter value
//     filteredData = filteredData.filter(row => row.datetime === date);
//   }
//   // Rebuild the table using the filtered data
//   // If no date was entered, then filteredData will just be the original tableData.
//   buildTable(filteredData);
// }
// // Attach an event to listen for the filter button
// d3.selectAll("#filter-btn").on("click", handleClick);
// // Build the table when the page loads
// buildTable(tableData);

