import md5 from 'md5';

const posts = [
  {
    title: 'Welcome to Sneaker Vault...',
    content:
      "Hi everyone, my name is George – sneakerhead of 4 years and best friends with a programmer who you probably haven't heard of.",
    tags: ['Nike', 'Adidas', 'New', 'Hot'],
    image: 'https://source.unsplash.com/NoVnXXmDNi0',
    date: Date.now(),
  },
].map(post => {
  return {
    ...post,
    id: md5(post.title),
  };
});

export default (req, res) => {
  res.json({ success: true, data: posts });
};
