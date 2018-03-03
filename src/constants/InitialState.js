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
    img: 'image placeholder'
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
    img: 'image placeholder'
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
    img: 'image placeholder'
  }
}

const workType = {
  1: 'all',
  2: 'acrylic',
  3: 'ink',
  4: 'water-color'
}

export const initialState = {
  worksList: masterWorksList,
  workType: 1,
  selectedWorkId: 1,
  isAdmin: false,
  purchaseInquiry: false
}