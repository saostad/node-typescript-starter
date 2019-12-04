import dotenv from "dotenv";
dotenv.config();

async function main() {
  /** put your code below here */
  console.log(`here is my secret: ${process.env.MY_SECRET}`);
}

main();
