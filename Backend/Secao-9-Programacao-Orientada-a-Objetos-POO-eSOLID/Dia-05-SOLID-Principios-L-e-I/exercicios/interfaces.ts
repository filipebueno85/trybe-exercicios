// ./interfaces.ts
export interface IVehicle extends IFly, IDrive {
  // drive(): void;
  // fly(): void;
}

export interface IFly {
  fly(): void;
}

export default interface IDrive {
  drive(): void;
}