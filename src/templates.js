import {row, col} from './utils.js' // импорт функций отвечающий за создание row и col-sm

function title(block) {
    const tag = block.options.tag
    const styles = block.options.styles
    return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
    const styles = block.options.styles
    return row(col(`<p>${block.value}</p>`), styles)
}

function textColumns(block) {
    const styles = block.options.styles
    const html = block.value.map( item => col(item))

    return row(html.join(''), styles)
}


export const templates = {title, text, textColumns}