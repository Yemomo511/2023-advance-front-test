const imgUrl =[
    "../img/img-left.png",
    "../img/img-left2.png"
]

const switchButton = document.getElementById("switchButton")
let cnt = 0
switchButton.addEventListener("click",()=>{
    const img = document.getElementById("img")
    const nowSrc = img.getAttribute("src")
    cnt++
    if (cnt == imgUrl.length)  {
        cnt=0
    }
    img.setAttribute("src",imgUrl[cnt])
    console.log(img.getAttribute("src"));
})

