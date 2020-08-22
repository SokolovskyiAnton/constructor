import {row, col} from '../utils' // импорт функций отвечающий за создание row и col-sm

class Block {
    constructor(value, options) {
        this.value = value,
        this.options = options
    }
    toHTML() {
        throw new Error('Method toHTML have to use')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {tag = 'h2', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const {alt,styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`
        return row(html, styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map( item => col(item))
        return row(html.join(''), styles)
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const styles = this.options.styles
        const html = this.value.map( item => col(item))
        return row(html.join(''), styles)
    }
}
