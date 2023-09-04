const imgUrl =[
    "../img/img-left.png",
    "../img/img-left2.png"
]

const switchButton = document.getElementById("switchButton")
switchButton.addEventListener("click",()=>{
    const img = document.getElementById("img")
    const nowSrc = img.getAttribute("src")
    if (nowSrc==imgUrl[0]){
        img.setAttribute("src",imgUrl[1])
        console.log(img.getAttribute("src"))
    }else{
        console.log(img.getAttribute("src"))
        img.setAttribute("src",imgUrl[0])
    }
})

