import Croissant from './croissant.avif';
import Coffee from './coffee.png';
import Cookie from './cookie.png';
import Cupcake from './cupcake.png';
import FrenchPress from './french-press.png';
import IcedCoffee from './iced-coffee.png';
import Latte from './latte.png';
import Milk from './milk.png';
import Sandwich from './sandwich.png';
import Tea from './tea.png';

export const itemImages = {
    coffee: Coffee,
    cookie: Cookie,
    croissant: Croissant,
    cupcake: Cupcake,
    'french-press': FrenchPress,
    'iced-coffee': IcedCoffee,
    latte: Latte,
    milk: Milk,
    sandwich: Sandwich,
    tea: Tea,
}

export const items = [
    {
        itemId: 'coffee',
        imageId: 'coffee',
        title: 'Drip coffee',
        price: 1,
        description: 'Enjoy the rich flavor and aroma of our freshly brewed drip coffee. Made from the finest beans, our drip coffee is the perfect pick-me-up for any time of day. Whether you prefer it black or with cream and sugar, our drip coffee will satisfy your caffeine cravings.',
        salePrice: 0,
    },
    {
        itemId: 'cookie',
        imageId: 'cookie',
        title: 'Chocolate Chip Cookie',
        price: 1.5,
        description: 'Indulge your sweet tooth with our irresistible chocolate chip cookie. Baked to perfection, our cookie boasts a soft and chewy texture with gooey chocolate chips in every bite. Treat yourself to a taste of heaven with our delectable chocolate chip cookie today!',
        salePrice: 1.2,
    },
    {
        itemId: 'croissant',
        imageId: 'croissant',
        title: 'Croissant',
        price: 2,
        description: 'Transport yourself to a Parisian cafe with our buttery and flaky croissant. Made with layers of delicate pastry, our croissant is a true delight for your taste buds. Pair it with a hot cup of coffee or enjoy it on its own for a truly decadent experience.',
        salePrice: 1.8,
    },
    {
        itemId: 'cupcake',
        imageId: 'cupcake',
        title: 'Cupcake',
        price: 2.5,
        description: 'Satisfy your sweet cravings with our delectable cupcake. Moist and fluffy, our cupcake is topped with creamy frosting for the ultimate indulgence. With a variety of flavors to choose from, there\'s a cupcake for every taste preference. Treat yourself to a little slice of happiness!',
        salePrice: 2,
    },
    {
        itemId: 'french-press',
        imageId: 'french-press',
        title: 'French Press Coffee',
        price: 3,
        description: 'Experience the bold and robust flavor of our French press coffee. Made using the finest coffee beans, our French press coffee is brewed to perfection, resulting in a full-bodied and aromatic cup of joe. Whether you enjoy it black or with a splash of cream, our French press coffee is sure to impress.',
        salePrice: 2.5,
    },
    {
        itemId: 'iced-coffee',
        imageId: 'iced-coffee',
        title: 'Iced Coffee',
        price: 2,
        description: 'Cool off on a hot day with our refreshing iced coffee. Made with freshly brewed coffee and served over ice, our iced coffee is the perfect way to beat the heat. With its smooth and invigorating flavor, our iced coffee will keep you refreshed and energized all day long.',
        salePrice: 1.8,
    },
    {
        itemId: 'latte',
        imageId: 'latte',
        title: 'Latte',
        price: 3.5,
        description: 'Indulge in the creamy goodness of our classic latte. Made with rich espresso and steamed milk, our latte is a luxurious treat for your taste buds. Whether you enjoy it hot or iced, our latte is the perfect pick-me-up any time of day. Treat yourself to a taste of heaven with our indulgent latte.',
        salePrice: 3,
    },
    {
        itemId: 'milk',
        imageId: 'milk',
        title: 'Milk',
        price: 1,
        description: 'Nourish your body with a refreshing glass of cold milk. Packed with essential nutrients like calcium and protein, milk is the perfect choice for a wholesome and nutritious beverage. Whether you enjoy it on its own or paired with your favorite treat, milk is a delicious and satisfying option.',
        salePrice: 0.8,
    },
    {
        itemId: 'sandwich',
        imageId: 'sandwich',
        title: 'Sandwich',
        price: 4,
        description: 'Satisfy your hunger with our hearty sandwich. Made with fresh ingredients and served on your choice of bread, our sandwich is a delicious and satisfying meal option. Whether you prefer it hot or cold, our sandwich is sure to hit the spot. Treat yourself to a taste of our delicious sandwich today!',
        salePrice: 3.5,
    },
    {
        itemId: 'tea',
        imageId: 'tea',
        title: 'Tea',
        price: 1.5,
        description: 'Relax and unwind with a soothing cup of tea. Made with premium tea leaves and served hot or iced, our tea is the perfect way to take a moment for yourself. With a variety of flavors to choose from, there\'s a tea for every mood and occasion. Treat yourself to a calming cup of tea today!',
        salePrice: 1.2,
    },
];
