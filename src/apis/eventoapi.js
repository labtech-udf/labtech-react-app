import client from "./api";

export async function listEventos() {
  try {
    const response = client.get("/evento");
    return response;
  } catch (error) {
    return error;
  }
}
