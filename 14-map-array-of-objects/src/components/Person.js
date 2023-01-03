function Person(params) {
  return <h1 key={params.id}>{params.first_name}</h1>;
}
export default Person;
