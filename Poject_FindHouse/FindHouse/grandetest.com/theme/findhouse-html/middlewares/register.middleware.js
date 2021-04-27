var usernames = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var agree = document.getElementById("agree");
var usertype = document.getElementById("usertype");
var registerFrom = document.getElementById("regfrm");
var errorSpan = document.getElementById("errors");
// Login data
var loginErrorSpan = document.getElementById("loginErrors");
jQuery(document).ready(
  jQuery("#singup").click(function () {
    if (
      email.value == "" ||
      username.value == "" ||
      password.value == "" ||
      repassword.value == ""
    ) {
      toastr.warning("Please Fill Out The Field..");
    } else {
      console.log("OK");
      if (password.value == repassword.value) {
        toastr.success("You are registred !!", { timeOut: 5000 });
      } else {
        errorSpan.style.display = "block";
        errorSpan.innerText = "Password must be same";
        if (password.value == repassword) {
          usernames.value = "";
          email.value = "";
          password.value = "";
          repassword.value = "";
          agree.value = "";
          usertype.value = "";
        }
      }
    }
  }),
  jQuery("#login").click(function (e) {
    var formData = {
      email: $("#loginemail").val(),
      password: $("#loginpassword").val(),
    };
    e.preventDefault();
    jQuery.ajax({
      url: "http://127.0.0.1:8000/login",
      method: "POST",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (data) {
        if ($("#loginemail").val() == "" || $("#loginpassword").val() == "") {
          loginErrorSpan.style.display = "block";
          loginErrorSpan.innerText = "please Fill the form";
        } else {
          if (data == "Register!!" || data == "Incorrect password") {
            loginErrorSpan.style.display = "block";
            loginErrorSpan.innerText = data;
          } else {
            if (data == "OK") {
              $("#loginRegister").click();
              loginErrorSpan.style.display = "none";
              toastr.success("You are login !!", { timeOut: 5000 });
              $("#loginemail").val("");
              $("#loginpassword").val("");
            } else {
              $("#loginErrors").html(data);
              $("#loginemail").val() == " ";
              $("#loginpassword").val() == " ";
            }
          }
        }
      },
      error: function (xhr, err) {
        console.log(xhr);
        console.log(err);
      },
    });
  })
);
