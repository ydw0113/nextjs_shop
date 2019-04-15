import { gql } from "apollo-boost";

export const CALENDAR_QUERY = gql`
  {
    reservations(where: { OR: [{ date: "2019-02-18T18:21:00.000Z" }] }) {
      ondate
    }
  }
`;
