import dotenv from 'dotenv';

dotenv.config({ override: true });

function getEnvVariable(envVariable: string): string {
  const envVariableValue = process.env[envVariable];
  if (!envVariableValue) {
    throw new Error(`❌ Missing required environment variable: ${envVariable}`);
  }
  return envVariableValue.trim();
}

export const BASE_URL = getEnvVariable('BASE_URL');
export const USER_EMAIL = getEnvVariable('USER_EMAIL');
export const USER_PASSWORD = getEnvVariable('USER_PASSWORD');
