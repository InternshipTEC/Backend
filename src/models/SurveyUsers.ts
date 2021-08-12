import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Survey } from "./Survey";
import { User } from "./User";

@Index("fk_survey_users_serve_id_idx", ["surveyId"], {})
@Index("fk_survey_users_user_id_idx", ["userId"], {})
@Entity("survey_users", { schema: "bukitvista_dev" })
export class SurveyUsers {
  @PrimaryGeneratedColumn({ type: "int", name: "survey_user_id" })
  surveyUserId: number;

  @Column("varchar", { name: "survey_id", nullable: true, length: 45 })
  surveyId: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 45 })
  userId: string | null;

  @Column("int", { name: "status", nullable: true, default: () => "'0'" })
  status: number | null;

  @Column("timestamp", { name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Survey, (survey) => survey.surveyUsers, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "survey_id", referencedColumnName: "surveyId" }])
  survey: Survey;

  @ManyToOne(() => User, (user) => user.surveyUsers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;
}
