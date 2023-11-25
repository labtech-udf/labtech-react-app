import { EventoDTO } from "@interfaces/EventoDTO";
import { httpClient } from "@services/HttpClient";

export class EventoService {
  static async create(params: EventoDTO) {
    return await httpClient.post("/evento", params)
  }

  static async get(): Promise<EventoDTO[]> {
    const { data } = await httpClient.get("/evento")
    return data
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
