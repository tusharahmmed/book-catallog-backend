import prisma from '../../../shared/prisma';
import { excludeFields } from '../../../shared/utils';

const getAllFromDb = async () => {
  const result = await prisma.user.findMany();

  const passwordRemoved = result.map(user => {
    return excludeFields(user, ['password']);
  });

  return passwordRemoved;
};

export const UserService = {
  getAllFromDb,
};
