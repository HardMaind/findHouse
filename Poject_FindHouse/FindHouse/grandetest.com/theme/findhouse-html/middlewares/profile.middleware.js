// Normal Profile
var file = document.getElementById("profileImage");
var username = document.getElementById("username");
var email = document.getElementById("email");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var position = document.getElementById("position");
var license = document.getElementById("license");
var gst = document.getElementById("gst");
var phone = document.getElementById("phone");
var fax = document.getElementById("fax");
var language = document.getElementById("language");
var company = document.getElementById("company");
var about = document.getElementById("about");
var address = document.getElementById("address");
const profileForm = document.getElementById("profileForm");
// Chanege password in profile
var newPassword = document.getElementById("newPassword");
const passwordError = document.getElementById("passwordError");
// Profile JQuery and javascipt with Ajex
jQuery(document).ready(
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var profileData = {
      file: file.value,
      username: username.value,
      email: email.value,
      firstname: firstname.value,
      lastname: lastname.value,
      position: position.value,
      license: license.value,
      gst: gst.value,
      phone: phone.value,
      fax: fax.value,
      language: language.value,
      company: company.value,
      about: about.value,
      address: address.value,
      skype: $("#skype").val(),
      website: $("#website").val(),
      facebook: $("#facebook").val(),
      twitter: $("#twitter").val(),
      linkedin: $("#linkedin").val(),
      instagram: $("#instagram").val(),
      youtube: $("#youtube").val(),
      pinterest: $("#pinterest").val(),
    };
    jQuery.ajax({
      data: profileData,
      url: "http://127.0.0.1:8000/userAdmin/profile",
      type: "post",
      success: function (data) {
        if (data == "You are not able") {
          email.style.border = "1px solid red";
          email.focus();
          email.placeholder = "Enter valid Mail";
          email.value = "";
        } else {
          file.value = "";
          username.value = "";
          email.value = "";
          firstname.value = "";
          lastname.value = "";
          position.value = "";
          license.value = "";
          gst.value = "";
          phone.value = "";
          fax.value = "";
          language.value = "";
          company.value = "";
          about.value = "";
          address.value = "";
          $("#skype").val("");
          $("#website").val("");
          $("#facebook").val("");
          $("#twitter").val("");
          $("#linkedin").val("");
          $("#instagram").val("");
          $("#youtube").val("");
          $("#pinterest").val("");
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }),
  jQuery("#getProfileData").click(function () {
    jQuery.ajax({
      url: "http://127.0.0.1:8000/userAdmin/profile/getData",
      type: "get",
      success: function (data) {
        if (data == "") {
          email.style.border = "1px solid red";
          email.focus();
          email.placeholder = "Enter valid Mail";
          email.value = "";
        } else {
          email.style.border = "1px solid rgb(235, 235, 235)";
          username.value = data.username;
          email.value = data.email;
          firstname.value = data.firstname;
          lastname.value = data.lastname;
          position.value = data.position;
          license.value = data.license;
          gst.value = data.gst;
          phone.value = data.phone;
          fax.value = data.fax;
          language.value = data.language;
          company.value = data.company;
          about.value = data.about;
          address.value = data.address;
          $("#skype").val(data.skype);
          $("#website").val(data.website);
          $("#facebook").val(data.facebook);
          $("#twitter").val(data.twitter);
          $("#linkedin").val(data.linkedin);
          $("#instagram").val(data.instagram);
          $("#youtube").val(data.youtube);
          $("#pinterest").val(data.pinterest);
        }
        // file.value = data.file;
      },
      error: function (err) {
        console.log(err);
      },
    });
  }),
  jQuery("#changePassword").click(function (e) {
    var changePassword = {
      oldPassword: $("#oldPassword").val(),
      newPassword: $("#newPassword").val(),
      rePassword: $("#rePassword").val(),
    };
    jQuery.ajax({
      data: changePassword,
      url: "http://127.0.0.1:8000/userAdmin/profile/changePassword",
      type: "post",
      success: function (data) {
        e.preventDefault();
        if (
          $("#oldPassword").val() == "" ||
          $("#newPassword").val() == "" ||
          $("#rePassword").val() == ""
        ) {
          passwordError.style.display = "block";
          passwordError.innerText = "Enter values";
          oldPassword.focus();
        } else {
          if (data == "Enter same password") {
            passwordError.style.display = "block";
            passwordError.innerText = "New and Comfirm password Same";
            oldPassword.focus();
          } else {
            if (data == undefined || data == "password not match") {
              passwordError.style.display = "block";
              passwordError.innerText = "Enter Rigth Old Password";
              oldPassword.focus();
            } else {
              if (confirm("Are you sure ?? Too Change Password !!")) {
                passwordError.style.display = "none";
                $("#oldPassword").val("");
                $("#newPassword").val("");
                $("#rePassword").val("");
              }
            }
          }
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  })
);
