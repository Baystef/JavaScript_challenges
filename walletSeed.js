 const alphabet = '9ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 const generator = (length, chars) => {
     let result = '';
     for (let i = length; i > 0; --i)
         result += chars[Math.floor(Math.random() * chars.length)];

     return result;
 }

 console.log(generator(5, alphabet));



 // const randomString = (length, chars) => {
 //     let result = '';
 //     for (let i = length; i > 0; --i)
 //         result += chars[Math.floor(Math.random() * chars.length)];

 //     return result;
 // }

 // let rString = randomString(81, '9ABCDEFGHIJKLMNOPQRSTUVWXYZ');
 // console.log(rString);