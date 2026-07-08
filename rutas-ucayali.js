// Base de datos de transporte: Ucayali - Pucallpa (UCA_ET_001-010)
const rutasUcayali = {
    "UCA_ET_001": {
        nombre: "Empresa de Transportes 'Los Manguitos'",
        ruta: "Pucallpa - Yarinacocha",
        color: '#E74C3C',
        ida: [[-8.3750, -74.5250], [-8.3500, -74.5500], [-8.3250, -74.5750]],
        vuelta: [[-8.3250, -74.5750], [-8.3500, -74.5500], [-8.3750, -74.5250]]
    },
    "UCA_ET_002": {
        nombre: "Empresa de Transportes 'El Puerto'",
        ruta: "Puerto Pucallpa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-8.3850, -74.5200], [-8.3750, -74.5250], [-8.3700, -74.5300]],
        vuelta: [[-8.3700, -74.5300], [-8.3750, -74.5250], [-8.3850, -74.5200]]
    },
    "UCA_ET_003": {
        nombre: "Empresa de Transportes 'Manantay Express'",
        ruta: "Manantay - Pucallpa Centro",
        color: '#27AE60',
        ida: [[-8.4000, -74.5200], [-8.3800, -74.5250], [-8.3750, -74.5300]],
        vuelta: [[-8.3750, -74.5300], [-8.3800, -74.5250], [-8.4000, -74.5200]]
    },
    "UCA_ET_004": {
        nombre: "Empresa de Transportes 'Aeropuerto Pucallpa'",
        ruta: "Aeropuerto FAP - Centro",
        color: '#F1C40F',
        ida: [[-8.3700, -74.5550], [-8.3750, -74.5300], [-8.3800, -74.5200]],
        vuelta: [[-8.3800, -74.5200], [-8.3750, -74.5300], [-8.3700, -74.5550]]
    },
    "UCA_ET_005": {
        nombre: "Empresa de Transportes 'San Fernando'",
        ruta: "San Fernando - Yarinacocha",
        color: '#9B59B6',
        ida: [[-8.3600, -74.5600], [-8.3400, -74.5700], [-8.3200, -74.5800]],
        vuelta: [[-8.3200, -74.5800], [-8.3400, -74.5700], [-8.3600, -74.5600]]
    },
    "UCA_ET_006": {
        nombre: "Empresa de Transportes 'Los Libres'",
        ruta: "Circuito Urbano Principal",
        color: '#E67E22',
        ida: [[-8.3750, -74.5250], [-8.3720, -74.5280], [-8.3700, -74.5300]],
        vuelta: [[-8.3700, -74.5300], [-8.3720, -74.5280], [-8.3750, -74.5250]]
    },
    "UCA_ET_007": {
        nombre: "Empresa de Transportes 'Comercial Pucallpa'",
        ruta: "Mercado N° 2 - Manantay",
        color: '#1ABC9C',
        ida: [[-8.3800, -74.5300], [-8.3900, -74.5250], [-8.4000, -74.5200]],
        vuelta: [[-8.4000, -74.5200], [-8.3900, -74.5250], [-8.3800, -74.5300]]
    },
    "UCA_ET_008": {
        nombre: "Empresa de Transportes 'Unión Ucayalina'",
        ruta: "Pucallpa - Km 6",
        color: '#34495E',
        ida: [[-8.3750, -74.5250], [-8.3900, -74.5000], [-8.4100, -74.4800]],
        vuelta: [[-8.4100, -74.4800], [-8.3900, -74.5000], [-8.3750, -74.5250]]
    },
    "UCA_ET_009": {
        nombre: "Empresa de Transportes 'Villa Selva'",
        ruta: "Villa Selva - Pucallpa",
        color: '#D35400',
        ida: [[-8.3500, -74.5400], [-8.3650, -74.5350], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3650, -74.5350], [-8.3500, -74.5400]]
    },
    "UCA_ET_010": {
        nombre: "Empresa de Transportes 'Las Palmeras'",
        ruta: "Las Palmeras - Mercado Central",
        color: '#7F8C8D',
        ida: [[-8.3950, -74.5500], [-8.3800, -74.5350], [-8.3700, -74.5300]],
        vuelta: [[-8.3700, -74.5300], [-8.3800, -74.5350], [-8.3950, -74.5500]]
    },
    "UCA_ET_011": {
        nombre: "Empresa de Transportes 'San Pablo'",
        ruta: "San Pablo - Yarinacocha",
        color: '#C0392B',
        ida: [[-8.3550, -74.5650], [-8.3450, -74.5700], [-8.3300, -74.5750]],
        vuelta: [[-8.3300, -74.5750], [-8.3450, -74.5700], [-8.3550, -74.5650]]
    },
    "UCA_ET_012": {
        nombre: "Empresa de Transportes 'Los Forestales'",
        ruta: "Km 12 - Pucallpa Centro",
        color: '#2980B9',
        ida: [[-8.4200, -74.4500], [-8.4000, -74.4800], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.4000, -74.4800], [-8.4200, -74.4500]]
    },
    "UCA_ET_013": {
        nombre: "Empresa de Transportes 'Nueva Esperanza'",
        ruta: "Nueva Esperanza - Manantay",
        color: '#8E44AD',
        ida: [[-8.4100, -74.5300], [-8.4000, -74.5250], [-8.3900, -74.5200]],
        vuelta: [[-8.3900, -74.5200], [-8.4000, -74.5250], [-8.4100, -74.5300]]
    },
    "UCA_ET_014": {
        nombre: "Empresa de Transportes 'La Marina'",
        ruta: "Av. La Marina - Puerto",
        color: '#16A085',
        ida: [[-8.3700, -74.5150], [-8.3750, -74.5180], [-8.3850, -74.5200]],
        vuelta: [[-8.3850, -74.5200], [-8.3750, -74.5180], [-8.3700, -74.5150]]
    },
    "UCA_ET_015": {
        nombre: "Empresa de Transportes '10 de Julio'",
        ruta: "10 de Julio - Pucallpa",
        color: '#27AE60',
        ida: [[-8.3650, -74.5450], [-8.3700, -74.5350], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3700, -74.5350], [-8.3650, -74.5450]]
    },
    "UCA_ET_016": {
        nombre: "Empresa de Transportes 'Laguna Cashibococha'",
        ruta: "Cashibococha - Yarinacocha",
        color: '#E67E22',
        ida: [[-8.3100, -74.6000], [-8.3200, -74.5800], [-8.3300, -74.5750]],
        vuelta: [[-8.3300, -74.5750], [-8.3200, -74.5800], [-8.3100, -74.6000]]
    },
    "UCA_ET_017": {
        nombre: "Empresa de Transportes 'San Francisco'",
        ruta: "San Francisco - Pucallpa Centro",
        color: '#3498DB',
        ida: [[-8.3900, -74.5500], [-8.3800, -74.5400], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3800, -74.5400], [-8.3900, -74.5500]]
    },
    "UCA_ET_018": {
        nombre: "Empresa de Transportes 'Los Delfines'",
        ruta: "Av. Centenario - Yarinacocha",
        color: '#2C3E50',
        ida: [[-8.3750, -74.5400], [-8.3500, -74.5550], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3500, -74.5550], [-8.3750, -74.5400]]
    },
    "UCA_ET_019": {
        nombre: "Empresa de Transportes 'Victoria'",
        ruta: "Victoria - Manantay",
        color: '#9B59B6',
        ida: [[-8.4150, -74.5100], [-8.4050, -74.5150], [-8.3950, -74.5200]],
        vuelta: [[-8.3950, -74.5200], [-8.4050, -74.5150], [-8.4150, -74.5100]]
    },
    "UCA_ET_020": {
        nombre: "Empresa de Transportes 'Pucallpa Real'",
        ruta: "Zona Comercial - Plaza",
        color: '#2ECC71',
        ida: [[-8.3800, -74.5300], [-8.3770, -74.5280], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3770, -74.5280], [-8.3800, -74.5300]]
    },
    "UCA_ET_021": {
        nombre: "Empresa de Transportes 'Los Ángeles'",
        ruta: "Asentamiento Humano - Pucallpa Centro",
        color: '#F39C12',
        ida: [[-8.4050, -74.5450], [-8.3900, -74.5350], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3900, -74.5350], [-8.4050, -74.5450]]
    },
    "UCA_ET_022": {
        nombre: "Empresa de Transportes 'Yarina Express'",
        ruta: "Yarinacocha - Mercado 2",
        color: '#D35400',
        ida: [[-8.3250, -74.5750], [-8.3500, -74.5500], [-8.3800, -74.5300]],
        vuelta: [[-8.3800, -74.5300], [-8.3500, -74.5500], [-8.3250, -74.5750]]
    },
    "UCA_ET_023": {
        nombre: "Empresa de Transportes 'San Juan de Manantay'",
        ruta: "San Juan - Manantay",
        color: '#2C3E50',
        ida: [[-8.4200, -74.5300], [-8.4100, -74.5250], [-8.4000, -74.5200]],
        vuelta: [[-8.4000, -74.5200], [-8.4100, -74.5250], [-8.4200, -74.5300]]
    },
    "UCA_ET_024": {
        nombre: "Empresa de Transportes 'Amazonía Libre'",
        ruta: "Km 18 - Pucallpa",
        color: '#8E44AD',
        ida: [[-8.4500, -74.4000], [-8.4100, -74.4800], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.4100, -74.4800], [-8.4500, -74.4000]]
    },
    "UCA_ET_025": {
        nombre: "Empresa de Transportes 'Sol del Ucayali'",
        ruta: "Zona Industrial - Pucallpa",
        color: '#2980B9',
        ida: [[-8.3850, -74.5000], [-8.3800, -74.5100], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3800, -74.5100], [-8.3850, -74.5000]]
    },
    "UCA_ET_026": {
        nombre: "Empresa de Transportes 'Los Pinos'",
        ruta: "Los Pinos - Plaza de Armas",
        color: '#E74C3C',
        ida: [[-8.3600, -74.5500], [-8.3700, -74.5400], [-8.3750, -74.5300]],
        vuelta: [[-8.3750, -74.5300], [-8.3700, -74.5400], [-8.3600, -74.5500]]
    },
    "UCA_ET_027": {
        nombre: "Empresa de Transportes 'Manantay Real'",
        ruta: "Manantay - Mercado Modelo",
        color: '#16A085',
        ida: [[-8.4000, -74.5200], [-8.3900, -74.5250], [-8.3800, -74.5300]],
        vuelta: [[-8.3800, -74.5300], [-8.3900, -74.5250], [-8.4000, -74.5200]]
    },
    "UCA_ET_028": {
        nombre: "Empresa de Transportes 'Bellavista'",
        ruta: "Bellavista - Yarinacocha",
        color: '#F1C40F',
        ida: [[-8.3400, -74.5800], [-8.3350, -74.5750], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3350, -74.5750], [-8.3400, -74.5800]]
    },
    "UCA_ET_029": {
        nombre: "Empresa de Transportes 'Miraflores Ucayali'",
        ruta: "Miraflores - Pucallpa Centro",
        color: '#34495E',
        ida: [[-8.3950, -74.5400], [-8.3850, -74.5300], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3850, -74.5300], [-8.3950, -74.5400]]
    },
    "UCA_ET_030": {
        nombre: "Empresa de Transportes 'San Martín'",
        ruta: "San Martín - Yarinacocha",
        color: '#E67E22',
        ida: [[-8.3500, -74.5600], [-8.3400, -74.5650], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3400, -74.5650], [-8.3500, -74.5600]]
    },
    "UCA_ET_031": {
        nombre: "Empresa de Transportes 'Los Cedros'",
        ruta: "Los Cedros - Pucallpa Centro",
        color: '#7F8C8D',
        ida: [[-8.4100, -74.5400], [-8.3900, -74.5300], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3900, -74.5300], [-8.4100, -74.5400]]
    },
    "UCA_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro'",
        ruta: "San Pedro - Manantay",
        color: '#34495E',
        ida: [[-8.4200, -74.5200], [-8.4100, -74.5200], [-8.4000, -74.5200]],
        vuelta: [[-8.4000, -74.5200], [-8.4100, -74.5200], [-8.4200, -74.5200]]
    },
    "UCA_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte'",
        ruta: "Belo Horizonte - Pucallpa",
        color: '#16A085',
        ida: [[-8.4300, -74.5500], [-8.4000, -74.5400], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.4000, -74.5400], [-8.4300, -74.5500]]
    },
    "UCA_ET_034": {
        nombre: "Empresa de Transportes 'Los Algarrobos'",
        ruta: "Los Algarrobos - Yarinacocha",
        color: '#C0392B',
        ida: [[-8.3500, -74.5800], [-8.3400, -74.5750], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3400, -74.5750], [-8.3500, -74.5800]]
    },
    "UCA_ET_035": {
        nombre: "Empresa de Transportes 'Villa Disnarda'",
        ruta: "Villa Disnarda - Plaza de Armas",
        color: '#27AE60',
        ida: [[-8.3900, -74.5600], [-8.3800, -74.5450], [-8.3750, -74.5300]],
        vuelta: [[-8.3750, -74.5300], [-8.3800, -74.5450], [-8.3900, -74.5600]]
    },
    "UCA_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Sur'",
        ruta: "Miraflores Sur - Pucallpa",
        color: '#8E44AD',
        ida: [[-8.4100, -74.5500], [-8.3950, -74.5400], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3950, -74.5400], [-8.4100, -74.5500]]
    },
    "UCA_ET_037": {
        nombre: "Empresa de Transportes 'La Unión'",
        ruta: "Av. Centenario - Mercado Modelo",
        color: '#E67E22',
        ida: [[-8.3750, -74.5500], [-8.3720, -74.5400], [-8.3700, -74.5300]],
        vuelta: [[-8.3700, -74.5300], [-8.3720, -74.5400], [-8.3750, -74.5500]]
    },
    "UCA_ET_038": {
        nombre: "Empresa de Transportes 'Santa Clara'",
        ruta: "Santa Clara - Yarinacocha",
        color: '#2980B9',
        ida: [[-8.3600, -74.5900], [-8.3450, -74.5800], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3450, -74.5800], [-8.3600, -74.5900]]
    },
    "UCA_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Terrestre'",
        ruta: "Terminal Terrestre - Pucallpa",
        color: '#D35400',
        ida: [[-8.4200, -74.5000], [-8.4000, -74.5100], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.4000, -74.5100], [-8.4200, -74.5000]]
    },
    "UCA_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Pucallpa'",
        ruta: "San Pedro - Av. La Marina",
        color: '#3498DB',
        ida: [[-8.4000, -74.5600], [-8.3850, -74.5400], [-8.3700, -74.5200]],
        vuelta: [[-8.3700, -74.5200], [-8.3850, -74.5400], [-8.4000, -74.5600]]
    },
    "UCA_ET_041": {
        nombre: "Empresa de Transportes 'Los Rosales'",
        ruta: "Urb. Los Rosales - Pucallpa Centro",
        color: '#E67E22',
        ida: [[-8.4150, -74.5550], [-8.3950, -74.5400], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3950, -74.5400], [-8.4150, -74.5550]]
    },
    "UCA_ET_042": {
        nombre: "Empresa de Transportes 'Nuevo Versalles'",
        ruta: "Nuevo Versalles - Mercado Modelo",
        color: '#9B59B6',
        ida: [[-8.3550, -74.5300], [-8.3650, -74.5250], [-8.3750, -74.5200]],
        vuelta: [[-8.3750, -74.5200], [-8.3650, -74.5250], [-8.3550, -74.5300]]
    },
    "UCA_ET_043": {
        nombre: "Empresa de Transportes 'Pucallpa-Campo Verde'",
        ruta: "Campo Verde - Pucallpa (Interprovincial)",
        color: '#2ECC71',
        ida: [[-8.4500, -74.7000], [-8.4100, -74.6000], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.4100, -74.6000], [-8.4500, -74.7000]]
    },
    "UCA_ET_044": {
        nombre: "Empresa de Transportes 'Belenito Express'",
        ruta: "Belén - Plaza de Armas",
        color: '#F1C40F',
        ida: [[-8.4050, -74.5100], [-8.3900, -74.5150], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3900, -74.5150], [-8.4050, -74.5100]]
    },
    "UCA_ET_045": {
        nombre: "Empresa de Transportes 'Manantay-Yarina Directo'",
        ruta: "Manantay - Yarinacocha",
        color: '#D35400',
        ida: [[-8.4000, -74.5200], [-8.3700, -74.5450], [-8.3300, -74.5700]],
        vuelta: [[-8.3300, -74.5700], [-8.3700, -74.5450], [-8.4000, -74.5200]]
    },
    "UCA_ET_046": {
        nombre: "Empresa de Transportes 'Los Algarrobos Sur'",
        ruta: "Los Algarrobos - Pucallpa",
        color: '#C0392B',
        ida: [[-8.4150, -74.5400], [-8.3950, -74.5300], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3950, -74.5300], [-8.4150, -74.5400]]
    },
    "UCA_ET_047": {
        nombre: "Empresa de Transportes 'San Pablo Expreso'",
        ruta: "San Pablo - Av. Centenario",
        color: '#2980B9',
        ida: [[-8.3500, -74.5700], [-8.3650, -74.5500], [-8.3750, -74.5400]],
        vuelta: [[-8.3750, -74.5400], [-8.3650, -74.5500], [-8.3500, -74.5700]]
    },
    "UCA_ET_048": {
        nombre: "Empresa de Transportes 'Pucallpa-Manantay'",
        ruta: "Pucallpa Centro - Manantay Sur",
        color: '#8E44AD',
        ida: [[-8.3750, -74.5250], [-8.3900, -74.5150], [-8.4100, -74.5100]],
        vuelta: [[-8.4100, -74.5100], [-8.3900, -74.5150], [-8.3750, -74.5250]]
    },
    "UCA_ET_049": {
        nombre: "Empresa de Transportes 'Santa Rosa-Nauta'",
        ruta: "Santa Rosa - Km 10",
        color: '#34495E',
        ida: [[-8.3750, -74.5250], [-8.4000, -74.4800], [-8.4300, -74.4500]],
        vuelta: [[-8.4300, -74.4500], [-8.4000, -74.4800], [-8.3750, -74.5250]]
    },
    "UCA_ET_050": {
        nombre: "Empresa de Transportes 'Ucayali Regional'",
        ruta: "Periferia - Centro Ciudad",
        color: '#16A085',
        ida: [[-8.4000, -74.5600], [-8.3850, -74.5400], [-8.3750, -74.5250]],
        vuelta: [[-8.3750, -74.5250], [-8.3850, -74.5400], [-8.4000, -74.5600]]
    },
};
