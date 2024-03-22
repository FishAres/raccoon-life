//todo fix this so it isn't a hack
export async function getRaccoons() {
  const res = await fetch("/api/raccoons");
  if (!res.ok) {
    throw {
      message: "Failed to find raccoons",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.raccoons || [];
}
