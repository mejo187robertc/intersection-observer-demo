/*
Threshold for when class is toggled

Threshold 25% or .25

*/

/* In what context is the observer observing?

is it obsrerving the root node?
*/

let options = {
  root: null,
  threshold: 0.25,
}

/* 
Handling intersection changes
1. when something starts to intersect
2. when something ceases to intersect */

function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
    // entry.isIntersecting

if (entry.isIntersecting) {
    // add active if intersecting
    entry.target.classList.add("active");
} else {
    //remove active if no longer intersecting
    entry.target.classList.remove("active");
}

});


}
let observer = new IntersectionObserver(intersectionHandler, options);

/* 
need to get reference to all of the images
*/

let images = document.querySelectorAll("img");
/* 
loop through images and tell observer to observe each one
*/
images.forEach((image) => {
    observer.observe(image);
});