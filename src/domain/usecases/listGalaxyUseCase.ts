import Galaxy from "./../model/galaxy";

export default interface ListGalaxyUseCase {
  listGalaxy(): Promise<Galaxy[]>;
}
