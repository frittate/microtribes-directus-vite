import { getPostsByUser } from '../queries/getPostsByUser';
import { useQuery } from '@apollo/client';
import { Post } from '../Interfaces/Post';

const GET_POSTS = getPostsByUser

export function DisplayPostsForUser(props: { userId: any; }) {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: { userId: props.userId } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

   return (
    <div>
      <h2>Your Posts:</h2>
      <ul>
        {data.users[0].posts.map((post: Post) => (
          <li key={post.id}>{post.title} in {
            post.post_tribes.map((tribe) => (
              <span key={tribe.id}>{tribe.tribes_id.slug}</span>
            )
            )
          }</li>
        ))
        }</ul>
    </div>
  );
}