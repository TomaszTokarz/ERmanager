const sharp = require('sharp');

const crop = async (image, settings = {}) => {
    const { width, height } = settings;
    let imgBuffer = Buffer.from(image.split(';base64,').pop(), 'base64');

    console.log(image.split(';base64,')[0]);

    return sharp(imgBuffer)
        .resize(width, height)
        .toBuffer()
        .then(data => {
            return `data:image/jpeg;base64,${data.toString('base64')}`;
        })
        .catch(err => console.log(`downisze issue ${err}`));
};

const optimize = async image => {
    let imgBuffer = Buffer.from(image.split(';base64,').pop(), 'base64');

    return sharp(imgBuffer)
        .jpeg({
            quality: 60,
            progressive: true,
        })
        .toBuffer()
        .then(data => {
            return `data:image/jpeg;base64,${data.toString('base64')}`;
        })
        .catch(err => console.log(`optimize issue ${err}`));
};

module.exports = {
    crop,
    optimize,
};
