import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SurveyTypeformAnswers } from "./SurveyTypeformAnswers";
import { SurveyTypeformChoices } from "./SurveyTypeformChoices";
import { Survey } from "./Survey";

@Index("question_id", ["questionId"], { unique: true })
@Index("fk_survey_typeform_question_serve_id_idx", ["surveyId"], {})
@Entity("survey_typeform_questions", { schema: "bukitvista_dev" })
export class SurveyTypeformQuestions {
  @PrimaryGeneratedColumn({ type: "int", name: "survey_typeform_question_id" })
  surveyTypeformQuestionId: number;

  @Column("varchar", { name: "survey_id", nullable: true, length: 45 })
  surveyId: string | null;

  @Column("varchar", { name: "user_id", nullable: true, length: 45 })
  userId: string | null;

  @Column("varchar", {
    name: "question_id",
    nullable: true,
    unique: true,
    length: 45,
  })
  questionId: string | null;

  @Column("text", { name: "question_text", nullable: true })
  questionText: string | null;

  @Column("varchar", { name: "question_type", nullable: true, length: 45 })
  questionType: string | null;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(
    () => SurveyTypeformAnswers,
    (surveyTypeformAnswers) => surveyTypeformAnswers.question
  )
  surveyTypeformAnswers: SurveyTypeformAnswers[];

  @OneToMany(
    () => SurveyTypeformChoices,
    (surveyTypeformChoices) => surveyTypeformChoices.question
  )
  surveyTypeformChoices: SurveyTypeformChoices[];

  @ManyToOne(() => Survey, (survey) => survey.surveyTypeformQuestions, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "survey_id", referencedColumnName: "surveyId" }])
  survey: Survey;
}
