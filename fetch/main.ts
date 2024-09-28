interface Pokemon {
  name: string;
  height: number;
  weight: number;
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
    console.log('fetchResponse: ', fetchResponse);
    console.log('data: ', data);
  } catch (error) {
    console.log('Error: ', error);
  }
}

fetchData();
