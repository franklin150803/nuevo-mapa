// Base de datos de transporte: Amazonas - Chachapoyas (AMA_ET_001-010)
const rutasAmazonas = {
    "AMA_ET_001": {
        nombre: "Empresa de Transportes 'Chachapoyas Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#E67E22',
        ida: [[-6.2300, -77.8600], [-6.2350, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8650], [-6.2300, -77.8600]]
    },
    "AMA_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Amazónicos'",
        ruta: "Urb. Luya Urco - Centro",
        color: '#2980B9',
        ida: [[-6.2400, -77.8700], [-6.2350, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8750], [-6.2400, -77.8700]]
    },
    "AMA_ET_003": {
        nombre: "Empresa de Transportes 'Pedro Ruiz Conexión'",
        ruta: "Pedro Ruiz Gallo - Chachapoyas",
        color: '#27AE60',
        ida: [[-5.9500, -77.9800], [-6.1000, -77.9000], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.1000, -77.9000], [-5.9500, -77.9800]]
    },
    "AMA_ET_004": {
        nombre: "Empresa de Transportes 'Kuélap Turístico'",
        ruta: "Nuevo Tingo - Chachapoyas",
        color: '#F1C40F',
        ida: [[-6.4000, -77.9500], [-6.3000, -77.9000], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.3000, -77.9000], [-6.4000, -77.9500]]
    },
    "AMA_ET_005": {
        nombre: "Empresa de Transportes 'Imperial Amazonas'",
        ruta: "Urb. Santo Toribio - Plaza",
        color: '#8E44AD',
        ida: [[-6.2200, -77.8700], [-6.2250, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2250, -77.8700], [-6.2200, -77.8700]]
    },
    "AMA_ET_006": {
        nombre: "Empresa de Transportes 'Sol del Marañón'",
        ruta: "Bagua Grande - Chachapoyas",
        color: '#C0392B',
        ida: [[-5.7500, -78.4300], [-6.0000, -78.0000], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.0000, -78.0000], [-5.7500, -78.4300]]
    },
    "AMA_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Amazonas'",
        ruta: "Urb. Belén - Centro",
        color: '#1ABC9C',
        ida: [[-6.2350, -77.8750], [-6.2320, -77.8720], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2320, -77.8720], [-6.2350, -77.8750]]
    },
    "AMA_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Universitario Amazonas'",
        ruta: "Campus UNTRM - Plaza de Armas",
        color: '#34495E',
        ida: [[-6.2100, -77.8500], [-6.2200, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2200, -77.8600], [-6.2100, -77.8500]]
    },
    "AMA_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Amazonas'",
        ruta: "Santa Rosa - Mercado Central",
        color: '#D35400',
        ida: [[-6.2300, -77.8800], [-6.2300, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2300, -77.8750], [-6.2300, -77.8800]]
    },
    "AMA_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Amazonas'",
        ruta: "San Pedro - Av. Leguía",
        color: '#7F8C8D',
        ida: [[-6.2400, -77.8600], [-6.2350, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8650], [-6.2400, -77.8600]]
    },
    "AMA_ET_011": {
        nombre: "Empresa de Transportes 'Chachapoyas Norte'",
        ruta: "Urb. Los Héroes - Plaza de Armas",
        color: '#E67E22',
        ida: [[-6.2200, -77.8500], [-6.2250, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2250, -77.8600], [-6.2200, -77.8500]]
    },
    "AMA_ET_012": {
        nombre: "Empresa de Transportes 'Los Héroes Amazonas'",
        ruta: "Urb. Higos Urco - Av. Principal",
        color: '#2980B9',
        ida: [[-6.2400, -77.8800], [-6.2350, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8750], [-6.2400, -77.8800]]
    },
    "AMA_ET_013": {
        nombre: "Empresa de Transportes 'San Juan de Chachapoyas'",
        ruta: "San Juan Bosco - Centro Histórico",
        color: '#27AE60',
        ida: [[-6.2350, -77.8600], [-6.2320, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2320, -77.8650], [-6.2350, -77.8600]]
    },
    "AMA_ET_014": {
        nombre: "Empresa de Transportes 'Amazonas Metropolitano'",
        ruta: "Urb. El Pinar - Plaza de Armas",
        color: '#F1C40F',
        ida: [[-6.2150, -77.8700], [-6.2220, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2220, -77.8700], [-6.2150, -77.8700]]
    },
    "AMA_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Amazonas'",
        ruta: "Urb. Yanayacu - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-6.2450, -77.8650], [-6.2380, -77.8680], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2380, -77.8680], [-6.2450, -77.8650]]
    },
    "AMA_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Amazonas'",
        ruta: "Chachapoyas Sur - Terminal",
        color: '#C0392B',
        ida: [[-6.2500, -77.8700], [-6.2400, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2400, -77.8700], [-6.2500, -77.8700]]
    },
    "AMA_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Nieves Amazonas'",
        ruta: "Urb. Las Nieves - Plaza",
        color: '#1ABC9C',
        ida: [[-6.2250, -77.8800], [-6.2280, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2280, -77.8750], [-6.2250, -77.8800]]
    },
    "AMA_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas Amazonas'",
        ruta: "Urb. Cunas - Centro Chachapoyas",
        color: '#34495E',
        ida: [[-6.2300, -77.8550], [-6.2300, -77.8620], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2300, -77.8620], [-6.2300, -77.8550]]
    },
    "AMA_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Amazonas Express'",
        ruta: "Santa Rosa II - Mercado Central",
        color: '#D35400',
        ida: [[-6.2400, -77.8550], [-6.2350, -77.8620], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8620], [-6.2400, -77.8550]]
    },
    "AMA_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte Amazonas'",
        ruta: "Cono Norte - Av. Leguía",
        color: '#7F8C8D',
        ida: [[-6.2100, -77.8650], [-6.2200, -77.8680], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2200, -77.8680], [-6.2100, -77.8650]]
    },
    "AMA_ET_021": {
        nombre: "Empresa de Transportes 'Andes Travel Amazonas'",
        ruta: "Urb. Santa Bárbara - Plaza de Armas",
        color: '#E67E22',
        ida: [[-6.2400, -77.8500], [-6.2350, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8600], [-6.2400, -77.8500]]
    },
    "AMA_ET_022": {
        nombre: "Empresa de Transportes 'Sol del Mercurio Amazonas'",
        ruta: "Barrio Santa Ana - Mercado Central",
        color: '#2980B9',
        ida: [[-6.2200, -77.8750], [-6.2250, -77.8720], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2250, -77.8720], [-6.2200, -77.8750]]
    },
    "AMA_ET_023": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sur Amazonas'",
        ruta: "San Cristóbal - Plaza de Armas",
        color: '#27AE60',
        ida: [[-6.2450, -77.8800], [-6.2380, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2380, -77.8750], [-6.2450, -77.8800]]
    },
    "AMA_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Andina Amazonas'",
        ruta: "Av. La Cultura - Centro",
        color: '#F1C40F',
        ida: [[-6.2250, -77.8500], [-6.2280, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2280, -77.8600], [-6.2250, -77.8500]]
    },
    "AMA_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Amazonas'",
        ruta: "Urb. Confraternidad - Mercado",
        color: '#8E44AD',
        ida: [[-6.2500, -77.8650], [-6.2400, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2400, -77.8650], [-6.2500, -77.8650]]
    },
    "AMA_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Central Amazonas'",
        ruta: "Salida a Levanto - Terminal",
        color: '#C0392B',
        ida: [[-6.2600, -77.8800], [-6.2450, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2450, -77.8750], [-6.2600, -77.8800]]
    },
    "AMA_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Amazonas'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-6.2350, -77.8850], [-6.2320, -77.8800], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2320, -77.8800], [-6.2350, -77.8850]]
    },
    "AMA_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Andino Amazonas'",
        ruta: "Barrio La Libertad - Chachapoyas",
        color: '#34495E',
        ida: [[-6.2250, -77.8400], [-6.2280, -77.8500], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2280, -77.8500], [-6.2250, -77.8400]]
    },
    "AMA_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Andina Amazonas II'",
        ruta: "Santa Rosa - Mercado Central",
        color: '#D35400',
        ida: [[-6.2100, -77.8700], [-6.2200, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2200, -77.8700], [-6.2100, -77.8700]]
    },
    "AMA_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cachi Amazonas'",
        ruta: "San Pedro - Av. Leguía",
        color: '#7F8C8D',
        ida: [[-6.2000, -77.8800], [-6.2150, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2150, -77.8750], [-6.2000, -77.8800]]
     },        
    "AMA_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales de Amazonas'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-6.2400, -77.8800], [-6.2350, -77.8750], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8750], [-6.2400, -77.8800]]
    },
    "AMA_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Amazonas II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-6.2500, -77.8700], [-6.2400, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2400, -77.8700], [-6.2500, -77.8700]]
    },
    "AMA_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Amazonas II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-6.2150, -77.8600], [-6.2220, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2220, -77.8650], [-6.2150, -77.8600]]
    },
    "AMA_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Amazonas'",
        ruta: "Urb. Algarrobos - Av. Leguía",
        color: '#C0392B',
        ida: [[-6.2200, -77.8500], [-6.2250, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2250, -77.8600], [-6.2200, -77.8500]]
    },
    "AMA_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Amazonas'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-6.2400, -77.8900], [-6.2350, -77.8800], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2350, -77.8800], [-6.2400, -77.8900]]
    },
    "AMA_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Amazonas'",
        ruta: "Miraflores - Av. Leguía",
        color: '#8E44AD',
        ida: [[-6.2100, -77.8700], [-6.2200, -77.8700], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2200, -77.8700], [-6.2100, -77.8700]]
    },
    "AMA_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Amazonas'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-6.2350, -77.8500], [-6.2320, -77.8600], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2320, -77.8600], [-6.2350, -77.8500]]
    },
    "AMA_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Amazonas II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-6.2450, -77.8600], [-6.2380, -77.8650], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2380, -77.8650], [-6.2450, -77.8600]]
    },
    "AMA_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Amazonas II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-6.2550, -77.8750], [-6.2420, -77.8720], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2420, -77.8720], [-6.2550, -77.8750]]
    },
    "AMA_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Amazonas II'",
        ruta: "San Pedro - Av. Leguía",
        color: '#3498DB',
        ida: [[-6.2050, -77.8750], [-6.2150, -77.8720], [-6.2300, -77.8700]],
        vuelta: [[-6.2300, -77.8700], [-6.2150, -77.8720], [-6.2050, -77.8750]]
    },
};
