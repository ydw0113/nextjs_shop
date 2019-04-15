import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const CATEGORY_QUERY = gql`
  query categoryQuery($name: String) {
    categories {
      id
      name
    }
    onSale: products(where: { AND: [{ onSale: true }, { category: $name }] }) {
      ...ProductItems
    }
    allProducts: products(
      where: { AND: [{ onSale: false }, { category: $name }] }
    ) {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;
