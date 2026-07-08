// Base de datos de transporte: Ica (ICA_ET_001-010)
const rutasIca = {
    "ICA_ET_001": {
        nombre: "Empresa de Transportes 'Ica Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#E67E22',
        ida: [[-14.0700, -75.7300], [-14.0650, -75.7250], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0650, -75.7250], [-14.0700, -75.7300]]
    },
    "ICA_ET_002": {
        nombre: "Empresa de Transportes 'El Sol de Ica'",
        ruta: "Urb. San Isidro - Centro",
        color: '#2980B9',
        ida: [[-14.0800, -75.7400], [-14.0700, -75.7300], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0700, -75.7300], [-14.0800, -75.7400]]
    },
    "ICA_ET_003": {
        nombre: "Empresa de Transportes 'Chincha Tours'",
        ruta: "Chincha Alta - Plaza de Armas",
        color: '#27AE60',
        ida: [[-13.4300, -76.1300], [-13.4200, -76.1300], [-13.4100, -76.1300]],
        vuelta: [[-13.4100, -76.1300], [-13.4200, -76.1300], [-13.4300, -76.1300]]
    },
    "ICA_ET_004": {
        nombre: "Empresa de Transportes 'Pisco Pacífico'",
        ruta: "Pisco Ciudad - Terminal",
        color: '#F1C40F',
        ida: [[-13.7100, -76.2100], [-13.7050, -76.2150], [-13.7000, -76.2200]],
        vuelta: [[-13.7000, -76.2200], [-13.7050, -76.2150], [-13.7100, -76.2100]]
    },
    "ICA_ET_005": {
        nombre: "Empresa de Transportes 'Ruta Paracas'",
        ruta: "Paracas - Pisco Centro",
        color: '#8E44AD',
        ida: [[-13.8200, -76.2600], [-13.7600, -76.2400], [-13.7000, -76.2200]],
        vuelta: [[-13.7000, -76.2200], [-13.7600, -76.2400], [-13.8200, -76.2600]]
    },
    "ICA_ET_006": {
        nombre: "Empresa de Transportes 'Huacachina Express'",
        ruta: "Huacachina - Ica Centro",
        color: '#C0392B',
        ida: [[-14.0900, -75.7600], [-14.0750, -75.7400], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0750, -75.7400], [-14.0900, -75.7600]]
    },
    "ICA_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Luren'",
        ruta: "Barrio Luren - Plaza",
        color: '#1ABC9C',
        ida: [[-14.0500, -75.7200], [-14.0550, -75.7200], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0550, -75.7200], [-14.0500, -75.7200]]
    },
    "ICA_ET_008": {
        nombre: "Empresa de Transportes 'Corredor Agrícola'",
        ruta: "Zona Rural Ica - Mercado",
        color: '#34495E',
        ida: [[-14.1000, -75.7000], [-14.0800, -75.7100], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0800, -75.7100], [-14.1000, -75.7000]]
    },
    "ICA_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Ica'",
        ruta: "Urb. Santa Rosa - Plaza",
        color: '#D35400',
        ida: [[-14.0650, -75.7100], [-14.0620, -75.7150], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0620, -75.7150], [-14.0650, -75.7100]]
    },
    "ICA_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro de Ica'",
        ruta: "San Pedro - Av. Matías Manzanilla",
        color: '#7F8C8D',
        ida: [[-14.0750, -75.7250], [-14.0680, -75.7220], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0680, -75.7220], [-14.0750, -75.7250]]
    },
    "ICA_ET_011": {
        nombre: "Empresa de Transportes 'Nasca Imperial'",
        ruta: "Nasca Centro - Plaza de Armas",
        color: '#E67E22',
        ida: [[-14.8300, -74.9400], [-14.8350, -74.9450], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.8350, -74.9450], [-14.8300, -74.9400]]
    },
    "ICA_ET_012": {
        nombre: "Empresa de Transportes 'Los Héroes de Nasca'",
        ruta: "Urb. Héroes - Terminal Nasca",
        color: '#2980B9',
        ida: [[-14.8500, -74.9300], [-14.8450, -74.9400], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.8450, -74.9400], [-14.8500, -74.9300]]
    },
    "ICA_ET_013": {
        nombre: "Empresa de Transportes 'Líneas de Nasca'",
        ruta: "Mirador de Líneas - Centro Nasca",
        color: '#27AE60',
        ida: [[-14.7300, -75.0500], [-14.7800, -75.0000], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.7800, -75.0000], [-14.7300, -75.0500]]
    },
    "ICA_ET_014": {
        nombre: "Empresa de Transportes 'Chincha Baja Express'",
        ruta: "Chincha Baja - Chincha Alta",
        color: '#F1C40F',
        ida: [[-13.4500, -76.1500], [-13.4400, -76.1400], [-13.4300, -76.1300]],
        vuelta: [[-13.4300, -76.1300], [-13.4400, -76.1400], [-13.4500, -76.1500]]
    },
    "ICA_ET_015": {
        nombre: "Empresa de Transportes 'San Clemente Tour'",
        ruta: "San Clemente - Pisco Centro",
        color: '#8E44AD',
        ida: [[-13.7300, -76.1800], [-13.7200, -76.1900], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7200, -76.1900], [-13.7300, -76.1800]]
    },
    "ICA_ET_016": {
        nombre: "Empresa de Transportes 'Cercado de Ica'",
        ruta: "Urb. Los Álamos - Plaza",
        color: '#C0392B',
        ida: [[-14.0500, -75.7300], [-14.0550, -75.7250], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0550, -75.7250], [-14.0500, -75.7300]]
    },
    "ICA_ET_017": {
        nombre: "Empresa de Transportes 'Belo Horizonte Ica'",
        ruta: "Urb. Belo Horizonte - Mercado",
        color: '#1ABC9C',
        ida: [[-14.0700, -75.7100], [-14.0650, -75.7150], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0650, -75.7150], [-14.0700, -75.7100]]
    },
    "ICA_ET_018": {
        nombre: "Empresa de Transportes 'Integración Ica'",
        ruta: "Av. La Angostura - Centro",
        color: '#34495E',
        ida: [[-14.1000, -75.7300], [-14.0800, -75.7250], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0800, -75.7250], [-14.1000, -75.7300]]
    },
    "ICA_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Nasca'",
        ruta: "Santa Rosa - Plaza de Nasca",
        color: '#D35400',
        ida: [[-14.8350, -74.9600], [-14.8380, -74.9550], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.8380, -74.9550], [-14.8350, -74.9600]]
    },
    "ICA_ET_020": {
        nombre: "Empresa de Transportes 'San Pedro de Pisco'",
        ruta: "San Pedro - Plaza Pisco",
        color: '#7F8C8D',
        ida: [[-13.7200, -76.2200], [-13.7150, -76.2100], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7150, -76.2100], [-13.7200, -76.2200]]
    },
    "ICA_ET_021": {
        nombre: "Empresa de Transportes 'Los Alamos de Ica'",
        ruta: "Urb. Los Álamos - Plaza de Armas",
        color: '#E67E22',
        ida: [[-14.0500, -75.7100], [-14.0550, -75.7150], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0550, -75.7150], [-14.0500, -75.7100]]
    },
    "ICA_ET_022": {
        nombre: "Empresa de Transportes 'San Francisco de Chincha'",
        ruta: "San Francisco - Plaza Bolognesi",
        color: '#2980B9',
        ida: [[-13.4400, -76.1200], [-13.4350, -76.1250], [-13.4300, -76.1300]],
        vuelta: [[-13.4300, -76.1300], [-13.4350, -76.1250], [-13.4400, -76.1200]]
    },
    "ICA_ET_023": {
        nombre: "Empresa de Transportes 'Belo Horizonte Nasca'",
        ruta: "Urb. Belo Horizonte - Plaza Zela",
        color: '#16A085',
        ida: [[-14.8300, -74.9600], [-14.8350, -74.9550], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.8350, -74.9550], [-14.8300, -74.9600]]
    },
    "ICA_ET_024": {
        nombre: "Empresa de Transportes 'Algarrobos Pisqueños'",
        ruta: "Urb. Algarrobos - Terminal Sur",
        color: '#C0392B',
        ida: [[-13.7250, -76.2300], [-13.7200, -76.2200], [-13.7150, -76.2100]],
        vuelta: [[-13.7150, -76.2100], [-13.7200, -76.2200], [-13.7250, -76.2300]]
    },
    "ICA_ET_025": {
        nombre: "Empresa de Transportes 'Villa del Pacifico Sur'",
        ruta: "Villa del Pacífico - Centro Ica",
        color: '#27AE60',
        ida: [[-14.0800, -75.7500], [-14.0700, -75.7350], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0700, -75.7350], [-14.0800, -75.7500]]
    },
    "ICA_ET_026": {
        nombre: "Empresa de Transportes 'Miraflores Ica'",
        ruta: "Miraflores - Av. El Sol",
        color: '#8E44AD',
        ida: [[-14.0550, -75.7400], [-14.0580, -75.7300], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0580, -75.7300], [-14.0550, -75.7400]]
    },
    "ICA_ET_027": {
        nombre: "Empresa de Transportes 'La Unión Paracas'",
        ruta: "Av. Paracas - Mercado Central",
        color: '#E67E22',
        ida: [[-13.8300, -76.2500], [-13.7700, -76.2300], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7700, -76.2300], [-13.8300, -76.2500]]
    },
    "ICA_ET_028": {
        nombre: "Empresa de Transportes 'Santa Rosa Nasca Express'",
        ruta: "Santa Rosa - Plaza Nasca",
        color: '#2980B9',
        ida: [[-14.8450, -74.9600], [-14.8420, -74.9550], [-14.8400, -74.9500]],
        vuelta: [[-14.8400, -74.9500], [-14.8420, -74.9550], [-14.8450, -74.9600]]
    },
    "ICA_ET_029": {
        nombre: "Empresa de Transportes 'Terminal Nacional Ica'",
        ruta: "Terminal - Zona Norte Ica",
        color: '#D35400',
        ida: [[-14.0400, -75.7100], [-14.0500, -75.7150], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0500, -75.7150], [-14.0400, -75.7100]]
    },
    "ICA_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro del Altiplano'",
        ruta: "San Pedro - Av. Sesquicentenario",
        color: '#3498DB',
        ida: [[-14.0700, -75.7000], [-14.0650, -75.7100], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0650, -75.7100], [-14.0700, -75.7000]]
    },
    "ICA_ET_031": {
        nombre: "Empresa de Transportes 'Los Rosales de Ica'",
        ruta: "Urb. Los Rosales - Centro",
        color: '#7F8C8D',
        ida: [[-14.0500, -75.7200], [-14.0550, -75.7200], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0550, -75.7200], [-14.0500, -75.7200]]
    },
    "ICA_ET_032": {
        nombre: "Empresa de Transportes 'San Pedro del Sur Ica'",
        ruta: "San Pedro - Mercado Luren",
        color: '#34495E',
        ida: [[-14.0700, -75.7300], [-14.0650, -75.7250], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0650, -75.7250], [-14.0700, -75.7300]]
    },
    "ICA_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte Sur'",
        ruta: "Belo Horizonte - Plaza de Armas",
        color: '#16A085',
        ida: [[-14.0750, -75.7100], [-14.0680, -75.7150], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0680, -75.7150], [-14.0750, -75.7100]]
    },
    "ICA_ET_034": {
        nombre: "Empresa de Transportes 'Algarrobos Ica'",
        ruta: "Urb. Algarrobos - Terminal Terrestre",
        color: '#C0392B',
        ida: [[-14.0800, -75.7150], [-14.0700, -75.7180], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0700, -75.7180], [-14.0800, -75.7150]]
    },
    "ICA_ET_035": {
        nombre: "Empresa de Transportes 'Villa del Pacífico Ica'",
        ruta: "Villa del Pacífico - Centro Histórico",
        color: '#27AE60',
        ida: [[-14.0650, -75.7400], [-14.0620, -75.7300], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0620, -75.7300], [-14.0650, -75.7400]]
    },
    "ICA_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores Chincha'",
        ruta: "Miraflores - Av. Benavides",
        color: '#8E44AD',
        ida: [[-13.4350, -76.1350], [-13.4320, -76.1320], [-13.4300, -76.1300]],
        vuelta: [[-13.4300, -76.1300], [-13.4320, -76.1320], [-13.4350, -76.1350]]
    },
    "ICA_ET_037": {
        nombre: "Empresa de Transportes 'La Unión Vecinal Ica'",
        ruta: "Av. Circunvalación - Mercado Central",
        color: '#E67E22',
        ida: [[-14.0550, -75.7350], [-14.0580, -75.7280], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0580, -75.7280], [-14.0550, -75.7350]]
    },
    "ICA_ET_038": {
        nombre: "Empresa de Transportes 'Santa Rosa Ica Express'",
        ruta: "Santa Rosa - Plaza de Armas",
        color: '#2980B9',
        ida: [[-14.0600, -75.7000], [-14.0600, -75.7100], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0600, -75.7100], [-14.0600, -75.7000]]
    },
    "ICA_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Nacional Ica II'",
        ruta: "Terminal - Zona Industrial Sur",
        color: '#D35400',
        ida: [[-14.0700, -75.7200], [-14.0650, -75.7200], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0650, -75.7200], [-14.0700, -75.7200]]
    },
    "ICA_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro de Pisco II'",
        ruta: "San Pedro - Av. Bolognesi",
        color: '#3498DB',
        ida: [[-13.7150, -76.2250], [-13.7120, -76.2150], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7120, -76.2150], [-13.7150, -76.2250]]
    },
    "ICA_ET_041": {
        nombre: "Empresa de Transportes 'Sol del Sur Iqueño'",
        ruta: "Urb. La Angostura - Av. Cutervo",
        color: '#E67E22',
        ida: [[-14.1000, -75.7400], [-14.0800, -75.7300], [-14.0600, -75.7200]],
        vuelta: [[-14.0600, -75.7200], [-14.0800, -75.7300], [-14.1000, -75.7400]]
    },
    "ICA_ET_042": {
        nombre: "Empresa de Transportes 'Confraternidad Pisco'",
        ruta: "Pisco - Playa San Andrés",
        color: '#2980B9',
        ida: [[-13.7100, -76.2000], [-13.7150, -76.1900], [-13.7200, -76.1800]],
        vuelta: [[-13.7200, -76.1800], [-13.7150, -76.1900], [-13.7100, -76.2000]]
    },
    "ICA_ET_043": {
        nombre: "Empresa de Transportes 'Ruta del Pisco'",
        ruta: "Bodegas - Centro Pisco",
        color: '#16A085',
        ida: [[-13.7300, -76.2100], [-13.7200, -76.2050], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7200, -76.2050], [-13.7300, -76.2100]]
    },
    "ICA_ET_044": {
        nombre: "Empresa de Transportes 'Chincha Alta Express'",
        ruta: "Urb. Las Gardenias - Plaza",
        color: '#C0392B',
        ida: [[-13.4400, -76.1400], [-13.4350, -76.1350], [-13.4300, -76.1300]],
        vuelta: [[-13.4300, -76.1300], [-13.4350, -76.1350], [-13.4400, -76.1400]]
    },
    "ICA_ET_045": {
        nombre: "Empresa de Transportes 'Nasca Turismo'",
        ruta: "Terminal Nasca - Acueductos",
        color: '#27AE60',
        ida: [[-14.8400, -74.9500], [-14.8500, -74.9400], [-14.8600, -74.9300]],
        vuelta: [[-14.8600, -74.9300], [-14.8500, -74.9400], [-14.8400, -74.9500]]
    },
    "ICA_ET_046": {
        nombre: "Empresa de Transportes 'Huacachina Turística'",
        ruta: "Huacachina - Av. Los Maestros",
        color: '#8E44AD',
        ida: [[-14.0900, -75.7600], [-14.0800, -75.7500], [-14.0700, -75.7400]],
        vuelta: [[-14.0700, -75.7400], [-14.0800, -75.7500], [-14.0900, -75.7600]]
    },
    "ICA_ET_047": {
        nombre: "Empresa de Transportes 'La Unión Chincha'",
        ruta: "Chincha - Grocio Prado",
        color: '#E67E22',
        ida: [[-13.4300, -76.1300], [-13.4100, -76.1200], [-13.3900, -76.1100]],
        vuelta: [[-13.3900, -76.1100], [-13.4100, -76.1200], [-13.4300, -76.1300]]
    },
    "ICA_ET_048": {
        nombre: "Empresa de Transportes 'Santa Rosa Pisco'",
        ruta: "Santa Rosa - Terminal Pisco",
        color: '#2980B9',
        ida: [[-13.7200, -76.2200], [-13.7150, -76.2100], [-13.7100, -76.2000]],
        vuelta: [[-13.7100, -76.2000], [-13.7150, -76.2100], [-13.7200, -76.2200]]
    },
    "ICA_ET_049": {
        nombre: "Empresa de Transportes 'Terminal Sur Nasca'",
        ruta: "Terminal - Barrio San Carlos",
        color: '#D35400',
        ida: [[-14.8400, -74.9500], [-14.8450, -74.9450], [-14.8500, -74.9400]],
        vuelta: [[-14.8500, -74.9400], [-14.8450, -74.9450], [-14.8400, -74.9500]]
    },
    "ICA_ET_050": {
        nombre: "Empresa de Transportes 'San Pedro de Chincha'",
        ruta: "San Pedro - Plaza Bolognesi",
        color: '#3498DB',
        ida: [[-13.4300, -76.1300], [-13.4350, -76.1250], [-13.4400, -76.1200]],
        vuelta: [[-13.4400, -76.1200], [-13.4350, -76.1250], [-13.4300, -76.1300]]
    },
};
