let tl = anime.timeline({
    duration: 750
})

tl
.add({
    targets: '#word1',
    scale: [14,1] ,
    opacity: [0,1],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutExpo',
   
    
})
.add({
    targets: '#word2',
    scale: [14,1] ,
    opacity: [0,1],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutExpo',
    
})
.add({
    targets: '#word3',
    scale: [14,1] ,
    opacity: [0,1],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutExpo',
})
.add({
    targets: ".words",
    translateY: 200,
    opacity: [0,1],
    direction: 'reverse',
    loop: true,
    easing: 'easeInOutExpo',

});
