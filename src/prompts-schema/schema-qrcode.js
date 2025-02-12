import chalk from "chalk";
import prompt from "prompt";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha o tipo (1 - Normal, 2 - Terminal)"),
        pattern: /^[1 -2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2!"),
        required: true
    }
]


export default promptSchemaQRCode