// Base de datos de transporte: Iquitos - Loreto (IQT_ET_001-010)
const rutasIquitos = {
    "IQT_ET_001": {
        nombre: "Empresa de Transportes 'Los Intocables'",
        ruta: "San Juan - Iquitos Centro",
        color: '#E74C3C',
        ida: [[-3.7650, -73.2650], [-3.7500, -73.2500], [-3.7450, -73.2450]],
        vuelta: [[-3.7450, -73.2450], [-3.7500, -73.2500], [-3.7650, -73.2650]]
    },
    "IQT_ET_002": {
        nombre: "Empresa de Transportes 'El Petrolero'",
        ruta: "Punchana - Plaza de Armas",
        color: '#2980B9',
        ida: [[-3.7300, -73.2550], [-3.7400, -73.2500], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7400, -73.2500], [-3.7300, -73.2550]]
    },
    "IQT_ET_003": {
        nombre: "Empresa de Transportes 'Belén Express'",
        ruta: "Mercado de Belén - Terminal",
        color: '#27AE60',
        ida: [[-3.7600, -73.2400], [-3.7550, -73.2450], [-3.7500, -73.2550]],
        vuelta: [[-3.7500, -73.2550], [-3.7550, -73.2450], [-3.7600, -73.2400]]
    },
    "IQT_ET_004": {
        nombre: "Empresa de Transportes 'Santa Rosa'",
        ruta: "Iquitos - Av. Participación",
        color: '#F1C40F',
        ida: [[-3.7500, -73.2450], [-3.7700, -73.2600], [-3.7800, -73.2750]],
        vuelta: [[-3.7800, -73.2750], [-3.7700, -73.2600], [-3.7500, -73.2450]]
    },
    "IQT_ET_005": {
        nombre: "Empresa de Transportes 'La Habana'",
        ruta: "Versalles - Iquitos Centro",
        color: '#9B59B6',
        ida: [[-3.7250, -73.2600], [-3.7400, -73.2500], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7400, -73.2500], [-3.7250, -73.2600]]
    },
    "IQT_ET_006": {
        nombre: "Empresa de Transportes 'Los Orientales'",
        ruta: "Moronacocha - Plaza 28 de Julio",
        color: '#E67E22',
        ida: [[-3.7550, -73.2600], [-3.7500, -73.2500], [-3.7450, -73.2450]],
        vuelta: [[-3.7450, -73.2450], [-3.7500, -73.2500], [-3.7550, -73.2600]]
    },
    "IQT_ET_007": {
        nombre: "Empresa de Transportes 'Villa Selva'",
        ruta: "Villa Selva - Mercado Central",
        color: '#1ABC9C',
        ida: [[-3.7850, -73.2800], [-3.7650, -73.2600], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7650, -73.2600], [-3.7850, -73.2800]]
    },
    "IQT_ET_008": {
        nombre: "Empresa de Transportes 'Tupac Amaru'",
        ruta: "Tupac Amaru - Iquitos",
        color: '#34495E',
        ida: [[-3.7400, -73.2700], [-3.7500, -73.2500], [-3.7550, -73.2450]],
        vuelta: [[-3.7550, -73.2450], [-3.7500, -73.2500], [-3.7400, -73.2700]]
    },
    "IQT_ET_009": {
        nombre: "Empresa de Transportes 'Nauta Express'",
        ruta: "Terminal Nauta - Centro",
        color: '#D35400',
        ida: [[-3.7900, -73.2850], [-3.7700, -73.2650], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7700, -73.2650], [-3.7900, -73.2850]]
    },
    "IQT_ET_010": {
        nombre: "Empresa de Transportes 'Zungarococha'",
        ruta: "Zungarococha - Iquitos",
        color: '#7F8C8D',
        ida: [[-3.8000, -73.3000], [-3.7700, -73.2700], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7700, -73.2700], [-3.8000, -73.3000]]
    },
    "IQT_ET_011": {
        nombre: "Empresa de Transportes 'Los Ángeles'",
        ruta: "Av. Participación - Punchana",
        color: '#C0392B',
        ida: [[-3.7750, -73.2750], [-3.7500, -73.2600], [-3.7350, -73.2500]],
        vuelta: [[-3.7350, -73.2500], [-3.7500, -73.2600], [-3.7750, -73.2750]]
    },
    "IQT_ET_012": {
        nombre: "Empresa de Transportes 'Varillal'",
        ruta: "Varillal - Iquitos Centro",
        color: '#2980B9',
        ida: [[-3.8200, -73.3200], [-3.7800, -73.2800], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7800, -73.2800], [-3.8200, -73.3200]]
    },
    "IQT_ET_013": {
        nombre: "Empresa de Transportes 'Cabo Pantoja'",
        ruta: "Pueblo Libre - Iquitos",
        color: '#8E44AD',
        ida: [[-3.7400, -73.2800], [-3.7500, -73.2600], [-3.7550, -73.2450]],
        vuelta: [[-3.7550, -73.2450], [-3.7500, -73.2600], [-3.7400, -73.2800]]
    },
    "IQT_ET_014": {
        nombre: "Empresa de Transportes 'Lurdes'",
        ruta: "Av. La Marina - Versalles",
        color: '#16A085',
        ida: [[-3.7350, -73.2400], [-3.7300, -73.2500], [-3.7250, -73.2600]],
        vuelta: [[-3.7250, -73.2600], [-3.7300, -73.2500], [-3.7350, -73.2400]]
    },
    "IQT_ET_015": {
        nombre: "Empresa de Transportes '10 de Noviembre'",
        ruta: "10 de Noviembre - Mercado Modelo",
        color: '#27AE60',
        ida: [[-3.7650, -73.2800], [-3.7600, -73.2600], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2600], [-3.7650, -73.2800]]
    },
    "IQT_ET_016": {
        nombre: "Empresa de Transportes 'San Pablo'",
        ruta: "San Pablo - Iquitos",
        color: '#E67E22',
        ida: [[-3.7700, -73.2900], [-3.7600, -73.2700], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2700], [-3.7700, -73.2900]]
    },
    "IQT_ET_017": {
        nombre: "Empresa de Transportes 'San Juan de Miraflores'",
        ruta: "San Juan - Plaza 28 de Julio",
        color: '#3498DB',
        ida: [[-3.7800, -73.2600], [-3.7650, -73.2550], [-3.7500, -73.2500]],
        vuelta: [[-3.7500, -73.2500], [-3.7650, -73.2550], [-3.7800, -73.2600]]
    },
    "IQT_ET_018": {
        nombre: "Empresa de Transportes 'Selva Central'",
        ruta: "Av. Quiñones - Iquitos",
        color: '#27AE60',
        ida: [[-3.7700, -73.2500], [-3.7600, -73.2450], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2450], [-3.7700, -73.2500]]
    },
    "IQT_ET_019": {
        nombre: "Empresa de Transportes 'Punchana Real'",
        ruta: "Punchana - Av. La Marina",
        color: '#9B59B6',
        ida: [[-3.7250, -73.2500], [-3.7300, -73.2450], [-3.7350, -73.2400]],
        vuelta: [[-3.7350, -73.2400], [-3.7300, -73.2450], [-3.7250, -73.2500]]
    },
    "IQT_ET_020": {
        nombre: "Empresa de Transportes 'Belenito'",
        ruta: "Belén Zona Baja - Iquitos",
        color: '#2ECC71',
        ida: [[-3.7650, -73.2350], [-3.7600, -73.2400], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2400], [-3.7650, -73.2350]]
    },
    "IQT_ET_021": {
        nombre: "Empresa de Transportes 'Los Constructores'",
        ruta: "Av. Participación - Versalles",
        color: '#F39C12',
        ida: [[-3.7750, -73.2700], [-3.7500, -73.2600], [-3.7250, -73.2600]],
        vuelta: [[-3.7250, -73.2600], [-3.7500, -73.2600], [-3.7750, -73.2700]]
    },
    "IQT_ET_022": {
        nombre: "Empresa de Transportes 'San Juan Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#D35400',
        ida: [[-3.7900, -73.2800], [-3.7700, -73.2600], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7700, -73.2600], [-3.7900, -73.2800]]
    },
    "IQT_ET_023": {
        nombre: "Empresa de Transportes 'Punchana Sur'",
        ruta: "Punchana - Av. Participación",
        color: '#2C3E50',
        ida: [[-3.7300, -73.2500], [-3.7500, -73.2600], [-3.7750, -73.2700]],
        vuelta: [[-3.7750, -73.2700], [-3.7500, -73.2600], [-3.7300, -73.2500]]
    },
    "IQT_ET_024": {
        nombre: "Empresa de Transportes 'Selva Amazónica'",
        ruta: "Carretera Iquitos-Nauta (Km 5) - Centro",
        color: '#8E44AD',
        ida: [[-3.8100, -73.3000], [-3.7800, -73.2750], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7800, -73.2750], [-3.8100, -73.3000]]
    },
    "IQT_ET_025": {
        nombre: "Empresa de Transportes 'Sol del Oriente'",
        ruta: "Moronacocha - Mercado Modelo",
        color: '#2980B9',
        ida: [[-3.7550, -73.2650], [-3.7500, -73.2550], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7500, -73.2550], [-3.7550, -73.2650]]
    },
    "IQT_ET_026": {
        nombre: "Empresa de Transportes 'Villa Disnarda'",
        ruta: "Villa Disnarda - Plaza 28 de Julio",
        color: '#E74C3C',
        ida: [[-3.7850, -73.2850], [-3.7650, -73.2650], [-3.7500, -73.2500]],
        vuelta: [[-3.7500, -73.2500], [-3.7650, -73.2650], [-3.7850, -73.2850]]
    },
    "IQT_ET_027": {
        nombre: "Empresa de Transportes 'Aeropuerto IQT'",
        ruta: "Aeropuerto C.F. Secada - Centro",
        color: '#16A085',
        ida: [[-3.7750, -73.3000], [-3.7650, -73.2700], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7650, -73.2700], [-3.7750, -73.3000]]
    },
    "IQT_ET_028": {
        nombre: "Empresa de Transportes 'Las Palmeras'",
        ruta: "Las Palmeras - Mercado Belén",
        color: '#F1C40F',
        ida: [[-3.7950, -73.2750], [-3.7750, -73.2600], [-3.7600, -73.2400]],
        vuelta: [[-3.7600, -73.2400], [-3.7750, -73.2600], [-3.7950, -73.2750]]
    },
    "IQT_ET_029": {
        nombre: "Empresa de Transportes 'Progreso'",
        ruta: "Av. Guardia Civil - Plaza de Armas",
        color: '#34495E',
        ida: [[-3.7500, -73.2700], [-3.7500, -73.2550], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7500, -73.2550], [-3.7500, -73.2700]]
    },
    "IQT_ET_030": {
        nombre: "Empresa de Transportes 'Los Delfines'",
        ruta: "Punchana - Versalles",
        color: '#E67E22',
        ida: [[-3.7300, -73.2500], [-3.7250, -73.2550], [-3.7250, -73.2600]],
        vuelta: [[-3.7250, -73.2600], [-3.7250, -73.2550], [-3.7300, -73.2500]]
    },
    "IQT_ET_031": {
        nombre: "Empresa de Transportes 'Los Jazmines'",
        ruta: "Urb. Los Jazmines - Mercado Modelo",
        color: '#7F8C8D',
        ida: [[-3.7700, -73.2750], [-3.7600, -73.2600], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2600], [-3.7700, -73.2750]]
    },
    "IQT_ET_032": {
        nombre: "Empresa de Transportes 'San José'",
        ruta: "San José - Plaza 28 de Julio",
        color: '#34495E',
        ida: [[-3.7800, -73.2850], [-3.7650, -73.2650], [-3.7500, -73.2500]],
        vuelta: [[-3.7500, -73.2500], [-3.7650, -73.2650], [-3.7800, -73.2850]]
    },
    "IQT_ET_033": {
        nombre: "Empresa de Transportes 'Belo Horizonte'",
        ruta: "Belo Horizonte - Iquitos Centro",
        color: '#16A085',
        ida: [[-3.8000, -73.2900], [-3.7750, -73.2650], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7750, -73.2650], [-3.8000, -73.2900]]
    },
    "IQT_ET_034": {
        nombre: "Empresa de Transportes 'Los Algarrobos'",
        ruta: "Los Algarrobos - Av. La Marina",
        color: '#C0392B',
        ida: [[-3.7850, -73.2600], [-3.7600, -73.2500], [-3.7350, -73.2400]],
        vuelta: [[-3.7350, -73.2400], [-3.7600, -73.2500], [-3.7850, -73.2600]]
    },
    "IQT_ET_035": {
        nombre: "Empresa de Transportes 'Punchana Norte'",
        ruta: "Punchana Extremo - Puerto",
        color: '#27AE60',
        ida: [[-3.7200, -73.2500], [-3.7250, -73.2450], [-3.7300, -73.2400]],
        vuelta: [[-3.7300, -73.2400], [-3.7250, -73.2450], [-3.7200, -73.2500]]
    },
    "IQT_ET_036": {
        nombre: "Empresa de Transportes 'Miraflores'",
        ruta: "Miraflores - Plaza de Armas",
        color: '#8E44AD',
        ida: [[-3.7600, -73.2750], [-3.7550, -73.2600], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7550, -73.2600], [-3.7600, -73.2750]]
    },
    "IQT_ET_037": {
        nombre: "Empresa de Transportes 'La Unión'",
        ruta: "Av. Quiñones - Mercado Belén",
        color: '#E67E22',
        ida: [[-3.7700, -73.2550], [-3.7650, -73.2500], [-3.7600, -73.2400]],
        vuelta: [[-3.7600, -73.2400], [-3.7650, -73.2500], [-3.7700, -73.2550]]
    },
    "IQT_ET_038": {
        nombre: "Empresa de Transportes 'Santa Clara'",
        ruta: "Santa Clara - Iquitos",
        color: '#2980B9',
        ida: [[-3.8300, -73.3100], [-3.7900, -73.2800], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7900, -73.2800], [-3.8300, -73.3100]]
    },
    "IQT_ET_039": {
        nombre: "Empresa de Transportes 'Terminal Norte'",
        ruta: "Terminal Norte - Plaza 28 de Julio",
        color: '#D35400',
        ida: [[-3.7350, -73.2650], [-3.7450, -73.2550], [-3.7500, -73.2500]],
        vuelta: [[-3.7500, -73.2500], [-3.7450, -73.2550], [-3.7350, -73.2650]]
    },
    "IQT_ET_040": {
        nombre: "Empresa de Transportes 'San Pedro'",
        ruta: "San Pedro - Av. La Marina",
        color: '#3498DB',
        ida: [[-3.7550, -73.2800], [-3.7450, -73.2600], [-3.7350, -73.2400]],
        vuelta: [[-3.7350, -73.2400], [-3.7450, -73.2600], [-3.7550, -73.2800]]
    },
    "IQT_ET_041": {
        nombre: "Empresa de Transportes 'Los Rosales'",
        ruta: "Urb. Los Rosales - Plaza de Armas",
        color: '#E67E22',
        ida: [[-3.7750, -73.2850], [-3.7600, -73.2650], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7600, -73.2650], [-3.7750, -73.2850]]
    },
    "IQT_ET_042": {
        nombre: "Empresa de Transportes 'Nuevo Versalles'",
        ruta: "Nuevo Versalles - Mercado Modelo",
        color: '#9B59B6',
        ida: [[-3.7200, -73.2700], [-3.7350, -73.2550], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7350, -73.2550], [-3.7200, -73.2700]]
    },
    "IQT_ET_043": {
        nombre: "Empresa de Transportes 'San Juan de Oriente'",
        ruta: "San Juan - Av. Participación",
        color: '#2ECC71',
        ida: [[-3.7850, -73.2750], [-3.7700, -73.2650], [-3.7600, -73.2600]],
        vuelta: [[-3.7600, -73.2600], [-3.7700, -73.2650], [-3.7850, -73.2750]]
    },
    "IQT_ET_044": {
        nombre: "Empresa de Transportes 'Belenito Express'",
        ruta: "Belén - Plaza 28 de Julio",
        color: '#F1C40F',
        ida: [[-3.7650, -73.2350], [-3.7550, -73.2400], [-3.7500, -73.2500]],
        vuelta: [[-3.7500, -73.2500], [-3.7550, -73.2400], [-3.7650, -73.2350]]
    },
    "IQT_ET_045": {
        nombre: "Empresa de Transportes 'Terminal Nauta-Directo'",
        ruta: "Terminal Nauta - Iquitos Centro",
        color: '#D35400',
        ida: [[-3.7900, -73.2850], [-3.7700, -73.2700], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7700, -73.2700], [-3.7900, -73.2850]]
    },
    "IQT_ET_046": {
        nombre: "Empresa de Transportes 'Los Algarrobos Norte'",
        ruta: "Los Algarrobos - Punchana",
        color: '#C0392B',
        ida: [[-3.7850, -73.2600], [-3.7550, -73.2550], [-3.7300, -73.2500]],
        vuelta: [[-3.7300, -73.2500], [-3.7550, -73.2550], [-3.7850, -73.2600]]
    },
    "IQT_ET_047": {
        nombre: "Empresa de Transportes 'San Pablo Expreso'",
        ruta: "San Pablo - Av. Quiñones",
        color: '#2980B9',
        ida: [[-3.7700, -73.2900], [-3.7650, -73.2700], [-3.7600, -73.2550]],
        vuelta: [[-3.7600, -73.2550], [-3.7650, -73.2700], [-3.7700, -73.2900]]
    },
    "IQT_ET_048": {
        nombre: "Empresa de Transportes 'Punchana-Belén'",
        ruta: "Punchana - Belén",
        color: '#8E44AD',
        ida: [[-3.7300, -73.2500], [-3.7400, -73.2450], [-3.7600, -73.2400]],
        vuelta: [[-3.7600, -73.2400], [-3.7400, -73.2450], [-3.7300, -73.2500]]
    },
    "IQT_ET_049": {
        nombre: "Empresa de Transportes 'Santa Rosa-Nauta'",
        ruta: "Santa Rosa - Km 10 Nauta",
        color: '#34495E',
        ida: [[-3.7500, -73.2450], [-3.7800, -73.2750], [-3.8100, -73.3000]],
        vuelta: [[-3.8100, -73.3000], [-3.7800, -73.2750], [-3.7500, -73.2450]]
    },
    "IQT_ET_050": {
        nombre: "Empresa de Transportes 'Iquitos Regional'",
        ruta: "Periferia - Centro Ciudad",
        color: '#16A085',
        ida: [[-3.7800, -73.2900], [-3.7650, -73.2700], [-3.7500, -73.2450]],
        vuelta: [[-3.7500, -73.2450], [-3.7650, -73.2700], [-3.7800, -73.2900]]
    },
};
