//password.txt 읽어와서 crypto 모듈로 암호화
//hashed.txt 작성

const fs = require('fs');
const crypto = require('crypto');

fs.readFile(`password.txt`, (err, data) => {
    if(err) return console.log(err.message);
    console.log(`password.txt파일 read 성공`);
});


//crypto.pbkdf2(password, salt, iteration, keylen, digest, callback)
//비밀번호, 솔트 값, 반복 횟수, 출력byte, 해시 알고리즘, callback
const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        console.log('salt : ', salt);
        console.log('hashed : ', hashed);
        return hashed;
    });
}

const salt = crypto.randomBytes(32).toString('hex'); //패스워드에 salt값을=소금을 쳐서 암호화
const data = encrypt(salt, password);

fs.writeFile(`hashed.txt`, data, (err, data) => {
    if(err) return console.log(err.message);
    console.log(`hashed.txt파일 write 성공`);
});