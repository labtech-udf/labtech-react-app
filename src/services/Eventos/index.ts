import { EventoDTO } from "@interfaces/EventoDTO";
import { HttpService } from "@services/Http";

export class EventoService {
  static async create(params: EventoDTO) {
    // Exemplo
    HttpService.post("/evento", params)
  }

  static async get(): Promise<EventoDTO[]> {
    return (await HttpService.get("/evento")).data
  }

  static async update() {
    // Exemplo
    // HttpService.put("/api/evento/:id", {})
  }

  static async delete() {
    // Exemplo
    // HttpService.delete("/api/evento/:id", {})
  }
}