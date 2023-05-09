import * as fs from "fs";

export const envConfig = (test?:boolean)=> {
  // EXPECTED: --secret=filename :FILE USED TO PASS SECRETS AND OTHER CONFIGURATIONS

  const secret = test ? 'secret=src/controllers/__tests__/secrets.test' : process.argv.find(arg=> arg.includes('--secret'));

  if(!secret)
    throw new Error('Require secrets. Use --secret=your_secrets_filename')


  try {
    const data = fs.readFileSync(secret.split('=')[1],'utf8')
    const envs = JSON.parse(data);
    process.env = { ...process.env, ...envs};
  } catch (error:any){
    throw new Error(`Error on open/read secret file: ${error}`);
  }
}
