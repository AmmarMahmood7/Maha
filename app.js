
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

Array.from(document.querySelectorAll("img")).forEach(item => {
    item.addEventListener("click", event => {
       modal.style.display = "block";
       modalImg.src = event.target.src;
    });
 });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}