'use strict';
async function fetchUser() {
  try {
    const fetchResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse}`);
    }
    const data = await fetchResponse.json();
    console.log('data: ', data);
  } catch (error) {
    console.error(error);
  }
}
async function fetchData() {
  try {
    const fetchResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse}`);
    }
    const data = await fetchResponse.json();
    console.log('data: ', data);
  } catch (error) {
    console.log('Error: ', error);
  }
}
fetchUser();
fetchData();
