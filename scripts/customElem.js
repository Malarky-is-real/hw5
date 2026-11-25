while(document.getElementsByClassName('jsOff').length > 0){
    document.getElementsByClassName('jsOff')[0].classList.replace('jsOff','jsOn')
}

/*const digimonDict = {'Cherubimon (VICE)':["../images/kerpyRises.png", 'Mega', "Evil bunny", 'Evil bunny JPN'], 'Turuiemon': ["../images/turuieCard.png", 'Champion', 'faveBunny', 'fave bunny jpn'],}
let currDigiIdx = 0


customElements.define('digimon-showcase', class extends HTMLElement{
    constructor(){
        super();
    }
    static observedAttributes = ['currentmon', 'desclang']

    connectedCallback(){

        this.setAttribute('currentmon', 0)
        this.setAttribute('desclang', 'US')
        const digiContainer = this
        
        const digiName = Object.keys(digimonDict)[this.getAttribute('currentmon')]
        const digiNameHeader = document.createElement('h3')
        digiNameHeader.textContent = digiName

        const digiImage= document.createElement('img')
        digiImage.src = digimonDict[digiName][0]

        const digiLevel = document.createElement('p')
        digiLevel.textContent = 'Level: ' + digimonDict[digiName][1]

        const digiDesc = document.createElement('p')
        digiDesc.textContent = 'Description: ' + digimonDict[digiName][2] 


        const monChanger = document.createElement('button')
        monChanger.type = 'button'
        monChanger.textContent = "Change Digimon"
        monChanger.setAttribute('id', 'monChanger')
        monChanger.addEventListener('click', () => {
            const showCaser = monChanger.parentElement.parentElement
            const currDigiIdx = showCaser.getAttribute('currentMon')
            showCaser.setAttribute('currentmon', (Number(currDigiIdx) + 1) % Object.keys(digimonDict).length)
        })

        const digiDiv = document.createElement('div')
        digiDiv.setAttribute('class', 'individualFigure')
        digiDiv.appendChild(digiNameHeader)
        digiDiv.appendChild(digiImage)
        digiDiv.appendChild(digiLevel)
        digiDiv.appendChild(digiDesc)
        digiDiv.appendChild(monChanger)

        const digiStatus = document.createElement('span')
        digiStatus.textContent= 'Digimon: ' + (currDigiIdx+1) + '/' + Object.keys(digimonDict).length
        digiContainer.appendChild(digiDiv)
        
        
        digiDiv.appendChild(digiStatus)



        digiContainer.append(document.createElement('br'))




        


    }


    attributeChangedCallback(name, oldValue, newValue) {
        const currDigiIdx = Number(this.getAttribute('currentmon'))
        const currDigiName = Object.keys(digimonDict)[currDigiIdx]
    
        if(name == 'desclang' && oldValue){
            if(newValue == 'US'){
                this.querySelectorAll('p')[1].textContent = 'Description: ' + digimonDict[currDigiName][2]
            }else{
     
                this.querySelectorAll('p')[1].textContent = 'Description: ' + digimonDict[currDigiName][3]
            }
        }
        else if(name == 'currentmon' && oldValue){
            changeDigimon(this)
        }

    }



}) 







function changeDigimon(digiShowcaser){
    console.log(digiShowcaser)
    
    const currDigiIdx = Number(digiShowcaser.getAttribute('currentmon'))
    const currDigiName = Object.keys(digimonDict)[currDigiIdx]
    
    const digiImg = digiShowcaser.querySelector('img')
    digiImg.src = digimonDict[currDigiName][0]
    const digiNameHeader = digiShowcaser.querySelector('h3')
    digiNameHeader.textContent = currDigiName
    digiShowcaser.querySelectorAll('p')[0].textContent = 'Level: ' + digimonDict[currDigiName][1]
    if(digiShowcaser.getAttribute('desclang') == 'US'){
        digiShowcaser.querySelectorAll('p')[1].textContent = 'Description: ' + digimonDict[currDigiName][2]
    }
    else{
        digiShowcaser.querySelectorAll('p')[1].textContent = 'Description: ' + digimonDict[currDigiName][3]

    }
    

    const digiStatus = digiShowcaser.querySelector('span')
    digiStatus.textContent= 'Digimon: ' + (currDigiIdx+1) + '/' + Object.keys(digimonDict).length    
}



const langSwitcher = document.querySelector('#langSwitcher')
langSwitcher.addEventListener('click', changeLang)
function changeLang(e){
    e.preventDefault()


    const digiShowcaser = e.target.parentElement.querySelector('digimon-showcase')



    //console.log(e.target.parentElement)          
    const button = e.target
    const buttonText = button.textContent.split(' ')
    const temp = buttonText[0]
    //console.log(buttonText)
    buttonText[0] = buttonText[buttonText.length-1]
    buttonText[buttonText.length-1] = temp
    //console.log(buttonText)
    
    digiShowcaser.setAttribute('desclang', buttonText[0])
    button.textContent = buttonText.join(' ')

    

    


}

 */


function getPref(){
    let showBreed = null
    try{
        showBreed = localStorage.getItem('showBreed')
    }
    catch{
        console.warn('Unable to read preference from local storage')

    }
    if(showBreed == 'true' || showBreed == 'false')
    {
        return showBreed
    }
    return 'false'
}



customElements.define('dog-ceo', class extends HTMLElement{
    constructor(){
        super();
    }
    static observedAttributes = ['breed', 'showbreed']

    connectedCallback(){

        
        const dogImg = document.createElement('img')
        dogImg.src = '/'
        
        const heading = document.createElement('h3')
        heading.textContent = 'CUTE DOGS FOR YOU!'
        const dogBreedPara = document.createElement('p')
        dogBreedPara.textContent = 'aaaa'
        dogBreedPara.setAttribute('class', 'jsOff')

        const changeImg = document.createElement('button')
        changeImg.type = 'button'
        changeImg.setAttribute('id', 'changeImg')
        changeImg.textContent = 'Surprise me with a dog'

        const loadStatus = document.createElement('span')
        loadStatus.role = 'status'
        const tempBreak = document.createElement('br')
        this.appendChild(heading)
        this.appendChild(dogImg)
        this.appendChild(document.createElement('br'))

        this.appendChild(dogBreedPara)
        this.append(changeImg)
        this.appendChild(document.createElement('br'))
        this.appendChild(loadStatus)
        loadStatus.textContent = 'Loading'
        const breed = updateImage(dogImg, loadStatus)
        
        this.setAttribute('showbreed', getPref())

    }


    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'showbreed'){
            console.log(this.querySelector('p').getAttribute('class') + 'aaaa')
            console.log(this.getAttribute('showbreed') + 'showedbreed')
            if(this.getAttribute('showbreed') === 'true'){
                this.querySelector('p').setAttribute('class', 'jsOn')
                console.log(this.parentElement.parentElement.querySelector('#breedShower'))
                this.parentElement.parentElement.querySelector('#breedShower').textContent = 'Hide Breed'
            
            }
            else{
            
                this.querySelector('p').setAttribute('class', 'jsOff')
                this.parentElement.parentElement.querySelector('#breedShower').textContent = 'Show Breed'
            }
            try{
                localStorage.setItem('showBreed', newValue)
            }
            catch{
                console.error("Unable to save")
            }
            

        }
        if(name === 'breed'){
            this.querySelector('p').textContent = newValue

        }

    }



}) 

const changeImgButton = document.querySelector('#changeImg')
changeImgButton.addEventListener('click',() =>{
    const status = changeImgButton.parentElement.querySelector('span')
    const img = changeImgButton.parentElement.querySelector('img')
    status.textContent = 'Loading'
    
    updateImage(img, status)
})



const showBreedbutton = document.querySelector('#breedShower')
showBreedbutton.addEventListener('click', () =>{
    let canShow = "true" === document.querySelector('dog-ceo').getAttribute('showbreed')
    console.log(!canShow)
    document.querySelector('dog-ceo').setAttribute('showbreed', !canShow)
    canShow = document.querySelector('dog-ceo').getAttribute('showbreed')
    console.log(canShow)

    

})

async function updateImage(imgHolder, status) {
    
    // Run these steps in order. If one throws an error, jump to catch.
    try {
      
      // Send a GET request for sample.json in the same folder as this page.
      // Wait for the server to return a response before continuing.
      const response = await fetch("https://dog.ceo/api/breeds/image/random")

      // Even an HTTP error such as 404 returns a response. Check its status.
      if (!response.ok) {
        status.textContent = 'Error: ' + response.status
        // Stop here and pass the status code to the catch block.
        throw new Error(`HTTP status ${response.status}`)
      }

      // Read the response body and parse the JSON into a JavaScript value.
      const data = await response.json();
      status.textContent = 'Reading Data'
      // Check that message contains text. The ?. lets us check safely
      // even if the parsed response is null.
      if (typeof data?.message !== "string") {
        status.textContent = 'Error: Expected a message in the response.'
        // Send an unexpected response to the same error handler.
        throw new Error("Expected a message in the response.");
      }
      if(new URL(data.message).protocol !== "https:"){
        throw new Error('Invalid Url')
      }
      
      // The response passed both checks. Show the message in the Console.
      console.log(data.message);
      imgHolder.src = data.message
      status.textContent = 'Success'
      const breed = data.message.split('/')
      console.log(breed)
      imgHolder.parentElement.setAttribute('breed', breed[4])
      imgHolder.alt = breed[4]
    } catch (error) {
      
      // Report the failure and its cause, such as a network error or invalid JSON.
      status.textContent = "Could not load the message. " + error
      console.error("Could not load the message.", error);
    }
  }

  