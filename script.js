const colors = ["red", "green", "yellow", "orange", "blue", "violet", "Aquamarine",]

const button = document.querySelector(".colorPick")

const colorDesc = document.querySelector('.color')



button.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random()*colors.length)
    console.log(randomNumber);
    document.body.style.backgroundColor= colors[randomNumber];
    colorDesc.innerHTML = colors[randomNumber]
})

