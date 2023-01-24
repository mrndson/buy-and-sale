const productcontainers =[...document.querySelectorAll('.product-container')];
const nxtBtn=[...document.querySelectorAll('.nxt-btn')];
const preBtn=[...document.querySelectorAll('.pre-btn')];

productcontainers.forEach((item, i)=>{
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventlistener('click', () =>{
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventlistener('click', () =>{
        item.scrollLeft -= containerWidth;
    })

})