import {Frequency} from "./frequency.model";

export class Product{
  name: string;
  averageQty: number;
  leadTime: Frequency;
  orderFrequency: Frequency;

  constructor(name: string, averageQty: number, leadTime: Frequency, orderFrequency: Frequency) {
    this.name = name;
    this.averageQty = averageQty;
    this.leadTime = leadTime;
    this.orderFrequency = orderFrequency;
  }
}
