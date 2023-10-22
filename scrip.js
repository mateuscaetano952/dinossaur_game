let dino = document.getElementById('dino');

function pular(){
    if(dino.classList.contains('pular')) return;

    dino.classList.add('pular')
    setTimeout(() => dino.classList.remove('pular'), 500)

}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    switch (event.key) {
        case "ArrowUp":
            pular()
            break;

    }
});

