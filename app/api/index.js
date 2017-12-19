export function createLink({ topicName, url, description }) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
      description,
      topicName,
    }),
  }).then(response => response.json());
}
export function incrementVote(args) {
  const id = args.id
  const email = args.email
  const increment = args.increment


  console.log("id: ", id, "email :", email);
  return fetch(`/api/links/${id}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      id,
      increment,
    }),
  }).then(response => response.json());
}
