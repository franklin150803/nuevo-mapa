// Base de datos de transporte: Áncash - Chimbote/Huaraz (ANC_ET_001-010)
const rutasAncash = {
    "ANC_ET_001": {
        nombre: "Empresa de Transportes 'Chimbote Express'",
        ruta: "Nuevo Chimbote - Plaza de Armas",
        color: '#E67E22',
        ida: [[-9.1100, -78.5500], [-9.0800, -78.5800], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0800, -78.5800], [-9.1100, -78.5500]]
    },
    "ANC_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Huaracinos'",
        ruta: "Urb. Los Olivos - Centro Huaraz",
        color: '#2980B9',
        ida: [[-9.5400, -77.5300], [-9.5300, -77.5200], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5300, -77.5200], [-9.5400, -77.5300]]
    },
    "ANC_ET_003": {
        nombre: "Empresa de Transportes 'Corredor del Santa'",
        ruta: "Coishco - Terminal Chimbote",
        color: '#27AE60',
        ida: [[-9.0300, -78.6000], [-9.0500, -78.5900], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0500, -78.5900], [-9.0300, -78.6000]]
    },
    "ANC_ET_004": {
        nombre: "Empresa de Transportes 'Callejón de Huaylas'",
        ruta: "Carhuaz - Huaraz Centro",
        color: '#F1C40F',
        ida: [[-9.2800, -77.6400], [-9.4000, -77.6000], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.4000, -77.6000], [-9.2800, -77.6400]]
    },
    "ANC_ET_005": {
        nombre: "Empresa de Transportes 'Imperial Áncash'",
        ruta: "Urb. Buenos Aires - Chimbote",
        color: '#8E44AD',
        ida: [[-9.0900, -78.5700], [-9.0800, -78.5800], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0800, -78.5800], [-9.0900, -78.5700]]
    },
    "ANC_ET_006": {
        nombre: "Empresa de Transportes 'Sol del Callejón'",
        ruta: "Yungay - Huaraz Terminal",
        color: '#C0392B',
        ida: [[-9.1300, -77.7400], [-9.3000, -77.6500], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.3000, -77.6500], [-9.1300, -77.7400]]
    },
    "ANC_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Copacabana Áncash'",
        ruta: "Urb. Villón - Centro",
        color: '#1ABC9C',
        ida: [[-9.5300, -77.5400], [-9.5250, -77.5350], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5250, -77.5350], [-9.5300, -77.5400]]
    },
    "ANC_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Industrial Chimbote'",
        ruta: "Zona Pesquera - Plaza Mayor",
        color: '#34495E',
        ida: [[-9.0600, -78.6000], [-9.0650, -78.5950], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0650, -78.5950], [-9.0600, -78.6000]]
    },
    "ANC_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Áncash'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-9.0800, -78.5900], [-9.0750, -78.5900], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0750, -78.5900], [-9.0800, -78.5900]]
    },
    "ANC_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Áncash'",
        ruta: "San Pedro - Av. Pardo",
        color: '#7F8C8D',
        ida: [[-9.0700, -78.5800], [-9.0700, -78.5850], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0700, -78.5850], [-9.0700, -78.5800]]
    },
    "ANC_ET_011": {
        nombre: "Empresa de Transportes 'Nuevo Chimbote Plus'",
        ruta: "Urb. Los Cedros - Plaza de Armas",
        color: '#E67E22',
        ida: [[-9.1200, -78.5400], [-9.1000, -78.5600], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.1000, -78.5600], [-9.1200, -78.5400]]
    },
    "ANC_ET_012": {
        nombre: "Empresa de Transportes 'Cordillera Blanca'",
        ruta: "Urb. Monterrey - Huaraz Centro",
        color: '#2980B9',
        ida: [[-9.5000, -77.5300], [-9.5100, -77.5300], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5100, -77.5300], [-9.5000, -77.5300]]
    },
    "ANC_ET_013": {
        nombre: "Empresa de Transportes 'San Bartolo Áncash'",
        ruta: "San Bartolo - Av. Pardo",
        color: '#27AE60',
        ida: [[-9.0600, -78.5800], [-9.0650, -78.5850], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0650, -78.5850], [-9.0600, -78.5800]]
    },
    "ANC_ET_014": {
        nombre: "Empresa de Transportes 'Huaraz Moderno'",
        ruta: "Urb. El Pinar - Centro",
        color: '#F1C40F',
        ida: [[-9.5400, -77.5400], [-9.5300, -77.5350], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5300, -77.5350], [-9.5400, -77.5400]]
    },
    "ANC_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Áncash'",
        ruta: "Urb. Bellamar - Chimbote",
        color: '#8E44AD',
        ida: [[-9.1000, -78.5600], [-9.0850, -78.5750], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0850, -78.5750], [-9.1000, -78.5600]]
    },
    "ANC_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Áncash'",
        ruta: "Chimbote Sur - Terminal",
        color: '#C0392B',
        ida: [[-9.1300, -78.5500], [-9.1000, -78.5700], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.1000, -78.5700], [-9.1300, -78.5500]]
    },
    "ANC_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Áncash'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-9.0500, -78.5700], [-9.0600, -78.5800], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0600, -78.5800], [-9.0500, -78.5700]]
    },
    "ANC_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas Áncash'",
        ruta: "Urb. Cunas - Centro Huaraz",
        color: '#34495E',
        ida: [[-9.5500, -77.5200], [-9.5350, -77.5250], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5350, -77.5250], [-9.5500, -77.5200]]
    },
    "ANC_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Áncash Express'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-9.0900, -78.5800], [-9.0800, -78.5850], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0800, -78.5850], [-9.0900, -78.5800]]
    },
    "ANC_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte Áncash'",
        ruta: "Cono Norte - Av. Pardo",
        color: '#7F8C8D',
        ida: [[-9.0400, -78.5900], [-9.0550, -78.5900], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0550, -78.5900], [-9.0400, -78.5900]]
    },
    "ANC_ET_021": {
        nombre: "Empresa de Transportes 'Huamanguina Tours Áncash'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-9.1150, -78.5300], [-9.0900, -78.5600], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0900, -78.5600], [-9.1150, -78.5300]]
    },
    "ANC_ET_022": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sol Áncash'",
        ruta: "San Cristóbal - Mercado Mayorista",
        color: '#2980B9',
        ida: [[-9.5500, -77.5400], [-9.5350, -77.5350], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5350, -77.5350], [-9.5500, -77.5400]]
    },
    "ANC_ET_023": {
        nombre: "Empresa de Transportes 'Los Ángeles de Áncash'",
        ruta: "Urb. Los Ángeles - Centro",
        color: '#27AE60',
        ida: [[-9.0600, -78.5700], [-9.0650, -78.5800], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0650, -78.5800], [-9.0600, -78.5700]]
    },
    "ANC_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Huanca Áncash'",
        ruta: "Av. Independencia - Plaza",
        color: '#F1C40F',
        ida: [[-9.0800, -78.5600], [-9.0750, -78.5750], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0750, -78.5750], [-9.0800, -78.5600]]
    },
    "ANC_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Sur Áncash'",
        ruta: "Urb. Confraternidad II - Mercado",
        color: '#8E44AD',
        ida: [[-9.1250, -78.5400], [-9.1000, -78.5650], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.1000, -78.5650], [-9.1250, -78.5400]]
    },
    "ANC_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Áncash'",
        ruta: "Salida a Caraz - Terminal",
        color: '#C0392B',
        ida: [[-9.5100, -77.5500], [-9.5150, -77.5400], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5150, -77.5400], [-9.5100, -77.5500]]
    },
    "ANC_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Áncash'",
        ruta: "Urb. Fátima - Centro",
        color: '#1ABC9C',
        ida: [[-9.5600, -77.5200], [-9.5400, -77.5250], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5400, -77.5250], [-9.5600, -77.5200]]
    },
    "ANC_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Áncash'",
        ruta: "Barrio La Libertad II - Huaraz",
        color: '#34495E',
        ida: [[-9.5100, -77.5100], [-9.5150, -77.5200], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5150, -77.5200], [-9.5100, -77.5100]]
    },
    "ANC_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Áncashina'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-9.0500, -78.5600], [-9.0600, -78.5750], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0600, -78.5750], [-9.0500, -78.5600]]
    },
    "ANC_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Recuay'",
        ruta: "Recuay - Av. Pardo",
        color: '#7F8C8D',
        ida: [[-9.7200, -77.4500], [-9.6000, -77.5000], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.6000, -77.5000], [-9.7200, -77.4500]]
    },
    "ANC_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Áncash'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-9.0800, -78.5500], [-9.0750, -78.5700], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0750, -78.5700], [-9.0800, -78.5500]]
    },
    "ANC_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Áncash II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-9.1300, -78.5600], [-9.1000, -78.5750], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.1000, -78.5750], [-9.1300, -78.5600]]
    },
    "ANC_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Áncash II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-9.5300, -77.5500], [-9.5250, -77.5400], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5250, -77.5400], [-9.5300, -77.5500]]
    },
    "ANC_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Áncash'",
        ruta: "Urb. Algarrobos - Av. Pardo",
        color: '#C0392B',
        ida: [[-9.0400, -78.5800], [-9.0550, -78.5850], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0550, -78.5850], [-9.0400, -78.5800]]
    },
    "ANC_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Áncash'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-9.1200, -78.5200], [-9.0950, -78.5550], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0950, -78.5550], [-9.1200, -78.5200]]
    },
    "ANC_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Áncash'",
        ruta: "Miraflores - Av. Pardo",
        color: '#8E44AD',
        ida: [[-9.0600, -78.5600], [-9.0650, -78.5750], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0650, -78.5750], [-9.0600, -78.5600]]
    },
    "ANC_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Áncash'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-9.5400, -77.5100], [-9.5300, -77.5200], [-9.5200, -77.5300]],
        vuelta: [[-9.5200, -77.5300], [-9.5300, -77.5200], [-9.5400, -77.5100]]
    },
    "ANC_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Áncash II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-9.0800, -78.5400], [-9.0750, -78.5650], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0750, -78.5650], [-9.0800, -78.5400]]
    },
    "ANC_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Áncash II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-9.1000, -78.5800], [-9.0850, -78.5850], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0850, -78.5850], [-9.1000, -78.5800]]
    },
    "ANC_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Áncash II'",
        ruta: "San Pedro - Av. Pardo",
        color: '#3498DB',
        ida: [[-9.0500, -78.5900], [-9.0600, -78.5900], [-9.0700, -78.5900]],
        vuelta: [[-9.0700, -78.5900], [-9.0600, -78.5900], [-9.0500, -78.5900]]
    },
};
