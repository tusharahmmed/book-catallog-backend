import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const getAllFromDb = catchAsync(async (req, res) => {
  const result = await UserService.getAllFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrieved successfully',
    data: result,
  });
});

const getDocumentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.getDocumentById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User getched successfully',
    data: result,
  });
});

const updateDocumentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await UserService.updateDocumentById(id, payload);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteDocumentById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await UserService.deleteDocumentById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Uers deleted successfully',
    data: result,
  });
});

export const UserController = {
  getAllFromDb,
  getDocumentById,
  updateDocumentById,
  deleteDocumentById,
};
