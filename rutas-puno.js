// Base de datos de transporte: Puno (PUN_ET_001-010)
const rutasPuno = {
    "PUN_ET_001": {
        nombre: "Empresa de Transportes 'Lago Sagrado'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#2980B9',
        ida: [[-15.8500, -70.0200], [-15.8400, -70.0250], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8400, -70.0250], [-15.8500, -70.0200]]
    },
    "PUN_ET_002": {
        nombre: "Empresa de Transportes 'Juliaca-Puno Express'",
        ruta: "Puno Centro - Salida a Juliaca",
        color: '#E74C3C',
        ida: [[-15.8300, -70.0300], [-15.8200, -70.0200], [-15.8100, -70.0100]],
        vuelta: [[-15.8100, -70.0100], [-15.8200, -70.0200], [-15.8300, -70.0300]]
    },
    "PUN_ET_003": {
        nombre: "Empresa de Transportes 'Altiplano Tours'",
        ruta: "Urb. Huáscar - Mercado Central",
        color: '#27AE60',
        ida: [[-15.8450, -70.0100], [-15.8350, -70.0200], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8350, -70.0200], [-15.8450, -70.0100]]
    },
    "PUN_ET_004": {
        nombre: "Empresa de Transportes 'Puno Real'",
        ruta: "Av. Costanera - Barrio Porteño",
        color: '#F1C40F',
        ida: [[-15.8250, -70.0400], [-15.8300, -70.0350], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8300, -70.0350], [-15.8250, -70.0400]]
    },
    "PUN_ET_005": {
        nombre: "Empresa de Transportes 'San Carlos'",
        ruta: "Urb. San Carlos - Centro",
        color: '#8E44AD',
        ida: [[-15.8500, -70.0300], [-15.8400, -70.0300], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8400, -70.0300], [-15.8500, -70.0300]]
    },
    "PUN_ET_006": {
        nombre: "Empresa de Transportes 'Inca Manco Cápac'",
        ruta: "Circunvalación Sur - Mercado Laykakota",
        color: '#C0392B',
        ida: [[-15.8550, -70.0150], [-15.8450, -70.0200], [-15.8350, -70.0250]],
        vuelta: [[-15.8350, -70.0250], [-15.8450, -70.0200], [-15.8550, -70.0150]]
    },
    "PUN_ET_007": {
        nombre: "Empresa de Transportes 'Barrio Victoria'",
        ruta: "Barrio Victoria - Av. La Torre",
        color: '#1ABC9C',
        ida: [[-15.8200, -70.0250], [-15.8250, -70.0300], [-15.8300, -70.0350]],
        vuelta: [[-15.8300, -70.0350], [-15.8250, -70.0300], [-15.8200, -70.0250]]
    },
    "PUN_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Titicaca'",
        ruta: "Zona Alta - Puerto Muelle",
        color: '#34495E',
        ida: [[-15.8150, -70.0350], [-15.8250, -70.0350], [-15.8350, -70.0350]],
        vuelta: [[-15.8350, -70.0350], [-15.8250, -70.0350], [-15.8150, -70.0350]]
    },
    "PUN_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Puno'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#D35400',
        ida: [[-15.8400, -70.0100], [-15.8350, -70.0200], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8350, -70.0200], [-15.8400, -70.0100]]
    },
    "PUN_ET_010": {
        nombre: "Empresa de Transportes 'Unión Puno'",
        ruta: "Barrio Miraflores - Centro",
        color: '#7F8C8D',
        ida: [[-15.8250, -70.0150], [-15.8280, -70.0250], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8280, -70.0250], [-15.8250, -70.0150]]
    },
    "PUN_ET_011": {
        nombre: "Empresa de Transportes 'Juliaca Express'",
        ruta: "Terminal Terrestre - Plaza Bolognesi",
        color: '#E67E22',
        ida: [[-15.4850, -70.1300], [-15.4950, -70.1350], [-15.5000, -70.1400]],
        vuelta: [[-15.5000, -70.1400], [-15.4950, -70.1350], [-15.4850, -70.1300]]
    },
    "PUN_ET_012": {
        nombre: "Empresa de Transportes 'Los Andes de Juliaca'",
        ruta: "Urb. La Rinconada - Mercado San José",
        color: '#2980B9',
        ida: [[-15.5100, -70.1200], [-15.5050, -70.1250], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5050, -70.1250], [-15.5100, -70.1200]]
    },
    "PUN_ET_013": {
        nombre: "Empresa de Transportes 'San Román Tour'",
        ruta: "Salida Arequipa - Centro Cívico",
        color: '#27AE60',
        ida: [[-15.5200, -70.1500], [-15.5100, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5100, -70.1400], [-15.5200, -70.1500]]
    },
    "PUN_ET_014": {
        nombre: "Empresa de Transportes 'Ciudad de los Vientos'",
        ruta: "Urb. Taparachi - Av. Ferrocarril",
        color: '#F1C40F',
        ida: [[-15.4700, -70.1400], [-15.4850, -70.1350], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4850, -70.1350], [-15.4700, -70.1400]]
    },
    "PUN_ET_015": {
        nombre: "Empresa de Transportes 'Altiplano Sur'",
        ruta: "Urb. Cavia - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-15.5000, -70.1100], [-15.5000, -70.1200], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5000, -70.1200], [-15.5000, -70.1100]]
    },
    "PUN_ET_016": {
        nombre: "Empresa de Transportes 'Aeropuerto Juliaca'",
        ruta: "Aeropuerto Inca Manco Cápac - Centro",
        color: '#C0392B',
        ida: [[-15.4600, -70.1500], [-15.4800, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4800, -70.1400], [-15.4600, -70.1500]]
    },
    "PUN_ET_017": {
        nombre: "Empresa de Transportes 'Belo Horizonte Juliaca'",
        ruta: "Salida Puno - Mercado Túpac Amaru",
        color: '#1ABC9C',
        ida: [[-15.5300, -70.1200], [-15.5150, -70.1250], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5150, -70.1250], [-15.5300, -70.1200]]
    },
    "PUN_ET_018": {
        nombre: "Empresa de Transportes 'Integración Juliaca'",
        ruta: "Urb. San Pedro - Centro",
        color: '#34495E',
        ida: [[-15.4900, -70.1500], [-15.4950, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4950, -70.1400], [-15.4900, -70.1500]]
    },
    "PUN_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Juliaca'",
        ruta: "Salida Huancané - Plaza",
        color: '#D35400',
        ida: [[-15.4800, -70.1100], [-15.4900, -70.1200], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4900, -70.1200], [-15.4800, -70.1100]]
    },
    "PUN_ET_020": {
        nombre: "Empresa de Transportes 'Los Héroes de Juliaca'",
        ruta: "Urb. Héroes - Av. Triunfo",
        color: '#7F8C8D',
        ida: [[-15.5000, -70.1500], [-15.5000, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5000, -70.1400], [-15.5000, -70.1500]]
    },
    "PUN_ET_021": {
        nombre: "Empresa de Transportes 'Los Alamos de Juliaca'",
        ruta: "Urb. Los Álamos - Mercado Central",
        color: '#E67E22',
        ida: [[-15.4900, -70.1200], [-15.4950, -70.1250], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4950, -70.1250], [-15.4900, -70.1200]]
    },
    "PUN_ET_022": {
        nombre: "Empresa de Transportes 'San Francisco'",
        ruta: "San Francisco - Plaza Bolognesi",
        color: '#2980B9',
        ida: [[-15.5100, -70.1400], [-15.5050, -70.1350], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5050, -70.1350], [-15.5100, -70.1400]]
    },
    "PUN_ET_023": {
        nombre: "Empresa de Transportes 'Belo Horizonte Juliaca II'",
        ruta: "Urb. Belo Horizonte - Plaza Zela",
        color: '#16A085',
        ida: [[-15.4800, -70.1200], [-15.4900, -70.1250], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4900, -70.1250], [-15.4800, -70.1200]]
    },
    "PUN_ET_024": {
        nombre: "Empresa de Transportes 'Algarrobos Altiplánicos'",
        ruta: "Urb. Algarrobos - Terminal Norte",
        color: '#C0392B',
        ida: [[-15.4700, -70.1300], [-15.4800, -70.1300], [-15.4900, -70.1300]],
        vuelta: [[-15.4900, -70.1300], [-15.4800, -70.1300], [-15.4700, -70.1300]]
    },
    "PUN_ET_025": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Altiplano'",
        ruta: "Villa del Pacífico - Centro",
        color: '#27AE60',
        ida: [[-15.5200, -70.1200], [-15.5100, -70.1250], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5100, -70.1250], [-15.5200, -70.1200]]
    },
    "PUN_ET_026": {
        nombre: "Empresa de Transportes 'Miraflores Puno'",
        ruta: "Miraflores - Av. El Sol",
        color: '#8E44AD',
        ida: [[-15.8200, -70.0200], [-15.8250, -70.0250], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8250, -70.0250], [-15.8200, -70.0200]]
    },
    "PUN_ET_027": {
        nombre: "Empresa de Transportes 'La Unión del Lago'",
        ruta: "Av. Costanera - Mercado Central",
        color: '#E67E22',
        ida: [[-15.8150, -70.0400], [-15.8250, -70.0350], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8250, -70.0350], [-15.8150, -70.0400]]
    },
    "PUN_ET_028": {
        nombre: "Empresa de Transportes 'Santa Rosa Puno Express'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-15.8450, -70.0100], [-15.8400, -70.0200], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8400, -70.0200], [-15.8450, -70.0100]]
    },
    "PUN_ET_029": {
        nombre: "Empresa de Transportes 'Terminal Nacional Puno'",
        ruta: "Terminal - Zona Norte Puno",
        color: '#D35400',
        ida: [[-15.8550, -70.0200], [-15.8450, -70.0250], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8450, -70.0250], [-15.8550, -70.0200]]
    },
    "PUN_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro del Altiplano'",
        ruta: "San Pedro - Av. Sesquicentenario",
        color: '#3498DB',
        ida: [[-15.8300, -70.0100], [-15.8300, -70.0200], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8300, -70.0200], [-15.8300, -70.0100]]
    },
    "PUN_ET_031": {
        nombre: "Empresa de Transportes 'Los Rosales de Puno'",
        ruta: "Urb. Los Rosales - Centro",
        color: '#7F8C8D',
        ida: [[-15.8200, -70.0100], [-15.8250, -70.0200], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8250, -70.0200], [-15.8200, -70.0100]]
    },
    "PUN_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Puno'",
        ruta: "San Pedro - Mercado Laykakota",
        color: '#34495E',
        ida: [[-15.8400, -70.0100], [-15.8350, -70.0150], [-15.8300, -70.0200]],
        vuelta: [[-15.8300, -70.0200], [-15.8350, -70.0150], [-15.8400, -70.0100]]
    },
    "PUN_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Sur'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-15.8450, -70.0200], [-15.8400, -70.0250], [-15.8350, -70.0300]],
        vuelta: [[-15.8350, -70.0300], [-15.8400, -70.0250], [-15.8450, -70.0200]]
    },
    "PUN_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Altiplanos'",
        ruta: "Urb. Algarrobos - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-15.8500, -70.0150], [-15.8450, -70.0200], [-15.8400, -70.0250]],
        vuelta: [[-15.8400, -70.0250], [-15.8450, -70.0200], [-15.8500, -70.0150]]
    },
    "PUN_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Puno'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-15.8350, -70.0400], [-15.8320, -70.0350], [-15.8300, -70.0300]],
        vuelta: [[-15.8300, -70.0300], [-15.8320, -70.0350], [-15.8350, -70.0400]]
    },
    "PUN_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Juliaca'",
        ruta: "Miraflores - Av. Ferrocarril",
        color: '#8E44AD',
        ida: [[-15.5100, -70.1500], [-15.5050, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5050, -70.1400], [-15.5100, -70.1500]]
    },
    "PUN_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal'",
        ruta: "Av. Circunvalación - Mercado Túpac",
        color: '#E67E22',
        ida: [[-15.4900, -70.1400], [-15.4950, -70.1350], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4950, -70.1350], [-15.4900, -70.1400]]
    },
    "PUN_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Juliaca'",
        ruta: "Santa Rosa - Plaza Bolognesi",
        color: '#2980B9',
        ida: [[-15.5150, -70.1100], [-15.5080, -70.1200], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.5080, -70.1200], [-15.5150, -70.1100]]
    },
    "PUN_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Juliaca'",
        ruta: "Terminal - Zona Industrial Sur",
        color: '#D35400',
        ida: [[-15.5000, -70.1300], [-15.5100, -70.1350], [-15.5200, -70.1400]],
        vuelta: [[-15.5200, -70.1400], [-15.5100, -70.1350], [-15.5000, -70.1300]]
    },
    "PUN_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Juliaca'",
        ruta: "San Pedro - Av. 28 de Julio",
        color: '#3498DB',
        ida: [[-15.4950, -70.1500], [-15.4980, -70.1400], [-15.5000, -70.1300]],
        vuelta: [[-15.5000, -70.1300], [-15.4980, -70.1400], [-15.4950, -70.1500]]
    },
};
