console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        let div = document.querySelector("div#dog-image-container")
        for (let i = 0; i < data.message.length; i++) {
            div.innerHTML += `<img src="${data.message[i]}" style="height:100px"/><br>`
        }
        // let img = document.createElement("img")
        // img.src = data.message[0]
        // div.appendChild(img)
    })
    
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const ulTag = document.querySelector('ul#dog-breeds')
        const k = Object.keys(data.message)
        for (let i = 0; i < k.length; i++) {
            if (data.message[k[i]].length === 0) {
                ulTag.innerHTML += `<li>${k[i]}</li>`
            } else {
                let a = data.message[k[i]]
                for (let j = 0; j < a.length; j++) {
                    ulTag.innerHTML += `<li>${a[j]} ${k[i]}</li>`
                }
            }
        }

        let array = Array.prototype.slice.call(document.querySelectorAll("li"))
        document.addEventListener("change", function(e) {
            if (e.target.tagName === "SELECT") {
                ulTag.innerHTML = ""
                for (let i = 0; i < array.length; i++) {
                    if (e.target.value === array[i].textContent[0]) {
                        ulTag.innerHTML += `<li>${array[i].textContent}</li>`
                    }
                }
            }
        })

        document.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                e.target.style.color = "green"
            }
        })
    })

})


