import { InjectionKey } from "vue";
import Vuex from "vuex";
import { GalaxyState, GalaxyStore } from "./galaxy/galaxyModule";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { VuexModule, getModule } from "vuex-module-decorators";

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
  galaxyModule: GalaxyState;
}

// define injection key
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = new Vuex.Store<RootState>({
  modules: {
    galaxyModule: GalaxyStore,
  },
});

function useStore() {
  return baseUseStore(key);
}
declare type ConstructorOf<C> = {
  new (...args: any[]): C;
};

export function useModule<M extends VuexModule>(
  moduleClass: ConstructorOf<M>
): M {
  const store = useStore();
  const moduleStore: M = getModule(moduleClass, store);
  return moduleStore;
}
