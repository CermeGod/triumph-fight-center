import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src/assets');
const componentsDir = path.join(process.cwd(), 'src/components');
const indexHtml = path.join(process.cwd(), 'index.html');

async function main() {
    console.log('Reading files...');
    const assetFiles = fs.readdirSync(assetsDir).filter(f => f !== '.gitkeep');
    const jsxFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

    // Read all contents into memory to search for usage
    const fileContents = jsxFiles.map(f => {
        return { path: path.join(componentsDir, f), content: fs.readFileSync(path.join(componentsDir, f), 'utf-8') };
    });
    fileContents.push({ path: indexHtml, content: fs.readFileSync(indexHtml, 'utf-8') });

    for (const asset of assetFiles) {
        if (asset.endsWith('.webp')) continue; // already optimized or maybe it's the favicon

        // Check if used
        const encodedAsset = encodeURIComponent(asset).replace(/%20/g, ' '); // simple fallback
        const isUsed = fileContents.some(file => file.content.includes(asset) || file.content.includes(encodeURIComponent(asset)));

        if (!isUsed) {
            console.log(`Deleting unused asset: ${asset}`);
            fs.unlinkSync(path.join(assetsDir, asset));
            continue;
        }

        console.log(`Converting ${asset} to webp...`);
        const parsed = path.parse(asset);
        const webpName = parsed.name + '.webp';

        await sharp(path.join(assetsDir, asset))
            .webp({ quality: 80 })
            .toFile(path.join(assetsDir, webpName));

        // Delete original
        fs.unlinkSync(path.join(assetsDir, asset));

        // Update references in all tracked files
        for (let i = 0; i < fileContents.length; i++) {
            // Replace literal and URL encoded forms
            fileContents[i].content = fileContents[i].content.split(asset).join(webpName);
            fileContents[i].content = fileContents[i].content.split(encodeURIComponent(asset)).join(encodeURIComponent(webpName));
        }
    }

    // Write back contents
    for (const file of fileContents) {
        fs.writeFileSync(file.path, file.content, 'utf-8');
    }

    console.log('Optimization complete!');
}

main().catch(console.error);
