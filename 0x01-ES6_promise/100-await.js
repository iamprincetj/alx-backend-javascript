import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const func1 = await uploadPhoto();
  const func2 = await createUser();

  return {
    photo: func1,
    user: func2,
  };
}
