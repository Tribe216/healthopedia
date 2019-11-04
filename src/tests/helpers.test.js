import { groupResourcesByCategory } from 'utilities/helpers';

const testResources = {
  All: {
    Resource: [
      {
        MyHFCategoryHeading: 'all heading',
        data: 'all 1 data'
      },
      {
        MyHFCategoryHeading: 'all heading',
        data: 'all 2 data'
      }
    ]
  },
  Pregnant: {},
  Interest: {
    Resource: [
      {
        MyHFCategoryHeading: 'interest heading',
        data: 'interest 1 data'
      }
    ]
  }
} 

it('sorts resource object into categories', () => {
  let sorted = groupResourcesByCategory(testResources);
  console.log(sorted)
  console.log(sorted[1].data)
  expect(sorted.length).toBe(2);
  expect(sorted[0].title).toBe('all heading');
  expect(sorted[1].title).toBe('interest heading');
  expect(sorted[0].data.length).toBe(2);
  expect(sorted[1].data[0].MyHFCategoryHeading).toBe('interest heading');
  expect(sorted[1].data[0].data).toBe('interest 1 data');
});


