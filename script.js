function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

var provincias = [
    {'region' : 'Ninguna', 'name' : 'Ciudad Autónoma de Buenos Aires', 'capital' : 'C.A.B.A', 'inhabitants' : "2.890.151", 'area' : 200 },
    {'region' : 'Ninguna', 'name' : 'Buenos Aires', 'capital' : 'La Plata', 'inhabitants' : 15625084, 'area' : 307571 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Catamarca', 'capital' : 'San Fernando del Valle de Catamarca', 'inhabitants' : 367.828, 'area' : 99633 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Chaco', 'capital' : 'Resistencia', 'inhabitants' : 1055259, 'area' : 102602 },
    {'region' : 'Patagónica', 'name' : 'Chubut', 'capital' : 'Rawson', 'inhabitants' : 509108, 'area' : 224686 },
    {'region' : 'Centro', 'name' : 'Córdoba', 'capital' : 'Córdoba', 'inhabitants' : 3308876, 'area' : 165321 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Corrientes', 'capital' : 'Corrientes', 'inhabitants' : 992595, 'area' : 88199 },
    {'region' : 'Centro', 'name' : 'Entre Ríos', 'capital' : 'Paraná', 'inhabitants' : 1235994, 'area' : 78781 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Formosa', 'capital' : 'Formosa', 'inhabitants' : 530162, 'area' : 72066 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Jujuy', 'capital' : 'San Salvador de Jujuy', 'inhabitants' : 673307, 'area' : 53219 },
    {'region' : 'Patagónica', 'name' : 'La Pampa', 'capital' : 'Santa Rosa', 'inhabitants' : 318951, 'area' : 143440 },
    {'region' : 'Nuevo Cuyo', 'name' : 'La Rioja', 'capital' : 'Rioja', 'inhabitants' : 333642, 'area' : 89680 },
    {'region' : 'Nuevo Cuyo', 'name' : 'Mendoza', 'capital' : 'Mendoza', 'inhabitants' : 1738929, 'area' : 148827 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Misiones', 'capital' : 'Posadas', 'inhabitants' : 1101593, 'area' : 29801 },
    {'region' : 'Patagónica', 'name' : 'Neuquén', 'capital' : 'Neuquén', 'inhabitants' : 551266, 'area' : 94078 },
    {'region' : 'Patagónica', 'name' : 'Río Negro', 'capital' : 'Viedma', 'inhabitants' : 638645, 'area' : 203013 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Salta', 'capital' : 'Salta', 'inhabitants' : 1214441, 'area' : 155488 },
    {'region' : 'Nuevo Cuyo', 'name' : 'San Juan', 'capital' : 'San Juan', 'inhabitants' : 681055, 'area' : 89651 },
    {'region' : 'Nuevo Cuyo', 'name' : 'San Luis', 'capital' : 'San Luis', 'inhabitants' : 432310, 'area' : 76748 },
    {'region' : 'Patagónica', 'name' : 'Santa Cruz', 'capital' : 'Río Gallegos', 'inhabitants' : 273964, 'area' : 243943 },
    {'region' : 'Centro', 'name' : 'Santa Fe', 'capital' : 'Santa Fe', 'inhabitants' : 3194537, 'area' : 133007 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Santiago del Estero', 'capital' : 'Santiago del Estero', 'inhabitants' : 874006, 'area' : 136351 },
    {'region' : 'Patagónica', 'name' : 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', 'capital' : 'Ushuaia', 'inhabitants' : 127205, 'area' : 215714 },
    {'region' : 'Norte Grande Argentino', 'name' : 'Tucumán', 'capital' : 'San Miguel de Tucumán', 'inhabitants' : 1448188, 'area' : 22.524 },
];

var url = new URL(document.location);

for (const [key, value] of url.searchParams.entries()) {
    console.log(key, value);
}

const region = url.searchParams.get("region");
const nombre = url.searchParams.get("nombre");

const provinciasFiltradas = provincias.filter(cumpleLaRegion).filter(cumpleElNombre);

function cumpleLaRegion(p) {
    if (!region || region.match(/Todas/i)) return true;

    var regex = new RegExp(region, 'i');
    return regex.test(p.region);
}

function cumpleElNombre(p) {
    if (!nombre) return true;
    
    var regex = new RegExp(nombre, 'i');
    return regex.test(p.name);
}

var str = JSON.stringify(provinciasFiltradas, undefined, 4);
output(syntaxHighlight(str));

// agregar comparacion entre queryparams y region/nombre sin casing
// agregar soporte a region "todas"
// relacionar bugs aca con los bugs del frontend
