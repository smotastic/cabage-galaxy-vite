import Galaxy from "./../model/galaxy";
export default interface CreateGalaxyUseCase {
  createGalaxy(galaxyName: string): Promise<Galaxy>;
}
