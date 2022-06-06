// Setting up global variables

var phraseInput = document.getElementById("phrase");
const button = document.getElementById("clicker");
var result = document.getElementById("result");

var modal_content = document.getElementById("modal-content");
var modal = document.getElementById("task-modal");

var reviseListArray = [];

// Adding an event listener to the generate an acronym

button.addEventListener("click", function (event) {
  event.preventDefault();
  let phrase = phraseInput.value;
  var acronym = getFirstLetters(phrase);

  reviseListArray.push(acronym);
  

  let generated_acronym = document.createElement("div");
  generated_acronym.innerHTML = "<p>" + acronym;
  result.appendChild(generated_acronym);

  console.log(reviseListArray);

  let viewAcronym = document.createElement("button");
  let viewAcronymText = document.createTextNode("View Acronym");
  viewAcronym.appendChild(viewAcronymText);
  generated_acronym.appendChild(viewAcronym);
  generated_acronym.setAttribute("class","acronym-container")

// Adding an event lister to view a full phrase
  viewAcronym.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("viewAcronym Clicked");
    console.log(phrase);
    modal.style.display = "block";
    console.log("hello");
    let modal_description = document.createElement("div");
    modal_description.innerHTML = "<h2>Acronym:</h2>" + "<p>"+ phrase;
    modal_content.appendChild(modal_description);
    var span = document.getElementById("close");
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
      modal_description.remove();
    };

    });
});

// A function to get each of the first letters of a phrase
function getFirstLetters(str) {
  const firstLetters = str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(" ");

  return firstLetters;
}
