import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "../domain/galaxyTypes";
import getDecorators from "inversify-inject-decorators";
import GalaxyPort from "../domain/ports/galaxyPort";
import GalaxyAdapter from "./galaxyAdapter";
import CreateGalaxyUseCase from "../domain/usecases/createGalaxyUseCase";
import GalaxyService from "../domain/galaxyService";

const container = new Container();
container.bind<GalaxyPort>(TYPES.GalaxyPort).to(GalaxyAdapter);
container
  .bind<CreateGalaxyUseCase>(TYPES.CreateGalaxyUseCase)
  .to(GalaxyService);

const { lazyInject } = getDecorators(container);
export { lazyInject, container };
