import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from "../../infrastructure/inversify.config";
import TYPES from "../../domain/galaxyTypes";
import ListGalaxyUseCase from "../../domain/usecases/listGalaxyUseCase";
import Galaxy from "../../domain/model/galaxy";
import { toHandlers } from "@vue/runtime-core";
export interface TestmoduleState {
  galaxies: Galaxy[];
}

@Module({
  name: "testmodule",
  namespaced: true,
})
export class TestmoduleStore extends VuexModule implements TestmoduleState {
  @lazyInject(TYPES.CreateGalaxyUseCase)
  public usecase!: ListGalaxyUseCase;
  public galaxies: Galaxy[] = [];

  @Mutation
  setGalaxies(items: Galaxy[]) {
    this.galaxies = items;
  }

  @Action({ rawError: true })
  async fetchItems() {
    const list = await this.usecase.listGalaxy();
    this.setGalaxies(list);
  }
}
