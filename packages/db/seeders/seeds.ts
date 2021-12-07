import chalk from "chalk";
import debug from "debug";
import { upLangs } from "./lang";
import { upUsers } from "./user";

export const up = async () => {
  // Use a seed for chance to deterministic
  await upLangs();
  await upUsers();

  debug("init:seed")(chalk.green("Every seeds went well"));
  return process.exit();
};
