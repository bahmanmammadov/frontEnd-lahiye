function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  }
  function updateTextInput1(val) {
    document.getElementById('textInput2').value=val; 
  }
  function updateTextInput2(val) {
    document.getElementById('textInput3').value=val; 
  }
  function updateTextInput3(val) {
    document.getElementById('textInput4').value=val; 
  }
  
// Yenilik 
let menus=document.querySelectorAll(".menu div");
let contents=document.querySelectorAll(".content div");


for (const menu  of menus) {
    menu.addEventListener("click",function(){
        let active=document.querySelector(".active");
        this.classList.add("active")
        active.classList.remove("active")



        let index=this.getAttribute("data-index");
        for (const content of contents) {
            if (content.getAttribute("data-index")==index) {
                content.classList.remove("d-none")
            }else{
                content.classList.add("d-none")

            }
        }


    })
}

 // tariffis

let btn=document.querySelectorAll(".tabs .fak");
let btn1=document.querySelectorAll(".tabs .fakingboy");
let ids=document.getElementById("deyiw");
let ids1=document.getElementById("deyiw1");
let ids2=document.getElementById("deyiw2");
let ids3=document.getElementById("deyiw3");
let ids4=document.getElementById("deyiw4");
let ids5=document.getElementById("deyiw5");
let ids6=document.getElementById("deyiw6");
let ids7=document.getElementById("deyiw7");
let ids8=document.getElementById("deyiw8");
let ids9=document.getElementById("deyiw9");
let none=document.getElementById("none");
let none1=document.getElementById("none1");
let none2=document.getElementById("none2");
let none3=document.getElementById("none3");
console.log(none)
// for (const btns  of btn) {
//     btns.addEventListener("click",function(){
//         let active1=document.querySelector(".active1");


//         this.classList.add("active1") 
//         active1.classList.remove("active1")  

// })


// }


$(document).ready(function(){
    $(".Tariffs #btn1").click(function(){
    ids.innerHTML="1"
    ids1.innerHTML="1"
    ids2.innerHTML="2"
    ids3.innerHTML="2"
    ids4.innerHTML="3"
    ids5.innerHTML="3"
    ids6.innerHTML="4"
    ids7.innerHTML="4"
    ids8.innerHTML="4"
    ids9.innerHTML="4"
    none.innerHTML=""
    none1.innerHTML=""
    none2.innerHTML=""
    none3.innerHTML=""


    });
   
   
  });
  $(document).ready(function(){
    $(".Tariffs #btn2").click(function(){
     ids.innerText="1.5";
     ids1.innerText="1.5";
     ids2.innerText="2.5";
     ids3.innerText="2.5";
     ids4.innerText="4.5";
     ids5.innerText="4.5";
     ids6.innerText="5.5";
     ids7.innerText="5.5";
     ids8.innerText="6.5";
     ids9.innerText="6.5";
     none.innerHTML="5.5 USD"
     none1.innerHTML="5.5 USD"
     none2.innerHTML="6.5 USD"
     none3.innerHTML="6.5 USD"
    });
   
   
  });

  (function() {

    var parent = document.querySelector("#rangeSlider");
    if(!parent) return;
  
    var
    rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
  
    rangeS.forEach(function(el) {
      el.oninput = function() {
        var slide1 = parseFloat(rangeS[0].value),
          slide2 = parseFloat(rangeS[1].value);
  
        if (slide1 > slide2) {
          [slide1, slide2] = [slide2, slide1];
          // var tmp = slide2;
          // slide2 = slide1;
          // slide1 = tmp;
        }
  
        numberS[0].value = slide1;
        numberS[1].value = slide2;
      }
    });
  
    numberS.forEach(function(el) {
      el.oninput = function() {
        var number1 = parseFloat(numberS[0].value),
          number2 = parseFloat(numberS[1].value);
  
        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
  
        rangeS[0].value = number1;
        rangeS[1].value = number2;
  
      }
    });
  
  })();



  // navbar responsivliyi 

  

  
  

  
 



