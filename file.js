const {exec} = require('child_process')


function executeShell() {
    return new Promise( async (resolve, reject) => {
        const { stdout, stderr } = await exec('ls');
        stdout.on("data", (data) => {
            resolve(data.toString())
        })
    })
}


executeShell().then((resolve) => {
        if(resolve.includes("test.mpeg")){
            console.log("test.mpeg")
        }
    })
    .catch((err) => {
        console.log("Error:" + err);
    })

