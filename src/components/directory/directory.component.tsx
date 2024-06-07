import { Key } from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: 'instruments',
    imageUrl: '/img/instruments.jpeg',
    route: 'shop/instruments',
  },
  {
    id: 2,
    title: 'books',
    imageUrl: '/img/books.jpeg',
    route: 'shop/books',
  },
  {
    id: 3,
    title: 'accessories',
    imageUrl: '/img/accessories.jpeg',
    route: 'shop/accessories',
  },
  {
    id: 4,
    title: 'Audio Equipment',
    imageUrl: '/img/equipment.jpeg',
    route: 'shop/audio%20equipment',
  },
  {
    id: 5,
    title: 'clothing',
    imageUrl: '/img/clothing.jpeg',
    route: 'shop/clothing',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
