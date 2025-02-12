import chalk from "chalk";
import handle from "../password/handle.js";

async function createPassword() {
    console.log(chalk.green("Password: "))
    const password = await handle()
    console.log(chalk.blue.bold(password))
}

export default createPassword