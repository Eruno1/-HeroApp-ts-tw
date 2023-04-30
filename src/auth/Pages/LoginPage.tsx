import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1>Login</h1>
      <hr />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
};
