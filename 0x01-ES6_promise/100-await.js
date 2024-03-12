import {uploadPhoto, createUser} from './utils'

async function asyncUploadUser() {
  const photo = await uploadPhoto()
  const user = await createUser()
  return {photo, user}
}