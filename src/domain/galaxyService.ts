import Galaxy from "~/src/domain/model/galaxy";
import { inject } from "inversify";
import TYPES from "./galaxyTypes";
import GalaxyPort from "./ports/galaxyPort";
import CreateGalaxyUseCase from "./usecases/createGalaxyUseCase";

export default class GalaxyService implements CreateGalaxyUseCase {
  private _galaxyPort: GalaxyPort;

  public constructor(@inject(TYPES.GalaxyPort) _galaxyPort: GalaxyPort) {
    this._galaxyPort = _galaxyPort;
  }

  createGalaxy(galaxyName: string): Promise<Galaxy> {
    return this._galaxyPort.createGalaxy(galaxyName);
  }
}
