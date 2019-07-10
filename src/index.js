console.log('%c HI', 'color: firebrick')
const imgURL = "https://dog.ceo/api/breeds/image/random/4"
const breedURL = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    fetch(imgURL).then(response => response.json()).then(data => {
        data.message.forEach(element => {
            x = document.createElement('img')
            x.src = element
            document.getElementById('dog-image-container').appendChild(x)
        });
    })

    // returns all breeds
    function getBreeds(){return fetch(breedURL).then(response => response.json())}

    // displays all breeds
    getBreeds().then(data => {
        for(let key in data.message) {

            x = document.createElement('li')
            x.textContent = key
            data.message[key].forEach (subbreed => {
                subUl = document.createElement('ul')
                y = document.createElement('li')
                y.textContent = subbreed
                y.className = 'sublist'
                subUl.appendChild(y)
                x.appendChild(subUl)
            })

            document.querySelector('ul').appendChild(x)
        }
    })

    document.addEventListener('click', function(event){
    if (event.target.nodeName === "LI")
        {
           event.target.style.color = 'green'; 
        }
        
    })

    document.addEventListener('change', function(event){
        ulist = document.querySelector('ul')
        let letter = event.target.value
        ulist.innerHTML = ""

        // displays filtered breeds
        getBreeds().then(data => {
            for(let key in data.message) {
                if (key.startsWith(letter)) {
                    x = document.createElement('li')
                    x.textContent = key
                    data.message[key].forEach (subbreed => {
                        subUl = document.createElement('ul')
                        y = document.createElement('li')
                        y.textContent = subbreed
                        y.className = 'sublist'
                        subUl.appendChild(y)
                        x.appendChild(subUl)
                    })
        
                    document.querySelector('ul').appendChild(x)
                }
            }
        })
    
    })


    
})



fetch(imgURL)