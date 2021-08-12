import { Column, Entity, OneToMany } from "typeorm";
import { Booking } from "./Booking";

@Entity("channel", { schema: "bukitvista_dev" })
export class Channel {
  @Column("int", { primary: true, name: "channel_code" })
  channelCode: number;

  @Column("varchar", { name: "channel_desc", length: 20 })
  channelDesc: string;

  @Column("varchar", { name: "channel_icon", nullable: true, length: 125 })
  channelIcon: string | null;

  @OneToMany(() => Booking, (booking) => booking.bookingSource2)
  bookings: Booking[];
}
