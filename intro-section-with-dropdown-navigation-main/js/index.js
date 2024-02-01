document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('#features').addEventListener('click',function(){
        var src =document.querySelector('#image1').src;
        var url = new URL(src);
        console.log(url.pathname);
        if(url.pathname == "/images/icon-arrow-down.svg"){
            document.querySelector('#image1').src = "../images/icon-arrow-up.svg";
        }
        else {
            document.querySelector('#features').classList.remove("show");
            document.querySelector('#menu1').classList.remove("show");
            document.querySelector('#image1').src = "images/icon-arrow-down.svg";

        }
    })
    document.querySelector('#company').addEventListener('click',function(){
        var src =document.querySelector('#image2').src;
        var url = new URL(src);
        if(url.pathname == "/images/icon-arrow-down.svg"){
            document.querySelector('#image2').src = "/images/icon-arrow-up.svg";
        }
        else {
            document.querySelector('#company').classList.remove("show");
            document.querySelector('#menu2').classList.remove("show");
            document.querySelector('#image2').src = "images/icon-arrow-down.svg";

        }
    })
    document.addEventListener('click',function(event){
        element = document.querySelector('#navbarSupportedContent');
        var isClickInsideTarget = element.contains(event.target);
        if(element.classList.contains('show') && !isClickInsideTarget){
            element.setAttribute('aria-expanded','false');
            document.querySelector('#navbarSupportedContent').classList.remove("show")
            document.querySelector('#menu_img').src = "/images/icon-menu.svg"
        document.querySelector('#overlay').classList.remove("overlay");
        }
        var list = [['#features','#company'],['#image1','#image2']]
        for(var i = 0; i<2 ; i++){
            element = document.querySelector(list[0][i]);
            isClickInsideTarget = element.contains(event.target);
            var src =document.querySelector(list[1][i]).src;
            var url = new URL(src);
            if(url.pathname == "/images/icon-arrow-up.svg" && !isClickInsideTarget){
                document.querySelector(list[1][i]).src = "images/icon-arrow-down.svg";
            }
        }
    })
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function romoveNavBarShow() {
        console.log("Start");
        await delay(355); // Wait for 2 seconds
        console.log("End");
        document.querySelector('#navbarSupportedContent').classList.remove("show")
        document.querySelector('#menu_img').src = "/images/icon-menu.svg";
        document.querySelector('#overlay').classList.remove("overlay");
    }
    document.querySelector('.navbar-toggler').addEventListener('click',function(){
        var element = document.querySelector('#menu_img')
        var src = element.src;
        url = new URL(src)
        if (url.pathname =="/images/icon-menu.svg"){
            document.querySelector('#menu_img').src = "/images/icon-close-menu.svg";
            document.querySelector('#overlay').classList.add("overlay");
        }
        else{
            romoveNavBarShow();
        }
    })
})