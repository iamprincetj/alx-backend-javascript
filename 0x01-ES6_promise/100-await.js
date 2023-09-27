import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const func1 = await uploadPhoto();
    const func2 = await createUser();

    return {
      photo: func1,
      user: func2,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
