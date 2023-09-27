import { USER_ROLE } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = Router();

router.get(
  '/',
  auth(USER_ROLE.admin),

  UserController.getAllFromDb
);

export const UserRoutes = router;
