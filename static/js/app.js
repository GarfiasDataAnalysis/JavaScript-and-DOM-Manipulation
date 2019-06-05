// code starts here from data.js
let tableData = data;  //used let to limit to a block scope in the statement

let tbody = d3.select("tbody");

function table(data) {
  tbody.html("");
//entering data onto table
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let ufoInfo = row.append("td");  //append cells
        ufoInfo.text(val);
      }
    );
  });
}

function buttonClick() {

 d3.event.preventDefault();  //to stop the default action
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  table(filteredData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
table(tableData);