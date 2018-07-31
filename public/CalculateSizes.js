fs = require('fs');
const pathName = 'art'
const path = `./${pathName}`
const imgs = []

fs.readdir(path, (err, files) => { 
    
    for (let file of files) {
        let htmlPath = pathName + '/' + file
        let fulPath = path + '/' + file
        let binary = fs.readFileSync(fulPath)
        let parser = require('exif-parser').create(binary);
        let result = parser.parse();
        let size = result.getImageSize()
        let title = result.tags.ImageDescription

        let img = {
            src: htmlPath,
            thumbnail: htmlPath,
            caption: title,
            thumbnailWidth: size.width,
            thumbnailHeight: size.height
        }
        imgs.push(img)
    }
    
    console.log(imgs)
    let output = JSON.stringify(imgs)
    fs.writeFile('test.txt', output)
});




// const getImgSize = (imgSrc) => {
//     let newImg = new Image();

//     newImg.onload = function() {
//         imgs.push(
//             {
//                 src: imgSrc,
//                 thumbnail: imgSrc,
//                 thumbnailWidth: newImg.width,
//                 thumbnailHeight: newImg.height
//             },
//         )
//     }

//     newImg.src = imgSrc;
// }

// const getImages = (amount, path) => {
//     imgs.length = 0;
//     for (let step = 0; step < amount; step++) {
//         getImgSize(`${path}/1(${step}).jpg`)

//     }
// }

// fs.writeFile(filename, data, [encoding], [callback_function])