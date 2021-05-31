import { Subjects, Publisher, OrderCancelledEvent } from '@bookmyticketpt/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
