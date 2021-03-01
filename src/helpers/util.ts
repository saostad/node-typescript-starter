import { findCredentials } from "keytar";

export async function getCredential(targetName: string) {
  const [myCred] = await findCredentials(targetName);
  return {
    ...myCred,
    // eslint-disable-next-line no-control-regex
    password: myCred.password.replace(/[\x00-\x08\x0E-\x1F\x7F-\uFFFF]/g, ""),
  };
}
