import { useCallback, useEffect, useState } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);
  const callback = useCallback(getData, []);

  useEffect(() => {
    const data = getData();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [callback]);

  function getData() {
    // fetch data
    return { foo: 'bar' };
  }

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
