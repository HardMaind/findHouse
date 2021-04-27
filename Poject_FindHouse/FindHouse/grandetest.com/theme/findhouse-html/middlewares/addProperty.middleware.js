//  PORPERTY
// Deatils
var PropertyTitle = document.getElementById("propertyTitle");
var propertyDescription = document.getElementById("propertyDescription");
var type = document.getElementById("type");
var Status = document.getElementById("Status");
var price = document.getElementById("price");
var area = document.getElementById("area");
var room = document.getElementById("room");
// location
var address = document.getElementById("address");
var state = document.getElementById("state");
var city = document.getElementById("city");
var neighborHood = document.getElementById("neighborHood");
var zip = document.getElementById("zip");
var country = document.getElementById("country");
jQuery(document).ready(
  jQuery("#createlist").click(function () {
    const propertyData = {
      title: PropertyTitle.value,
      description: propertyDescription.value,
      type: type.value,
      status: Status.value,
      price: price.value,
      area: area.value,
      rooms: room.value,
    };
    jQuery.ajax({
      data: propertyData,
      url: "http://127.0.0.1:8000/userAdmin/addproperty",
      type: "post",
      success: function (data) {
        console.log(data);
      },
    });
  }),
  jQuery("#location").click(function () {
    const locationData = {
      address: address.value,
      state: state.value,
      city: city.value,
      neighborHood: neighborHood.value,
      zip: zip.value,
      country: country.value,
    };
    jQuery.ajax({
      data: locationData,
      url: "http://127.0.0.1:8000/userAdmin/addproperty/location",
      type: "post",
      success: function (data) {
        console.log(data);
      },
    });
  })
);
