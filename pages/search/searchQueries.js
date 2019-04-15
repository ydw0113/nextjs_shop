import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const SEARCH_QUERY = gql`
  query searchQuery($searchTerm: String!) {
    categories {
      id
      name
    }
    products(
      where: {
        OR: [
          { name_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
