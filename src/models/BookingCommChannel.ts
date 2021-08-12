import { Column, Entity, OneToMany } from "typeorm";
import { Booking } from "./Booking";

@Entity("booking_comm_channel", { schema: "bukitvista_dev" })
export class BookingCommChannel {
  @Column("int", { primary: true, name: "booking_comm_channel" })
  bookingCommChannel: number;

  @Column("varchar", {
    name: "communication_channel",
    nullable: true,
    length: 45,
  })
  communicationChannel: string | null;

  @OneToMany(() => Booking, (booking) => booking.bookingCommChannel2)
  bookings: Booking[];
}
