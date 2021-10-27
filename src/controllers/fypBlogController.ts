import { Request, Response } from 'express'
import * as fypBlogService from '../service/fypBlogService'

export const getFypBlog = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.getFypBlogById(req)
    return res.status(200).json({
      msg: 'get fypBlog success',
      data: fypBlog,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getFypBlogByRole = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.getFypBlogByRole(req)
    return res.status(200).json({
      msg: 'get fypBlog success',
      data: fypBlog,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const getAllFypBlog = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.getAllFypBlog()
    return res
      .status(200)
      .set('Access-Control-Expose-Headers', 'Content-Range')
      .set('Content-Range', `posts 0-10/${fypBlog.length}`)
      .send(fypBlog)
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const createFypBlog = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.createFypBlog(req)
    return res.status(200).json({
      msg: 'create fypBlog success',
      data: fypBlog,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const updateFypBlog = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.updateFypBlog(req)
    return res.status(200).json({
      msg: 'update fypBlog success',
      data: fypBlog,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}

export const deleteFypBlog = async (req: Request, res: Response) => {
  try {
    const fypBlog = await fypBlogService.deleteFypBlog(req)
    return res.status(200).json({
      msg: 'delete fypBlog success',
      data: fypBlog,
    })
  } catch (err) {
    return res.status(400).json({
      msg: err.toString(),
      data: {},
    })
  }
}
