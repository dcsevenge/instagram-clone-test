const API_URL = 'https://randomuser.me/api/';

async function fetchAPI(method = 'GET', path = '', body = '') {
    const headers = { 'Content-Type': 'application/json' };

    let param = {
        method,
        headers,
    };
    if (body) {
      param = {
          ...param,
          body
      }
    }

    const res = await fetch(`${API_URL}${path}`, param);
    return await res.json();
}

export async function getUserList({ size }) {
  const users = await fetchAPI('GET', `?format=json&results=${size}`);
  const buildUsers = users.results.map(user => {
    console.log({ user })
    return {
      ...user,
      isLiked: false,
      likeCount: user.dob.age
    }
  });
  return buildUsers;
}
