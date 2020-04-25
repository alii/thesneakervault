import md5 from 'md5';

const posts = [
  {
    title: 'Welcome to Sneaker Vault...',
    content: `Hi everyone, my name is George – sneakerhead of 4 years and best friends with a programmer who you probably haven't heard of.
    <br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin maximus massa, vel suscipit justo sagittis id. Donec efficitur leo turpis, vel placerat nibh lobortis ut. Fusce nec mi in lacus imperdiet maximus. Vivamus quis ante sit amet eros suscipit tempor. Phasellus eu bibendum felis. Nullam sagittis, lacus a hendrerit eleifend, felis sem dignissim elit, sed feugiat nulla sem sit amet metus. Vestibulum ornare lobortis dolor in elementum. Mauris vel massa et nibh dapibus finibus non eget ipsum. Pellentesque vulputate nibh ac turpis hendrerit ornare. Ut mattis in mauris ac consectetur. Morbi luctus nisl eu tellus dignissim pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam a enim eu justo finibus consectetur.`,
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
