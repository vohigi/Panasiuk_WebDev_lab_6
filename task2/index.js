$(document).ready(function () {
  const container = $(".container");
  function createElement(data) {
    const card = $("<div></div>")
      .addClass("card")
      .append($("<div></div>").text(data.employee_name))
      .append($("<div></div>").text(data.employee_salary))
      .append($("<div></div>").text(data.employee_age));
    const res = $("<div></div>").addClass("col s2").append(card);
    return res;
  }
  function createRow(arr) {
    const row = $("<div></div>").addClass("row");
    arr.forEach((element) => {
      const rowItem = createElement(element);
      row.append(rowItem);
    });
    container.append(row);
  }

  function displayResponse(arr) {
    let nextIndex = 0;
    for (let index = 0; index < arr.length; index++) {
      if (index === nextIndex) {
        arr.length / index > 1
          ? createRow(arr.slice(index, index + 5))
          : createRow(arr.slice(index, arr.length - index));
        nextIndex += 5;
      }
    }
  }
  $.get("http://dummy.restapiexample.com/api/v1/employees")
    .done(function (data) {
      console.log(data.data);
      displayResponse(data.data);
    })
    .fail(function (error) {
      console.log(error);
      alert("Error Loaded: " + error.statusText);
    });
});
