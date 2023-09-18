let contentList = [{
    ID:"1"
    ,name:"Hyundai i20"
    ,imgLink:"http://www.arabalar.com.tr/static-res/image/versiyon/660x495/hyundai/i20/hb/2023/2023-hyundai-i20-111.jpg"},
    {
        ID:"2"
        ,name:"Peugeot 2008"
        ,imgLink:"http://www.arabalar.com.tr/static-res/image/versiyon/660x495/peugeot/2008/suv/2023/2023-peugeot-2008-111.jpg"},
    {ID:"3"
    ,name:"2014 Lamborghini Aventador"
    ,imgLink:"http://www.arabalar.com.tr/static-res/image/versiyon/660x495/lamborghini/aventador/coupe/2012/2012-lamborghini-aventador-coupe-111.jpg"},
        {ID:"4"
        ,name:"2023 Mercedes A Serisi Sedan 200"
        ,imgLink:"http://www.arabalar.com.tr/static-res/image/versiyon/660x495/mercedes/a-serisi/sedan/2023/2023-mercedes-a-serisi-sedan-111.jpg"
    }];

    var i = 0;
    var prev;
    var interval;

const card = document.querySelector("#card");
const btnBack = document.querySelector("#back");
const btnNext = document.querySelector("#next");


function contents(){
    document.querySelector("#h4").textContent=contentList[i].name;
    document.querySelector(".card-img-top").setAttribute("src",contentList[i].imgLink);
}

contents();


document.querySelector("#next").addEventListener("click", function(){
    if( i !== contentList.length-1){
        i++;
        contents();
    }else{
        i=0;
        contents();
    }
})

document.querySelector("#back").addEventListener("click", function(){
    if( i !== 0){
        i--;
        contents();
    }else{
        i=contentList.length-1;
        contents();
    }
})


function init(){
   interval = setInterval(function(){
        do{i = Math.floor(Math.random()*contentList.length)}while(prev == i);
        prev=i;
        console.log(i);
        contents();
    },2000);
}


init();

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init();
    })
})