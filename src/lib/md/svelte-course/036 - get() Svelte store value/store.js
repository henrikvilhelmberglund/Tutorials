import { writable } from "svelte/store";

export const store = writable(1);

export function calculateDoubleValue(store) {
  // this has nothing to do with the Svelte version that automatically subscribes
  let $store;
  const unsubscribe = store.subscribe(value => {
    $store = value;
  })
  unsubscribe();
  return $store * 2;
}