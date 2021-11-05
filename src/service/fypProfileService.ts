import { Request } from 'express'
import { DeleteResult } from 'typeorm'
import { FypProfile, toEnumUserRole } from '../models/FypProfile'
import * as fypProfileRepository from '../repositories/fypProfileRepository'

export const getFypProfileById = async (req: Request): Promise<any> => {
  try {
    const role = await fypProfileRepository.getFypProfileById(req.params.id)
    return role
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllFypProfile = async (): Promise<FypProfile[]> => {
  try {
    const [fypProfile, _] = await fypProfileRepository.getAllFypProfile()
    return fypProfile
  } catch (err) {
    throw TypeError(err)
  }
}


export const updateFypProfile = async (req: Request): Promise<FypProfile> => {
  delete req.body.user;
  try {
    const fypProfile = await fypProfileRepository.updateFypProfile(req.params.id, req.body)
    return fypProfile
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteFypProfile = async (req: Request): Promise<DeleteResult> => {
  try {
    const result = await fypProfileRepository.deleteFypProfile(req.params.id)
    return result
  } catch (err) {
    throw TypeError(err)
  }
}
