import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "../../domain/galaxy/galaxyTypes";
import getDecorators from "inversify-inject-decorators";
import GalaxyPort from "../../domain/galaxy/ports/galaxyPort";
import GalaxyAdapter from "./galaxyAdapter";
import CreateGalaxyUseCase from "../../domain/galaxy/usecases/createGalaxyUseCase";
import ListGalaxyUseCase from "../../domain/galaxy/usecases/listGalaxyUseCase";
import GalaxyService from "../../domain/galaxy/galaxyService";

const container = new Container();
container.bind<GalaxyPort>(TYPES.GalaxyPort).to(GalaxyAdapter);
container
  .bind<CreateGalaxyUseCase>(TYPES.CreateGalaxyUseCase)
  .to(GalaxyService);
container.bind<ListGalaxyUseCase>(TYPES.ListGalaxyUseCase).to(GalaxyService);

const { lazyInject } = getDecorators(container);
export { lazyInject, container };
