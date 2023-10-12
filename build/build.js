const fs = require('node:fs/promises');
const path = require('node:path');

const srcPath = "src";
const destPath = "dist";
const replacePath = "templates";

let header;
let footer;

async function importTemplates() {
    try {
        header = await fs.readFile(path.join(replacePath, 'header.html'), {encoding: "utf-8"});
        footer = await fs.readFile(path.join(replacePath, 'footer.html'), {encoding: "utf-8"});
    } catch (e) {
        console.log("Couldn't get the templates files.");
        header = '';
        footer = '';
    }
}

async function createDest() {
    try {
        await fs.mkdir(destPath);
    } catch (e) {
        if (e.code !== 'EEXIST')
            console.log(e);
    }
}
async function copyDirectory(sourcePath, destinationPath, level) {
    try {
        console.log(`* Reading the directory '${sourcePath}'...`);
        const files = await fs.readdir(sourcePath);
        const tabulation = " ".repeat(level*2);

        for (const file of files) {
            const src = path.join(sourcePath, file);
            const dest = path.join(destinationPath, file);

            const stat = await fs.stat(src);

            if (stat.isDirectory()) {
                console.log(`${tabulation}* Copying directory '${src.toString()}'.`);
                try {
                    await fs.mkdir(dest);
                } catch (e)
                {
                    if (e.code !== 'EEXIST') {
                        console.log(e);
                        break;
                    }
                }
                    await copyDirectory(src, dest, level+1);
            }

            if (stat.isFile()) {
                if (path.extname(src) === '.html') {
                    console.log(`${tabulation}* Copying and patching file '${src.toString()}'.`);
                    let destFile = await fs.readFile(src, {encoding: "utf-8"});
                    destFile = destFile.replace('{{ Header }}', header).replace('{{ Footer }}', footer);
                    await fs.writeFile(dest, destFile, {encoding: "utf-8"});
                } else if (path.extname(src) !== '.ts') {
                    console.log(`${tabulation}* Copying file '${src.toString()}'.`);
                    await fs.copyFile(src, dest);
                } else {
                    console.log(`${tabulation}* File '${src.toString()}' omitted.`)
                }
            }
        }
        console.log(`* ${sourcePath} copied!`);

    } catch (e) {
        console.error("Failed", e);
    }
}

( async () =>
{
    await importTemplates();
    await createDest();
    await copyDirectory(srcPath, destPath, 0);
})()