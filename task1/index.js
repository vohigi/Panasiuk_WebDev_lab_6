$(document).ready(function () {
  const emailRegex = /\S+@\S+\.\S+/i;
  let response = "";
  const data = {};
  function validate() {
    if (!emailRegex.test($("#email").val())) {
      $("#email-error").text("Please enter a valid email").addClass("active");
      return false;
    }
    $("#email-error").text("").removeClass("active");
    if (!$("#name").val()) {
      $("#name-error").text("Name can`t be empty").addClass("active");
      return false;
    }
    $("#name-error").text("").removeClass("active");

    if (!$("#message").val()) {
      $("#message-error").text("Message can`t be empty").addClass("active");
      return false;
    }
    $("#message-error").text("").removeClass("active");
    return true;
  }
  function makeApiCall(body, method, url, contentType) {
    $.ajax({
      url: url,
      dataType: "json",
      type: method,
      data: body,
      contentType: contentType,
      success: function (data, textStatus) {
        response = JSON.parse(data);
      },
    });
  }
  $("#submit").click(function (e) {
    e.preventDefault();
    if (validate()) {
      data.name = $("#name").val();
      data.email = $("#email").val();
      data.message = $("#message").val();
      makeApiCall(JSON.stringify(data), "POST", "/someUrl", "application/json");
    }
  });
});
