import Galaxy from "../model/galaxy";

export default interface GalaxyPort {
  createGalaxy(galaxyName: string): Promise<Galaxy>;

  listGalaxy(): Promise<Galaxy[]>;
}
