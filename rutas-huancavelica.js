// Base de datos de transporte: Huancavelica (HUV_ET_001-010)
const rutasHuancavelica = {
    "HUV_ET_001": {
        nombre: "Empresa de Transportes 'Huancavelica Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#C0392B',
        ida: [[-12.7800, -74.9700], [-12.7850, -74.9750], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7850, -74.9750], [-12.7800, -74.9700]]
    },
    "HUV_ET_002": {
        nombre: "Empresa de Transportes 'Los Andes Centrales'",
        ruta: "Urb. Santa Ana - Centro",
        color: '#2980B9',
        ida: [[-12.7900, -74.9800], [-12.7880, -74.9780], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7880, -74.9780], [-12.7900, -74.9800]]
    },
    "HUV_ET_003": {
        nombre: "Empresa de Transportes 'San Cristóbal HVC'",
        ruta: "Barrio San Cristóbal - Mercado Central",
        color: '#27AE60',
        ida: [[-12.7850, -74.9600], [-12.7860, -74.9700], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7860, -74.9700], [-12.7850, -74.9600]]
    },
    "HUV_ET_004": {
        nombre: "Empresa de Transportes 'El Valle Rojo'",
        ruta: "Patibamba - Plaza de Armas",
        color: '#F1C40F',
        ida: [[-12.8000, -74.9700], [-12.7950, -74.9750], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7950, -74.9750], [-12.8000, -74.9700]]
    },
    "HUV_ET_005": {
        nombre: "Empresa de Transportes 'Integración Huancavelica'",
        ruta: "Circunvalación - Av. Manchego",
        color: '#8E44AD',
        ida: [[-12.7750, -74.9800], [-12.7800, -74.9780], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7800, -74.9780], [-12.7750, -74.9800]]
    },
    "HUV_ET_006": {
        nombre: "Empresa de Transportes 'Sol de los Andes'",
        ruta: "Salida a Ayacucho - Terminal",
        color: '#E67E22',
        ida: [[-12.7700, -74.9500], [-12.7800, -74.9600], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7800, -74.9600], [-12.7700, -74.9500]]
    },
    "HUV_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Cocharcas HVC'",
        ruta: "Urb. Cocharcas - Centro",
        color: '#1ABC9C',
        ida: [[-12.7900, -74.9900], [-12.7880, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7880, -74.9850], [-12.7900, -74.9900]]
    },
    "HUV_ET_008": {
        nombre: "Empresa de Transportes 'La Unión Minera'",
        ruta: "Zona Industrial - Plaza",
        color: '#34495E',
        ida: [[-12.7650, -74.9700], [-12.7750, -74.9750], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7750, -74.9750], [-12.7650, -74.9700]]
    },
    "HUV_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Huancavelica'",
        ruta: "Santa Rosa - Mercado",
        color: '#D35400',
        ida: [[-12.7800, -74.9900], [-12.7850, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7850, -74.9850], [-12.7800, -74.9900]]
    },
    "HUV_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro HVC'",
        ruta: "San Pedro - Av. Arenas",
        color: '#7F8C8D',
        ida: [[-12.7950, -74.9650], [-12.7900, -74.9700], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7900, -74.9700], [-12.7950, -74.9650]]
    },
    "HUV_ET_011": {
        nombre: "Empresa de Transportes 'Lircay Express'",
        ruta: "Lircay - Terminal Huancavelica",
        color: '#E67E22',
        ida: [[-12.9800, -74.7200], [-12.8800, -74.8500], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.8800, -74.8500], [-12.9800, -74.7200]]
    },
    "HUV_ET_012": {
        nombre: "Empresa de Transportes 'Villa Gloria HVC'",
        ruta: "Urb. Villa Gloria - Mercado Central",
        color: '#2980B9',
        ida: [[-12.7950, -74.9900], [-12.7900, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7900, -74.9850], [-12.7950, -74.9900]]
    },
    "HUV_ET_013": {
        nombre: "Empresa de Transportes 'San Gabriel de los Andes'",
        ruta: "San Gabriel - Plaza de Armas",
        color: '#27AE60',
        ida: [[-12.7800, -74.9950], [-12.7840, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7840, -74.9850], [-12.7800, -74.9950]]
    },
    "HUV_ET_014": {
        nombre: "Empresa de Transportes 'Corredor Ampay HVC'",
        ruta: "Zona Alta - Huancavelica",
        color: '#F1C40F',
        ida: [[-12.7500, -75.0000], [-12.7700, -74.9900], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7700, -74.9900], [-12.7500, -75.0000]]
    },
    "HUV_ET_015": {
        nombre: "Empresa de Transportes 'Los Héroes de Huancavelica'",
        ruta: "Urb. Héroes - Av. Manchego",
        color: '#8E44AD',
        ida: [[-12.7950, -74.9750], [-12.7920, -74.9770], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7920, -74.9770], [-12.7950, -74.9750]]
    },
    "HUV_ET_016": {
        nombre: "Empresa de Transportes 'San Jerónimo HVC'",
        ruta: "San Jerónimo - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-12.8050, -74.9800], [-12.7950, -74.9780], [-12.7800, -74.9700]],
        vuelta: [[-12.7800, -74.9700], [-12.7950, -74.9780], [-12.8050, -74.9800]]
    },
    "HUV_ET_017": {
        nombre: "Empresa de Transportes 'Belo Horizonte HVC'",
        ruta: "Urb. Belo Horizonte - Plaza",
        color: '#1ABC9C',
        ida: [[-12.7800, -74.9600], [-12.7830, -74.9700], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7830, -74.9700], [-12.7800, -74.9600]]
    },
    "HUV_ET_018": {
        nombre: "Empresa de Transportes 'Integración Huancavelica II'",
        ruta: "Circunvalación Sur - Plaza",
        color: '#34495E',
        ida: [[-12.8000, -74.9850], [-12.7950, -74.9800], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7950, -74.9800], [-12.8000, -74.9850]]
    },
    "HUV_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Andina'",
        ruta: "Santa Rosa - Mercado Central",
        color: '#D35400',
        ida: [[-12.7750, -74.9950], [-12.7820, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7820, -74.9850], [-12.7750, -74.9950]]
    },
    "HUV_ET_020": {
        nombre: "Empresa de Transportes 'Los Incas de Huancavelica'",
        ruta: "Urb. Los Incas - Av. Manchego",
        color: '#7F8C8D',
        ida: [[-12.7850, -75.0000], [-12.7860, -74.9900], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7860, -74.9900], [-12.7850, -75.0000]]
    },
    "HUV_ET_021": {
        nombre: "Empresa de Transportes 'Andes Travel'",
        ruta: "Urb. Santa Bárbara - Plaza de Armas",
        color: '#E67E22',
        ida: [[-12.8000, -74.9600], [-12.7950, -74.9650], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7950, -74.9650], [-12.8000, -74.9600]]
    },
    "HUV_ET_022": {
        nombre: "Empresa de Transportes 'Sol del Mercurio'",
        ruta: "Barrio Santa Ana - Mercado Modelo",
        color: '#2980B9',
        ida: [[-12.7700, -74.9850], [-12.7780, -74.9820], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7780, -74.9820], [-12.7700, -74.9850]]
    },
    "HUV_ET_023": {
        nombre: "Empresa de Transportes 'San Cristobal del Sur'",
        ruta: "San Cristóbal - Plaza de Armas",
        color: '#27AE60',
        ida: [[-12.7900, -74.9500], [-12.7880, -74.9600], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7880, -74.9600], [-12.7900, -74.9500]]
    },
    "HUV_ET_024": {
        nombre: "Empresa de Transportes 'La Integración Andina'",
        ruta: "Av. La Cultura - Centro",
        color: '#F1C40F',
        ida: [[-12.7750, -74.9650], [-12.7800, -74.9700], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7800, -74.9700], [-12.7750, -74.9650]]
    },
    "HUV_ET_025": {
        nombre: "Empresa de Transportes 'Confraternidad Huancavelica'",
        ruta: "Urb. Confraternidad - Mercado",
        color: '#8E44AD',
        ida: [[-12.8050, -74.9900], [-12.7950, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7950, -74.9850], [-12.8050, -74.9900]]
    },
    "HUV_ET_026": {
        nombre: "Empresa de Transportes 'Sol del Altiplano Central'",
        ruta: "Salida a Huancayo - Terminal",
        color: '#C0392B',
        ida: [[-12.7500, -74.9500], [-12.7650, -74.9600], [-12.7800, -74.9700]],
        vuelta: [[-12.7800, -74.9700], [-12.7650, -74.9600], [-12.7500, -74.9500]]
    },
    "HUV_ET_027": {
        nombre: "Empresa de Transportes 'Virgen de Fátima HVC'",
        ruta: "Urb. Fátima - Centro Histórico",
        color: '#1ABC9C',
        ida: [[-12.7950, -74.9950], [-12.7900, -74.9880], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7900, -74.9880], [-12.7950, -74.9950]]
    },
    "HUV_ET_028": {
        nombre: "Empresa de Transportes 'Corredor Libertad Andino'",
        ruta: "Barrio La Libertad - Huancavelica",
        color: '#34495E',
        ida: [[-12.7850, -74.9550], [-12.7860, -74.9650], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7860, -74.9650], [-12.7850, -74.9550]]
    },
    "HUV_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Andina II'",
        ruta: "Santa Rosa - Mercado Modelo",
        color: '#D35400',
        ida: [[-12.7700, -74.9950], [-12.7780, -74.9880], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7780, -74.9880], [-12.7700, -74.9950]]
    },
    "HUV_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro de Cachi'",
        ruta: "San Pedro - Av. Manchego",
        color: '#7F8C8D',
        ida: [[-12.7400, -74.9800], [-12.7600, -74.9780], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7600, -74.9780], [-12.7400, -74.9800]]
    },
    "HUV_ET_031": {
        nombre: "Empresa de Transportes 'Los Nogales Huancavelicanos'",
        ruta: "Urb. Los Nogales - Centro",
        color: '#7F8C8D',
        ida: [[-12.7950, -75.0000], [-12.7900, -74.9900], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7900, -74.9900], [-12.7950, -75.0000]]
    },
    "HUV_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur HVC'",
        ruta: "San Pedro - Terminal Terrestre",
        color: '#34495E',
        ida: [[-12.8100, -74.9800], [-12.8000, -74.9750], [-12.7800, -74.9700]],
        vuelta: [[-12.7800, -74.9700], [-12.8000, -74.9750], [-12.8100, -74.9800]]
    },
    "HUV_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte HVC II'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-12.7750, -75.0000], [-12.7800, -74.9900], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7800, -74.9900], [-12.7750, -75.0000]]
    },
    "HUV_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Huancavelicanos'",
        ruta: "Urb. Algarrobos - Av. Independencia",
        color: '#C0392B',
        ida: [[-12.7850, -74.9600], [-12.7860, -74.9700], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7860, -74.9700], [-12.7850, -74.9600]]
    },
    "HUV_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico HVC'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-12.8000, -75.0000], [-12.7950, -74.9900], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7950, -74.9900], [-12.8000, -75.0000]]
    },
    "HUV_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores HVC'",
        ruta: "Miraflores - Av. Arenas",
        color: '#8E44AD',
        ida: [[-12.7650, -74.9850], [-12.7750, -74.9800], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7750, -74.9800], [-12.7650, -74.9850]]
    },
    "HUV_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal HVC'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-12.7900, -75.0050], [-12.7880, -74.9950], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7880, -74.9950], [-12.7900, -75.0050]]
    },
    "HUV_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa HVC Express'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-12.7800, -74.9500], [-12.7850, -74.9600], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7850, -74.9600], [-12.7800, -74.9500]]
    },
    "HUV_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional HVC II'",
        ruta: "Terminal - Zona Industrial Sur",
        color: '#D35400',
        ida: [[-12.7800, -74.9700], [-12.7830, -74.9740], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7830, -74.9740], [-12.7800, -74.9700]]
    },
    "HUV_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Huancavelica II'",
        ruta: "San Pedro - Av. Manchego",
        color: '#3498DB',
        ida: [[-12.7600, -74.9900], [-12.7700, -74.9850], [-12.7870, -74.9780]],
        vuelta: [[-12.7870, -74.9780], [-12.7700, -74.9850], [-12.7600, -74.9900]]
    },
};
