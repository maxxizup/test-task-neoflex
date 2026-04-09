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
        title: 'Apple BYZ S852I',
        price: 6789,
        rate: 4.3,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '2',
        img: earPods,
        images: [
            '/src/shared/assets/icons/Apple EarPods.png',
            '/src/shared/assets/icons/Apple AirPods.png',
            '/src/shared/assets/icons/mice.jpg',
        ],
        title: 'Apple EarPods',
        price: 4248,
        rate: 4.5,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '3',
        img: appleAirPods,
        images: ['/src/shared/assets/icons/AirPods.png'],
        title: 'Apple EarPods',
        price: 8853,
        rate: 4.5,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '4',
        img: appleBYZ,
        images: ['/src/shared/assets/icons/Apple BYZ S852I.png'],
        title: 'Apple BYZ S852I',
        price: 1813,
        rate: 4.6,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '5',
        img: earPods,
        images: ['/src/shared/assets/icons/Apple EarPods.png'],
        title: 'Apple EarPods',
        price: 3200,
        rate: 4,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '6',
        img: appleAirPods,
        images: ['/src/shared/assets/icons/Apple AirPods.png'],
        title: 'Apple EarPods',
        price: 2327,
        rate: 4,
        category: 'earphones',
        categoryTitle: 'Наушники',
        subCategoryTitle: 'Наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
    {
        id: '7',
        img: airPods,
        images: ['/src/shared/assets/icons/AirPods.png'],
        title: 'Apple AirPods',
        price: 9527,
        rate: 5,
        category: 'wireless',
        categoryTitle: 'Беспроводные наушники',
        subCategoryTitle: 'Беспроводные наушники',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
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
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
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
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor et facilis in, iste minima minus molestiae nemo numquam officiis, optio quae quia rem sapiente sint suscipit, tempore. Sapiente, soluta.',
    },
];
