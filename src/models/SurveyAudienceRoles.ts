import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";
import { Survey } from "./Survey";

@Index("fk_audience_role", ["roleId"], {})
@Index("fk_audience_survey", ["surveyId"], {})
@Entity("survey_audience_roles", { schema: "bukitvista_dev" })
export class SurveyAudienceRoles {
  @PrimaryGeneratedColumn({ type: "int", name: "survey_audience_role_id" })
  surveyAudienceRoleId: number;

  @Column("varchar", { name: "survey_id", nullable: true, length: 45 })
  surveyId: string | null;

  @Column("varchar", { name: "role_id", nullable: true, length: 45 })
  roleId: string | null;

  @ManyToOne(() => Role, (role) => role.surveyAudienceRoles, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: Role;

  @ManyToOne(() => Survey, (survey) => survey.surveyAudienceRoles, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "survey_id", referencedColumnName: "surveyId" }])
  survey: Survey;
}
