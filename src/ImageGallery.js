import React from 'react'
import Gallery from 'react-grid-gallery';

const imgs = []

const getImages = (amount, path) => {
    imgs.length = 0;
    for (let step = 0; step < amount; step++) {
        imgs.push(
            {
                src: `${path}/1(${step}).jpg`,
                thumbnail: `${path}/1(${step}).jpg`
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