// Base de datos de transporte: Cajamarca (CAJ_ET_001-010)
const rutasCajamarca = {
    "CAJ_ET_001": {
        nombre: "Empresa de Transportes 'Cajamarca Express'",
        ruta: "Baños del Inca - Plaza de Armas",
        color: '#E67E22',
        ida: [[-7.1600, -78.4700], [-7.1500, -78.5000], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1500, -78.5000], [-7.1600, -78.4700]]
    },
    "CAJ_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Cajamarquinos'",
        ruta: "Urb. Los Olivos - Centro",
        color: '#2980B9',
        ida: [[-7.1400, -78.5300], [-7.1500, -78.5250], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1500, -78.5250], [-7.1400, -78.5300]]
    },
    "CAJ_ET_003": {
        nombre: "Empresa de Transportes 'Corredor del Cumbe'",
        ruta: "Cumbe Mayo - Centro Cajamarca",
        color: '#27AE60',
        ida: [[-7.1800, -78.5500], [-7.1700, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5300], [-7.1800, -78.5500]]
    },
    "CAJ_ET_004": {
        nombre: "Empresa de Transportes 'Huaraz-Cajamarca'",
        ruta: "Terminal Terrestre - Plaza Mayor",
        color: '#F1C40F',
        ida: [[-7.1800, -78.5000], [-7.1700, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5100], [-7.1800, -78.5000]]
    },
    "CAJ_ET_005": {
        nombre: "Empresa de Transportes 'Imperial Cajamarca'",
        ruta: "Urb. La Alameda - Centro",
        color: '#8E44AD',
        ida: [[-7.1500, -78.5400], [-7.1550, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5300], [-7.1500, -78.5400]]
    },
    "CAJ_ET_006": {
        nombre: "Empresa de Transportes 'Sol del Norte Cajamarca'",
        ruta: "Salida a Jaén - Terminal",
        color: '#C0392B',
        ida: [[-7.1300, -78.5000], [-7.1400, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1400, -78.5100], [-7.1300, -78.5000]]
    },
    "CAJ_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Cajamarca'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-7.1700, -78.5100], [-7.1650, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1650, -78.5150], [-7.1700, -78.5100]]
    },
    "CAJ_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Industrial Cajamarca'",
        ruta: "Zona Industrial - Plaza de Armas",
        color: '#34495E',
        ida: [[-7.1900, -78.5100], [-7.1800, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1800, -78.5150], [-7.1900, -78.5100]]
    },
    "CAJ_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Cajamarca'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-7.1500, -78.5100], [-7.1550, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5150], [-7.1500, -78.5100]]
    },
    "CAJ_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Cajamarca'",
        ruta: "San Pedro - Av. El Maestro",
        color: '#7F8C8D',
        ida: [[-7.1700, -78.5300], [-7.1650, -78.5250], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1650, -78.5250], [-7.1700, -78.5300]]
    },
    "CAJ_ET_011": {
        nombre: "Empresa de Transportes 'Cajamarca Plus'",
        ruta: "Urb. Los Cedros - Plaza de Armas",
        color: '#E67E22',
        ida: [[-7.1500, -78.5500], [-7.1550, -78.5350], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5350], [-7.1500, -78.5500]]
    },
    "CAJ_ET_012": {
        nombre: "Empresa de Transportes 'Cordillera Andina'",
        ruta: "Urb. El Bosque - Centro",
        color: '#2980B9',
        ida: [[-7.1450, -78.5100], [-7.1520, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1520, -78.5150], [-7.1450, -78.5100]]
    },
    "CAJ_ET_013": {
        nombre: "Empresa de Transportes 'San Bartolo Cajamarca'",
        ruta: "San Bartolo - Av. Industrial",
        color: '#27AE60',
        ida: [[-7.1750, -78.5000], [-7.1700, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5100], [-7.1750, -78.5000]]
    },
    "CAJ_ET_014": {
        nombre: "Empresa de Transportes 'Cajamarca Moderna'",
        ruta: "Urb. Los Jazmines - Centro",
        color: '#F1C40F',
        ida: [[-7.1550, -78.5500], [-7.1580, -78.5350], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1580, -78.5350], [-7.1550, -78.5500]]
    },
    "CAJ_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Cajamarca'",
        ruta: "Urb. Bellavista - Centro",
        color: '#8E44AD',
        ida: [[-7.1650, -78.5400], [-7.1620, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1620, -78.5300], [-7.1650, -78.5400]]
    },
    "CAJ_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Cajamarca'",
        ruta: "Cajamarca Sur - Terminal",
        color: '#C0392B',
        ida: [[-7.1800, -78.5200], [-7.1700, -78.5200], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5200], [-7.1800, -78.5200]]
    },
    "CAJ_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Cajamarca'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-7.1400, -78.5200], [-7.1500, -78.5200], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1500, -78.5200], [-7.1400, -78.5200]]
    },
    "CAJ_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas Cajamarca'",
        ruta: "Urb. Cunas - Centro Cajamarca",
        color: '#34495E',
        ida: [[-7.1700, -78.5400], [-7.1650, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1650, -78.5300], [-7.1700, -78.5400]]
    },
    "CAJ_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Cajamarca Express'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-7.1600, -78.5000], [-7.1600, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1600, -78.5100], [-7.1600, -78.5000]]
    },
    "CAJ_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte Cajamarca'",
        ruta: "Cono Norte - Av. El Maestro",
        color: '#7F8C8D',
        ida: [[-7.1300, -78.5200], [-7.1450, -78.5200], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1450, -78.5200], [-7.1300, -78.5200]]
    },
    "CAJ_ET_021": {
        nombre: "Empresa de Transportes 'Huamanguina Tours Cajamarca'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-7.1450, -78.5350], [-7.1550, -78.5280], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5280], [-7.1450, -78.5350]]
    },
    "CAJ_ET_022": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sol Cajamarca'",
        ruta: "San Cristóbal - Mercado Mayorista",
        color: '#2980B9',
        ida: [[-7.1750, -78.5100], [-7.1700, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5150], [-7.1750, -78.5100]]
    },
    "CAJ_ET_023": {
        nombre: "Empresa de Transportes 'Los Ángeles de Cajamarca'",
        ruta: "Urb. Los Ángeles - Centro",
        color: '#27AE60',
        ida: [[-7.1500, -78.5300], [-7.1550, -78.5250], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5250], [-7.1500, -78.5300]]
    },
    "CAJ_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Huanca Cajamarca'",
        ruta: "Av. Independencia - Plaza",
        color: '#F1C40F',
        ida: [[-7.1650, -78.5050], [-7.1620, -78.5120], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1620, -78.5120], [-7.1650, -78.5050]]
    },
    "CAJ_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Sur Cajamarca'",
        ruta: "Urb. Confraternidad II - Mercado",
        color: '#8E44AD',
        ida: [[-7.1850, -78.5300], [-7.1750, -78.5250], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1750, -78.5250], [-7.1850, -78.5300]]
    },
    "CAJ_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Cajamarca'",
        ruta: "Salida a Bambamarca - Terminal",
        color: '#C0392B',
        ida: [[-7.1200, -78.5100], [-7.1400, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1400, -78.5150], [-7.1200, -78.5100]]
    },
    "CAJ_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Cajamarca II'",
        ruta: "Urb. Fátima - Centro",
        color: '#1ABC9C',
        ida: [[-7.1750, -78.5350], [-7.1680, -78.5280], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1680, -78.5280], [-7.1750, -78.5350]]
    },
    "CAJ_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Cajamarca'",
        ruta: "Barrio La Libertad II - Centro",
        color: '#34495E',
        ida: [[-7.1500, -78.5000], [-7.1550, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5100], [-7.1500, -78.5000]]
    },
    "CAJ_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Cajamarquina'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-7.1400, -78.5400], [-7.1500, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1500, -78.5300], [-7.1400, -78.5400]]
    },
    "CAJ_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cajamarca II'",
        ruta: "San Pedro - Av. El Maestro",
        color: '#7F8C8D',
        ida: [[-7.1800, -78.5100], [-7.1700, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1700, -78.5150], [-7.1800, -78.5100]]
    },
    "CAJ_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Cajamarca'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-7.1550, -78.5050], [-7.1580, -78.5120], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1580, -78.5120], [-7.1550, -78.5050]]
    },
    "CAJ_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Cajamarca II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-7.1850, -78.5150], [-7.1750, -78.5180], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1750, -78.5180], [-7.1850, -78.5150]]
    },
    "CAJ_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Cajamarca II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-7.1400, -78.5100], [-7.1500, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1500, -78.5150], [-7.1400, -78.5100]]
    },
    "CAJ_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Cajamarca'",
        ruta: "Urb. Algarrobos - Av. El Maestro",
        color: '#C0392B',
        ida: [[-7.1350, -78.5200], [-7.1450, -78.5200], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1450, -78.5200], [-7.1350, -78.5200]]
    },
    "CAJ_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Cajamarca'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-7.1700, -78.5500], [-7.1650, -78.5350], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1650, -78.5350], [-7.1700, -78.5500]]
    },
    "CAJ_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Cajamarca'",
        ruta: "Miraflores - Av. El Maestro",
        color: '#8E44AD',
        ida: [[-7.1500, -78.5400], [-7.1550, -78.5300], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1550, -78.5300], [-7.1500, -78.5400]]
    },
    "CAJ_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Cajamarca'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-7.1650, -78.4950], [-7.1620, -78.5080], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1620, -78.5080], [-7.1650, -78.4950]]
    },
    "CAJ_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Cajamarca II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-7.1700, -78.5000], [-7.1650, -78.5100], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1650, -78.5100], [-7.1700, -78.5000]]
    },
    "CAJ_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Cajamarca II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-7.1950, -78.5100], [-7.1850, -78.5150], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1850, -78.5150], [-7.1950, -78.5100]]
    },
    "CAJ_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Cajamarca III'",
        ruta: "San Pedro - Av. El Maestro",
        color: '#3498DB',
        ida: [[-7.1250, -78.5150], [-7.1400, -78.5180], [-7.1600, -78.5200]],
        vuelta: [[-7.1600, -78.5200], [-7.1400, -78.5180], [-7.1250, -78.5150]]
    },
};
