// src/server.ts
import 'reflect-metadata';
import "express-async-errors";

// import mongoose from 'mongoose';
import { app } from './app';
import { config } from './config';
import { logger } from '@shared/logger';
import { loadDependencies } from './dependency-loader';


const start = async () => {
  try {
    // await mongoose.connect(config.mongoUri);
    // logger.info('Connected to MongoDB');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }

  await loadDependencies();
  logger.info('Dependencies loaded');
  app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });
};

start();