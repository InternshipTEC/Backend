import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SurveyTypeformQuestions } from "./SurveyTypeformQuestions";

@Index("question_choice", ["questionChoice"], { unique: true })
@Index("fk_survey_typeform_choice_id_idx", ["questionId"], {})
@Entity("survey_typeform_choices", { schema: "bukitvista_dev" })
export class SurveyTypeformChoices {
  @PrimaryGeneratedColumn({ type: "int", name: "survey_typeform_choice_id" })
  surveyTypeformChoiceId: number;

  @Column("varchar", { name: "survey_id", nullable: true, length: 45 })
  surveyId: string | null;

  @Column("varchar", { name: "question_id", nullable: true, length: 45 })
  questionId: string | null;

  @Column("varchar", { name: "choices", nullable: true, length: 45 })
  choices: string | null;

  @Column("varchar", {
    name: "question_choice",
    nullable: true,
    unique: true,
    length: 100,
  })
  questionChoice: string | null;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @ManyToOne(
    () => SurveyTypeformQuestions,
    (surveyTypeformQuestions) => surveyTypeformQuestions.surveyTypeformChoices,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "question_id", referencedColumnName: "questionId" }])
  question: SurveyTypeformQuestions;
}
