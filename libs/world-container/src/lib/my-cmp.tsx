import { useCallback } from "react";
import { useState } from "react"

export const useWithLogic1 = (opts: any) => {
  const [label] = useState('world state label');

  return {
    ...opts,
    label
  }
}

export const useWithLogic2 = (opts: any) => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count, setCount]);

  return {
    ...opts,
    count,
    increment
  }

}

export const MyCmpRender = ({propsLabel, label, count, increment}: any) => {
  return (<>
  <div>My Cmp</div>
  <div>Props label: {propsLabel}</div>
  <div>State label: {label}</div>
  <div>Count: {count}</div>

  <button onClick={increment}>Increment</button>
  </>)
}

/**
 * @description
 * React component could be considered as a pipe function fulfilled with mixins and ended with render fn
 * This allows to easily navigate in each part of logic and replace it
 */
export default [useWithLogic1, useWithLogic2, MyCmpRender];
