const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
//多个input type=radio检测是否有填写

const radioButtons = document.querySelectorAll('input[type="radio"]');
const date = document.querySelector("#date");
const phone = document.querySelector("#phone");
//初始化name的颜色
name.style.setProperty("--placeholder-color", "rgba(0,0,0,0.5)");
phone.style.setProperty("--placeholder-color", "rgba(0,0,0,0.5)");
const textArray = document.querySelectorAll(".notice-p");
console.log(textArray);
submit.addEventListener("click", () => {
  let status = true;
  if (name.value.length == 0) {
    //修改name输入框的样式
    name.style.border = "1px solid red";
    name.style.background = "rgba(255,0,0,0.1)";
    //name的placeholder的颜色为红色
    name.style.setProperty("--placeholder-color", "red");
    textArray[0].innerHTML = "姓名不能为空";
    status = false;
  } else {
    name.style.border = "1px solid black";
    name.style.background = "white";
    name.style.setProperty("--placeholder-color", "rgba(0,0,0,0.5)");
    textArray[0].innerHTML = "";
  }
  //按钮检测
  let selected = false;

  radioButtons.forEach((item) => {
    if (item.checked) {
      selected = true;
    }
  });
  if (selected) {
    textArray[1].innerHTML = "";
  } else {
    status = false;
    textArray[1].innerHTML = "请选择性别";
  }

  //日期检测
  //假设所有大一新生出生为2005年
  const bornYear = date.value.slice(0, 4);
  console.log(bornYear);
  if (bornYear == "2005") {
    textArray[2].innerHTML = "";
  } else {
    status = false;
    textArray[2].innerHTML = "非大一新生请投简历到邮箱";
  }
  //电话检测
  const phoneValue = phone.value;
  if (phoneValue.length == 11 && phoneValue[0] == "1") {
    phone.style.border = "1px solid black";
    phone.style.background = "white";
    phone.style.setProperty("--placeholder-color", "rgba(0,0,0,0.5)");
    textArray[3].innerHTML = "";
  } else {
    phone.style.border = "1px solid red";
    phone.style.background = "rgba(255,0,0,0.1)";
    //name的placeholder的颜色为红色
    phone.style.setProperty("--placeholder-color", "red");
    textArray[3].innerHTML = "请填写正确的手机号";
    status = false;
  }
  if(status){
    alert("报名成功")
  }else{
    return false
  }
});
