var tesseract = require('node-tesseract'),
    path = require('path'),
    image = path.resolve(__dirname, 'images/006.png');


// var t = tesseract.create({
//     langPath: path.resolve(__dirname)
// });


// t.recognize(image)
//     .progress(message => console.log(message))
//     .then(function (result) {
//         console.log(result)
//     })


tesseract.process(image, (err, text) => {
    if (err) {
        throw err;
    }
    text = text.trim();

    if (text == "7630") {
        console.log("yes");
    }
    console.log(text);
    return;

});