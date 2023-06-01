import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import { ITenis } from './interfaces/ITenis';
import normas from './normas/normasDeUso';

class QuadraTenis extends Quadra {
  // busca os dados da quadra referenciada
  public tenisData: ITenis = normas.tenis;

  public reservar<ITenis>(horaReserva: Date): IAgenda<ITenis> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.tenisData as unknown as ITenis,
    };
  }
}

export default QuadraTenis;