import { Request, Response } from 'express'
import * as tugasController from '../service/eventService'

export const getEvent = async (req: Request, res: Response) => {
  try {
    const event = await tugasController.getEventById(req)
    return res.status(200).json({
      msg: 'get event success',
      data: event,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllEvent = async (req: Request, res: Response) => {
  try {
    const events = await tugasController.getAllEvent(req)
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${events.length}`)
      .send(events)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllOccuringEvent = async (req: Request, res: Response) => {
  try {
    const events = await tugasController.getAllOccuringEvent()
    return res.status(200).json({
      msg: 'get events success',
      data: events,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createEvent = async (req: Request, res: Response) => {
  try {
    const event = await tugasController.createEvent(req)
    return res.status(200).json({
      msg: 'create event success',
      data: event,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await tugasController.updateEvent(req)
    return res.status(200).json({
      msg: 'update event success',
      data: event,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const event = await tugasController.deleteEvent(req)
    return res.status(200).json({
      msg: 'delete event success',
      data: event,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

