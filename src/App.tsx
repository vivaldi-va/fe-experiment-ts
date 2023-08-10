import { useQuery } from '@apollo/client';
import {
  PeopleQuery,
  PeopleQueryVariables,
  PeopleDocument,
  Person,
  PersonQuery,
  PersonQueryVariables,
  PersonDocument,
} from '@/generated/gql/graphql';
import './App.css'

function App() {
  const { data, loading: peopleLoading } = useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument);
  const { data: personData, loading: personLoading } = useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, {
    variables: { personId: 'cGVvcGxlOjc5' }
  });


  if (peopleLoading || personLoading) return 'people loading'
  const { person } = personData;

  return (
    <>
      <h3>
        Person: {!personLoading && person.name}
      </h3>
      <div>
        {data!.allPeople!.people.map((p: Person) => (<p key={p!.id}>{p!.name}: {p.id}</p>))}
      </div>
    </>
  )
}

export default App
