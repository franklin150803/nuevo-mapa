// Base de datos de transporte: Ayacucho - Huamanga (AYA_ET_001-010)
const rutasAyacucho = {
    "AYA_ET_001": {
        nombre: "Empresa de Transportes 'Huamanga Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#E67E22',
        ida: [[-13.1600, -74.2250], [-13.1620, -74.2200], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1620, -74.2200], [-13.1600, -74.2250]]
    },
    "AYA_ET_002": {
        nombre: "Empresa de Transportes 'Ayacucho Colonial'",
        ruta: "Urb. Los Portales - Centro",
        color: '#2980B9',
        ida: [[-13.1550, -74.2300], [-13.1590, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1590, -74.2250], [-13.1550, -74.2300]]
    },
    "AYA_ET_003": {
        nombre: "Empresa de Transportes 'San Juan de la Frontera'",
        ruta: "San Juan Bautista - Plaza",
        color: '#27AE60',
        ida: [[-13.1500, -74.2100], [-13.1550, -74.2150], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2150], [-13.1500, -74.2100]]
    },
    "AYA_ET_004": {
        nombre: "Empresa de Transportes 'El Inti'",
        ruta: "Urb. Andrés A. Cáceres - Mercado",
        color: '#F1C40F',
        ida: [[-13.1700, -74.2200], [-13.1650, -74.2200], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1650, -74.2200], [-13.1700, -74.2200]]
    },
    "AYA_ET_005": {
        nombre: "Empresa de Transportes 'La Libertad'",
        ruta: "Barrio La Libertad - Av. Arenas",
        color: '#8E44AD',
        ida: [[-13.1600, -74.2150], [-13.1620, -74.2170], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1620, -74.2170], [-13.1600, -74.2150]]
    },
    "AYA_ET_006": {
        nombre: "Empresa de Transportes 'Sol de Ayacucho'",
        ruta: "Urb. Santa Elena - Terminal",
        color: '#C0392B',
        ida: [[-13.1750, -74.2250], [-13.1680, -74.2250], [-13.1600, -74.2250]],
        vuelta: [[-13.1600, -74.2250], [-13.1680, -74.2250], [-13.1750, -74.2250]]
    },
    "AYA_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de las Nieves'",
        ruta: "Barrio Las Nieves - Centro",
        color: '#1ABC9C',
        ida: [[-13.1650, -74.2100], [-13.1640, -74.2140], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1640, -74.2140], [-13.1650, -74.2100]]
    },
    "AYA_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Wari'",
        ruta: "Complejo Arqueológico Wari - Huamanga",
        color: '#34495E',
        ida: [[-13.1000, -74.1500], [-13.1300, -74.1800], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1300, -74.1800], [-13.1000, -74.1500]]
    },
    "AYA_ET_009": {
        nombre: "Empresa de Transportes 'Santa Ana'",
        ruta: "Urb. Santa Ana - Mercado",
        color: '#D35400',
        ida: [[-13.1580, -74.2200], [-13.1600, -74.2190], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1600, -74.2190], [-13.1580, -74.2200]]
    },
    "AYA_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Ayacucho'",
        ruta: "San Pedro - Av. Mariscal Cáceres",
        color: '#7F8C8D',
        ida: [[-13.1650, -74.2300], [-13.1640, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1640, -74.2250], [-13.1650, -74.2300]]
    },
    "AYA_ET_011": {
        nombre: "Empresa de Transportes 'Huanta Express'",
        ruta: "Huanta - Terminal Ayacucho",
        color: '#E67E22',
        ida: [[-12.9300, -74.2500], [-13.0500, -74.2300], [-13.1600, -74.2250]],
        vuelta: [[-13.1600, -74.2250], [-13.0500, -74.2300], [-12.9300, -74.2500]]
    },
    "AYA_ET_012": {
        nombre: "Empresa de Transportes 'Los Libertadores'",
        ruta: "Urb. Los Libertadores - Plaza",
        color: '#2980B9',
        ida: [[-13.1700, -74.2100], [-13.1670, -74.2140], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1670, -74.2140], [-13.1700, -74.2100]]
    },
    "AYA_ET_013": {
        nombre: "Empresa de Transportes 'San Juan Bautista II'",
        ruta: "San Juan II - Mercado Central",
        color: '#27AE60',
        ida: [[-13.1450, -74.2050], [-13.1550, -74.2100], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2100], [-13.1450, -74.2050]]
    },
    "AYA_ET_014": {
        nombre: "Empresa de Transportes 'Ayacucho Moderno'",
        ruta: "Urb. Miraflores - Av. Universitaria",
        color: '#F1C40F',
        ida: [[-13.1500, -74.2300], [-13.1580, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1580, -74.2250], [-13.1500, -74.2300]]
    },
    "AYA_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real'",
        ruta: "Barrio Carmen Alto - Plaza",
        color: '#8E44AD',
        ida: [[-13.1600, -74.2000], [-13.1610, -74.2090], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1610, -74.2090], [-13.1600, -74.2000]]
    },
    "AYA_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Sur'",
        ruta: "Cono Sur - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-13.1850, -74.2250], [-13.1750, -74.2250], [-13.1600, -74.2250]],
        vuelta: [[-13.1600, -74.2250], [-13.1750, -74.2250], [-13.1850, -74.2250]]
    },
    "AYA_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes'",
        ruta: "Urb. Las Mercedes - Centro",
        color: '#1ABC9C',
        ida: [[-13.1550, -74.2200], [-13.1590, -74.2190], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1590, -74.2190], [-13.1550, -74.2200]]
    },
    "AYA_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas'",
        ruta: "Urb. Cunas - Huamanga",
        color: '#34495E',
        ida: [[-13.1700, -74.2300], [-13.1650, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1650, -74.2250], [-13.1700, -74.2300]]
    },
    "AYA_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Huamanga'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-13.1620, -74.2100], [-13.1625, -74.2140], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1625, -74.2140], [-13.1620, -74.2100]]
    },
    "AYA_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte'",
        ruta: "Cono Norte - Av. Mariscal Cáceres",
        color: '#7F8C8D',
        ida: [[-13.1500, -74.2200], [-13.1550, -74.2190], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2190], [-13.1500, -74.2200]]
    },
    "AYA_ET_021": {
        nombre: "Empresa de Transportes 'Huamanguina Tours'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-13.1750, -74.2150], [-13.1700, -74.2160], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1700, -74.2160], [-13.1750, -74.2150]]
    },
    "AYA_ET_022": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sol'",
        ruta: "San Cristóbal - Mercado Mayorista",
        color: '#2980B9',
        ida: [[-13.1500, -74.2250], [-13.1550, -74.2230], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2230], [-13.1500, -74.2250]]
    },
    "AYA_ET_023": {
        nombre: "Empresa de Transportes 'Los Ángeles de Huamanga'",
        ruta: "Urb. Los Ángeles - Centro",
        color: '#27AE60',
        ida: [[-13.1400, -74.2150], [-13.1500, -74.2160], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1500, -74.2160], [-13.1400, -74.2150]]
    },
    "AYA_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Ayacuchana'",
        ruta: "Av. Independencia - Plaza",
        color: '#F1C40F',
        ida: [[-13.1680, -74.2050], [-13.1650, -74.2100], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1650, -74.2100], [-13.1680, -74.2050]]
    },
    "AYA_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Sur'",
        ruta: "Urb. Confraternidad II - Mercado",
        color: '#8E44AD',
        ida: [[-13.1800, -74.2300], [-13.1700, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1700, -74.2250], [-13.1800, -74.2300]]
    },
    "AYA_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Ayacuchano'",
        ruta: "Salida a Vilcashuamán - Terminal",
        color: '#C0392B',
        ida: [[-13.2000, -74.2200], [-13.1800, -74.2220], [-13.1600, -74.2250]],
        vuelta: [[-13.1600, -74.2250], [-13.1800, -74.2220], [-13.2000, -74.2200]]
    },
    "AYA_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima'",
        ruta: "Urb. Fátima - Centro",
        color: '#1ABC9C',
        ida: [[-13.1450, -74.2350], [-13.1550, -74.2300], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2300], [-13.1450, -74.2350]]
    },
    "AYA_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad'",
        ruta: "Barrio La Libertad II - Huamanga",
        color: '#34495E',
        ida: [[-13.1550, -74.2050], [-13.1590, -74.2100], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1590, -74.2100], [-13.1550, -74.2050]]
    },
    "AYA_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Huamanguina'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-13.1650, -74.2000], [-13.1640, -74.2100], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1640, -74.2100], [-13.1650, -74.2000]]
    },
    "AYA_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de la Sierra'",
        ruta: "San Pedro de Cachi - Av. Mariscal",
        color: '#7F8C8D',
        ida: [[-13.1200, -74.2500], [-13.1400, -74.2300], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1400, -74.2300], [-13.1200, -74.2500]]
    },
    "AYA_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Huamanguinos'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-13.1720, -74.2350], [-13.1680, -74.2250], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1680, -74.2250], [-13.1720, -74.2350]]
    },
    "AYA_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-13.1880, -74.2200], [-13.1800, -74.2230], [-13.1600, -74.2250]],
        vuelta: [[-13.1600, -74.2250], [-13.1800, -74.2230], [-13.1880, -74.2200]]
    },
    "AYA_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Ayacucho'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-13.1480, -74.2400], [-13.1550, -74.2300], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1550, -74.2300], [-13.1480, -74.2400]]
    },
    "AYA_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Huamanguinos'",
        ruta: "Urb. Algarrobos - Av. Independencia",
        color: '#C0392B',
        ida: [[-13.1580, -74.2050], [-13.1620, -74.2080], [-13.1650, -74.2100]],
        vuelta: [[-13.1650, -74.2100], [-13.1620, -74.2080], [-13.1580, -74.2050]]
    },
    "AYA_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Ayacucho'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-13.1750, -74.2400], [-13.1700, -74.2300], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1700, -74.2300], [-13.1750, -74.2400]]
    },
    "AYA_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Ayacucho'",
        ruta: "Miraflores - Av. Arenas",
        color: '#8E44AD',
        ida: [[-13.1400, -74.2250], [-13.1500, -74.2220], [-13.1600, -74.2200]],
        vuelta: [[-13.1600, -74.2200], [-13.1500, -74.2220], [-13.1400, -74.2250]]
    },
    "AYA_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Ayacuchana'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-13.1650, -74.2350], [-13.1600, -74.2300], [-13.1580, -74.2250]],
        vuelta: [[-13.1580, -74.2250], [-13.1600, -74.2300], [-13.1650, -74.2350]]
    },
    "AYA_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa II Ayacucho'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-13.1550, -74.2000], [-13.1600, -74.2050], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1600, -74.2050], [-13.1550, -74.2000]]
    },
    "AYA_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Sur Ayacucho'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-13.1600, -74.2250], [-13.1700, -74.2250], [-13.1800, -74.2250]],
        vuelta: [[-13.1800, -74.2250], [-13.1700, -74.2250], [-13.1600, -74.2250]]
    },
    "AYA_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Huamanga'",
        ruta: "San Pedro - Av. Núñez",
        color: '#3498DB',
        ida: [[-13.1350, -74.2200], [-13.1450, -74.2180], [-13.1630, -74.2180]],
        vuelta: [[-13.1630, -74.2180], [-13.1450, -74.2180], [-13.1350, -74.2200]]
    },
};
