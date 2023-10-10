let dino = document.getElementById('dino');

function pular(){
    if(dino.classList.contains('pular')) return;

    dino.classList.add('pular')
    setTimeout(() => dino.classList.remove('pular'), 1000)

}

document.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

    switch (event.key) {
        case "ArrowUp":
            pular()
            break;

    }
});

