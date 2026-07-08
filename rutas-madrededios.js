// Base de datos de transporte: Madre de Dios - Puerto Maldonado (MDD_ET_001-010)
const rutasMadreDeDios = {
    "MDD_ET_001": {
        nombre: "Empresa de Transportes 'Puerto Maldonado Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#F39C12',
        ida: [[-12.5900, -69.1900], [-12.5850, -69.1850], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5850, -69.1850], [-12.5900, -69.1900]]
    },
    "MDD_ET_002": {
        nombre: "Empresa de Transportes 'Los Pioneros'",
        ruta: "Av. Fitzcarrald - Puerto Capitanía",
        color: '#E74C3C',
        ida: [[-12.5850, -69.1950], [-12.5800, -69.1850], [-12.5750, -69.1750]],
        vuelta: [[-12.5750, -69.1750], [-12.5800, -69.1850], [-12.5850, -69.1950]]
    },
    "MDD_ET_003": {
        nombre: "Empresa de Transportes 'Tambopata Tours'",
        ruta: "Pueblo Viejo - Mercado Central",
        color: '#27AE60',
        ida: [[-12.5700, -69.2000], [-12.5800, -69.1900], [-12.5850, -69.1800]],
        vuelta: [[-12.5850, -69.1800], [-12.5800, -69.1900], [-12.5700, -69.2000]]
    },
    "MDD_ET_004": {
        nombre: "Empresa de Transportes 'Interoceánica'",
        ruta: "Km 5 - Centro Ciudad",
        color: '#2980B9',
        ida: [[-12.6000, -69.2100], [-12.5900, -69.1950], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5900, -69.1950], [-12.6000, -69.2100]]
    },
    "MDD_ET_005": {
        nombre: "Empresa de Transportes 'Selva de Oro'",
        ruta: "La Joya - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-12.5750, -69.2100], [-12.5800, -69.1950], [-12.5850, -69.1850]],
        vuelta: [[-12.5850, -69.1850], [-12.5800, -69.1950], [-12.5750, -69.2100]]
    },
    "MDD_ET_006": {
        nombre: "Empresa de Transportes 'Madre de Dios Real'",
        ruta: "Circuito Urbano Principal",
        color: '#34495E',
        ida: [[-12.5800, -69.1900], [-12.5820, -69.1850], [-12.5850, -69.1800]],
        vuelta: [[-12.5850, -69.1800], [-12.5820, -69.1850], [-12.5800, -69.1900]]
    },
    "MDD_ET_007": {
        nombre: "Empresa de Transportes 'San Juan de Madre de Dios'",
        ruta: "San Juan - Mercado",
        color: '#16A085',
        ida: [[-12.5650, -69.1800], [-12.5750, -69.1850], [-12.5800, -69.1900]],
        vuelta: [[-12.5800, -69.1900], [-12.5750, -69.1850], [-12.5650, -69.1800]]
    },
    "MDD_ET_008": {
        nombre: "Empresa de Transportes 'Aeropuerto Maldonado'",
        ruta: "Aeropuerto Padre Aldamiz - Centro",
        color: '#D35400',
        ida: [[-12.6100, -69.2200], [-12.5950, -69.2000], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5950, -69.2000], [-12.6100, -69.2200]]
    },
    "MDD_ET_009": {
        nombre: "Empresa de Transportes 'Las Piedras'",
        ruta: "Las Piedras - Puerto Maldonado",
        color: '#7F8C8D',
        ida: [[-12.5500, -69.1700], [-12.5650, -69.1750], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5650, -69.1750], [-12.5500, -69.1700]]
    },
    "MDD_ET_010": {
        nombre: "Empresa de Transportes 'Deltas del Madre'",
        ruta: "Zona Baja - Plaza",
        color: '#F1C40F',
        ida: [[-12.5800, -69.1700], [-12.5800, -69.1750], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5800, -69.1750], [-12.5800, -69.1700]]
    },
    "MDD_ET_011": {
        nombre: "Empresa de Transportes 'Bajo Madre'",
        ruta: "Bajo Madre - Mercado Central",
        color: '#C0392B',
        ida: [[-12.5700, -69.1700], [-12.5750, -69.1750], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5750, -69.1750], [-12.5700, -69.1700]]
    },
    "MDD_ET_012": {
        nombre: "Empresa de Transportes 'Los Pinos de Tambopata'",
        ruta: "Los Pinos - Plaza de Armas",
        color: '#2980B9',
        ida: [[-12.5950, -69.1900], [-12.5900, -69.1850], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5900, -69.1850], [-12.5950, -69.1900]]
    },
    "MDD_ET_013": {
        nombre: "Empresa de Transportes 'La Victoria'",
        ruta: "La Victoria - Av. León Velarde",
        color: '#8E44AD',
        ida: [[-12.5600, -69.1900], [-12.5700, -69.1850], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5700, -69.1850], [-12.5600, -69.1900]]
    },
    "MDD_ET_014": {
        nombre: "Empresa de Transportes 'Progreso Maldonado'",
        ruta: "Progreso - Terminal Terrestre",
        color: '#16A085',
        ida: [[-12.5750, -69.2050], [-12.5800, -69.2000], [-12.5900, -69.1900]],
        vuelta: [[-12.5900, -69.1900], [-12.5800, -69.2000], [-12.5750, -69.2050]]
    },
    "MDD_ET_015": {
        nombre: "Empresa de Transportes 'Esperanza de los Andes'",
        ruta: "Zona Alta - Mercado Viejo",
        color: '#27AE60',
        ida: [[-12.5550, -69.1800], [-12.5700, -69.1800], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5700, -69.1800], [-12.5550, -69.1800]]
    },
    "MDD_ET_016": {
        nombre: "Empresa de Transportes 'Caminos del Inca'",
        ruta: "Av. Madre de Dios - Centro",
        color: '#E67E22',
        ida: [[-12.5850, -69.2100], [-12.5820, -69.2000], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5820, -69.2000], [-12.5850, -69.2100]]
    },
    "MDD_ET_017": {
        nombre: "Empresa de Transportes 'San Roque'",
        ruta: "San Roque - Puerto Maldonado",
        color: '#3498DB',
        ida: [[-12.5900, -69.1600], [-12.5850, -69.1700], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5850, -69.1700], [-12.5900, -69.1600]]
    },
    "MDD_ET_018": {
        nombre: "Empresa de Transportes 'Delfines del Tambopata'",
        ruta: "Tambopata - Centro Ciudad",
        color: '#2C3E50',
        ida: [[-12.6050, -69.1800], [-12.5950, -69.1800], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5950, -69.1800], [-12.6050, -69.1800]]
    },
    "MDD_ET_019": {
        nombre: "Empresa de Transportes 'Nueva Era'",
        ruta: "Nueva Era - Mercado Modelo",
        color: '#9B59B6',
        ida: [[-12.5800, -69.2200], [-12.5800, -69.2000], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5800, -69.2000], [-12.5800, -69.2200]]
    },
    "MDD_ET_020": {
        nombre: "Empresa de Transportes 'Ruta Interoceánica Norte'",
        ruta: "Interoceánica Norte - Puerto",
        color: '#2ECC71',
        ida: [[-12.5700, -69.1500], [-12.5750, -69.1650], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5750, -69.1650], [-12.5700, -69.1500]]
    },
    "MDD_ET_021": {
        nombre: "Empresa de Transportes 'Los Castañeros'",
        ruta: "Rompeolas - Centro",
        color: '#F39C12',
        ida: [[-12.5650, -69.1950], [-12.5750, -69.1900], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5750, -69.1900], [-12.5650, -69.1950]]
    },
    "MDD_ET_022": {
        nombre: "Empresa de Transportes 'Sol de Tambopata'",
        ruta: "El Triunfo - Mercado Central",
        color: '#D35400',
        ida: [[-12.5500, -69.2000], [-12.5650, -69.1900], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5650, -69.1900], [-12.5500, -69.2000]]
    },
    "MDD_ET_023": {
        nombre: "Empresa de Transportes 'Maldonado Sur'",
        ruta: "Km 3 - Plaza de Armas",
        color: '#2C3E50',
        ida: [[-12.6100, -69.1900], [-12.5950, -69.1850], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5950, -69.1850], [-12.6100, -69.1900]]
    },
    "MDD_ET_024": {
        nombre: "Empresa de Transportes 'Ruta del Cacao'",
        ruta: "El Joyero - Terminal Terrestre",
        color: '#8E44AD',
        ida: [[-12.5700, -69.2150], [-12.5800, -69.2050], [-12.5900, -69.1900]],
        vuelta: [[-12.5900, -69.1900], [-12.5800, -69.2050], [-12.5700, -69.2150]]
    },
    "MDD_ET_025": {
        nombre: "Empresa de Transportes 'Villa Toledo'",
        ruta: "Villa Toledo - Av. Fitzcarrald",
        color: '#2980B9',
        ida: [[-12.5950, -69.1700], [-12.5850, -69.1750], [-12.5800, -69.1850]],
        vuelta: [[-12.5800, -69.1850], [-12.5850, -69.1750], [-12.5950, -69.1700]]
    },
    "MDD_ET_026": {
        nombre: "Empresa de Transportes 'La Pastora'",
        ruta: "La Pastora - Pueblo Viejo",
        color: '#E74C3C',
        ida: [[-12.5600, -69.2100], [-12.5650, -69.2000], [-12.5700, -69.1900]],
        vuelta: [[-12.5700, -69.1900], [-12.5650, -69.2000], [-12.5600, -69.2100]]
    },
    "MDD_ET_027": {
        nombre: "Empresa de Transportes 'Las Palmeras de la Selva'",
        ruta: "Las Palmeras - Centro",
        color: '#16A085',
        ida: [[-12.5850, -69.1600], [-12.5850, -69.1700], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5850, -69.1700], [-12.5850, -69.1600]]
    },
    "MDD_ET_028": {
        nombre: "Empresa de Transportes 'San Bernardo'",
        ruta: "San Bernardo - Mercado Viejo",
        color: '#F1C40F',
        ida: [[-12.5550, -69.1850], [-12.5650, -69.1850], [-12.5800, -69.1900]],
        vuelta: [[-12.5800, -69.1900], [-12.5650, -69.1850], [-12.5550, -69.1850]]
    },
    "MDD_ET_029": {
        nombre: "Empresa de Transportes 'Eje Interoceánico'",
        ruta: "Vía Interoceánica - Plaza de Armas",
        color: '#34495E',
        ida: [[-12.5750, -69.2200], [-12.5800, -69.2000], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5800, -69.2000], [-12.5750, -69.2200]]
    },
    "MDD_ET_030": {
        nombre: "Empresa de Transportes 'Madre de Dios Integral'",
        ruta: "Circunvalación Sur - Puerto",
        color: '#E67E22',
        ida: [[-12.5900, -69.1700], [-12.5850, -69.1800], [-12.5750, -69.1750]],
        vuelta: [[-12.5750, -69.1750], [-12.5850, -69.1800], [-12.5900, -69.1700]]
    },
    "MDD_ET_031": {
        nombre: "Empresa de Transportes 'Los Guacamayos'",
        ruta: "Zona Los Guacamayos - Centro",
        color: '#7F8C8D',
        ida: [[-12.5600, -69.1750], [-12.5700, -69.1800], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5700, -69.1800], [-12.5600, -69.1750]]
    },
    "MDD_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro Express'",
        ruta: "San Pedro - Mercado Central",
        color: '#34495E',
        ida: [[-12.5950, -69.2000], [-12.5900, -69.1900], [-12.5800, -69.1850]],
        vuelta: [[-12.5800, -69.1850], [-12.5900, -69.1900], [-12.5950, -69.2000]]
    },
    "MDD_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Sur'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-12.6000, -69.1700], [-12.5900, -69.1750], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5900, -69.1750], [-12.6000, -69.1700]]
    },
    "MDD_ET_034": {
        nombre: "Empresa de Transportes 'Los Algarrobos Maldonado'",
        ruta: "Algarrobos - Terminal",
        color: '#C0392B',
        ida: [[-12.5700, -69.2000], [-12.5800, -69.1950], [-12.5900, -69.1900]],
        vuelta: [[-12.5900, -69.1900], [-12.5800, -69.1950], [-12.5700, -69.2000]]
    },
    "MDD_ET_035": {
        nombre: "Empresa de Transportes 'Villa Tambopata'",
        ruta: "Villa Tambopata - Puerto",
        color: '#27AE60',
        ida: [[-12.5850, -69.2150], [-12.5800, -69.2050], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5800, -69.2050], [-12.5850, -69.2150]]
    },
    "MDD_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Maldonado'",
        ruta: "Miraflores - Av. León Velarde",
        color: '#8E44AD',
        ida: [[-12.5650, -69.1800], [-12.5750, -69.1800], [-12.5850, -69.1800]],
        vuelta: [[-12.5850, -69.1800], [-12.5750, -69.1800], [-12.5650, -69.1800]]
    },
    "MDD_ET_037": {
        nombre: "Empresa de Transportes 'La Unión de la Selva'",
        ruta: "Av. Fitzcarrald - Mercado",
        color: '#E67E22',
        ida: [[-12.5800, -69.1950], [-12.5800, -69.1900], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5800, -69.1900], [-12.5800, -69.1950]]
    },
    "MDD_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Express'",
        ruta: "Santa Rosa - Plaza",
        color: '#2980B9',
        ida: [[-12.5700, -69.1650], [-12.5750, -69.1750], [-12.5800, -69.1800]],
        vuelta: [[-12.5800, -69.1800], [-12.5750, -69.1750], [-12.5700, -69.1650]]
    },
    "MDD_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Terrestre Sur'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-12.5900, -69.1900], [-12.5950, -69.1950], [-12.6000, -69.2000]],
        vuelta: [[-12.6000, -69.2000], [-12.5950, -69.1950], [-12.5900, -69.1900]]
    },
    "MDD_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro Puerto'",
        ruta: "San Pedro - Av. Fitzcarrald",
        color: '#3498DB',
        ida: [[-12.5900, -69.1550], [-12.5850, -69.1700], [-12.5800, -69.1850]],
        vuelta: [[-12.5800, -69.1850], [-12.5850, -69.1700], [-12.5900, -69.1550]]
    },
};
