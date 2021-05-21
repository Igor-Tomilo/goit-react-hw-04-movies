import "./style.scss";

const ActorCard = ({ actor }) => {
  const { profile_path, character } = actor;
  const baseURL = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : "https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif";
  return (
    <li className="itemActor">
      <img className="actorIMG" src={baseURL} alt={actor.name} />
      <p>{actor.name}</p>
      <p>Character: {character}</p>
    </li>
  );
};
export default ActorCard;
