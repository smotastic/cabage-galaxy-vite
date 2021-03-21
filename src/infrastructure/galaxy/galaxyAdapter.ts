import { injectable } from "inversify";
import Galaxy from "../../domain/galaxy/model/galaxy";
import GalaxyPort from "../../domain/galaxy/ports/galaxyPort";

@injectable()
export default class GalaxyAdapter implements GalaxyPort {
  private _galaxies: Galaxy[] = [{ name: "Galaxy 1", id: 1 }];

  createGalaxy(galaxyName: string): Promise<Galaxy> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
      const createdGalaxy: Galaxy = {
        name: galaxyName,
        id: this._galaxies.length + 1,
      };
      this._galaxies.push(createdGalaxy);
      resolve(createdGalaxy);
    });
  }

  listGalaxy(): Promise<Galaxy[]> {
    return Promise.resolve(this._galaxies);
  }
}
