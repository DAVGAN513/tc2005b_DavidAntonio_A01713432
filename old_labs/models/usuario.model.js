const intentos = [];

module.exports = {
    guardar: (nuevoIntento) => {
        intentos.push({password: nuevoIntento, fecha: new Date().toLocaleDateString()});
    },
    fecha: () => {
        return intentos;
    }
};