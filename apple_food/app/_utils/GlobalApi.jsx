import { gql, request } from 'graphql-request'

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEDN_API_URL;

const GetCategory = async () => {
  const query = gql` 
query Categories {
  categories {
    id
    name
    slug
    icon {
      url
    }
  }
}
`
  const result = await request(MASTER_URL, query);
  return result;
}

const GetBussines = async (category) => {
  const query = gql`
  query GetBussines {
  restaurants(where: {categories_some: {slug: "`+ category + `"}}) {
    aboutUs
    address
    banner {
      url
    }
    categories {
      name
    }
    id
    name
    restroType
    slug
    workingHours
  }
}
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  GetCategory, GetBussines
}