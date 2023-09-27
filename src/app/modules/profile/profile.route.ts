import { USER_ROLE } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ProfileController } from './profile.controller';

const router = Router();

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.customer),
  ProfileController.getProfile
);

export const ProfileRoutes = router;
