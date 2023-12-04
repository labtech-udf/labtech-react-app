export class EventoDTO {
  id?: number;
  name: string = "";
  nameCard: string = "";
  photo: File | null = null;
  description: string = "";
  dateHora: Date | null = null;
  address: string = "";
  cor: string = "";
}
