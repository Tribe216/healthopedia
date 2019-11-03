
export const searchByKeyword = async (keyword) => {
  const url= new URL('https://healthfinder.gov/api/v2/topicsearch.json');
  return getResultsFromApi(url, {keyword})
}

export const searchByDemographic = async (age, sex) => {
  const url= new URL('https://healthfinder.gov/api/v2/myhealthfinder.json');
  return getResultsFromApi(url, {age, sex})
}

const getResultsFromApi = async (url, params) => {
  params.api_key = 'demo_api_key';
  url.search = new URLSearchParams(params).toString()
  
  const response = await fetch(url, {referrer: ""});
  const json = await response.json();
  return json
}