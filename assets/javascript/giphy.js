$(document).ready(function() {

$("button").on("click", function() {
var parksArray = [];
var parks = $(this).attr("data-parks");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          parks + "&api_key=2sIeyYSIdhdaA1RkYinrGUPZq99doJyN&limit=10";
  
$.ajax({
  url: queryURL,
  method: "GET"
  })

.then(function(response) {
  console.log(queryURL);      
  console.log(response);

var results = response.data;
// does results have to be an array?
  
  for (var i = 0; i < results.length; i++) {
    var parksDiv = $("<div>");
    var p = $("<p>").text("Rating: " + results[i].rating);
    var parksImage = $("<img>");
    parksImage.attr("src", results[i].images.fixed_height.url);
    parksDiv.append(p);
    parksDiv.append(parksImage);
    $("#gifs-appear-here").prepend(parksDiv);
            }
});

function renderButtons() {
$("#park-buttons").empty();
var a = $("<button>");
a.addClass("park-btn");
a.attr("data-parks", parksArray[i]);
a.text(parks[i]);
$("#park-buttons").append(a);

$("#add-park").on("click", function() {
   event.preventDefault();
var newPark = $("#park-input").val().trim();
});
 
parksArray.push(newPark);

$(document).on("click", ".park-btn", parks);
  renderButtons();
}

})
})
