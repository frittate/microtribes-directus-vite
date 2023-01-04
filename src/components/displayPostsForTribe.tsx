import { getPostsByTribe } from '../queries/getPostsByTribe';
import { useQuery } from '@apollo/client';

const GET_POSTS = getPostsByTribe

interface Posts {
  posts_id: {
    id: string;
    title: string;
  }
}

export function DisplayPostsForTribe(props: { tribeId: any; }) {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: { tribeId: props.tribeId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

   return (
    <div>
      <h2>Posts in this tribe:</h2>
      <ul>
        {data.tribes[0].posts.map(({posts_id }: Posts) => (
          <li key={posts_id.id}>{posts_id.title}</li>
        ))
        }</ul>
    </div>
  );
}