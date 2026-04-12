import { ProductType } from '@entities/productItem';
import appleBYZ from '@shared/assets/icons/Apple BYZ S852I.png';
import earPods from '@shared/assets/icons/Apple EarPods.png';
import appleAirPods from '@shared/assets/icons/Apple AirPods.png';
import airPods from '@shared/assets/icons/AirPods.png';
import herlax from '@shared/assets/icons/HERLAX GH- 04.png';
import borofone from '@shared/assets/icons/BOROFONE BO4.png';

export const MOCK_PRODUCTS: ProductType[] = [
    {
        id: '1',
        img: appleBYZ,
        images: [
            '/src/shared/assets/icons/Apple BYZ S852I.png',
            '/src/shared/assets/icons/Apple EarPods.png',
            '/src/shared/assets/icons/earphones.jpg',
        ],
        title: 'Apple BYZ S852I Pro',
        price: 6789,
        rate: 4.3,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Проводные наушники с качественным звуком и удобной посадкой для повседневного использования. Оснащены мягкими амбушюрами и прочным кабелем, который не спутывается при переноске. Подходят для прослушивания музыки, просмотра видео и разговоров. Отличный выбор для тех, кто ищет надежное и доступное решение на каждый день.'},
    {
        id: '2',
        img: earPods,
        images: [
            '/src/shared/assets/icons/Apple EarPods.png',
            '/src/shared/assets/icons/Apple AirPods.png',
            '/src/shared/assets/icons/mice.jpg',
        ],
        title: 'Apple EarPods Classic',
        price: 4248,
        rate: 4.5,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Классические проводные наушники с фирменным звучанием и эргономичной формой. Обеспечивают чистый звук и комфорт даже при длительном использовании. Встроенный пульт управления позволяет легко переключать треки и отвечать на звонки. Идеально подходят для использования с мобильными устройствами и ноутбуками.'},
    {
        id: '3',
        img: appleAirPods,
        images: ['/src/shared/assets/icons/AirPods.png'],
        title: 'Apple EarPods Lightning',
        price: 8853,
        rate: 4.5,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Современные наушники с улучшенной акустикой и стильным дизайном. Обеспечивают насыщенный звук с глубокими басами и четкими высокими частотами. Легкие и удобные, они отлично подходят для повседневного использования дома, в дороге или на работе. Хороший выбор для ценителей качества и комфорта.'},
    {
        id: '4',
        img: appleBYZ,
        images: ['/src/shared/assets/icons/Apple BYZ S852I.png'],
        title: 'Apple BYZ S852I Lite',
        price: 1813,
        rate: 4.6,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Надежные проводные наушники с оптимальным балансом цены и качества. Обеспечивают стабильное звучание и комфортную посадку. Подходят для прослушивания музыки, онлайн-звонков и повседневного использования. Компактный дизайн позволяет легко брать их с собой в поездки.'},
    {
        id: '5',
        img: earPods,
        images: ['/src/shared/assets/icons/Apple EarPods.png'],
        title: 'Apple EarPods Mini',
        price: 3200,
        rate: 4,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Практичные наушники с простым и удобным дизайном. Обеспечивают достойное качество звука и подходят для повседневных задач. Легкие и компактные, они не занимают много места и легко помещаются в кармане или сумке. Отличный вариант для тех, кто ищет доступное решение без лишних функций.'},
    {
        id: '6',
        img: appleAirPods,
        images: ['/src/shared/assets/icons/Apple AirPods.png'],
        title: 'Apple AirPods WE',
        price: 2327,
        rate: 4,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Универсальные наушники с хорошей звукоизоляцией и комфортной посадкой. Подходят для прослушивания музыки, просмотра фильмов и общения. Обеспечивают стабильное качество звука и удобство в использовании. Отличный выбор для ежедневного использования дома и вне его.'},
    {
        id: '7',
        img: airPods,
        images: ['/src/shared/assets/icons/AirPods.png'],
        title: 'Apple AirPods 2nd Gen',
        price: 9527,
        rate: 5,
        category: 'wireless',
        categoryTitle: 'Беспроводные наушники',
        subCategoryTitle: 'Беспроводные наушники',
        description:
            'Беспроводные наушники с высоким качеством звука и удобным управлением. Обеспечивают свободу движений благодаря отсутствию проводов. Поддерживают стабильное соединение и длительное время работы от аккумулятора. Подходят для занятий спортом, прогулок и повседневного использования.'},
    {
        id: '8',
        img: herlax,
        images: ['/src/shared/assets/icons/HERLAX GH- 04.png'],
        title: 'GERLAX GH-04',
        price: 6527,
        rate: 3.8,
        category: 'wireless',
        categoryTitle: 'Беспроводные наушники',
        subCategoryTitle: 'Беспроводные наушники',
        description:
            'Стильные беспроводные наушники с хорошей автономностью и современным дизайном. Обеспечивают чистое звучание и комфорт при длительном использовании. Поддерживают быстрое подключение к устройствам и удобное управление. Отличный вариант для активного образа жизни.'},
    {
        id: '9',
        img: borofone,
        images: ['/src/shared/assets/icons/BOROFONE BO4.png'],
        title: 'BOROFONE BO4',
        price: 7527,
        rate: 4.1,
        category: 'wireless',
        categoryTitle: 'Беспроводные наушники',
        subCategoryTitle: 'Беспроводные наушники',
        description:
            'Беспроводные наушники с сбалансированным звуком и надежным соединением. Подходят для прослушивания музыки, звонков и повседневного использования. Удобная конструкция обеспечивает комфорт даже при длительном ношении. Хороший выбор для тех, кто ценит практичность и качество.'},
];
