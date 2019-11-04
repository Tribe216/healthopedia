export const groupResourcesByCategory = resources => {
  const categoryCodes = ['All', 'Pregnant', 'Some', 'Interest']
  let categoryObject = [];
  categoryCodes.forEach( code => {
    let resourceArray = resources[code] && resources[code].Resource;
    if (resourceArray && resourceArray.length > 0) {
      categoryObject.push({
        title: resourceArray[0].MyHFCategoryHeading,
        data: resourceArray
      })
    }
  })

  return categoryObject;
}