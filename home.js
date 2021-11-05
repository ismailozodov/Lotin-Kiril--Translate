let lotinkiril = {
    a: 'а',
    b: 'б',
    d: 'д',
    e: 'е',
    yo: 'ё',
    f: 'ф',
    h: 'х',
    i: 'и',
    j: 'ж',
    k: 'к',
    l: 'л',
    m: 'м',
    n: 'н',
    o: 'о',
    "o'": 'o',
    p: 'п',
    g: 'г',
    "g'": 'г',
    g: 'г',
    q: 'к',
    r: 'р',
    ts: 'ц',
    ye: 'э',
    s: 'с',
    t: 'т',
    u: 'у',
    sh: 'ш',
    ya: 'я',
    v: 'в',
    y: 'й',
    z: 'з',
    ch: 'ч',
    yu: 'ю',
    " ": " ",

    A: 'А',
    B: 'Б',
    D: 'Д',
    E: 'Е',
    YO: 'Ё',
    F: 'Ф',
    H: 'Х',
    I: 'И',
    TS: 'Ц',
    J: 'Ж',
    K: 'К',
    G: 'Г',
    "G'": 'Г',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    "o'": 'O',
    P: 'П',
    Q: 'К',
    R: 'Р',
    S: 'С',
    T: 'Т',
    U: 'У',
    YE: 'Э',
    V: 'В',
    Y: 'Й',
    Z: 'З',
    'Sh':'Ш',
    SH: 'Ш',
    YA: 'Я',
    Yu: 'Ю',
}

let kirillotin = {
    а: 'a',
    б: 'b',
    д: 'd',
    е: 'e',
    ё: 'yo',
    ф: 'f',
    г: 'g',
    х: 'x',
    и: 'i',
    ц: 'ts',
    ы: 'i',
    э: 'ye',
    ж: 'j',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    к: 'q',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    в: 'v',
    й: 'y',
    з: 'z',
    ш: 'sh',
    щ: 'sh',
    ю: 'yu',
    я: 'ya',
    ч: 'ch',
    " ": " ",

    А: 'A',
    Б: 'B',
    Д: 'D',
    Е: 'E',
    Ё: 'YO',
    Ф: 'F',
    Х: 'X',
    И: 'I',
    Ц: 'TS',
    Ж: 'J',
    Г: 'G',
    К: 'K',
    Л: 'L',
    M: 'М',
    Н: 'N',
    О: 'O',
    Э: 'YE',
    П: 'P',
    K: 'K',
    Р: 'R',
    С: 'S',
    T: 'Т',
    У: 'U',
    В: 'V',
    Й: 'Y',
    З: 'Z',
    Г: 'G',
    Ш: 'SH',
    Щ: 'SH',
    Я: 'YA',
    Ю: 'YU',
}



function convert1 (){
    let str1 = ''
    let text = matn1.value
    for(let i = 0; i < text.length; i++){
       let asp = text[i] + text[i+1]
       if(lotinkiril[asp]){
           str1 += lotinkiril[asp]
           i++
       }else if(!lotinkiril[text[i]]){
           str1 += text[i]
       }
       else{
            str1 += lotinkiril[text[i]]
       }
    }  
    matn2.value = str1
}
btn.onclick = convert1


function convert2 (){
    let str2 = ''
    for(let i of matn2.value){
        if(!kirillotin[i]){
        str2 += i  
    }
    else{
        str2 += kirillotin[i]
    }
    }
    matn1.value = str2
}
btn1.onclick = convert2


function ClearFields() {

    document.getElementById("matn1").value = "";
    document.getElementById("matn2").value = "";
}





