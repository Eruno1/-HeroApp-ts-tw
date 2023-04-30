import { getHeroesByPublisher } from "../helpers";

import { HeroCard } from "./HeroCard";

interface Props {
  publisher: "Marvel Comics" | "DC Comics";
}

export const HeroList: React.FC<Props> = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="md:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
