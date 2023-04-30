import { Navigate, useNavigate, useParams } from "react-router-dom";

import { getHeroById } from "../helpers";

export const HeroPage: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const hero = id && getHeroById(id);

  const getHeroImg = `../../assets/heroes/${id}.jpg`;

  const onBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <>
      <div className="flex py-12  gap-6">
        <img
          src={getHeroImg}
          alt={`image of ${hero.superhero}`}
          className="max-h-80"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold">{hero.superhero}</h1>
          <div className="pl-4 flex gap-1 flex-col">
            <h3>
              <strong>Alter ego: </strong>
              {hero.alter_ego}
            </h3>
            <hr />
            <h3>
              <strong>Publisher: </strong>
              {hero.publisher}
            </h3>
            <hr />
            <h3>
              <strong>First apprearance: </strong>
              {hero.first_appearance}
            </h3>
          </div>
          <div className="flex flex-col gap-1 justify-end h-full">
            <h2>
              <strong>Characters</strong>
            </h2>
            <h3>{hero.characters}</h3>
            <button
              className="px-2 py-1 text-blue-500 border border-blue-500 rounded-md max-w-fit"
              onClick={onBack}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
