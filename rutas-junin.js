// Base de datos de transporte: Junín - Huancayo (JUN_ET_001-010)
const rutasJunin = {
    "JUN_ET_001": {
        nombre: "Empresa de Transportes 'Huancayo Metropolitano'",
        ruta: "El Tambo - Centro Huancayo",
        color: '#E67E22',
        ida: [[-12.0400, -75.2100], [-12.0500, -75.2050], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0500, -75.2050], [-12.0400, -75.2100]]
    },
    "JUN_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Junín'",
        ruta: "Urb. San Carlos - Plaza Constitución",
        color: '#2980B9',
        ida: [[-12.0550, -75.2200], [-12.0600, -75.2150], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0600, -75.2150], [-12.0550, -75.2200]]
    },
    "JUN_ET_003": {
        nombre: "Empresa de Transportes 'Tarma Express'",
        ruta: "Tarma Centro - Terminal Huancayo",
        color: '#27AE60',
        ida: [[-11.4200, -75.6900], [-11.7500, -75.4000], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-11.7500, -75.4000], [-11.4200, -75.6900]]
    },
    "JUN_ET_004": {
        nombre: "Empresa de Transportes 'Corredor Selva Central'",
        ruta: "La Merced - Huancayo",
        color: '#F1C40F',
        ida: [[-11.0500, -75.3300], [-11.5000, -75.3000], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-11.5000, -75.3000], [-11.0500, -75.3300]]
    },
    "JUN_ET_005": {
        nombre: "Empresa de Transportes 'Chilca Imperial'",
        ruta: "Chilca - Mercado Mayorista",
        color: '#8E44AD',
        ida: [[-12.0800, -75.2000], [-12.0750, -75.2020], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0750, -75.2020], [-12.0800, -75.2000]]
    },
    "JUN_ET_006": {
        nombre: "Empresa de Transportes 'Sol del Mantaro'",
        ruta: "Concepción - Huancayo",
        color: '#C0392B',
        ida: [[-11.9100, -75.3000], [-12.0000, -75.2500], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0000, -75.2500], [-11.9100, -75.3000]]
    },
    "JUN_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Copacabana'",
        ruta: "Urb. Palián - Centro",
        color: '#1ABC9C',
        ida: [[-12.0450, -75.1800], [-12.0550, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0550, -75.1950], [-12.0450, -75.1800]]
    },
    "JUN_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Valle del Mantaro'",
        ruta: "Jauja - Huancayo",
        color: '#34495E',
        ida: [[-11.7800, -75.5000], [-11.9200, -75.3500], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-11.9200, -75.3500], [-11.7800, -75.5000]]
    },
    "JUN_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Junín'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-12.0600, -75.1900], [-12.0620, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0620, -75.1950], [-12.0600, -75.1900]]
    },
    "JUN_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Huancayo'",
        ruta: "San Pedro - Av. Ferrocarril",
        color: '#7F8C8D',
        ida: [[-12.0700, -75.2200], [-12.0680, -75.2150], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0680, -75.2150], [-12.0700, -75.2200]]
    },
    "JUN_ET_011": {
        nombre: "Empresa de Transportes 'El Tambo Express'",
        ruta: "Urb. Pio Pata - Plaza de Armas",
        color: '#E67E22',
        ida: [[-12.0400, -75.2000], [-12.0500, -75.2020], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0500, -75.2020], [-12.0400, -75.2000]]
    },
    "JUN_ET_012": {
        nombre: "Empresa de Transportes 'Los Libertadores Junín'",
        ruta: "Urb. Los Libertadores - Mercado",
        color: '#2980B9',
        ida: [[-12.0700, -75.1900], [-12.0680, -75.2000], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0680, -75.2000], [-12.0700, -75.1900]]
    },
    "JUN_ET_013": {
        nombre: "Empresa de Transportes 'San Juan de Huancayo'",
        ruta: "San Juan Bosco - Av. Ferrocarril",
        color: '#27AE60',
        ida: [[-12.0500, -75.2100], [-12.0550, -75.2080], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0550, -75.2080], [-12.0500, -75.2100]]
    },
    "JUN_ET_014": {
        nombre: "Empresa de Transportes 'Huancayo Moderno'",
        ruta: "Urb. Millotingo - Centro",
        color: '#F1C40F',
        ida: [[-12.0300, -75.2150], [-12.0450, -75.2100], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0450, -75.2100], [-12.0300, -75.2150]]
    },
    "JUN_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Junín'",
        ruta: "Urb. Yanama - Plaza Constitución",
        color: '#8E44AD',
        ida: [[-12.0600, -75.1800], [-12.0620, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0620, -75.1950], [-12.0600, -75.1800]]
    },
    "JUN_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Sur'",
        ruta: "Huancayo Sur - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-12.0900, -75.2050], [-12.0800, -75.2050], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0800, -75.2050], [-12.0900, -75.2050]]
    },
    "JUN_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Junín'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-12.0550, -75.2250], [-12.0600, -75.2150], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0600, -75.2150], [-12.0550, -75.2250]]
    },
    "JUN_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas II'",
        ruta: "Urb. Cunas - Centro Huancayo",
        color: '#34495E',
        ida: [[-12.0750, -75.2300], [-12.0700, -75.2200], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0700, -75.2200], [-12.0750, -75.2300]]
    },
    "JUN_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Huancayo'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-12.0650, -75.1850], [-12.0650, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0650, -75.1950], [-12.0650, -75.1850]]
    },
    "JUN_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte'",
        ruta: "Cono Norte - Av. Ferrocarril",
        color: '#7F8C8D',
        ida: [[-12.0350, -75.2100], [-12.0500, -75.2080], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0500, -75.2080], [-12.0350, -75.2100]]
    },
    "JUN_ET_021": {
        nombre: "Empresa de Transportes 'Huamanguina Tours'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-12.0450, -75.1900], [-12.0550, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0550, -75.1950], [-12.0450, -75.1900]]
    },
    "JUN_ET_022": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sol'",
        ruta: "San Cristóbal - Mercado Mayorista",
        color: '#2980B9',
        ida: [[-12.0750, -75.2150], [-12.0700, -75.2100], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0700, -75.2100], [-12.0750, -75.2150]]
    },
    "JUN_ET_023": {
        nombre: "Empresa de Transportes 'Los Ángeles de Huancayo'",
        ruta: "Urb. Los Ángeles - Centro",
        color: '#27AE60',
        ida: [[-12.0400, -75.2250], [-12.0500, -75.2200], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0500, -75.2200], [-12.0400, -75.2250]]
    },
    "JUN_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Huanca'",
        ruta: "Av. Independencia - Plaza",
        color: '#F1C40F',
        ida: [[-12.0700, -75.1800], [-12.0680, -75.1900], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0680, -75.1900], [-12.0700, -75.1800]]
    },
    "JUN_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Sur Junín'",
        ruta: "Urb. Confraternidad II - Mercado",
        color: '#8E44AD',
        ida: [[-12.0850, -75.2000], [-12.0750, -75.2000], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0750, -75.2000], [-12.0850, -75.2000]]
    },
    "JUN_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Huanca'",
        ruta: "Salida a Chupaca - Terminal",
        color: '#C0392B',
        ida: [[-12.0700, -75.2500], [-12.0700, -75.2300], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0700, -75.2300], [-12.0700, -75.2500]]
    },
    "JUN_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Junín'",
        ruta: "Urb. Fátima - Centro",
        color: '#1ABC9C',
        ida: [[-12.0300, -75.2200], [-12.0450, -75.2150], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0450, -75.2150], [-12.0300, -75.2200]]
    },
    "JUN_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Huanca'",
        ruta: "Barrio La Libertad II - Huancayo",
        color: '#34495E',
        ida: [[-12.0600, -75.1850], [-12.0620, -75.1950], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0620, -75.1950], [-12.0600, -75.1850]]
    },
    "JUN_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Huancaina'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-12.0550, -75.1750], [-12.0600, -75.1900], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0600, -75.1900], [-12.0550, -75.1750]]
    },
    "JUN_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cajas'",
        ruta: "San Pedro de Cajas - Av. Ferrocarril",
        color: '#7F8C8D',
        ida: [[-11.2000, -75.8000], [-11.6000, -75.5000], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-11.6000, -75.5000], [-11.2000, -75.8000]]
    },
    "JUN_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Huanca'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-12.0750, -75.2250], [-12.0700, -75.2150], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0700, -75.2150], [-12.0750, -75.2250]]
    },
    "JUN_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-12.0950, -75.2100], [-12.0800, -75.2050], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0800, -75.2050], [-12.0950, -75.2100]]
    },
    "JUN_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Junín'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-12.0500, -75.1800], [-12.0550, -75.1900], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0550, -75.1900], [-12.0500, -75.1800]]
    },
    "JUN_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Huancas'",
        ruta: "Urb. Algarrobos - Av. Independencia",
        color: '#C0392B',
        ida: [[-12.0650, -75.1750], [-12.0650, -75.1900], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0650, -75.1900], [-12.0650, -75.1750]]
    },
    "JUN_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Junín'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-12.0800, -75.2300], [-12.0720, -75.2200], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0720, -75.2200], [-12.0800, -75.2300]]
    },
    "JUN_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Junín'",
        ruta: "Miraflores - Av. Ferrocarril",
        color: '#8E44AD',
        ida: [[-12.0300, -75.2000], [-12.0400, -75.2020], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0400, -75.2020], [-12.0300, -75.2000]]
    },
    "JUN_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Junín'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-12.0600, -75.1700], [-12.0620, -75.1850], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0620, -75.1850], [-12.0600, -75.1700]]
    },
    "JUN_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Huancayo II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-12.0500, -75.1700], [-12.0580, -75.1900], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0580, -75.1900], [-12.0500, -75.1700]]
    },
    "JUN_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Junín II'",
        ruta: "Terminal - Zona Industrial Sur",
        color: '#D35400',
        ida: [[-12.0850, -75.2050], [-12.0750, -75.2050], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0750, -75.2050], [-12.0850, -75.2050]]
    },
    "JUN_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Huancayo II'",
        ruta: "San Pedro - Av. Ferrocarril",
        color: '#3498DB',
        ida: [[-12.0400, -75.2150], [-12.0500, -75.2100], [-12.0650, -75.2050]],
        vuelta: [[-12.0650, -75.2050], [-12.0500, -75.2100], [-12.0400, -75.2150]]
    },
};
