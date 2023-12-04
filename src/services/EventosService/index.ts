import { EventoDTO } from "@interfaces/EventoDTO";
import { httpClient } from "@services/HttpClient";
import { dateToISOString } from "@utils/index";

export class EventoService {
  static async createEvento(evento: EventoDTO, photo: File) {
    const formData = new FormData();
    formData.append("file", photo);
    formData.append("evento", JSON.stringify({ ...evento, dateHora: dateToISOString(evento.dateHora) }));
    return await httpClient({
      method: "post",
      url: "evento",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  static async listEventos(): Promise<EventoDTO[]> {
    const { data } = await httpClient.get("/evento");
    console.log(data)
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
