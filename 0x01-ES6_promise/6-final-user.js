// 6-final-user.js

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((result) => {
      console.log(result);
      return uploadPhoto(fileName);
    })
    .catch((error) => {
      console.log(error);
    });
}
