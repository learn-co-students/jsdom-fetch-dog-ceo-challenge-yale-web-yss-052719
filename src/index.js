document.addEventListener('DOMContentLoaded', function() {

 fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(response => response.json())
 .then(data => {
  // console.log(Object.keys(data))
  // console.log(data.message)
  // Prints result from `response.json()` in getRequest
   data.message.forEach((url) => {
     let img = document.createElement("img");
     img.setAttribute("src", url);
     document.getElementById("dog-image-container").appendChild(img)
     // finding the parent (div)tag
     //append ele to parent div
   });
 })

 fetch('https://dog.ceo/api/breeds/list/all')
 .then(response => response.json())
 .then(data => {
   // console.log(Object.keys(data.message))
   let ul = document.getElementById("dog-breeds");
   // locate the dog breeds and save it into an variable (ul)
   let keys = Object.keys(data.message)
   // get the object(data.message) of the breed names, set into a varaible (keys)
   for (let i = 0; i < keys.length; i++) {
     // iterate through the names to get a name, add name each time
     let li = document.createElement("li");
     // create the li element, set it in a variable
     li.innerText = keys[i]
     // set the keys(breed name) as text in <li>
     document.body.append(li)
     // print out the names at the end of the document
   }
 })

 // challenge 3
 document.body.addEventListener('click', function(event) {
   if(event.target.tagName === "LI") {
     event.target.style.color = "red"
   }
 })

 // challenge 4
 // document.querySelector('select').addEventListener('change', function(event){
 //   console.log(event.target.value)
 //   fetch('https://dog.ceo/api/breeds/list/all')
 //   .then(response => response.json())
 //   .then(data => {
 //     let filterBreed = Object.keys(data.message).filter(breed => breed.startWith(letter))
 // })

});
