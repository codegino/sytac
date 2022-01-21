// export enum VehicleType {
//   AIRPLANE = 'airplane',
//   TRAIN = 'train',
//   CAR = 'car',
//   ...
// }

export type Vehicle = {
  id: number;
  type: string; // Alternatively we can use an enum type
  // type: VehicleType;
  brand: string;
  colors: string[];
  img: string;
};
