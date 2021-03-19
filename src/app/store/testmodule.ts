import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { lazyInject } from "../../infrastructure/inversify.config";
import TYPES from "../../domain/galaxyTypes";
import CreateGalaxyUseCase from "../../domain/usecases/createGalaxyUseCase";
export interface TestmoduleState {
  items: string[];
  usecase: CreateGalaxyUseCase;
}

@Module({
  name: "testmodule",
  namespaced: true,
})
export class TestmoduleStore extends VuexModule implements TestmoduleState {
  @lazyInject(TYPES.CreateGalaxyUseCase)
  public usecase!: CreateGalaxyUseCase;
  public items: string[] = ["hallo", "hello"];
}
