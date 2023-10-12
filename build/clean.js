const fs = require("node:fs/promises");


( async() => {
    try {
        await fs.rm("dist", {recursive: true});
        console.log("* Cleaned!")
    } catch (e) {
        if (e.code === 'ENOENT')
            console.log("* Directory 'dist' not found.")
        else console.log(e);
    }
})()