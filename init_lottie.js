// for web
let animation = bodymovin.loadAnimation(
    {
        container: document.getElementById('***'),
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: './...'
    }
)




// for node.js
let lottie = require("lottie-web")

let animation = lottie.loadAnimation(
    {
        container: document.getElementById('***'),
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: '***.json'
    }
)