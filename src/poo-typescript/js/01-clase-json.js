var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',

    cambiaColor: function(){
        this.color= nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiaColor("Azul");