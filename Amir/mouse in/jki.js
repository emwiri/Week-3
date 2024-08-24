
let hover = document.querySelector('.right');
let lef = document.querySelector('.left');

hover.addEventListener('mouseover', function() {
    hover.classList.add('hoverright');
});

hover.addEventListener('mouseout', function() {
    hover.classList.remove('hoverright');
});

lef.addEventListener('mouseover', function() {
    lef.classList.add('hoverleft');
});

lef.addEventListener('mouseout', function() {
    lef.classList.remove('hoverleft');
});