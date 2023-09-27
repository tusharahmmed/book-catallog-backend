import { User } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import prisma from '../../../shared/prisma';
import { excludeFields } from '../../../shared/utils';

const getProfile = async (user: JwtPayload) => {
  console.log(user);
  const result = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  const removedPassword = excludeFields(result as User, ['password']);
  return removedPassword;
};

export const ProfileService = {
  getProfile,
};
