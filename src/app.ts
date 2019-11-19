import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  /** put your code below here */
  console.log(`here is my secret: ${process.env.MY_SECRET}`);
};

main();
