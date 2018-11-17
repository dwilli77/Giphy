
  var parksArray = ["Yosemite", "Yellowstone", "Zion", "Glacier", "Acadia", "Sequoia", "Grand Teton", "Great Smoky Mountains"];


  function renderButtons() {
    $(".container1").empty();
    for (var i = 0; i < parksArray.length; i++) {
    var a = $("<button>");
    a.addClass("park-btn");
    a.attr("data-parks", parksArray[i]);
    a.text(parksArray[i]);
    $(".container1").append(a);
    }
    // $(document).on("click", ".park-btn", parks);
    //   renderButtons();
    }

$(document).on("click", ".park-btn", function(event) {
  var parks = $(this).attr("data-parks");
  console.log("Hello");
  console.log(parks);
  console.log($(this).attr("data-parks"));
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


})
$("#add-park").on("click", function(event) {
  event.preventDefault();
  var newPark = $("#park-input").val().trim();
  console.log(newPark);
  parksArray.push(newPark);
  renderButtons();
});

renderButtons();

