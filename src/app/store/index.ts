import { InjectionKey } from "vue";
import Vuex from "vuex";
import { TestmoduleState, TestmoduleStore } from "./testmodule";
import { createStore, useStore as baseUseStore, Store } from "vuex";

// define your typings for the store state
// export interface State {
//   count: number;
// }

// export const store = createStore<State>({
//   state: {
//     count: 5,
//   },
// });

export interface RootState {
  testmodule: TestmoduleState;
}

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = new Vuex.Store<RootState>({
  modules: {
    testmodule: TestmoduleStore,
  },
});

export function useStore() {
  return baseUseStore(key);
}
