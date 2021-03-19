import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

export interface TestmoduleState {
  items: string[];
}

@Module({
  name: "testmodule",
  namespaced: true,
})
export class TestmoduleStore extends VuexModule implements TestmoduleState {
  public items: string[] = ["hallo", "hello"];
}
