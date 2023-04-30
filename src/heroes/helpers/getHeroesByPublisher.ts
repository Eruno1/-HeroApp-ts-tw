import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: "Marvel Comics" | "DC Comics") => {
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
