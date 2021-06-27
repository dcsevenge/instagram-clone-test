const API_URL = 'https://random-data-api.com/api/users/random_user';

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
  return await fetchAPI('GET', `?size=${size}`);
}
