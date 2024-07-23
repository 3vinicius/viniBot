const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

// Variável externa
let resultado;

async function executar() {
    try {
        const { stdout, stderr } = await execPromise("exec C:/Users/vinicius/Downloads/youtube-dl.exe");
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        resultado = stdout;
        // Aqui, você pode usar a variável 'resultado' conforme necessário
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
}

// Chama a função assíncrona
executar().then(()=>{
    console.log(resultado)
});

