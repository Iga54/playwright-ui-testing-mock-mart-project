import dotenv from 'dotenv';

dotenv.config({ override: true });

// function requireEnvVariable(envVariable: string): string {
//   const envVariableValue = process.env[envVariable];
//   if (envVariableValue === undefined) {
//     throw new Error(`Environment variable ${envVariable} is not set.`);
//   }
//   return envVariableValue;
// }

// export const BASE_URL = requireEnvVariable('BASE_URL');
// export const USER_EMAIL = requireEnvVariable('USER_EMAIL');
// export const USER_PASSWORD = requireEnvVariable('USER_PASSWORD');

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
