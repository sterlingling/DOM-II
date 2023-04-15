import './less/index.less'

// Your code goes here!
//LOAD EVENT
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`);
    const heading = document.querySelector('h1');
    heading.textContent = 'READY TO GO!!';
    //COPY EVENT
    window.addEventListener('copy', () => {
        navigator.clipboard.readText().then(text => {
            heading.textContent += text;
        })
    });
    //CLICK EVENT
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror');
    })

    //dblClick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = '';
    })

    //KEYDOWN
    window.addEventListener('keydown', evt => {
        if (evt.key == '6') {
            document.body.innerHTML = 'YOU RAN ORDER 66';
        }
    })

    //mousemove
    document.body.addEventListener('mousemove', evt => {
        // console.log(evt);
        const { clientX, clientY } = evt;
        // console.log(`mouse is at ${clientX},${clientY}`);
    })

    //mouseenter
    //nouseleave
    const destinations = document.querySelectorAll('.destination');
    console.log(destinations);
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold';
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial';
        })
    }
}

