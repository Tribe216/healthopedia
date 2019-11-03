
export const searchByKeyword = async (keyword) => {
  const url= new URL('https://healthfinder.gov/api/v2/topicsearch.json');

  const params={
    api_key: 'demo_api_key',
    keyword: keyword
  }
  url.search = new URLSearchParams(params).toString()
  
  const response = await fetch(url, {referrer: ""});
  const json = await response.json();
  return json
}