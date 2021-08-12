import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Currency } from "./Currency";

@Index("payout_currency", ["payoutCurrency"], {})
@Index("bundle_currency", ["bundleCurrency"], {})
@Index("booking_id", ["bookingId"], {})
@Index("Check_in", ["payoutBookingCheckin"], {})
@Entity("payout", { schema: "bukitvista_dev" })
export class Payout {
  @Column("varchar", { primary: true, name: "payout_id", length: 75 })
  payoutId: string;

  @Column("varchar", { name: "payout_type", nullable: true, length: 45 })
  payoutType: string | null;

  @Column("date", { name: "payout_date", nullable: true })
  payoutDate: string | null;

  @Column("varchar", { name: "payout_bundle", nullable: true, length: 75 })
  payoutBundle: string | null;

  @Column("varchar", { name: "payout_eta", nullable: true, length: 45 })
  payoutEta: string | null;

  @Column("varchar", { name: "booking_id", length: 45 })
  bookingId: string;

  @Column("date", { name: "payout_booking_checkin", nullable: true })
  payoutBookingCheckin: string | null;

  @Column("date", { name: "payout_booking_checkout", nullable: true })
  payoutBookingCheckout: string | null;

  @Column("varchar", {
    name: "payout_listing_name",
    nullable: true,
    length: 200,
  })
  payoutListingName: string | null;

  @Column("varchar", { name: "payout_listing_id", nullable: true, length: 45 })
  payoutListingId: string | null;

  @Column("int", { name: "payout_currency", nullable: true })
  payoutCurrency: number | null;

  @Column("varchar", { name: "payout_amount", length: 30 })
  payoutAmount: string;

  @Column("varchar", { name: "percentage", nullable: true, length: 11 })
  percentage: string | null;

  @Column("int", { name: "bundle_currency", nullable: true })
  bundleCurrency: number | null;

  @Column("decimal", { name: "bundle_amount", precision: 11, scale: 2 })
  bundleAmount: string;

  @Column("decimal", {
    name: "bundle_amount_dec",
    nullable: true,
    precision: 11,
    scale: 2,
  })
  bundleAmountDec: string | null;

  @Column("varchar", {
    name: "destination_bank_account_id",
    nullable: true,
    length: 75,
  })
  destinationBankAccountId: string | null;

  @Column("varchar", { name: "profile_email", nullable: true, length: 45 })
  profileEmail: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("longtext", { name: "temp_column", nullable: true })
  tempColumn: string | null;

  @Column("varchar", { name: "payout_method", nullable: true, length: 45 })
  payoutMethod: string | null;

  @Column("varchar", { name: "payment_done_by", nullable: true, length: 75 })
  paymentDoneBy: string | null;

  @Column("varchar", { name: "bank_mutation_id", nullable: true, length: 75 })
  bankMutationId: string | null;

  @Column("varchar", {
    name: "sender_bank_account_id",
    nullable: true,
    length: 75,
  })
  senderBankAccountId: string | null;

  @Column("varchar", { name: "payout_proof_url", nullable: true, length: 255 })
  payoutProofUrl: string | null;

  @Column("tinyint", { name: "payout_confirm", nullable: true, width: 1 })
  payoutConfirm: boolean | null;

  @ManyToOne(() => Currency, (currency) => currency.payouts, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "bundle_currency", referencedColumnName: "currencyCode" },
  ])
  bundleCurrency2: Currency;

  @ManyToOne(() => Currency, (currency) => currency.payouts2, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([
    { name: "payout_currency", referencedColumnName: "currencyCode" },
  ])
  payoutCurrency2: Currency;
}
