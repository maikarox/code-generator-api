import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  configReader: {
    configType: process.env.CONFIG_TYPE,
  },
};
