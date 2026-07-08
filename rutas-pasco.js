// Base de datos de transporte: Pasco - Cerro de Pasco (PAS_ET_001-010)
const rutasPasco = {
    "PAS_ET_001": {
        nombre: "Empresa de Transportes 'Cerro de Pasco Express'",
        ruta: "Yanacancha - Plaza Chaupimarca",
        color: '#E67E22',
        ida: [[-10.6700, -76.2500], [-10.6750, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6750, -76.2550], [-10.6700, -76.2500]]
    },
    "PAS_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Mineros'",
        ruta: "Urb. San Juan - Centro",
        color: '#2980B9',
        ida: [[-10.6750, -76.2400], [-10.6780, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6780, -76.2500], [-10.6750, -76.2400]]
    },
    "PAS_ET_003": {
        nombre: "Empresa de Transportes 'Oxapampa Tours'",
        ruta: "Oxapampa - Pasco Centro",
        color: '#27AE60',
        ida: [[-10.5800, -75.4000], [-10.6500, -76.0000], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6500, -76.0000], [-10.5800, -75.4000]]
    },
    "PAS_ET_004": {
        nombre: "Empresa de Transportes 'Corredor Yanacancha'",
        ruta: "Mercado Yanacancha - Terminal",
        color: '#F1C40F',
        ida: [[-10.6650, -76.2550], [-10.6720, -76.2580], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6720, -76.2580], [-10.6650, -76.2550]]
    },
    "PAS_ET_005": {
        nombre: "Empresa de Transportes 'Imperial Pasco'",
        ruta: "Urb. Columna Pasco - Plaza",
        color: '#8E44AD',
        ida: [[-10.6850, -76.2700], [-10.6820, -76.2650], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2650], [-10.6850, -76.2700]]
    },
    "PAS_ET_006": {
        nombre: "Empresa de Transportes 'Sol de Pasco'",
        ruta: "Villa Rica - Cerro de Pasco",
        color: '#C0392B',
        ida: [[-10.7000, -75.2500], [-10.6900, -76.0000], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6900, -76.0000], [-10.7000, -75.2500]]
    },
    "PAS_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de las Nieves'",
        ruta: "Urb. Túpac Amaru - Centro",
        color: '#1ABC9C',
        ida: [[-10.6700, -76.2650], [-10.6750, -76.2620], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6750, -76.2620], [-10.6700, -76.2650]]
    },
    "PAS_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Minero Pasco'",
        ruta: "Zona Minera - Plaza Chaupimarca",
        color: '#34495E',
        ida: [[-10.6900, -76.2550], [-10.6850, -76.2580], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2580], [-10.6900, -76.2550]]
    },
    "PAS_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Pasco'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-10.6780, -76.2450], [-10.6790, -76.2520], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6790, -76.2520], [-10.6780, -76.2450]]
    },
    "PAS_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Pasco'",
        ruta: "San Pedro - Av. Los Incas",
        color: '#7F8C8D',
        ida: [[-10.6850, -76.2500], [-10.6820, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2550], [-10.6850, -76.2500]]
    },
    "PAS_ET_011": {
        nombre: "Empresa de Transportes 'Yanacancha Sur'",
        ruta: "Urb. Yanacancha - Plaza Chaupimarca",
        color: '#E67E22',
        ida: [[-10.6600, -76.2500], [-10.6700, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6700, -76.2550], [-10.6600, -76.2500]]
    },
    "PAS_ET_012": {
        nombre: "Empresa de Transportes 'Los Héroes de Pasco'",
        ruta: "Urb. Héroes - Av. Minería",
        color: '#2980B9',
        ida: [[-10.6900, -76.2650], [-10.6850, -76.2620], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2620], [-10.6900, -76.2650]]
    },
    "PAS_ET_013": {
        nombre: "Empresa de Transportes 'San Juan de Chaupimarca'",
        ruta: "San Juan Bosco - Centro",
        color: '#27AE60',
        ida: [[-10.6750, -76.2450], [-10.6770, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6770, -76.2550], [-10.6750, -76.2450]]
    },
    "PAS_ET_014": {
        nombre: "Empresa de Transportes 'Pasco Metropolitano'",
        ruta: "Urb. Millotingo - Plaza",
        color: '#F1C40F',
        ida: [[-10.6550, -76.2550], [-10.6650, -76.2580], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6650, -76.2580], [-10.6550, -76.2550]]
    },
    "PAS_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Pasco'",
        ruta: "Urb. Yanama - Plaza Chaupimarca",
        color: '#8E44AD',
        ida: [[-10.6850, -76.2400], [-10.6820, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2500], [-10.6850, -76.2400]]
    },
    "PAS_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Pasco'",
        ruta: "Pasco Sur - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-10.7000, -76.2600], [-10.6900, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6900, -76.2600], [-10.7000, -76.2600]]
    },
    "PAS_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Pasco'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-10.6650, -76.2650], [-10.6720, -76.2620], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6720, -76.2620], [-10.6650, -76.2650]]
    },
    "PAS_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas Pasco'",
        ruta: "Urb. Cunas - Centro Chaupimarca",
        color: '#34495E',
        ida: [[-10.6850, -76.2700], [-10.6820, -76.2650], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2650], [-10.6850, -76.2700]]
    },
    "PAS_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Pasco Express'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-10.6800, -76.2400], [-10.6800, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6800, -76.2500], [-10.6800, -76.2400]]
    },
    "PAS_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte Pasco'",
        ruta: "Cono Norte - Av. Los Incas",
        color: '#7F8C8D',
        ida: [[-10.6500, -76.2500], [-10.6650, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6650, -76.2550], [-10.6500, -76.2500]]
    },
    "PAS_ET_021": {
        nombre: "Empresa de Transportes 'Andes Travel Pasco'",
        ruta: "Urb. Santa Bárbara - Plaza Chaupimarca",
        color: '#E67E22',
        ida: [[-10.6900, -76.2500], [-10.6850, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2550], [-10.6900, -76.2500]]
    },
    "PAS_ET_022": {
        nombre: "Empresa de Transportes 'Sol del Mercurio Pasco'",
        ruta: "Barrio Santa Ana - Mercado Modelo",
        color: '#2980B9',
        ida: [[-10.6700, -76.2650], [-10.6750, -76.2620], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6750, -76.2620], [-10.6700, -76.2650]]
    },
    "PAS_ET_023": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sur Pasco'",
        ruta: "San Cristóbal - Plaza de Armas",
        color: '#27AE60',
        ida: [[-10.6850, -76.2400], [-10.6820, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2500], [-10.6850, -76.2400]]
    },
    "PAS_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Andina Pasco'",
        ruta: "Av. La Cultura - Centro",
        color: '#F1C40F',
        ida: [[-10.6650, -76.2500], [-10.6750, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6750, -76.2550], [-10.6650, -76.2500]]
    },
    "PAS_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Pasco'",
        ruta: "Urb. Confraternidad - Mercado",
        color: '#8E44AD',
        ida: [[-10.6950, -76.2600], [-10.6850, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2600], [-10.6950, -76.2600]]
    },
    "PAS_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Central Pasco'",
        ruta: "Salida a La Oroya - Terminal",
        color: '#C0392B',
        ida: [[-10.7000, -76.2400], [-10.6900, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6900, -76.2500], [-10.7000, -76.2400]]
    },
    "PAS_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Pasco'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-10.6850, -76.2750], [-10.6820, -76.2700], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6820, -76.2700], [-10.6850, -76.2750]]
    },
    "PAS_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Andino Pasco'",
        ruta: "Barrio La Libertad - Chaupimarca",
        color: '#34495E',
        ida: [[-10.6750, -76.2400], [-10.6780, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6780, -76.2500], [-10.6750, -76.2400]]
    },
    "PAS_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Andina Pasco II'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-10.6600, -76.2600], [-10.6700, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6700, -76.2600], [-10.6600, -76.2600]]
    },
    "PAS_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cachi Pasco'",
        ruta: "San Pedro - Av. Los Incas",
        color: '#7F8C8D',
        ida: [[-10.6500, -76.2700], [-10.6650, -76.2650], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6650, -76.2650], [-10.6500, -76.2700]]
    },
    "PAS_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales de Pasco'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-10.6900, -76.2700], [-10.6850, -76.2650], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2650], [-10.6900, -76.2700]]
    },
    "PAS_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Pasco II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-10.7000, -76.2600], [-10.6900, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6900, -76.2600], [-10.7000, -76.2600]]
    },
    "PAS_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Pasco II'",
        ruta: "Belo Horizonte - Plaza Chaupimarca",
        color: '#16A085',
        ida: [[-10.6650, -76.2400], [-10.6720, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6720, -76.2500], [-10.6650, -76.2400]]
    },
    "PAS_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Pasco'",
        ruta: "Urb. Algarrobos - Av. Minería",
        color: '#C0392B',
        ida: [[-10.6750, -76.2400], [-10.6780, -76.2500], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6780, -76.2500], [-10.6750, -76.2400]]
    },
    "PAS_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Pasco'",
        ruta: "Villa del Pacífico - Centro Chaupimarca",
        color: '#27AE60',
        ida: [[-10.6900, -76.2750], [-10.6850, -76.2700], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6850, -76.2700], [-10.6900, -76.2750]]
    },
    "PAS_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Pasco'",
        ruta: "Miraflores - Av. Los Incas",
        color: '#8E44AD',
        ida: [[-10.6550, -76.2600], [-10.6650, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6650, -76.2600], [-10.6550, -76.2600]]
    },
    "PAS_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Pasco'",
        ruta: "Av. Circunvalación - Mercado Modelo",
        color: '#E67E22',
        ida: [[-10.6700, -76.2350], [-10.6750, -76.2480], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6750, -76.2480], [-10.6700, -76.2350]]
    },
    "PAS_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Pasco II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-10.6600, -76.2500], [-10.6700, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6700, -76.2550], [-10.6600, -76.2500]]
    },
    "PAS_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Pasco II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-10.6950, -76.2600], [-10.6880, -76.2600], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6880, -76.2600], [-10.6950, -76.2600]]
    },
    "PAS_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Pasco II'",
        ruta: "San Pedro - Av. Los Incas",
        color: '#3498DB',
        ida: [[-10.6500, -76.2500], [-10.6650, -76.2550], [-10.6800, -76.2600]],
        vuelta: [[-10.6800, -76.2600], [-10.6650, -76.2550], [-10.6500, -76.2500]]
    },
};
