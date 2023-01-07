//let myHeading = document.querySelector('h1');//这里将后面看成一个对象，对象可以直接储存在变量中
//myHeading.textContent = 'Hello world!';

//声明变量，可以不写分号
let v1;

//赋值
v1 = '黜聪明';

//写在一行
let v2 = '堕肢体';

let v3 = 9 / 4;


//      alert (v3);
//      //alert('hello!');
//      
//      let iceCream = 'chocolate';
//      
//      if (iceCream === 'chocolate') {
//        alert('我最喜欢巧克力冰激淋了。');
//      } else {
//        alert('但是巧克力才是我的最爱呀……');
//      }
//      
//      //申请函数
//      function multiply(num1, num2) {
//          let result = num1 * num2;
//          alert(result);//这里的输出是20
//          return result;
//        }
//      
//      let result = 10;
//      multiply(4, 5);
//      alert(result);//这里的输出是10，result为什么传不出来
//      
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });//这里的function是没有名字的，称为匿名函数
//      
//        /*document.querySelector('html').addEventListener('click', () => {
//          alert('别戳我，我怕疼。');
//          });
//          用() => 代替 function ()*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.png') {
      myImage.setAttribute('src', 'images/2.png');
    } else {
      myImage.setAttribute('src', 'images/1.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//function setUserName() {
//    let myName = prompt('请输入你的名字。');
//    localStorage.setItem('name', myName);
//    myHeading.textContent = '?' + myName;
//  }

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = '?' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '?' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
 }
 