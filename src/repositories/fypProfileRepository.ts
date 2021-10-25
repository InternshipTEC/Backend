import { FypProfile } from '../models/FypProfile'
import { getManager } from 'typeorm'

export const createFypProfile = async (props: FypProfile): Promise<FypProfile> => {
  try {
    let fypProfile = new FypProfile()
    fypProfile = props
    const newFypProfile = await getManager().save(fypProfile)
    return newFypProfile
  } catch (err) {
    throw TypeError(err)
  }
}
