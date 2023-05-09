import { RequestHandler } from 'express';
import { Container } from 'typedi';

import CodeService from '../services/Code.service';

export const getCodes: RequestHandler = async (_req, res) => {
  const codeService: CodeService = Container.get('CodeService');
  const codes = await codeService.getCodes();

  return res.status(200).json({ codes });
};
