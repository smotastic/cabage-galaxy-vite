import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from "../../../infrastructure/galaxy/inversify.config";
import TYPES from "../../../domain/galaxy/galaxyTypes";
import ListGalaxyUseCase from "../../../domain/galaxy/usecases/listGalaxyUseCase";
import CreateGalaxyUseCase from "../../../domain/galaxy/usecases/createGalaxyUseCase";
import Galaxy from "../../../domain/galaxy/model/galaxy";
import { toHandlers } from "@vue/runtime-core";
export interface GalaxyState {
  galaxies: Galaxy[];
}

@Module({
  name: "galaxyModule",
  namespaced: true,
})
export class GalaxyStore extends VuexModule implements GalaxyState {
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
