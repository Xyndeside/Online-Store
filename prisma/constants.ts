export const categories = [
    {
        name: 'Пиццы'
    },
    {
        name: 'Завтрак'
    },
    {
        name: 'Закуски'
    },
    {
        name: 'Коктейли'
    },
    {
        name: 'Напитки'
    },
]

export const ingredients = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
            '/images/ingredients/ingredient-1.png',
    },
    {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-2.png',
    },
    {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-3.png',
    },
    {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-4.png',
    },
    {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-5.png'
    },
    {
        name: 'Шампиньоны',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-6.png'
    },
    {
        name: 'Ветчина',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-7.png'
    },
    {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-8.png'
    },
    {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-9.png'
    },
    {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-10.png'
    },
    {
        name: 'Свежие томаты',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-11.png'
    },
    {
        name: 'Красный лук',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-12.png'
    },
    {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-13.png'
    },
    {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
            '/images/ingredients/ingredient-14.png'
    },
    {
        name: 'Сладкий перец',
        price: 59,
        imageUrl:
            '/images/ingredients/ingredient-15.png'
    },
    {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-16.png'
    },
    {
        name: 'Митболы',
        price: 79,
        imageUrl:
            '/images/ingredients/ingredient-17.png'
    },
]
    .map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
    {
        name: 'Омлет с ветчиной и грибами',
        imageUrl: '/images/products/product-1.webp',
        categoryId: 2,
    },
    {
        name: 'Омлет с пепперони',
        imageUrl: '/images/products/product-2.webp',
        categoryId: 2,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/images/products/product-3.webp',
        categoryId: 2,
    },
    {
        name: 'Дэнвич ветчина и сыр',
        imageUrl: '/images/products/product-4.webp',
        categoryId: 3,
    },
    {
        name: 'Куриные наггетсы',
        imageUrl: '/images/products/product-5.webp',
        categoryId: 3,
    },
    {
        name: 'Картофель из печи с соусом 🌱',
        imageUrl: '/images/products/product-6.webp',
        categoryId: 3,
    },
    {
        name: 'Додстер',
        imageUrl: '/images/products/product-7.webp',
        categoryId: 3,
    },
    {
        name: 'Острый Додстер 🌶️🌶️',
        imageUrl: '/images/products/product-8.webp',
        categoryId: 3,
    },
    {
        name: 'Банановый молочный коктейль',
        imageUrl: '/images/products/product-9.webp',
        categoryId: 4,
    },
    {
        name: 'Карамельное яблоко молочный коктейль',
        imageUrl: '/images/products/product-10.webp',
        categoryId: 4,
    },
    {
        name: 'Молочный коктейль с печеньем Орео',
        imageUrl: '/images/products/product-11.webp',
        categoryId: 4,
    },
    {
        name: 'Классический молочный коктейль 👶',
        imageUrl: '/images/products/product-12.webp',
        categoryId: 4,
    },
    {
        name: 'Ирландский Капучино',
        imageUrl: '/images/products/product-13.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Карамельный капучино',
        imageUrl: '/images/products/product-14.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Кокосовый латте',
        imageUrl: '/images/products/product-15.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Американо',
        imageUrl: '/images/products/product-16.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/images/products/product-17.webp',
        categoryId: 5,
    },
]