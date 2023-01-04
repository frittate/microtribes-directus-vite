import { getTribesByUser } from "../queries/getTribesByUser";
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { Tribe } from "../Interfaces/Tribe";

const GET_TRIBES = getTribesByUser

export function DisplayTribesForUser(props: { userId: any; }) {
  const { loading, error, data } = useQuery(GET_TRIBES, { variables: { userId: props.userId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Your Tribes as member:</h2>
      <ul>
        {
          data.users[0].tribes.map((tribe: Tribe) => (
            tribe.role.short_name === "member" && <Link to={`tribes/${tribe.id}`} key={tribe.id}>{tribe.tribes_id.slug}</Link>
          ))
        }
      </ul>

      <h2>Tribes you own:</h2>
      <ul>
        {
          data.users[0].tribes.map((tribe: Tribe) => (
            tribe.role.short_name === "owner" && <li key={tribe.id}>{tribe.tribes_id.slug}</li>
          ))
        }
      </ul>
    </div>
  );
}