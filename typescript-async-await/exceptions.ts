import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  try {
    const msg = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', msg);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral(): Promise<void> {
  try {
    const msg = await read('foo1', true);
    console.log(elapsed(), 'throwSeveral1:', msg);
    const msg2 = await read('foo2', true);
    console.log(elapsed(), 'throwSeveral1:', msg2);
    const msg3 = await read('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
    return;
  }
  // try {
  // } catch (error) {
  //   console.log(elapsed(), 'throwSeveral Error:', error);
  //   return;
  // }
  // try {
  //   const msg = await read('foo3', true);
  //   console.log(elapsed(), 'throwSeveral3:', msg);
  // } catch (error) {
  //   console.log(elapsed(), 'throwSeveral Error:', error);
  //   return;
  // }
}

async function throwChained(): Promise<void> {
  try {
    const msg1 = await read('foo-chain', true);
    console.log(elapsed(), 'throwChained1:', msg1);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
    return;
  }
  try {
    const msg2 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg2);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
    return;
  }
  try {
    const msg3 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
    return;
  }

  // return read('foo-chain', false)
  //   .then((msg1) => {
  //     console.log(elapsed(), 'throwChained1:', msg1);
  //     return read(msg1, false);
  //   })
  //   .then((msg2) => {
  //     console.log(elapsed(), 'throwChained2:', msg2);
  //     return read(msg2, false);
  //   })
  //   .then((msg3) => console.log(elapsed(), 'throwChained3:', msg3))
  //   .catch((error) => console.log(elapsed(), 'throwChained Error:', error));
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'thrown Error:', error);
}
