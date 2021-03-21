import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from "../../infrastructure/inversify.config";
import TYPES from "../../domain/galaxyTypes";
import ListGalaxyUseCase from "../../domain/usecases/listGalaxyUseCase";
import CreateGalaxyUseCase from "../../domain/usecases/createGalaxyUseCase";
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
  @lazyInject(TYPES.ListGalaxyUseCase)
  public listUsecase!: ListGalaxyUseCase;
  @lazyInject(TYPES.CreateGalaxyUseCase)
  public createUsecase!: CreateGalaxyUseCase;
  public galaxies: Galaxy[] = [];

  @Mutation
  setGalaxies(items: Galaxy[]) {
    this.galaxies = items;
  }
  @Mutation
  addGalaxyToItems(item: Galaxy) {
    this.galaxies.push(item);
  }

  @Action({ rawError: true })
  async fetchGalaxies() {
    const list = await this.listUsecase.listGalaxy();
    this.setGalaxies(list);
  }

  @Action
  async addGalaxy(galaxyName: string) {
    const createdGalaxy: Galaxy = await this.createUsecase.createGalaxy(
      galaxyName
    );
    this.addGalaxyToItems(createdGalaxy);
  }
}
