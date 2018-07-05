import React from 'react'
import Gallery from 'react-grid-gallery';

const imgs = []

const getImages = (amount, path) => {
    imgs.length = 0;
    var step;
    var fulPath;
    if (path == 'art') {fulPath = 'art' }
    else {fulPath = `art/${path}`}

    for (step = 0; step < amount; step++) {
        console.log(`${fulPath}/1(${step}).jpg`)
        imgs.push(
            {
                src: `${fulPath}/1(${step}).jpg`,
                thumbnail: `${fulPath}/1(${step}).jpg`
            },
        )
    }
}

class ImageGallery extends React.Component {

    render() {
    getImages(this.props.amount, this.props.path)   
        return (
            <Gallery 
            images={imgs}
            enableImageSelection={false}
            rowHeight={300}
             />
        );
    }
}

export default ImageGallery;