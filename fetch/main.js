'use strict';
async function fetchData() {
  try {
    const fetchResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse}`);
    }
    const data = await fetchResponse.json();
    console.log('fetchResponse: ', fetchResponse);
    console.log('data: ', data);
  } catch (error) {
    console.log('Error: ', error);
  }
}
fetchData();
