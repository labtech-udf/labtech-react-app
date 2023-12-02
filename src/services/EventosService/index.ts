import { EventoDTO } from "@interfaces/EventoDTO";
import { httpClient } from "@services/HttpClient";

export class EventoService {
  static async createEvento(evento: EventoDTO, photo: File) {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("evento", JSON.stringify(evento));
    return await httpClient({
      method: "post",
      url: "evento",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static async get(): Promise<EventoDTO[]> {
    const { data } = await httpClient.get("/evento");
    return data;
  }

  static async update() {
    // Exemplo
    // httpClient.put("/api/evento/:id", {})
  }

  static async delete() {
    // Exemplo
    // httpClient.delete("/api/evento/:id", {})
  }
}
