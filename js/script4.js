document.querySelectorAll(".content").forEach(function(e){
    e.addEventListener("mouseover", function(){
        anime({
            targets: e,
            translateY: -10,
            opacity: [1],
            duration: 1000,
            direction: 'alternate',
            easing: 'easeInOutExpo',
        }) 
    })
})


