import {Vehicle} from '../models/vehicle';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const service = require('./index');

// An abstraction to easily use the original service

export const fetchData = (): Promise<Vehicle[]> => {
  return new Promise((resolve, reject) => {
    service.fetchData((error: Error, data: Vehicle[]) => {
      if (error) {
        reject(new Error('An error has occured'));
      } else {
        resolve(data);
      }
    });
  });
};
