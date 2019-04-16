//chaine de caractère à traiter
var str = 'En informatique, un logiciel est un ensemble de séquences d’instructions interprétables par une machine et d’un jeu de données nécessaires à ces opérations.';


document.getElementById('result').innerHTML=
'Le 4ème caractère de la phrase est: ' + str.slice(3,4) + ' \".' + '<br>'
+ 'Le 10ème caractère de la phrase est: ' + str.slice(9,10) + ' \".' + '<br>'
+ 'Le 35ème caractère de la phrase est: ' + str.slice(34,35)+ ' \".' + '<br>'
+ 'Le 59ème caractère de la phrase est: ' + str.slice(58,59)+ ' \".'