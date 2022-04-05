const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Nunc rhoncus dui vel sem.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'Proin risus. Praesent lectus.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'Quisque porta volutpat erat.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'In hac habitasse platea dictumst.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
