import {model} from './model.js'
import {templates} from './templates.js' // экспорт функций
import './styles/main.css'

const site = document.querySelector('#site')
model.forEach( block => {
    const generate = templates[block.type] // генерация функций по типу

    if (generate) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }
})


