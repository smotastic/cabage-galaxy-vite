import { injectable } from "inversify";
import Galaxy from "../../domain/galaxy/model/galaxy";
import GalaxyPort from "../../domain/galaxy/ports/galaxyPort";

@injectable()
export default class GalaxyAdapter implements GalaxyPort {
  async createGalaxy(galaxyName: string): Promise<Galaxy> {
    const galaxies: Galaxy[] = await this.listGalaxy();
    const createdGalaxy: Galaxy = {
      name: galaxyName,
      id: galaxies.length + 1,
    };
    galaxies.push(createdGalaxy);
    localStorage.setItem("galaxies", JSON.stringify(galaxies));
    return Promise.resolve(createdGalaxy);
  }

  listGalaxy(): Promise<Galaxy[]> {
    return Promise.resolve(
      JSON.parse(localStorage.getItem("galaxies") || "[]")
    );
  }
}
