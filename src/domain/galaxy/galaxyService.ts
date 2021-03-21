import Galaxy from "./model/galaxy";
import { inject, injectable } from "inversify";
import TYPES from "./galaxyTypes";
import GalaxyPort from "./ports/galaxyPort";
import CreateGalaxyUseCase from "./usecases/createGalaxyUseCase";
import ListGalaxyUseCase from "./usecases/listGalaxyUseCase";
import galaxy from "./model/galaxy";

@injectable()
export default class GalaxyService
  implements CreateGalaxyUseCase, ListGalaxyUseCase {
  private _galaxyPort: GalaxyPort;

  public constructor(@inject(TYPES.GalaxyPort) _galaxyPort: GalaxyPort) {
    this._galaxyPort = _galaxyPort;
  }
  listGalaxy(): Promise<Galaxy[]> {
    return this._galaxyPort.listGalaxy();
  }

  createGalaxy(galaxyName: string): Promise<Galaxy> {
    return this._galaxyPort.createGalaxy(galaxyName);
  }
}
