import { Response } from "express";

interface IMeta {
  total: number;
}

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}

export const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  return res.status(data.statusCode).json({
    statusCode: data.statusCode,
    success: data.success,
    data: data.data,
    meta: data.meta,
  });
};
