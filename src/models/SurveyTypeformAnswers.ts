import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { SurveyTypeformQuestions } from './SurveyTypeformQuestions'

@Index('fk_survey_typeform_answer_question_id_idx', ['questionId'], {})
@Entity('survey_typeform_answers', { schema: 'bukitvista_dev' })
export class SurveyTypeformAnswers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'survey_typeform_answer_id' })
  surveyTypeformAnswerId: number

  @Column('varchar', { name: 'survey_id', nullable: true, length: 45 })
  surveyId: string | null

  @Column('varchar', { name: 'user_id', nullable: true, length: 45 })
  userId: string | null

  @Column('varchar', { name: 'question_id', nullable: true, length: 45 })
  questionId: string | null

  @Column('text', { name: 'answer_text', nullable: true })
  answerText: string | null

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date

  @ManyToOne(
    () => SurveyTypeformQuestions,
    surveyTypeformQuestions => surveyTypeformQuestions.surveyTypeformAnswers,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'question_id', referencedColumnName: 'questionId' }])
  question: SurveyTypeformQuestions
}
