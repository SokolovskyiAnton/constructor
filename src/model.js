import image from './assets/constructor.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks.js'


export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new TextBlock(['Узнаешь как создавать сайт-констркутор', 'Познакомишься с принципами ООП','Пополнишь свое портфолио'], {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    }),
    new TextColumnsBlock([`Подписывайся на наш Ютуб-канал, где найдешь крутые видео-уроки: <a href="https://www.youtube.com/channel/UCXmmsnbM4yMwkKEqzpWsm6g?view_as=subscriber" target="_blank">Anton Sokolovskyi</a>`], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    })
]