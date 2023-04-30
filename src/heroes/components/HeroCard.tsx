import { Link } from "react-router-dom";

interface IHero {
  id: string;
  superhero: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export const HeroCard: React.FC<IHero> = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const getHeroImg = `./assets/heroes/${id}.jpg`;

  return (
    <div className="aspect-auto rounded shadow-lg flex my-3 items-center">
      <img alt={superhero} className="max-h-40" src={getHeroImg} />
      <div className="px-6 py-6 flex flex-col">
        <div className="font-bold text-xl mb-2">{superhero}</div>
        <p className="text-gray-700 text-base">{alter_ego}</p>
        {alter_ego !== characters && characters.length > 20 ? (
          `${characters.substring(0, 20)}...`
        ) : alter_ego !== characters ? (
          <p className=" mb-2">{characters}</p>
        ) : (
          ""
        )}
        <p className=" mb-2">
          <small>{first_appearance}</small>
        </p>
        <Link
          className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
          to={`/hero/${id}`}
        >
          Ver más...
        </Link>
      </div>
    </div>
  );
};
