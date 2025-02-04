function carre (nb) {
    const resultat = nb +nb;
    return resultat; 
}
const res = carre(3);
console.log(res);

function multipleBy10(nb)
{
    console.log('je donne' +' ' + nb + ' ' + "à ma fonction de multiplication, j'obtient" + ' ' + nb * 10)
};

multipleBy10(carre(3));



const param = prompt('Donne moi un nombre');

function carre(nb) {
  const resultat = nb * nb;
  return resultat;
}

function multipleBy10(nb) {
  console.log(
    'Je donne ' + nb + ' à ma fonction de multiplication, jobtiens ' + nb * 10
  );
} 

multipleBy10(carre(param));