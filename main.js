document.addEventListener("DOMContentLoaded",function(event){
    resizeLeftMenuHeight();
    const itemsMenu=document.getElementsByClassName("menu-item");

    const orders = document.getElementById("orders");
    const ordersContent = document.getElementsByClassName("orders-content");
    const ordersContainer = document.getElementById("orders-container");

    for(let currentItemMenu=0; currentItemMenu<itemsMenu.length; currentItemMenu++){
        const itemMenu = itemsMenu[currentItemMenu];
        
        itemMenu.addEventListener('click',function(){
            selectMenu(itemsMenu,itemMenu); //itemsMenu selected
            

            const content = itemMenu.dataset.content;
            console.log('content',content)
            const contentItems = document.getElementsByClassName("content");
            const logoItems = document.getElementsByClassName("logos");
            console.log("contentItems",contentItems);
            //show content 
            for(let contentItemsIndex=0; contentItemsIndex<contentItems.length; contentItemsIndex++){
                if(!contentItems[contentItemsIndex].classList.contains('hidden')){
                    contentItems[contentItemsIndex].classList.add("hidden");
                }
            }
            //show logo
            for(let logoItemsIndex=0; logoItemsIndex<logoItems.length;logoItemsIndex++){
                if(!logoItems[logoItemsIndex].classList.contains('hidden')){
                    logoItems[logoItemsIndex].classList.add("hidden");
                }
            }
            showContentLogo(content);
            ordersContent[0].classList.add("hidden");
        }) 
    }
    //show order-details (ordersContent) 
    //page Your Orders (ordersContainer)
    orders.addEventListener('click',function(){
        console.log(ordersContainer);
        if (ordersContent[0].classList.contains("hidden"))
           { ordersContent[0].classList.remove("hidden");
            ordersContainer.classList.add("hidden");
            }
            else {
                ordersContent[0].classList.add("hidden");
                ordersContainer.classList.remove("hidden");
            }
    })
    //MouseOver event on products
    const products=document.getElementsByClassName("product");
    for(let indexProducts = 0; indexProducts < products.length-1; indexProducts++){
        products[indexProducts].addEventListener("mouseover",function(event){
            event.target.style.height= "180px";
            event.target.style.width="180px";
            event.target.style.left="-40px";
            setTimeout(function(){
                event.target.style.height= "";
                event.target.style.width= "";
                // trebuie sa folosesc position left sau ceva de genu ca sa 
                //nu intre in celelalte elemente cand folosesc mouseover. Am incercat ceva de genu dar nu merge -->  event.style.left="";
            }, 500);
        }, false);
        products[indexProducts].addEventListener("mouseout",function(event){
            event.target.style.height= "120px";
            event.target.style.width="120px";
            setTimeout(function(){
                event.target.style.height= "";
                event.target.style.width= "";
               
            }, 500);
        }, false);
    }
})
var selectMenu = function(itemsMenu,itemMenu){
    for(let index=0; index<itemsMenu.length; index++){
        if (itemsMenu[index].classList.contains('selected')){
            itemsMenu[index].classList.remove("selected");
        }
    }
    itemMenu.classList.add("selected");
}
var showContentLogo = function(className){
    document.getElementsByClassName(className)[0].classList.remove("hidden");
    document.getElementsByClassName(className)[1].classList.remove("hidden");
}

// resize event
var resizeLeftMenuHeight = function(){
    let windowHeight = window.innerHeight -30;
    let elm = document.querySelector(".menu-container");
    elm.style.height = windowHeight+"px";
}
window.addEventListener('resize', resizeLeftMenuHeight);