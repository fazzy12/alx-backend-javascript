// 3-all.js

import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup () {
  try {
    const photoResponse = await uploadPhoto('profile-photo.jpg');
    const userResponse = await createUser('Guillaume', 'Salva');

    console.log(
      photoResponse.body,
      userResponse.firstName,
      userResponse.lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;
