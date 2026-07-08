// Base de datos de transporte: San Martín - Tarapoto (SAM_ET_001-010)
const rutasSanMartin = {
    "SAM_ET_001": {
        nombre: "Empresa de Transportes 'Tarapoto Metropolitano'",
        ruta: "Morales - Plaza de Armas Tarapoto",
        color: '#E67E22',
        ida: [[-6.4900, -76.3800], [-6.4800, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4800, -76.3700], [-6.4900, -76.3800]]
    },
    "SAM_ET_002": {
        nombre: "Empresa de Transportes 'Banda Shilcayo Express'",
        ruta: "Banda de Shilcayo - Centro",
        color: '#2980B9',
        ida: [[-6.4700, -76.3500], [-6.4750, -76.3600], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4750, -76.3600], [-6.4700, -76.3500]]
    },
    "SAM_ET_003": {
        nombre: "Empresa de Transportes 'Moyobamba Conexión'",
        ruta: "Moyobamba - Tarapoto",
        color: '#27AE60',
        ida: [[-6.0400, -76.9700], [-6.2500, -76.6000], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.2500, -76.6000], [-6.0400, -76.9700]]
    },
    "SAM_ET_004": {
        nombre: "Empresa de Transportes 'Rioja Turística'",
        ruta: "Rioja - Terminal Tarapoto",
        color: '#F1C40F',
        ida: [[-6.0500, -77.1500], [-6.2000, -76.8000], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.2000, -76.8000], [-6.0500, -77.1500]]
    },
    "SAM_ET_005": {
        nombre: "Empresa de Transportes 'Sol del Huallaga'",
        ruta: "Urb. 9 de Abril - Centro",
        color: '#8E44AD',
        ida: [[-6.4900, -76.3700], [-6.4850, -76.3680], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4850, -76.3680], [-6.4900, -76.3700]]
    },
    "SAM_ET_006": {
        nombre: "Empresa de Transportes 'Selva Alta Tours'",
        ruta: "Juanjui - Tarapoto",
        color: '#C0392B',
        ida: [[-7.1700, -76.7300], [-6.8000, -76.5000], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.8000, -76.5000], [-7.1700, -76.7300]]
    },
    "SAM_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Fátima San Martín'",
        ruta: "Urb. Fátima - Centro Tarapoto",
        color: '#1ABC9C',
        ida: [[-6.4850, -76.3550], [-6.4820, -76.3600], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4820, -76.3600], [-6.4850, -76.3550]]
    },
    "SAM_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Industrial Tarapoto'",
        ruta: "Zona Industrial - Plaza Mayor",
        color: '#34495E',
        ida: [[-6.5000, -76.3750], [-6.4900, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3700], [-6.5000, -76.3750]]
    },
    "SAM_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa San Martín'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-6.4800, -76.3500], [-6.4800, -76.3580], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4800, -76.3580], [-6.4800, -76.3500]]
    },
    "SAM_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de San Martín'",
        ruta: "San Pedro - Av. Salaverry",
        color: '#7F8C8D',
        ida: [[-6.4750, -76.3750], [-6.4780, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4780, -76.3700], [-6.4750, -76.3750]]
    },
    "SAM_ET_011": {
        nombre: "Empresa de Transportes 'Morales Express'",
        ruta: "Urb. Las Palmeras - Plaza de Armas",
        color: '#E67E22',
        ida: [[-6.4950, -76.3850], [-6.4880, -76.3750], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4880, -76.3750], [-6.4950, -76.3850]]
    },
    "SAM_ET_012": {
        nombre: "Empresa de Transportes 'Los Héroes de Tarapoto'",
        ruta: "Urb. Los Héroes - Av. La Banda",
        color: '#2980B9',
        ida: [[-6.4700, -76.3400], [-6.4750, -76.3550], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4750, -76.3550], [-6.4700, -76.3400]]
    },
    "SAM_ET_013": {
        nombre: "Empresa de Transportes 'San Juan de Shilcayo'",
        ruta: "San Juan Bosco - Centro Tarapoto",
        color: '#27AE60',
        ida: [[-6.4750, -76.3500], [-6.4780, -76.3600], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4780, -76.3600], [-6.4750, -76.3500]]
    },
    "SAM_ET_014": {
        nombre: "Empresa de Transportes 'Tarapoto Moderno'",
        ruta: "Urb. La Planicie - Plaza",
        color: '#F1C40F',
        ida: [[-6.4650, -76.3600], [-6.4720, -76.3620], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4720, -76.3620], [-6.4650, -76.3600]]
    },
    "SAM_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real San Martín'",
        ruta: "Urb. Los Jardines - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-6.4850, -76.3800], [-6.4820, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4820, -76.3700], [-6.4850, -76.3800]]
    },
    "SAM_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Sur San Martín'",
        ruta: "Tarapoto Sur - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-6.5000, -76.3650], [-6.4900, -76.3650], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3650], [-6.5000, -76.3650]]
    },
    "SAM_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes San Martín'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-6.4700, -76.3750], [-6.4750, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4750, -76.3700], [-6.4700, -76.3750]]
    },
    "SAM_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas San Martín'",
        ruta: "Urb. Cunas - Centro Tarapoto",
        color: '#34495E',
        ida: [[-6.4900, -76.3900], [-6.4850, -76.3800], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4850, -76.3800], [-6.4900, -76.3900]]
    },
    "SAM_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Tarapoto Express'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-6.4800, -76.3450], [-6.4800, -76.3550], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4800, -76.3550], [-6.4800, -76.3450]]
    },
    "SAM_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte San Martín'",
        ruta: "Cono Norte - Av. Salaverry",
        color: '#7F8C8D',
        ida: [[-6.4600, -76.3700], [-6.4700, -76.3680], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4700, -76.3680], [-6.4600, -76.3700]]
    },
    "SAM_ET_021": {
        nombre: "Empresa de Transportes 'Andes Tropicales'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-6.5000, -76.3800], [-6.4900, -76.3750], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3750], [-6.5000, -76.3800]]
    },
    "SAM_ET_022": {
        nombre: "Empresa de Transportes 'Sol del Mercurio San Martín'",
        ruta: "Barrio Huayco - Mercado Modelo",
        color: '#2980B9',
        ida: [[-6.4850, -76.3500], [-6.4820, -76.3550], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4820, -76.3550], [-6.4850, -76.3500]]
    },
    "SAM_ET_023": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sur San Martín'",
        ruta: "San Cristóbal - Plaza de Armas",
        color: '#27AE60',
        ida: [[-6.4950, -76.3600], [-6.4900, -76.3620], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3620], [-6.4950, -76.3600]]
    },
    "SAM_ET_024": {
        nombre: "Empresa de Transportes 'Integración Amazónica'",
        ruta: "Av. Circunvalación - Centro",
        color: '#F1C40F',
        ida: [[-6.4750, -76.3800], [-6.4780, -76.3750], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4780, -76.3750], [-6.4750, -76.3800]]
    },
    "SAM_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad San Martín'",
        ruta: "Urb. Confraternidad - Mercado",
        color: '#8E44AD',
        ida: [[-6.5050, -76.3700], [-6.4950, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4950, -76.3700], [-6.5050, -76.3700]]
    },
    "SAM_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Mayo San Martín'",
        ruta: "Salida a Moyobamba - Terminal",
        color: '#C0392B',
        ida: [[-6.4600, -76.3800], [-6.4700, -76.3750], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4700, -76.3750], [-6.4600, -76.3800]]
    },
    "SAM_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Tarapoto'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-6.4950, -76.3500], [-6.4900, -76.3550], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3550], [-6.4950, -76.3500]]
    },
    "SAM_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Amazónica'",
        ruta: "Barrio La Libertad - Plaza Mayor",
        color: '#34495E',
        ida: [[-6.4850, -76.3400], [-6.4820, -76.3500], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4820, -76.3500], [-6.4850, -76.3400]]
    },
    "SAM_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa San Martín II'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-6.4700, -76.3500], [-6.4750, -76.3550], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4750, -76.3550], [-6.4700, -76.3500]]
    },
    "SAM_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cachi San Martín'",
        ruta: "San Pedro - Av. Salaverry",
        color: '#7F8C8D',
        ida: [[-6.4600, -76.3600], [-6.4700, -76.3650], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4700, -76.3650], [-6.4600, -76.3600]]
    },
    "SAM_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales San Martín'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-6.4950, -76.3900], [-6.4880, -76.3800], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4880, -76.3800], [-6.4950, -76.3900]]
    },
    "SAM_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur San Martín II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-6.5000, -76.3650], [-6.4900, -76.3650], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3650], [-6.5000, -76.3650]]
    },
    "SAM_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte San Martín II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-6.4750, -76.3500], [-6.4780, -76.3600], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4780, -76.3600], [-6.4750, -76.3500]]
    },
    "SAM_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos San Martín'",
        ruta: "Urb. Algarrobos - Av. Salaverry",
        color: '#C0392B',
        ida: [[-6.4650, -76.3750], [-6.4720, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4720, -76.3700], [-6.4650, -76.3750]]
    },
    "SAM_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico San Martín'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-6.4900, -76.3950], [-6.4850, -76.3800], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4850, -76.3800], [-6.4900, -76.3950]]
    },
    "SAM_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores San Martín'",
        ruta: "Miraflores - Av. Salaverry",
        color: '#8E44AD',
        ida: [[-6.4700, -76.3700], [-6.4750, -76.3680], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4750, -76.3680], [-6.4700, -76.3700]]
    },
    "SAM_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal San Martín'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-6.4850, -76.3500], [-6.4820, -76.3600], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4820, -76.3600], [-6.4850, -76.3500]]
    },
    "SAM_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa San Martín II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-6.4950, -76.3800], [-6.4900, -76.3750], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4900, -76.3750], [-6.4950, -76.3800]]
    },
    "SAM_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional San Martín II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-6.5050, -76.3750], [-6.4950, -76.3700], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4950, -76.3700], [-6.5050, -76.3750]]
    },
    "SAM_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de San Martín II'",
        ruta: "San Pedro - Av. Salaverry",
        color: '#3498DB',
        ida: [[-6.4600, -76.3650], [-6.4700, -76.3650], [-6.4800, -76.3650]],
        vuelta: [[-6.4800, -76.3650], [-6.4700, -76.3650], [-6.4600, -76.3650]]
    },
};
