import { Column, Entity, OneToMany } from "typeorm";
import { SurveyAudienceRoles } from "./SurveyAudienceRoles";
import { SurveyTypeformQuestions } from "./SurveyTypeformQuestions";
import { SurveyUsers } from "./SurveyUsers";

@Entity("survey", { schema: "bukitvista_dev" })
export class Survey {
  @Column("varchar", { primary: true, name: "survey_id", length: 45 })
  surveyId: string;

  @Column("varchar", { name: "survey_name", nullable: true, length: 45 })
  surveyName: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("varchar", { name: "typeform_url", nullable: true, length: 100 })
  typeformUrl: string | null;

  @Column("varchar", { name: "banner_link", nullable: true, length: 100 })
  bannerLink: string | null;

  @Column("varchar", { name: "banner_image_url", nullable: true, length: 100 })
  bannerImageUrl: string | null;

  @Column("int", { name: "total_participants" })
  totalParticipants: number;

  @Column("int", { name: "completed_participant" })
  completedParticipant: number;

  @Column("varchar", { name: "status", length: 20 })
  status: string;

  @Column("timestamp", { name: "start_date" })
  startDate: Date;

  @Column("timestamp", { name: "end_date" })
  endDate: Date;

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

  @OneToMany(
    () => SurveyAudienceRoles,
    (surveyAudienceRoles) => surveyAudienceRoles.survey
  )
  surveyAudienceRoles: SurveyAudienceRoles[];

  @OneToMany(
    () => SurveyTypeformQuestions,
    (surveyTypeformQuestions) => surveyTypeformQuestions.survey
  )
  surveyTypeformQuestions: SurveyTypeformQuestions[];

  @OneToMany(() => SurveyUsers, (surveyUsers) => surveyUsers.survey)
  surveyUsers: SurveyUsers[];
}
