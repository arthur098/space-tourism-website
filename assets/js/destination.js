var Destination = Destination || {};

Destination.Carrosel = (function () {

    function Carrosel() {
        this.planetAnchor = document.getElementsByClassName('planet-anchor');
    }

    Carrosel.prototype.executar = function() {
        for (let i = 0; i < this.planetAnchor.length; i++) {
            this.planetAnchor[i].addEventListener('click', function (event) {
                document.querySelector('.planets').querySelector('img').style.marginLeft = '-' + (parseInt(event.currentTarget.dataset.index) > 0 ? parseInt(event.currentTarget.dataset.index) * 48.177 : 0) + 'vw';
            });
        }
    }

    return Carrosel;
}());

(function() {
    new Destination.Carrosel().executar();
}());