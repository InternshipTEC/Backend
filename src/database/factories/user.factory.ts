import { User } from '../../models/User'
import * as Faker from 'faker'
import { define } from 'typeorm-seeding'

define(User, (faker: typeof Faker) => {
  const isEmailVerified = faker.random.boolean()
  const status = faker.random.boolean()
  const type = faker.random.boolean()
  const userId = faker.random.uuid()
  const userEmail = faker.internet.email()

  const user = new User()
  user.userId = userId
  user.userEmail = userEmail
  user.type = type
  user.status = status
  user.isEmailVerified = isEmailVerified
  return user
})
