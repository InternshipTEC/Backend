import { Request } from 'express'
import fs from 'fs'
import nodemailer from 'nodemailer'
import handlebars from 'handlebars'
import logger from '../logger'

export const handleNotifyFriends = async (req: Request) => {
  const { emails, invite_sender_name, invite_sender_email, action_url, support_email, help_url } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'web.tec.internship@gmail.com', // generated ethereal user
      pass: 'webtec112233',
    },
  })

  await emails.forEach(async (email: any) => {
    try {
      const data = fs.readFileSync(`${__dirname}/../static/content.html`, 'utf8')
      const template = handlebars.compile(data)
      const htmlToSend = template({
        action_url,
        support_email,
        help_url,
        invite_sender_name,
        invite_sender_email,
        name: email.address,
      })
      const info = await transporter.sendMail({
        from: 'Web Development TEC Internship',
        to: email.address,
        subject: 'Group payment confirmation',
        html: htmlToSend, // html body
        attachments: [
          {
            filename: 'bee.png',
            path: `${__dirname}/../static/bee.png`,
            cid: 'logo',
          },
        ],
      })

      logger.info(`Message sent: ${info.messageId}`)
    } catch (err) {
      logger.error(`Message error: ${err}`)
    }
  })
}
