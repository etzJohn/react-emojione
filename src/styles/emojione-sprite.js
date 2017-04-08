import positions from './emojione-sprite-positions';

const SPRITE_SIZE = 2794;
const EMOJI_SIZE = 64;

const base = {
    textIndent: '-9999em',
    imageRendering: 'optimizeQuality',
    fontSize: 'inherit',
    height: 32,
    width: 32,
    top: -3,
    position: 'relative',
    display: 'inline-block',
    margin: '0 .15em',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    backgroundImage: 'url("assets/emojione.sprites.png")',
    backgroundRepeat: 'no-repeat',
};

export const sprite = (codepoint, style = {}) => {
    const result = Object.assign({}, base, style);

    // ensure square size
    const size = parseInt(result.height);
    result.height = size;
    result.width = size;

    const scale = size / EMOJI_SIZE;
    const [left, top] = positions[codepoint];

    result.backgroundPosition = `${left * scale}px ${top * scale}px`;
    result.backgroundSize = SPRITE_SIZE * scale;

    return result;
};
