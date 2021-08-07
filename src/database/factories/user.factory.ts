
import { User } from '../../models/User'
import * as Faker from 'faker'
import { define } from 'typeorm-seeding'

define(User, (faker: typeof Faker) => {
    const is_email_verified = faker.random.boolean()
    const status = faker.random.boolean()
    const type = faker.random.boolean()
    const user_id = faker.random.uuid()
    const user_email = faker.internet.email()
   
    const user = new User()
    user.userId = user_id
    user.userEmail = user_email
    user.type = type
    user.status = status
    user.isEmailVerified = is_email_verified
    console.log(user)
    return user
})