import Trianglify from 'trianglify';

export default function (wid = 200, hei = 200, minimalSize = 60) {
    const url = Trianglify({
        width: wid,
        height: hei,
        cell_size: (Math.random() * 30) + minimalSize,
        x_colors: 'random',
        y_colors: 'random'
    }).png();
    return url;
}
