import { gql } from "@apollo/client"

export const getPostsByTribe = gql`
query ($tribeId: GraphQLStringOrFloat) {
  tribes(filter: { id: { _eq: $tribeId } }) {
		id
		posts {
			posts_id {
				id
				title
			}
		}
	}
}
`