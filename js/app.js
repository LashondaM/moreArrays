var oreo = ['Billy', 2, 'Mandy', 2, 'Mac', 3, 'Cheese', 4, 'Liza', 'Koshy'];
    console.log(oreo);

    // pushing array with two arguments

    function thing(boy, girl) {
  
        boy.push(girl);
console.log(boy);
return boy
    }

    thing(oreo, ['Ray', 'Cyrus']);
    console.log(thing(oreo, '1'))

    //

function newOreo(girl007) {
    return girl007.slice(8,10);
}
console.log(newOreo(oreo))
