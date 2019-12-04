import dotenv from "dotenv";
dotenv.config();

export async function main() {
  /** put your code below here */
  console.log(`here is my secret: ${process.env.MY_SECRET}`);
  return process.env.MY_SECRET;
}

main();
