import { v4 as uuid } from 'uuid';

const posts = [
  {
    title: 'Welcome to Sneaker Vault...',
    content:
      'Hi everyone, my name is George – sneakerhead of 4 years and I have no children, because I am not of the legal age yet.',
    tags: ['Nike', 'Adidas', 'New', 'Hot'],
    image: 'https://i.imgur.com/8I0MuVQ.jpg',
    date: Date.now(),
    id: uuid(),
  },
];

export default (req, res) => {
  res.json({ success: true, data: posts });
};
