import { gql } from "@apollo/client"

export const getTribesByUser = gql`
query ($userId: GraphQLStringOrFloat) {
  users(filter: { id: { _eq: $userId } }) {
		username
		tribes {
			id
			role {
				short_name
			}
			tribes_id {
				 slug
			}
		}
	}
}
`
