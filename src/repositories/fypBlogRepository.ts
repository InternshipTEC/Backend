import { FypBlog } from '../models/FypBlog'
import { DeleteResult, getConnection, getManager, getRepository } from 'typeorm'
import { UserRole } from '../models/FypProfile'

export const getFypBlogById = async (id: string): Promise<FypBlog> => {
  const intId = parseInt(id)
  try {
    const fypBlog = await getRepository(FypBlog).findOne({ id: intId })
    return fypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const getFypBlogByRole = async (role: UserRole): Promise<FypBlog> => {
  try {
    const fypBlog = await getRepository(FypBlog).findOne({ role })
    return fypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const getAllFypBlog = async (): Promise<[FypBlog[], number]> => {
  try {
    const [allFypBlog, count] = await getRepository(FypBlog).findAndCount()
    return [allFypBlog, count]
  } catch (err) {
    throw TypeError(err)
  }
}

export const createFypBlog = async (props: FypBlog): Promise<FypBlog> => {
  try {
    let fypBlog = new FypBlog()
    fypBlog = props
    const newFypBlog = await getManager().save(fypBlog)
    return newFypBlog
  } catch (err) {
    throw TypeError(err)
  }
}

export const updateFypBlog = async (id: string, props: FypBlog): Promise<any> => {
  try {
    const updated = await getConnection()
      .createQueryBuilder()
      .update(FypBlog)
      .set(props)
      .where('id = :id', { id })
      .execute()
    return updated
  } catch (err) {
    throw TypeError(err)
  }
}

export const deleteFypBlog = async (id: string): Promise<DeleteResult> => {
  try {
    const deleteResult = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(FypBlog)
      .where('id = :id', { id })
      .execute()
    return deleteResult
  } catch (err) {
    throw TypeError(err)
  }
}
