const {exec} = require('child_process')
const {MessageMedia } = require('whatsapp-web.js');
const fs = require("fs");
const path = require("path");

public async function dowloadMessageMedia(url, pitch) {
    return await executeShell(url, pitch)
        .then((resolve) => resolve)
        .catch((err) => err)
}

private async function executeShell(url, pitch) {
    try {
        return new Promise( async (resolve, reject) => {
            const { stdout, stderr } = await exec(`sh "./files/script.sh" ${url} ${pitch}`);
            stdout.on("data", (data) => {
                console.log(data)
                resolve(createMessageMedia(data.toString()))
            })
            stderr.on('data', (data) => {
                reject(data)
            });
        })
    } catch (err) {
        return err
    }
}



private function createMessageMedia(filename) {
    try {
        filePath = `./files/${filename}`
        data = fs.readFileSync(filePath,'base64')
        var stats = fs.statSync(filePath)
        var fileSizeInBytes = stats.size;
         return new MessageMedia('audio/mpeg',data, filename,fileSizeInBytes)
    } catch (err) {
        return err
    }
}


// dowloadMessageMedia("test.mpeg", 9).then(re => {
//             console.log(re)
//
//     }).catch(err => console.log(err))



// console.log(createMessageMedia("test.mpeg"))
