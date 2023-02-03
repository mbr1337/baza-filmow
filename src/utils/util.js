import CryptoJS from 'crypto-js';

export const encryptData = (data, salt) =>
    CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();


export const decryptData = (ciphertext, salt) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        return null;
    }
}

// decryption
// let salt = '';
//     let originalData = null;
//     if (!isNotLogged) {
//         // console.log("No localStorage available")
//     } else {
//         salt = process.env.SALT || '6d090796-ecdf-11ea-adc1-0242ac112345';

//         originalData = decryptData(isNotLogged, salt);
//     }
//     if (!originalData) {
//         localStorage.clear();
//     }