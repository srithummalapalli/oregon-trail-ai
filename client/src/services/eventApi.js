export async function fetchEvent() {
  const response = await fetch("/api/event");

  if (!response.ok) {
    throw new Error("Unable to fetch a trail event.");
  }

  return response.json();
}
