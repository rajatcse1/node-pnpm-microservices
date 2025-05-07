// src/dependency-loader.ts
import 'reflect-metadata';
import { glob } from 'glob';
import path from 'path';

export async function loadDependencies() {
  const files = await glob(path.join(__dirname, '**/*.@(service|repository|controller).ts'));
  console.log('Loading dependencies:', files);

  for (const file of files) {
    await import(file);
  }
}
