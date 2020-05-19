import { createContext } from 'react';

const ContextJourney = createContext({
  active: false,
  steps: []
});

export { default as Tour } from './Tour';
export { default as TourItem } from './TourItem';
export { default as TourTip } from './TourTip';

export function register(el) {
  tourStore.update(store => ({
    ...store,
    items: [...store.items, el]
  }));
};

export function run() {
  tourStore.update(store => ({
    ...store,
    active: true
  }));
};

export function stop() {
  tourStore.update(store => ({
    ...store,
    active: false
  }));
};

export function unregister(el) {
  tourStore.update(store => ({
    ...store,
    items: store.items.filter(item => item !== el)
  }));
}

export const subscribe = tourStore.subscribe.bind(tourStore);
