export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bezeichnung',
      title: 'Bezeichnung',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Burger', value: 'burger' },
          { title: 'Würstel und Co', value: 'Wurstel' },
          { title: 'Großer hunger', value: 'groseHunger' },
          { title: 'Salata', value: 'salata' },
          { title: 'Snacks', value: 'snacks' },
          { title: 'Beilagen/Saucen/Dips', value: 'dips' },
        ],
      },
    },
  ],
};
