interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchUser(): Promise<void> {
  try {
    const fetchResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse}`);
    }
    const data = (await fetchResponse.json()) as User;
    console.log('data: ', data);
  } catch (error) {
    console.error(error);
  }
}

async function fetchData(): Promise<void> {
  try {
    const fetchResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon/ditto'
    );

    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse}`);
    }

    const data = (await fetchResponse.json()) as Pokemon;
    console.log('data: ', data);
  } catch (error) {
    console.log('Error: ', error);
  }
}

fetchUser();
fetchData();
