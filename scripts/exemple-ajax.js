//On import la fonction doAjax spécifiquement du fichier
//ajax.js en utilisant les accolades pour indiquer les
//variable qu'on veut importer du fichier cible.
import {doAjax} from './ajax';
//Autre solution, avec un require.
// const doAjax = require('./ajax').doAjax;

document.querySelector('#requete')
.addEventListener('click', function () {
    doAjax({
        url: 'fichier.txt',
        callback: function (reponse) {
            document.querySelector('#para')
                .innerHTML = reponse;
        }
    });
});

document.querySelector('#requete2')
.addEventListener('click', function () {

    doAjax({
        url: 'README.md',
        callback: function (reponse) {
            let div = document.createElement('div');
            div.innerHTML = reponse;
            document.querySelector('#para2')
                .appendChild(div);
        }
    });
});