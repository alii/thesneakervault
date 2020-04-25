import md5 from 'md5';

const postMapper = post => {
  return {
    ...post,
    id: md5(post.title),
  };
};

const posts = [
  {
    title: 'Welcome to Sneaker Vault',
    content: `This is the content!`,
    tags: ['Nike', 'Adidas', 'New', 'Hot'],
    image: 'https://source.unsplash.com/NoVnXXmDNi0',
    date: Date.now(),
  },
  {
    title: 'Air Max 97 x Off-White',
    content: `Are you hyped for the Off-White x Nike Air Max 97? Or maybe you prefer one of the other nine silhouettes which arrives as part of this hyped collaboration. Otherwise, known as “The Ten” this release is scheduled to arrive in September following an initial release at exclusive outlets during Fashion Month.<br/><br/>
Given the hype for the Air Max 97 in 2017, this is expected to be one of the most sought-after of the collection. Creative visionary and Off-White founder Virgil Abloh manages to impart his sense of contemporary attitude onto this iconic silhouette. The result is a visually striking shoe that’s understated yet bold.<br/><br/>
It all starts with that classic heel-to-toe Air Unit which features in cream. This same colour is mirrored across the upper and an opposing black Swoosh sits along the sidewall. That “AIR” insignia is another attention grabbing style cue which separates this Air Max 97 from all others.<br/><br/>
Unlike the conventional leather and suede releases, this pair is crafted in a tough synthetic coated shell which gives added protection from the elements. A synthetic cable tie features in red and although this can be removed, we’re guessing most sneakerheads will proudly keep it attached.`,
    tags: ['Nike', 'Off-White', 'Air Max', '97'],
    image: 'https://source.unsplash.com/NE5-dPt9jIg',
    date: Date.now(),
  },
  {
    title: 'Welcome to Sneaker Vault...',
    content: `This is the content!`,
    tags: ['Nike', 'Adidas', 'New', 'Hot'],
    image: 'https://source.unsplash.com/NoVnXXmDNi0',
    date: Date.now(),
  },
].map(postMapper);

export default (req, res) => {
  res.json({ success: true, data: posts });
};
