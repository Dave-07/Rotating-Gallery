const container = document.querySelector('.image-container');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');

    let x = 0;
    let timer;
    
    prevBtn.addEventListener('click', () => {

        x -= 45;

        clearTimeout(timer);
        
        autoRotate();
    });

    nextBtn.addEventListener('click', () => {
        
        x += 45;

        clearTimeout(timer);
        
        autoRotate();
    });

    function autoRotate() {
        
        container.style.transform = `perspective(1000px) rotateY(${x}deg)`;

         timer = setTimeout(() => {
            x = x + 45;
            console.log(x);

            autoRotate();
        }, 4000);

    }    

    autoRotate();
