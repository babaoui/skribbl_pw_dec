let i = document.getElementById('i');
let o = document.getElementById('o');
let g = document.getElementById('g');

g.addEventListener('click', () => {
    o.innerHTML = i.value.match(/[^,]*(?=( *, *)|$)/g).map(x => x.split('').map(c => String.fromCharCode(c.charCodeAt()+1)).join('')).join('%%%').replace(/(%%%)+/g,'%%%')
    o.innerHTML = o.innerHTML.substring(0, o.innerHTML.length - 1);
});
