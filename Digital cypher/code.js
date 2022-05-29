function encode(str,n){
    const base = createObject();
    console.log('base: ',base); 
    const code =[];
    for(let i of str){
        code.push(base[i]);
    }
    const sequence = createSequnce(n,code);
    //суммируем значения из двух масивов sequence и сode
    const result = code.map((item,index)=>item+sequence[index])
    return result;
}
function createSequnce(n,code){
    const codelength  = code.length;
    const arr=[];
    //делаем из цифр масив
    const arrkey = Array.from(String(n), Number);
    // добавляем столько масивов [1,9,3,9] cколько цифр в code
    for(let i=0; codelength>i; i++){
        arr.push(arrkey);
    }
    // делаем из вложенного масива одиночный
    const singlearray = [].concat.apply([], arr);
    // получаем последовательность цифр столько сколько и цифр из code
    let counter=0;
    sequen=[];
    for(let i=0; singlearray.length > i; i++){
        if (counter < codelength){
            sequen.push(singlearray[i])
            counter++;
        }
    }
    return sequen;
};

function createObject(){
    // возвращает обьект где ключ буква англ алфавита, а значение цифра порядковый номер буквы
    const alphastr = 'abcdefghijklmnopqrstuvwxyz';
    let counter=0;
    const obj = {};
    for(let s of alphastr){
        counter++
        obj[s]=counter;
    }
    return obj
}
const res = encode("scout",1939);
console.log('res: ',res);    








