import fs from 'fs';
import crypto from 'crypto';
function suffix() { return crypto.randomBytes(5).toString('hex'); }

export const onPost: any = async ({ request }: any) => {
    const url = suffix();
    fs.writeFile(`transcript/${url}.json`, JSON.stringify(await request.json()), function(err) {
        if (err) throw err;
        console.log(`File is created successfully. https://smhsmh.club/transcript/${url}`);
    });
    return `https://smhsmh.club/transcript/${url}`;
};