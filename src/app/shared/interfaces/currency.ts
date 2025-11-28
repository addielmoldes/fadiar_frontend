export interface ICurrency {
  readonly id: number;
  readonly main: boolean;
  readonly value: number;
  readonly active: boolean;
  readonly currency: string;
}
