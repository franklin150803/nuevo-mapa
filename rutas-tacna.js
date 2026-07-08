// Base de datos de transporte: Tacna (TAC_ET_001-010)
const rutasTacna = {
    "TAC_ET_001": {
        nombre: "Empresa de Transportes '10 de Marzo'",
        ruta: "Alto de la Alianza - Centro",
        color: '#E74C3C',
        ida: [[-18.0000, -70.2500], [-18.0100, -70.2550], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0100, -70.2550], [-18.0000, -70.2500]]
    },
    "TAC_ET_002": {
        nombre: "Empresa de Transportes 'Ciudad Nueva Express'",
        ruta: "Ciudad Nueva - Mercado Grau",
        color: '#2980B9',
        ida: [[-17.9800, -70.2600], [-18.0050, -70.2500], [-18.0200, -70.2450]],
        vuelta: [[-18.0200, -70.2450], [-18.0050, -70.2500], [-17.9800, -70.2600]]
    },
    "TAC_ET_003": {
        nombre: "Empresa de Transportes 'Gregorio Albarracín S.A.'",
        ruta: "Cono Sur - Centro Cívico",
        color: '#27AE60',
        ida: [[-18.0500, -70.2300], [-18.0300, -70.2400], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0300, -70.2400], [-18.0500, -70.2300]]
    },
    "TAC_ET_004": {
        nombre: "Empresa de Transportes 'Pocollay Tour'",
        ruta: "Pocollay - Av. Bolognesi",
        color: '#F1C40F',
        ida: [[-18.0000, -70.2200], [-18.0100, -70.2350], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0100, -70.2350], [-18.0000, -70.2200]]
    },
    "TAC_ET_005": {
        nombre: "Empresa de Transportes 'Corredor Cusco'",
        ruta: "Av. Cusco - Mercado Grau",
        color: '#9B59B6',
        ida: [[-18.0250, -70.2600], [-18.0200, -70.2500], [-18.0180, -70.2450]],
        vuelta: [[-18.0180, -70.2450], [-18.0200, -70.2500], [-18.0250, -70.2600]]
    },
    "TAC_ET_006": {
        nombre: "Empresa de Transportes 'San Pedro'",
        ruta: "San Pedro - Centro Histórico",
        color: '#E67E22',
        ida: [[-18.0350, -70.2400], [-18.0250, -70.2450], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0250, -70.2450], [-18.0350, -70.2400]]
    },
    "TAC_ET_007": {
        nombre: "Empresa de Transportes 'Las Palmeras Tacna'",
        ruta: "La Esperanza - Av. Leguía",
        color: '#1ABC9C',
        ida: [[-18.0200, -70.2700], [-18.0150, -70.2600], [-18.0100, -70.2500]],
        vuelta: [[-18.0100, -70.2500], [-18.0150, -70.2600], [-18.0200, -70.2700]]
    },
    "TAC_ET_008": {
        nombre: "Empresa de Transportes 'Valle de Sama'",
        ruta: "Sama - Terminal Terrestre",
        color: '#34495E',
        ida: [[-17.9500, -70.3000], [-17.9800, -70.2800], [-18.0200, -70.2600]],
        vuelta: [[-18.0200, -70.2600], [-17.9800, -70.2800], [-17.9500, -70.3000]]
    },
    "TAC_ET_009": {
        nombre: "Empresa de Transportes 'Magisterial'",
        ruta: "Urb. Magisterial - Centro",
        color: '#D35400',
        ida: [[-18.0400, -70.2200], [-18.0250, -70.2350], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0250, -70.2350], [-18.0400, -70.2200]]
    },
    "TAC_ET_010": {
        nombre: "Empresa de Transportes 'Bolognesi'",
        ruta: "Circuito Bolognesi - Plaza Zela",
        color: '#7F8C8D',
        ida: [[-18.0100, -70.2400], [-18.0120, -70.2450], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0120, -70.2450], [-18.0100, -70.2400]]
    },
    "TAC_ET_011": {
        nombre: "Empresa de Transportes 'Nueva Tacna'",
        ruta: "Urb. La Esperanza - Centro Cívico",
        color: '#C0392B',
        ida: [[-18.0250, -70.2700], [-18.0200, -70.2600], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0200, -70.2600], [-18.0250, -70.2700]]
    },
    "TAC_ET_012": {
        nombre: "Empresa de Transportes 'Albarracín Express'",
        ruta: "Gregorio Albarracín - Mercado Grau",
        color: '#2980B9',
        ida: [[-18.0600, -70.2200], [-18.0400, -70.2300], [-18.0200, -70.2450]],
        vuelta: [[-18.0200, -70.2450], [-18.0400, -70.2300], [-18.0600, -70.2200]]
    },
    "TAC_ET_013": {
        nombre: "Empresa de Transportes 'Los Ángeles de Tacna'",
        ruta: "Urb. Los Ángeles - Pocollay",
        color: '#8E44AD',
        ida: [[-18.0100, -70.2100], [-18.0050, -70.2150], [-18.0000, -70.2200]],
        vuelta: [[-18.0000, -70.2200], [-18.0050, -70.2150], [-18.0100, -70.2100]]
    },
    "TAC_ET_014": {
        nombre: "Empresa de Transportes 'Panamericana'",
        ruta: "Vía Panamericana - Centro",
        color: '#16A085',
        ida: [[-18.0500, -70.2500], [-18.0300, -70.2500], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0300, -70.2500], [-18.0500, -70.2500]]
    },
    "TAC_ET_015": {
        nombre: "Empresa de Transportes 'Tacna Heroica'",
        ruta: "Ciudad Nueva - Centro Cívico",
        color: '#27AE60',
        ida: [[-17.9700, -70.2700], [-17.9900, -70.2600], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-17.9900, -70.2600], [-17.9700, -70.2700]]
    },
    "TAC_ET_016": {
        nombre: "Empresa de Transportes 'Corredor Leguía'",
        ruta: "Av. Leguía - Terminal Terrestre",
        color: '#E67E22',
        ida: [[-18.0050, -70.2550], [-18.0150, -70.2550], [-18.0250, -70.2600]],
        vuelta: [[-18.0250, -70.2600], [-18.0150, -70.2550], [-18.0050, -70.2550]]
    },
    "TAC_ET_017": {
        nombre: "Empresa de Transportes 'San Martín de Porres'",
        ruta: "Urb. San Martín - Mercado Grau",
        color: '#3498DB',
        ida: [[-18.0300, -70.2300], [-18.0200, -70.2350], [-18.0180, -70.2450]],
        vuelta: [[-18.0180, -70.2450], [-18.0200, -70.2350], [-18.0300, -70.2300]]
    },
    "TAC_ET_018": {
        nombre: "Empresa de Transportes 'Los Incas'",
        ruta: "Urb. Los Incas - Alto de la Alianza",
        color: '#2C3E50',
        ida: [[-18.0200, -70.2200], [-18.0100, -70.2300], [-18.0000, -70.2500]],
        vuelta: [[-18.0000, -70.2500], [-18.0100, -70.2300], [-18.0200, -70.2200]]
    },
    "TAC_ET_019": {
        nombre: "Empresa de Transportes 'Terminal Internacional'",
        ruta: "Terminal Internacional - Centro",
        color: '#9B59B6',
        ida: [[-18.0350, -70.2650], [-18.0250, -70.2600], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0250, -70.2600], [-18.0350, -70.2650]]
    },
    "TAC_ET_020": {
        nombre: "Empresa de Transportes 'La Frontera'",
        ruta: "Zona Fronteriza - Centro",
        color: '#2ECC71',
        ida: [[-18.0550, -70.2800], [-18.0350, -70.2650], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0350, -70.2650], [-18.0550, -70.2800]]
    },
    "TAC_ET_021": {
        nombre: "Empresa de Transportes 'Los Jazmines'",
        ruta: "Urb. Los Jazmines - Mercado Grau",
        color: '#F39C12',
        ida: [[-18.0450, -70.2100], [-18.0300, -70.2300], [-18.0180, -70.2450]],
        vuelta: [[-18.0180, -70.2450], [-18.0300, -70.2300], [-18.0450, -70.2100]]
    },
    "TAC_ET_022": {
        nombre: "Empresa de Transportes 'Tacna Express'",
        ruta: "Ciudad Nueva - Alto de la Alianza",
        color: '#D35400',
        ida: [[-17.9750, -70.2750], [-17.9850, -70.2650], [-18.0000, -70.2500]],
        vuelta: [[-18.0000, -70.2500], [-17.9850, -70.2650], [-17.9750, -70.2750]]
    },
    "TAC_ET_023": {
        nombre: "Empresa de Transportes 'San Juan de Tacna'",
        ruta: "San Juan - Av. Bolognesi",
        color: '#2C3E50',
        ida: [[-18.0500, -70.2400], [-18.0350, -70.2450], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0350, -70.2450], [-18.0500, -70.2400]]
    },
    "TAC_ET_024": {
        nombre: "Empresa de Transportes 'Real Tacna'",
        ruta: "Urb. Real - Centro Histórico",
        color: '#8E44AD',
        ida: [[-18.0200, -70.2100], [-18.0150, -70.2300], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0150, -70.2300], [-18.0200, -70.2100]]
    },
    "TAC_ET_025": {
        nombre: "Empresa de Transportes 'Cono Sur Elite'",
        ruta: "Gregorio Albarracín - Terminal",
        color: '#2980B9',
        ida: [[-18.0650, -70.2250], [-18.0450, -70.2400], [-18.0250, -70.2600]],
        vuelta: [[-18.0250, -70.2600], [-18.0450, -70.2400], [-18.0650, -70.2250]]
    },
    "TAC_ET_026": {
        nombre: "Empresa de Transportes 'Sol de Tacna'",
        ruta: "Urb. Sol - Mercado Grau",
        color: '#E74C3C',
        ida: [[-18.0150, -70.2000], [-18.0100, -70.2200], [-18.0180, -70.2450]],
        vuelta: [[-18.0180, -70.2450], [-18.0100, -70.2200], [-18.0150, -70.2000]]
    },
    "TAC_ET_027": {
        nombre: "Empresa de Transportes 'Alianza Heroica'",
        ruta: "Alto de la Alianza - Av. Leguía",
        color: '#16A085',
        ida: [[-17.9950, -70.2500], [-18.0050, -70.2520], [-18.0150, -70.2550]],
        vuelta: [[-18.0150, -70.2550], [-18.0050, -70.2520], [-17.9950, -70.2500]]
    },
    "TAC_ET_028": {
        nombre: "Empresa de Transportes 'Tacna Turística'",
        ruta: "Pocollay - Centro Cívico",
        color: '#F1C40F',
        ida: [[-17.9900, -70.2200], [-18.0000, -70.2350], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0000, -70.2350], [-17.9900, -70.2200]]
    },
    "TAC_ET_029": {
        nombre: "Empresa de Transportes 'Los Héroes'",
        ruta: "Urb. Héroes - Centro",
        color: '#34495E',
        ida: [[-18.0300, -70.2150], [-18.0200, -70.2300], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0200, -70.2300], [-18.0300, -70.2150]]
    },
    "TAC_ET_030": {
        nombre: "Empresa de Transportes 'Integración Tacneña'",
        ruta: "Cono Norte - Cono Sur",
        color: '#E67E22',
        ida: [[-17.9800, -70.2600], [-18.0150, -70.2500], [-18.0500, -70.2300]],
        vuelta: [[-18.0500, -70.2300], [-18.0150, -70.2500], [-17.9800, -70.2600]]
    },
    "TAC_ET_031": {
        nombre: "Empresa de Transportes 'Los Alamos'",
        ruta: "Urb. Los Álamos - Centro Cívico",
        color: '#7F8C8D',
        ida: [[-18.0400, -70.2100], [-18.0300, -70.2300], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0300, -70.2300], [-18.0400, -70.2100]]
    },
    "TAC_ET_032": {
        nombre: "Empresa de Transportes 'San Francisco'",
        ruta: "San Francisco - Mercado Grau",
        color: '#34495E',
        ida: [[-18.0250, -70.2200], [-18.0200, -70.2350], [-18.0180, -70.2450]],
        vuelta: [[-18.0180, -70.2450], [-18.0200, -70.2350], [-18.0250, -70.2200]]
    },
    "TAC_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Tacna'",
        ruta: "Belo Horizonte - Plaza Zela",
        color: '#16A085',
        ida: [[-18.0600, -70.2300], [-18.0400, -70.2400], [-18.0120, -70.2450]],
        vuelta: [[-18.0120, -70.2450], [-18.0400, -70.2400], [-18.0600, -70.2300]]
    },
    "TAC_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Tacneños'",
        ruta: "Urb. Algarrobos - Terminal",
        color: '#C0392B',
        ida: [[-18.0300, -70.2100], [-18.0250, -70.2300], [-18.0250, -70.2600]],
        vuelta: [[-18.0250, -70.2600], [-18.0250, -70.2300], [-18.0300, -70.2100]]
    },
    "TAC_ET_035": {
        nombre: "Empresa de Transportes 'Villa Heroica'",
        ruta: "Villa Heroica - Puerto",
        color: '#27AE60',
        ida: [[-18.0100, -70.2700], [-18.0150, -70.2600], [-18.0250, -70.2650]],
        vuelta: [[-18.0250, -70.2650], [-18.0150, -70.2600], [-18.0100, -70.2700]]
    },
    "TAC_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Tacna'",
        ruta: "Miraflores - Av. Bolognesi",
        color: '#8E44AD',
        ida: [[-18.0550, -70.2200], [-18.0350, -70.2300], [-18.0100, -70.2400]],
        vuelta: [[-18.0100, -70.2400], [-18.0350, -70.2300], [-18.0550, -70.2200]]
    },
    "TAC_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal'",
        ruta: "Av. Leguía - Mercado Modelo",
        color: '#E67E22',
        ida: [[-18.0050, -70.2550], [-18.0100, -70.2450], [-18.0180, -70.2400]],
        vuelta: [[-18.0180, -70.2400], [-18.0100, -70.2450], [-18.0050, -70.2550]]
    },
    "TAC_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Express'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-18.0200, -70.2000], [-18.0150, -70.2250], [-18.0150, -70.2500]],
        vuelta: [[-18.0150, -70.2500], [-18.0150, -70.2250], [-18.0200, -70.2000]]
    },
    "TAC_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional'",
        ruta: "Terminal - Zona Industrial",
        color: '#D35400',
        ida: [[-18.0250, -70.2600], [-18.0350, -70.2650], [-18.0450, -70.2700]],
        vuelta: [[-18.0450, -70.2700], [-18.0350, -70.2650], [-18.0250, -70.2600]]
    },
    "TAC_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro del Cono'",
        ruta: "San Pedro - Av. Bolognesi",
        color: '#3498DB',
        ida: [[-18.0600, -70.2150], [-18.0350, -70.2300], [-18.0100, -70.2450]],
        vuelta: [[-18.0100, -70.2450], [-18.0350, -70.2300], [-18.0600, -70.2150]]
    },
};
