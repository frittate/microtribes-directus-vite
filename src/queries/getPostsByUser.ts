import { gql } from "@apollo/client"

export const getPostsByUser = gql`
query ($userId: GraphQLStringOrFloat) {
  users(filter: { id: { _eq: $userId } }) {
    posts {
			id
      title
			post_tribes {
				tribes_id {
					slug
				}
			}
		}
	}
}
`