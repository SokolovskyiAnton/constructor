import image from './assets/constructor.jpg'
console.log(image);
export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JavaScript!', options: {
        tag: 'h2',
        styles: 'background: darkblue; color: #fff; text-align: center;padding: 1rem;'
    }},
    {type: 'image', value: image, options: {
        styles: 'padding: 1.5rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }},
    {type: 'text', value: ['Узнаешь как создавать сайт-констркутор', 'Познакомишься с принципами ООП','Пополнишь свое портфолио'], options: {
        styles: 'background: aqua; color: #006363;padding: 1rem; font-size: 18px;font-weight: bold;min-height: 120px;'
    }},
    {type: 'textColumns', value: [`Подписывайся на наш Ютуб-канал, где найдешь крутые видео-уроки: <a href="https://www.youtube.com/channel/UCXmmsnbM4yMwkKEqzpWsm6g?view_as=subscriber" target="_blank">Anton Sokolovskyi</a>`], options: {
        styles: 'padding: 2rem;background: #FF9640; color: #006363;font-size: 18px;'
    }}
]