import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { FypBlog } from '../models/FypBlog'
import * as fypBlogRepository from '../repositories/fypBlogRepository'
import { toEnumUserRole } from '../models/FypProfile'

export const getFypBlogById = async (req: Request): Promise<any> => {
  try {
    const role = await fypBlogRepository.getFypBlogById(req.params.id)
    return role
  } catch (err) {
    throw TypeError(err)
  }
}

export const getFypBlogByRole = async (req: Request): Promise<any> => {
  try {
    const role = await fypBlogRepository.getFypBlogByRole(toEnumUserRole(req.params.role))
    return role
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllFypBlog = async (): Promise<FypBlog[]> => {
  try {
    const [fypBlog, _] = await fypBlogRepository.getAllFypBlog()
    return fypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const createFypBlog = async (req: Request): Promise<FypBlog> => {
  const { content, role } = req.body
  try {
    const fypBlog = new FypBlog()
    fypBlog.content = content
    fypBlog.role = toEnumUserRole(role)
    const newFypBlog = await fypBlogRepository.createFypBlog(fypBlog)
    return newFypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateFypBlog = async (req: Request): Promise<FypBlog> => {
  try {
    const fypBlog = await fypBlogRepository.updateFypBlog(req.params.id, req.body)
    return fypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteFypBlog = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await fypBlogRepository.deleteFypBlog(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
