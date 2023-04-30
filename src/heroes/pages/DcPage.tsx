import { HeroList } from "../components/HeroList";

export const DcPage: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
