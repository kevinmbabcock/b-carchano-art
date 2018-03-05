import photo1 from './../assets/images/photo1.jpg';
import photo2 from './../assets/images/photo2.jpg';
import photo3 from './../assets/images/photo3.jpg';

const masterWorksList = {
  1: {
    title: 'work number one',
    medium: 'acrylic',
    description: 'this is the description for work number one',
    height: 28,
    width: 20,
    price: 100,
    forSale: true,
    featured: true,
    id: 1,
    img: photo1
  },
  2: {
    title: 'work number 2',
    medium: 'ink',
    description: 'this is the description for work number 2',
    height: 32,
    width: 18,
    price: 150,
    forSale: true,
    featured: true,
    id: 2,
    img: photo2
  },
  3: {
    title: 'work number 3',
    medium: 'water-color',
    description: 'this is the description for work number 3',
    height: 18,
    width: 12,
    price: 80,
    forSale: false,
    featured: false,
    id: 3,
    img: photo3
  }
};

const masterInquiriesList = {
  1: {
    name: 'Kevin',
    email: 'babsy10@gmail.com',
    inquiry: 'this is Kevin\'s inquiry',
    new: true
  },
  2: {
    name: 'Brittany',
    email: 'bcarchano@gmail.com',
    inquiry: 'this is Brittany\'s inquiry',
    new: false
  }
};

// const workType = {
//   1: 'all',
//   2: 'acrylic',
//   3: 'ink',
//   4: 'water-color'
// }

export const initialState = {
  worksList: masterWorksList,
  // workType: 1,
  // selectedWorkId: 1,
  // isAdmin: false,
  // purchaseInquiry: false,
  inquiriesList: masterInquiriesList
};
