// console.log(global);
// console.log(Object.keys(global));

const buf = Buffer.alloc(10);
console.log(buf);
{/* <Buffer 00 00 00 00 00 00 00 00 00 00> */}

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
{/* <Buffer 01 01 01 01 01 01 01 01 01 01> */}

const buf3 = Buffer.alloc(10, 255);
console.log(buf3);
{/* <Buffer ff ff ff ff ff ff ff ff ff ff> */}

const buf4 = Buffer.alloc(1, 249);
console.log(buf4);
{/* <Buffer f9> */}

const buf5 = Buffer.from([1, 2, 3]);
console.log(buf5);
{/* <Buffer 01 02 03> */}

const buf6 = Buffer.from('test');
console.log(buf6);
{/* <Buffer 74 65 73 74> */}
console.log(buf6.length);