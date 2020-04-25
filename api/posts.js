import md5 from 'md5';

const postMapper = post => {
  return {
    ...post,
    id: md5(post.title),
    tags: post.tags.map(tag => tag.toLowerCase()),
  };
};

const posts = [
  {
    title: 'Jordan 1 Mid Shattered Backboard',
    content: `The Jordan 1 Mid Shattered Backboard is one of the most iconic AJ1 colourways to ever exist – period. Getting its name from Michael Jordan’s second NBA season when he so forcefully dunked at the net that it completely shattered the glass backboard, this shoe is considered by many sneakerheads to be the holy grail, and now, you can cop a pair from the retailers listed on this page!
Crafted from a combination of tumbled leather and buttery smooth suede, the Jordan 1 Mid Shattered Backboard works on a clean white base with black and orange panels overlaying for that iconic 1985 aesthetic. A pair of orange Swooshes shoot across the lateral and medial side panels, while the legendary Jumpman logo and signature winged basketball motif graces the tongue and ankle, respectively. To round it all off, perforations make their way to the toe box, and an Air infused midsole sits down below for comfort that’s been changing the game for decades.
If you want a piece of history in your collection, grab the Jordan 1 Mid Shattered Backboard right now! Priced at just £85 a pop, you really don’t want to miss out on this once in a lifetime cop! What are you waiting for?!`,
    tags: ['Nike', 'Jordan'],
    image: 'https://www.milk-store.com/35570-thickbox_default/jordan-1-mid-shattered-backboard-ps-640734-058.jpg',
    date: Date.now(),
  },
  {
    title: 'Air Max 97 x Off-White',
    content: `Are you hyped for the Off-White x Nike Air Max 97? Or maybe you prefer one of the other nine silhouettes which arrives as part of this hyped collaboration. Otherwise, known as “The Ten” this release is scheduled to arrive in September following an initial release at exclusive outlets during Fashion Month.<br/><br/>
Given the hype for the Air Max 97 in 2017, this is expected to be one of the most sought-after of the collection. Creative visionary and Off-White founder Virgil Abloh manages to impart his sense of contemporary attitude onto this iconic silhouette. The result is a visually striking shoe that’s understated yet bold.<br/><br/>
It all starts with that classic heel-to-toe Air Unit which features in cream. This same colour is mirrored across the upper and an opposing black Swoosh sits along the sidewall. That “AIR” insignia is another attention grabbing style cue which separates this Air Max 97 from all others.<br/><br/>
Unlike the conventional leather and suede releases, this pair is crafted in a tough synthetic coated shell which gives added protection from the elements. A synthetic cable tie features in red and although this can be removed, we’re guessing most sneakerheads will proudly keep it attached.`,
    tags: ['Nike', 'Off-White', 'Air Max', '97', 'off white'],
    image: 'https://source.unsplash.com/NE5-dPt9jIg',
    date: Date.now(),
  },
  {
    title: 'Welcome to The Sneaker Vault',
    content: `This is the content!`,
    tags: ['Modpost', 'mod', 'moderator'],
    image: 'https://source.unsplash.com/6wAGwpsXHE0',
    date: Date.now(),
  },
].map(postMapper);

export default (req, res) => {
  res.json({ success: true, data: posts });
};
