document.getElementById('search-input').addEventListener("click",function(){
    // console.log("Hello")
    document.getElementById('search-bar').style.border = "2px solid orange";
    // document.getElementById('search-bar').style.zIndex = "1";
    document.getElementById('search-bar').style.opacity = "1";
    document.getElementsByClassName('hero-section')[0].style.filter = "Brightness(0.6)";
    document.getElementsByClassName('shop-section')[0].style.filter = "Brightness(0.6)";
})
document.getElementsByClassName('hero-section')[0].addEventListener("click",function(){
    document.body.style.opacity = "1";
})

document.getElementsByClassName('hero-section')[0].addEventListener(("click"),function(){
    document.getElementsByClassName('hero-section')[0].style.filter = "Brightness(1)";
    document.getElementsByClassName('shop-section')[0].style.filter = "Brightness(1)";
    document.getElementById('search-bar').style.border = "none";

})
document.getElementsByClassName('shop-section')[0].addEventListener(("click"),function(){
    document.getElementsByClassName('hero-section')[0].style.filter = "Brightness(1)";
    document.getElementsByClassName('shop-section')[0].style.filter = "Brightness(1)";
    document.getElementById('search-bar').style.border = "none";

})

document.getElementsByClassName('cut-off')[0].addEventListener("click", function(){
    document.getElementById('side-nav-id').classList.toggle('toggle-func'); 
    document.body.style.opacity = 1; 
    document.getElementsByClassName('side-bright')[0].style.filter = 'Brightness(1)'; 
})

document.getElementById('hamp-bar1').addEventListener("click", function(){
    document.getElementById('side-nav-id').classList.toggle('toggle-func');    
    // document.body.style.opacity = 0.8;
    document.getElementById('side-nav-id').style.zIndex = 3;
    document.getElementsByClassName('side-bright')[0].style.filter = 'Brightness(0.4)';
})

function Myfunction1(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}