
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// Dog Pics
fetch(imgUrl,  {
    header: {
        'Accept': 'application/json'
    }
}).then(function(response) {
    return response.json()
}).then(function(response){
    for (let i = 0; i < response.message.length; i++) {
        document.querySelector('body').innerHTML += `<img src="${response.message[i]}" />`
    }
})


const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedlist = []
fetch(breedUrl, {
    header: {
        'Accept': 'application/json'
    }
}).then(function(response) {
    return response.json()
}).then(function(response){
    ulTag = document.querySelector('ul')
    breeds =  Object.keys(response.message)
    let letters = []
    for (let i = 0; i < breeds.length; i++) {
        ulTag.innerHTML += `<li> ${breeds[i]} </li>`
        if (!letters.includes(breeds[i][0])) {
            letters.push(breeds[i][0])
        }
    }
    const select = document.querySelector("select")
    for (let i = 0; i < letters.length; i++) {
        console.log(select, letters[i])
        const option = document.createElement("option")
        option.value = letters[i]
        option.innerText = letters[i]
        select.append(option)
        // select.innerHTML += `<option value="${letters[i]}>${letters[i]}</option>`
    }
}).then(function(response){
    document.addEventListener('click', function(e){
        if (e.target.tagName === "LI"){
            e.target.style.color = "#"+(Math.random()*0xFFFFFF<<0).toString(16)
        }

        if (e.target.tagName === "BUTTON"){
            fetch(breedUrl, {
                header: {
                    'Accept': 'application/json'
                }
            }).then(function(response) {
                return response.json()
            }).then(function(response){
                ulTag = document.querySelector('ul')
                breeds =  Object.keys(response.message)
                filterby = document.querySelector("select").value
                filtered = breeds.filter(function(word) {
                    console.log(word)
                    return word[0] === filterby;
                })
            // let arr = Array.prototype.slice.call(document.querySelectorAll("li"))
            // filtered = arr.filter(function(word) {
            //     return word.innerText[0] === filterby;
            // })
                ulTag.innerHTML = ""
                for (let i = 0; i < filtered.length; i++){
                    ulTag.innerHTML += `<li> ${filtered[i]} </li>`
                }
            })
        }
    })
})

