const fs = require('fs');
const crypto = require('crypto');

//const password = 'fl0wer';
fs.readFile(`password.txt`, (err, password) => {
    if (err) throw err;
    const salt = crypto.randomBytes(32).toString('hex'); //패스워드에 salt값을 소금을 쳐서 암호화
    encrypt(salt, password);
});

//crypto.pbkdf2(password, salt, iteration, keylen, digest, callback)
//비밀번호, 솔트 값, 반복 횟수, 출력byte, 해시 알고리즘, callback
const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);

        fs.writeFile (`hased.txt`, hashed, (err) => {
            if (err) throw err;
            console.log('hased.txt 생성 성공');
        });
    });
}