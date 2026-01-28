const BASE_URL = "http://localhost:3000";

export async function fetchApi(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Erreur API");
  }

  const json = await response.json();
  return json.data;
}
