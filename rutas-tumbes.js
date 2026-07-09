// Base de datos de transporte: Tumbes (TUM_ET_001-010)
const rutasTumbes = {
    "TUM_ET_001": {
        nombre: "Empresa de Transportes 'Tumbes Metropolitano'",
        ruta: "Corrales - Plaza de Armas Tumbes",
        color: '#E67E22',
        ida: [[-3.5600, -80.4600], [-3.5700, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5700, -80.4500], [-3.5600, -80.4600]]
    },
    "TUM_ET_002": {
        nombre: "Empresa de Transportes 'Zarumilla Express'",
        ruta: "Zarumilla - Centro Tumbes",
        color: '#2980B9',
        ida: [[-3.5000, -80.2700], [-3.5400, -80.3500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5400, -80.3500], [-3.5000, -80.2700]]
    },
    "TUM_ET_003": {
        nombre: "Empresa de Transportes 'Borde Costero Tumbes'",
        ruta: "Puerto Pizarro - Tumbes",
        color: '#27AE60',
        ida: [[-3.4900, -80.4700], [-3.5400, -80.4600], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5400, -80.4600], [-3.4900, -80.4700]]
    },
    "TUM_ET_004": {
        nombre: "Empresa de Transportes 'Turismo Mancora-Tumbes'",
        ruta: "Terminal Terrestre - Plaza Mayor",
        color: '#F1C40F',
        ida: [[-3.5800, -80.4500], [-3.5780, -80.4480], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5780, -80.4480], [-3.5800, -80.4500]]
    },
    "TUM_ET_005": {
        nombre: "Empresa de Transportes 'Imperial Tumbes'",
        ruta: "Urb. San José - Centro",
        color: '#8E44AD',
        ida: [[-3.5850, -80.4400], [-3.5800, -80.4420], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5800, -80.4420], [-3.5850, -80.4400]]
    },
    "TUM_ET_006": {
        nombre: "Empresa de Transportes 'Sol del Norte Tumbesino'",
        ruta: "Pampa Grande - Terminal",
        color: '#C0392B',
        ida: [[-3.5900, -80.4300], [-3.5850, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4350], [-3.5900, -80.4300]]
    },
    "TUM_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Tumbes'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-3.5700, -80.4350], [-3.5720, -80.4400], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5720, -80.4400], [-3.5700, -80.4350]]
    },
    "TUM_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Industrial Tumbes'",
        ruta: "Zona Industrial - Plaza de Armas",
        color: '#34495E',
        ida: [[-3.5950, -80.4500], [-3.5850, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4500], [-3.5950, -80.4500]]
    },
    "TUM_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Tumbes'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-3.5750, -80.4300], [-3.5750, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5750, -80.4350], [-3.5750, -80.4300]]
    },
    "TUM_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Tumbes'",
        ruta: "San Pedro - Av. Mariscal Castilla",
        color: '#7F8C8D',
        ida: [[-3.5650, -80.4400], [-3.5700, -80.4420], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5700, -80.4420], [-3.5650, -80.4400]]
    },
    "TUM_ET_011": {
        nombre: "Empresa de Transportes 'Tumbes Express'",
        ruta: "Urb. Las Palmeras - Plaza de Armas",
        color: '#E67E22',
        ida: [[-3.5850, -80.4550], [-3.5800, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5800, -80.4500], [-3.5850, -80.4550]]
    },
    "TUM_ET_012": {
        nombre: "Empresa de Transportes 'Los Héroes de Tumbes'",
        ruta: "Urb. Los Héroes - Av. Tumbes Norte",
        color: '#2980B9',
        ida: [[-3.5600, -80.4350], [-3.5650, -80.4400], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5650, -80.4400], [-3.5600, -80.4350]]
    },
    "TUM_ET_013": {
        nombre: "Empresa de Transportes 'San Juan de Tumbes'",
        ruta: "San Juan Bosco - Centro Tumbes",
        color: '#27AE60',
        ida: [[-3.5800, -80.4300], [-3.5780, -80.4380], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5780, -80.4380], [-3.5800, -80.4300]]
    },
    "TUM_ET_014": {
        nombre: "Empresa de Transportes 'Tumbes Moderno'",
        ruta: "Urb. La Planicie - Plaza",
        color: '#F1C40F',
        ida: [[-3.5550, -80.4450], [-3.5650, -80.4450], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5650, -80.4450], [-3.5550, -80.4450]]
    },
    "TUM_ET_015": {
        nombre: "Empresa de Transportes 'El Camino Real Tumbes'",
        ruta: "Urb. Los Jardines - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-3.5750, -80.4550], [-3.5720, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5720, -80.4500], [-3.5750, -80.4550]]
    },
    "TUM_ET_016": {
        nombre: "Empresa de Transportes 'Sol del Cono Sur Tumbes'",
        ruta: "Tumbes Sur - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-3.6000, -80.4450], [-3.5900, -80.4450], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5900, -80.4450], [-3.6000, -80.4450]]
    },
    "TUM_ET_017": {
        nombre: "Empresa de Transportes 'Virgen de las Mercedes Tumbes'",
        ruta: "Urb. Las Mercedes - Plaza",
        color: '#1ABC9C',
        ida: [[-3.5650, -80.4550], [-3.5700, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5700, -80.4500], [-3.5650, -80.4550]]
    },
    "TUM_ET_018": {
        nombre: "Empresa de Transportes 'Corredor Cunas Tumbes'",
        ruta: "Urb. Cunas - Centro Tumbes",
        color: '#34495E',
        ida: [[-3.5900, -80.4600], [-3.5850, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4500], [-3.5900, -80.4600]]
    },
    "TUM_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Tumbes Express'",
        ruta: "Santa Rosa II - Mercado Modelo",
        color: '#D35400',
        ida: [[-3.5750, -80.4250], [-3.5750, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5750, -80.4350], [-3.5750, -80.4250]]
    },
    "TUM_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro del Cono Norte Tumbes'",
        ruta: "Cono Norte - Av. Mariscal Castilla",
        color: '#7F8C8D',
        ida: [[-3.5500, -80.4400], [-3.5600, -80.4420], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5600, -80.4420], [-3.5500, -80.4400]]
    },
    "TUM_ET_021": {
        nombre: "Empresa de Transportes 'Andes Tropicales Tumbes'",
        ruta: "Urb. Las Orquídeas - Plaza de Armas",
        color: '#E67E22',
        ida: [[-3.5950, -80.4550], [-3.5850, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4500], [-3.5950, -80.4550]]
    },
    "TUM_ET_022": {
        nombre: "Empresa de Transportes 'Sol del Mercurio Tumbes'",
        ruta: "Barrio Huayco - Mercado Modelo",
        color: '#2980B9',
        ida: [[-3.5800, -80.4250], [-3.5780, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5780, -80.4350], [-3.5800, -80.4250]]
    },
    "TUM_ET_023": {
        nombre: "Empresa de Transportes 'San Cristóbal del Sur Tumbes'",
        ruta: "San Cristóbal - Plaza de Armas",
        color: '#27AE60',
        ida: [[-3.5900, -80.4400], [-3.5850, -80.4420], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4420], [-3.5900, -80.4400]]
    },
    "TUM_ET_024": {
        nombre: "Empresa de Transportes 'Integración Amazónica Tumbes'",
        ruta: "Av. Circunvalación - Centro",
        color: '#F1C40F',
        ida: [[-3.5700, -80.4550], [-3.5720, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5720, -80.4500], [-3.5700, -80.4550]]
    },
    "TUM_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Tumbes'",
        ruta: "Urb. Confraternidad - Mercado",
        color: '#8E44AD',
        ida: [[-3.6000, -80.4500], [-3.5900, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5900, -80.4500], [-3.6000, -80.4500]]
    },
    "TUM_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Mayo Tumbes'",
        ruta: "Salida a Zorritos - Terminal",
        color: '#C0392B',
        ida: [[-3.5600, -80.4550], [-3.5650, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5650, -80.4500], [-3.5600, -80.4550]]
    },
    "TUM_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima Tumbes II'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-3.5900, -80.4300], [-3.5850, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4350], [-3.5900, -80.4300]]
    },
    "TUM_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Tumbes'",
        ruta: "Barrio La Libertad - Plaza Mayor",
        color: '#34495E',
        ida: [[-3.5800, -80.4200], [-3.5770, -80.4300], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5770, -80.4300], [-3.5800, -80.4200]]
    },
    "TUM_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Tumbes II'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-3.5650, -80.4300], [-3.5700, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5700, -80.4350], [-3.5650, -80.4300]]
    },
    "TUM_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cachi Tumbes'",
        ruta: "San Pedro - Av. Mariscal Castilla",
        color: '#7F8C8D',
        ida: [[-3.5550, -80.4350], [-3.5650, -80.4400], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5650, -80.4400], [-3.5550, -80.4350]]
    },
    "TUM_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Tumbes'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-3.5950, -80.4600], [-3.5850, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4500], [-3.5950, -80.4600]]
    },
    "TUM_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Tumbes II'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-3.6000, -80.4450], [-3.5900, -80.4450], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5900, -80.4450], [-3.6000, -80.4450]]
    },
    "TUM_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Tumbes II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-3.5700, -80.4300], [-3.5720, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5720, -80.4350], [-3.5700, -80.4300]]
    },
    "TUM_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Tumbes'",
        ruta: "Urb. Algarrobos - Av. Mariscal Castilla",
        color: '#C0392B',
        ida: [[-3.5600, -80.4500], [-3.5650, -80.4450], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5650, -80.4450], [-3.5600, -80.4500]]
    },
    "TUM_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Tumbes'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-3.5950, -80.4650], [-3.5850, -80.4550], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5850, -80.4550], [-3.5950, -80.4650]]
    },
    "TUM_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Tumbes'",
        ruta: "Miraflores - Av. Mariscal Castilla",
        color: '#8E44AD',
        ida: [[-3.5650, -80.4400], [-3.5700, -80.4420], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5700, -80.4420], [-3.5650, -80.4400]]
    },
    "TUM_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Tumbes'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-3.5800, -80.4250], [-3.5780, -80.4350], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5780, -80.4350], [-3.5800, -80.4250]]
    },
    "TUM_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Tumbes II'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-3.5900, -80.4550], [-3.5820, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5820, -80.4500], [-3.5900, -80.4550]]
    },
    "TUM_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Tumbes II'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-3.6000, -80.4550], [-3.5900, -80.4500], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5900, -80.4500], [-3.6000, -80.4550]]
    },
    "TUM_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Tumbes II'",
        ruta: "San Pedro - Av. Mariscal Castilla",
        color: '#3498DB',
        ida: [[-3.5500, -80.4350], [-3.5600, -80.4400], [-3.5750, -80.4450]],
        vuelta: [[-3.5750, -80.4450], [-3.5600, -80.4400], [-3.5500, -80.4350]]
    },
};
