const numbres = process.argv.slice(2);
const result=numbres.reduce((acc,num)=>{
    return acc +  + num
},0);
console.log(result);