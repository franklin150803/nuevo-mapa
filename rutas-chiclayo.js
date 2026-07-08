// Base de datos de transporte: Chiclayo - Lambayeque (CHI001-015)
const rutasChiclayo = {
    "CHI_ET_001": { 
        nombre: "Empresa de Transportes 'El Chasqui' S.A.", 
        ruta: "Pimentel - Chiclayo Centro",
        color: '#E74C3C', 
        ida: [[-6.8351, -79.9352], [-6.8010, -79.8850], [-6.7720, -79.8450]],
        vuelta: [[-6.7720, -79.8450], [-6.8010, -79.8850], [-6.8351, -79.9352]]
    },
    "CHI_ET_002": { 
        nombre: "Empresa 'Cruz del Siglo' (Cruce de Rutas)", 
        ruta: "La Victoria - JLO - Chiclayo",
        color: '#2980B9', 
        ida: [[-6.7950, -79.8450], [-6.7710, -79.8400], [-6.7500, -79.8350]],
        vuelta: [[-6.7500, -79.8350], [-6.7710, -79.8400], [-6.7950, -79.8450]]
    },
    "CHI_ET_003": { 
        nombre: "Empresa 'Transportes Lambayeque Norte'", 
        ruta: "Lambayeque - Chiclayo (Panamericana Norte)",
        color: '#27AE60', 
        ida: [[-6.7050, -79.9050], [-6.7350, -79.8750], [-6.7650, -79.8450]],
        vuelta: [[-6.7650, -79.8450], [-6.7350, -79.8750], [-6.7050, -79.9050]]
    },
    "CHI_ET_004": { 
        nombre: "Empresa 'Tumán Express'", 
        ruta: "Tumán - Chiclayo (Corredor Sur-Este)",
        color: '#F1C40F', 
        ida: [[-6.7450, -79.7400], [-6.7550, -79.7900], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.7550, -79.7900], [-6.7450, -79.7400]]
    },
    "CHI_ET_005": { 
        nombre: "Empresa 'San Pedro de Reque'", 
        ruta: "Reque - Chiclayo",
        color: '#9B59B6', 
        ida: [[-6.8650, -79.8150], [-6.8200, -79.8300], [-6.7800, -79.8400]],
        vuelta: [[-6.7800, -79.8400], [-6.8200, -79.8300], [-6.8650, -79.8150]]
    },
    "CHI_ET_006": {
        nombre: "Empresa de Transportes Monsefú S.A.",
        ruta: "Monsefú - Chiclayo Centro",
        color: '#E67E22',
        ida: [[-6.8750, -79.8700], [-6.8250, -79.8550], [-6.7850, -79.8450]],
        vuelta: [[-6.7850, -79.8450], [-6.8250, -79.8550], [-6.8750, -79.8700]]
    },
    "CHI_ET_007": {
        nombre: "Empresa de Transportes Pomalca Express",
        ruta: "Pomalca - Chiclayo",
        color: '#1ABC9C',
        ida: [[-6.7650, -79.7750], [-6.7680, -79.8050], [-6.7710, -79.8350]],
        vuelta: [[-6.7710, -79.8350], [-6.7680, -79.8050], [-6.7650, -79.7750]]
    },
    "CHI_ET_008": {
        nombre: "Empresa de Transportes Santa Rosa Tours",
        ruta: "Santa Rosa - Chiclayo",
        color: '#34495E',
        ida: [[-6.8750, -79.9300], [-6.8350, -79.9350], [-6.7800, -79.8500]],
        vuelta: [[-6.7800, -79.8500], [-6.8350, -79.9350], [-6.8750, -79.9300]]
    },
    "CHI_ET_009": {
        nombre: "Empresa de Transportes Ciudad Eten S.A.",
        ruta: "Ciudad Eten - Chiclayo",
        color: '#D35400',
        ida: [[-6.9200, -79.8650], [-6.8500, -79.8550], [-6.7850, -79.8450]],
        vuelta: [[-6.7850, -79.8450], [-6.8500, -79.8550], [-6.9200, -79.8650]]
    },
    "CHI_ET_010": {
        nombre: "Empresa de Transportes Picsi S.A.",
        ruta: "Picsi - Chiclayo",
        color: '#7F8C8D',
        ida: [[-6.7150, -79.7700], [-6.7400, -79.8000], [-6.7650, -79.8350]],
        vuelta: [[-6.7650, -79.8350], [-6.7400, -79.8000], [-6.7150, -79.7700]]
    },        
    "CHI_ET_011": {
        nombre: "Empresa de Transportes Los Sureños",
        ruta: "Las Brisas - Chiclayo Centro",
        color: '#C0392B',
        ida: [[-6.7600, -79.8250], [-6.7710, -79.8400], [-6.7850, -79.8550]],
        vuelta: [[-6.7850, -79.8550], [-6.7710, -79.8400], [-6.7600, -79.8250]]
    },
    "CHI_ET_012": {
        nombre: "Empresa de Transportes Latina Express",
        ruta: "Urb. Latina - Chiclayo",
        color: '#2980B9',
        ida: [[-6.7800, -79.8200], [-6.7700, -79.8400], [-6.7550, -79.8500]],
        vuelta: [[-6.7550, -79.8500], [-6.7700, -79.8400], [-6.7800, -79.8200]]
    },
    "CHI_ET_013": {
        nombre: "Empresa de Transportes Aeropuerto Bus",
        ruta: "Aeropuerto - Mercado Modelo",
        color: '#8E44AD',
        ida: [[-6.7850, -79.8250], [-6.7800, -79.8350], [-6.7700, -79.8420]],
        vuelta: [[-6.7700, -79.8420], [-6.7800, -79.8350], [-6.7850, -79.8250]]
    },
    "CHI_ET_014": {
        nombre: "Empresa de Transportes San José Unido",
        ruta: "San José - Chiclayo",
        color: '#16A085',
        ida: [[-6.7450, -79.9600], [-6.7550, -79.9000], [-6.7700, -79.8450]],
        vuelta: [[-6.7700, -79.8450], [-6.7550, -79.9000], [-6.7450, -79.9600]]
    },
    "CHI_ET_015": {
        nombre: "Empresa de Transportes Ferreñafe Bus S.A.",
        ruta: "Ferreñafe - Chiclayo",
        color: '#27AE60',
        ida: [[-6.6350, -79.7900], [-6.7000, -79.8150], [-6.7650, -79.8350]],
        vuelta: [[-6.7650, -79.8350], [-6.7000, -79.8150], [-6.6350, -79.7900]]
    },
    "CHI_ET_016": {
        nombre: "Empresa de Transportes Ruta 16 S.A.",
        ruta: "Reque - La Victoria",
        color: '#E67E22',
        ida: [[-6.8750, -79.8700], [-6.8650, -79.8150], [-6.7800, -79.8400]],
        vuelta: [[-6.7800, -79.8400], [-6.8650, -79.8150], [-6.8750, -79.8700]]
    },
    "CHI_ET_017": {
        nombre: "Empresa de Transportes Pimentel Unión",
        ruta: "Pimentel - San José",
        color: '#3498DB',
        ida: [[-6.8350, -79.9350], [-6.7900, -79.9500], [-6.7450, -79.9600]],
        vuelta: [[-6.7450, -79.9600], [-6.7900, -79.9500], [-6.8350, -79.9350]]
    },
    "CHI_ET_018": {
        nombre: "Empresa de Transportes Trans. Ferreñafe",
        ruta: "Ferreñafe - Pomalca",
        color: '#27AE60',
        ida: [[-6.6350, -79.7900], [-6.7000, -79.7800], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7000, -79.7800], [-6.6350, -79.7900]]
    },
    "CHI_ET_019": {
        nombre: "Empresa de Transportes Victoria Express",
        ruta: "La Victoria - Urb. Latina",
        color: '#9B59B6',
        ida: [[-6.7950, -79.8450], [-6.7850, -79.8300], [-6.7750, -79.8200]],
        vuelta: [[-6.7750, -79.8200], [-6.7850, -79.8300], [-6.7950, -79.8450]]
    },
    "CHI_ET_020": {
        nombre: "Empresa de Transportes Lambayeque-Mórrope",
        ruta: "Lambayeque - Mórrope",
        color: '#2ECC71',
        ida: [[-6.7050, -79.9050], [-6.6500, -79.9400], [-6.5400, -79.9800]],
        vuelta: [[-6.5400, -79.9800], [-6.6500, -79.9400], [-6.7050, -79.9050]]
    },
    "CHI_ET_021": {
        nombre: "Empresa de Transportes Tumán - Pomalca",
        ruta: "Tumán - Pomalca - Chiclayo",
        color: '#F1C40F',
        ida: [[-6.7450, -79.7400], [-6.7550, -79.7600], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7550, -79.7600], [-6.7450, -79.7400]]
    },
    "CHI_ET_022": {
        nombre: "Empresa de Transportes JLO - Almanzor",
        ruta: "JLO - Hospital Almanzor",
        color: '#E74C3C',
        ida: [[-6.7500, -79.8350], [-6.7600, -79.8300], [-6.7700, -79.8250]],
        vuelta: [[-6.7700, -79.8250], [-6.7600, -79.8300], [-6.7500, -79.8350]]
    },
    "CHI_ET_023": {
        nombre: "Empresa de Transportes Picsi - Ferreñafe",
        ruta: "Picsi - Ferreñafe",
        color: '#7F8C8D',
        ida: [[-6.7150, -79.7700], [-6.6800, -79.7800], [-6.6350, -79.7900]],
        vuelta: [[-6.6350, -79.7900], [-6.6800, -79.7800], [-6.7150, -79.7700]]
    },
    "CHI_ET_024": {
        nombre: "Empresa de Transportes Santa Rosa - Eten",
        ruta: "Santa Rosa - Ciudad Eten",
        color: '#34495E',
        ida: [[-6.8750, -79.9300], [-6.9000, -79.9000], [-6.9200, -79.8650]],
        vuelta: [[-6.9200, -79.8650], [-6.9000, -79.9000], [-6.8750, -79.9300]]
    },
    "CHI_ET_025": {
        nombre: "Empresa de Transportes Chiclayo Norte",
        ruta: "Chiclayo Norte - Real Plaza",
        color: '#1ABC9C',
        ida: [[-6.7700, -79.8400], [-6.7600, -79.8450], [-6.7500, -79.8500]],
        vuelta: [[-6.7500, -79.8500], [-6.7600, -79.8450], [-6.7700, -79.8400]]
    },
    "CHI_ET_026": {
        nombre: "Empresa de Transportes Chongoyape S.A.",
        ruta: "Chongoyape - Pomalca",
        color: '#D35400',
        ida: [[-6.6500, -79.4000], [-6.7000, -79.6000], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7000, -79.6000], [-6.6500, -79.4000]]
    },
    "CHI_ET_027": {
        nombre: "Empresa de Transportes Terminal Terrestre",
        ruta: "Terminal Terrestre - Centro",
        color: '#C0392B',
        ida: [[-6.8000, -79.8300], [-6.7900, -79.8350], [-6.7800, -79.8400]],
        vuelta: [[-6.7800, -79.8400], [-6.7900, -79.8350], [-6.8000, -79.8300]]
    },
    "CHI_ET_028": {
        nombre: "Empresa de Transportes Monsefú - Santa Rosa",
        ruta: "Monsefú - Santa Rosa",
        color: '#8E44AD',
        ida: [[-6.8750, -79.8700], [-6.8750, -79.9000], [-6.8750, -79.9300]],
        vuelta: [[-6.8750, -79.9300], [-6.8750, -79.9000], [-6.8750, -79.8700]]
    },
    "CHI_ET_029": {
        nombre: "Empresa de Transportes Zaña - Reque",
        ruta: "Zaña - Reque",
        color: '#2980B9',
        ida: [[-6.9150, -79.5800], [-6.8800, -79.7500], [-6.8650, -79.8150]],
        vuelta: [[-6.8650, -79.8150], [-6.8800, -79.7500], [-6.9150, -79.5800]]
    },
    "CHI_ET_030": {
        nombre: "Empresa de Transportes Pimentel - Aeropuerto",
        ruta: "Pimentel - Aeropuerto",
        color: '#16A085',
        ida: [[-6.8350, -79.9350], [-6.8100, -79.8900], [-6.7850, -79.8250]],
        vuelta: [[-6.7850, -79.8250], [-6.8100, -79.8900], [-6.8350, -79.9350]]
    },
    "CHI_ET_031": {
        nombre: "Empresa de Transportes Cayaltí - Zaña",
        ruta: "Cayaltí - Zaña",
        color: '#7F8C8D',
        ida: [[-6.9000, -79.5500], [-6.9150, -79.5800]],
        vuelta: [[-6.9150, -79.5800], [-6.9000, -79.5500]]
    },
    "CHI_ET_032": {
        nombre: "Empresa de Transportes Nueva Arica - Chongoyape",
        ruta: "Nueva Arica - Chongoyape",
        color: '#34495E',
        ida: [[-6.8500, -79.3500], [-6.6500, -79.4000]],
        vuelta: [[-6.6500, -79.4000], [-6.8500, -79.3500]]
    },
    "CHI_ET_033": {
        nombre: "Empresa de Transportes Oyotún - Nueva Arica",
        ruta: "Oyotún - Nueva Arica",
        color: '#16A085',
        ida: [[-6.8800, -79.3000], [-6.8500, -79.3500]],
        vuelta: [[-6.8500, -79.3500], [-6.8800, -79.3000]]
    },
    "CHI_ET_034": {
        nombre: "Empresa de Transportes Pucalá - Pomalca",
        ruta: "Pucalá - Pomalca",
        color: '#C0392B',
        ida: [[-6.7200, -79.7000], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7200, -79.7000]]
    },
    "CHI_ET_035": {
        nombre: "Empresa de Transportes Lagunas - Tumán",
        ruta: "Lagunas - Tumán",
        color: '#27AE60',
        ida: [[-6.7100, -79.6500], [-6.7450, -79.7400]],
        vuelta: [[-6.7450, -79.7400], [-6.7100, -79.6500]]
    },
    "CHI_ET_036": {
        nombre: "Empresa de Transportes Circuito JLO",
        ruta: "Circuito JLO - Real Plaza",
        color: '#8E44AD',
        ida: [[-6.7500, -79.8350], [-6.7500, -79.8500]],
        vuelta: [[-6.7500, -79.8500], [-6.7500, -79.8350]]
    },
    "CHI_ET_037": {
        nombre: "Empresa de Transportes Chongoyape - Directo",
        ruta: "Chongoyape - Chiclayo",
        color: '#E67E22',
        ida: [[-6.6500, -79.4000], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.6500, -79.4000]]
    },
    "CHI_ET_038": {
        nombre: "Empresa de Transportes Victoria Mayorista",
        ruta: "La Victoria - Mercado Mayorista",
        color: '#2980B9',
        ida: [[-6.7950, -79.8450], [-6.8100, -79.8300]],
        vuelta: [[-6.8100, -79.8300], [-6.7950, -79.8450]]
    },
    "CHI_ET_039": {
        nombre: "Empresa de Transportes Reque - Aeropuerto",
        ruta: "Reque - Aeropuerto",
        color: '#D35400',
        ida: [[-6.8650, -79.8150], [-6.7850, -79.8250]],
        vuelta: [[-6.7850, -79.8250], [-6.8650, -79.8150]]
    },
    "CHI_ET_040": {
        nombre: "Empresa de Transportes Pimentel Balneario",
        ruta: "Pimentel - Balneario",
        color: '#3498DB',
        ida: [[-6.8350, -79.9350], [-6.8400, -79.9400]],
        vuelta: [[-6.8400, -79.9400], [-6.8350, -79.9350]]
    },
    "CHI_ET_041": {
        nombre: "Empresa de Transportes Monsefú - Pimentel",
        ruta: "Monsefú - Pimentel",
        color: '#F1C40F',
        ida: [[-6.8750, -79.8700], [-6.8350, -79.9350]],
        vuelta: [[-6.8350, -79.9350], [-6.8750, -79.8700]]
    },
    "CHI_ET_042": {
        nombre: "Empresa de Transportes Lambayeque - Ferreñafe",
        ruta: "Lambayeque - Ferreñafe",
        color: '#E74C3C',
        ida: [[-6.7050, -79.9050], [-6.6350, -79.7900]],
        vuelta: [[-6.6350, -79.7900], [-6.7050, -79.9050]]
    },
    "CHI_ET_043": {
        nombre: "Empresa de Transportes Hospitales - Centro",
        ruta: "Red Hospitalaria - Chiclayo",
        color: '#9B59B6',
        ida: [[-6.7600, -79.8300], [-6.7750, -79.8400]],
        vuelta: [[-6.7750, -79.8400], [-6.7600, -79.8300]]
    },
    "CHI_ET_044": {
        nombre: "Empresa de Transportes Picsi - Tumán",
        ruta: "Picsi - Tumán",
        color: '#7F8C8D',
        ida: [[-6.7150, -79.7700], [-6.7450, -79.7400]],
        vuelta: [[-6.7450, -79.7400], [-6.7150, -79.7700]]
    },
    "CHI_ET_045": {
        nombre: "Empresa de Transportes Zaña - Chiclayo",
        ruta: "Zaña - Chiclayo Centro",
        color: '#34495E',
        ida: [[-6.9150, -79.5800], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.9150, -79.5800]]
    },
    "CHI_ET_046": {
        nombre: "Empresa de Transportes Íllimo - Pacora",
        ruta: "Íllimo - Pacora - Chiclayo",
        color: '#E67E22',
        ida: [[-6.4950, -79.8800], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.4950, -79.8800]]
    },
    "CHI_ET_047": {
        nombre: "Empresa de Transportes Jayanca - Motupe",
        ruta: "Jayanca - Motupe - Chiclayo",
        color: '#2980B9',
        ida: [[-6.4000, -79.8200], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.4000, -79.8200]]
    },
    "CHI_ET_048": {
        nombre: "Empresa de Transportes Salas - Incahuasi",
        ruta: "Salas - Incahuasi - Chiclayo",
        color: '#27AE60',
        ida: [[-6.2000, -79.7000], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.2000, -79.7000]]
    },
    "CHI_ET_049": {
        nombre: "Empresa de Transportes Olmos Troncal",
        ruta: "Olmos - Chiclayo",
        color: '#C0392B',
        ida: [[-5.9900, -79.7500], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-5.9900, -79.7500]]
    },
    "CHI_ET_050": {
        nombre: "Empresa de Transportes Mórrope - Íllimo",
        ruta: "Mórrope - Íllimo",
        color: '#9B59B6',
        ida: [[-6.5400, -79.9800], [-6.5000, -79.8800]],
        vuelta: [[-6.5000, -79.8800], [-6.5400, -79.9800]]
    },
    "CHI_ET_051": {
        nombre: "Empresa de Transportes San Carlos - Tumán",
        ruta: "San Carlos - Tumán",
        color: '#2ECC71',
        ida: [[-6.7500, -79.7500], [-6.7450, -79.7400]],
        vuelta: [[-6.7450, -79.7400], [-6.7500, -79.7500]]
    },
    "CHI_ET_052": {
        nombre: "Empresa de Transportes Pomalca - Saltur",
        ruta: "Pomalca - Saltur",
        color: '#E67E22',
        ida: [[-6.7650, -79.7750], [-6.7800, -79.7500]],
        vuelta: [[-6.7800, -79.7500], [-6.7650, -79.7750]]
    },
    "CHI_ET_053": {
        nombre: "Empresa de Transportes Picsi - La Victoria",
        ruta: "Picsi - La Victoria",
        color: '#34495E',
        ida: [[-6.7150, -79.7700], [-6.7950, -79.8450]],
        vuelta: [[-6.7950, -79.8450], [-6.7150, -79.7700]]
    },
    "CHI_ET_054": {
        nombre: "Empresa de Transportes Eten - Puerto Eten",
        ruta: "Ciudad Eten - Puerto Eten",
        color: '#16A085',
        ida: [[-6.9200, -79.8650], [-6.9500, -79.8500]],
        vuelta: [[-6.9500, -79.8500], [-6.9200, -79.8650]]
    },
    "CHI_ET_055": {
        nombre: "Empresa de Transportes Monsefú - Reque",
        ruta: "Monsefú - Reque",
        color: '#8E44AD',
        ida: [[-6.8750, -79.8700], [-6.8650, -79.8150]],
        vuelta: [[-6.8650, -79.8150], [-6.8750, -79.8700]]
    },
    "CHI_ET_056": {
        nombre: "Empresa de Transportes Ferreñafe - Mesones Muro",
        ruta: "Ferreñafe - Mesones Muro",
        color: '#2980B9',
        ida: [[-6.6350, -79.7900], [-6.6200, -79.7800]],
        vuelta: [[-6.6200, -79.7800], [-6.6350, -79.7900]]
    },
    "CHI_ET_057": {
        nombre: "Empresa de Transportes Lambayeque - San José",
        ruta: "Lambayeque - San José",
        color: '#C0392B',
        ida: [[-6.7050, -79.9050], [-6.7450, -79.9600]],
        vuelta: [[-6.7450, -79.9600], [-6.7050, -79.9050]]
    },
    "CHI_ET_058": {
        nombre: "Empresa de Transportes Olmos - Motupe",
        ruta: "Olmos - Motupe",
        color: '#F1C40F',
        ida: [[-5.9900, -79.7500], [-6.4000, -79.8200]],
        vuelta: [[-6.4000, -79.8200], [-5.9900, -79.7500]]
    },
    "CHI_ET_059": {
        nombre: "Empresa de Transportes Pacora - Jayanca",
        ruta: "Pacora - Jayanca",
        color: '#7F8C8D',
        ida: [[-6.4950, -79.8800], [-6.4000, -79.8200]],
        vuelta: [[-6.4000, -79.8200], [-6.4950, -79.8800]]
    },
    "CHI_ET_060": {
        nombre: "Empresa de Transportes Chiclayo - Pomalca Express",
        ruta: "Chiclayo Centro - Pomalca",
        color: '#D35400',
        ida: [[-6.7700, -79.8350], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7700, -79.8350]]
    },
    "CHI_ET_061": {
        nombre: "Empresa de Transportes Pimentel - La Victoria",
        ruta: "Pimentel - La Victoria",
        color: '#27AE60',
        ida: [[-6.8350, -79.9350], [-6.7950, -79.8450]],
        vuelta: [[-6.7950, -79.8450], [-6.8350, -79.9350]]
    },
    "CHI_ET_062": {
        nombre: "Empresa de Transportes Tumán - Cayaltí",
        ruta: "Tumán - Cayaltí",
        color: '#2C3E50',
        ida: [[-6.7450, -79.7400], [-6.9000, -79.5500]],
        vuelta: [[-6.9000, -79.5500], [-6.7450, -79.7400]]
    },
    "CHI_ET_063": {
        nombre: "Empresa de Transportes Motupe - Salas",
        ruta: "Motupe - Salas",
        color: '#E67E22',
        ida: [[-6.4000, -79.8200], [-6.2000, -79.7000]],
        vuelta: [[-6.2000, -79.7000], [-6.4000, -79.8200]]
    },
    "CHI_ET_064": {
        nombre: "Empresa de Transportes Ferreñafe - Incahuasi",
        ruta: "Ferreñafe - Incahuasi",
        color: '#8E44AD',
        ida: [[-6.6350, -79.7900], [-6.2000, -79.7000]],
        vuelta: [[-6.2000, -79.7000], [-6.6350, -79.7900]]
    },
    "CHI_ET_065": {
        nombre: "Empresa de Transportes JLO - Pimentel",
        ruta: "JLO - Pimentel",
        color: '#3498DB',
        ida: [[-6.7500, -79.8350], [-6.8350, -79.9350]],
        vuelta: [[-6.8350, -79.9350], [-6.7500, -79.8350]]
    },
    "CHI_ET_066": {
        nombre: "Empresa de Transportes Chiclayo - Chongoyape",
        ruta: "Chiclayo - Chongoyape",
        color: '#C0392B',
        ida: [[-6.7700, -79.8350], [-6.6500, -79.4000]],
        vuelta: [[-6.6500, -79.4000], [-6.7700, -79.8350]]
    },
    "CHI_ET_067": {
        nombre: "Empresa de Transportes Pucalá - Cayaltí",
        ruta: "Pucalá - Cayaltí",
        color: '#16A085',
        ida: [[-6.7200, -79.7000], [-6.9000, -79.5500]],
        vuelta: [[-6.9000, -79.5500], [-6.7200, -79.7000]]
    },
    "CHI_ET_068": {
        nombre: "Empresa de Transportes Monsefú - Chiclayo Centro",
        ruta: "Monsefú - Centro",
        color: '#F1C40F',
        ida: [[-6.8750, -79.8700], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.8750, -79.8700]]
    },
    "CHI_ET_069": {
        nombre: "Empresa de Transportes La Victoria - Reque",
        ruta: "La Victoria - Reque",
        color: '#7F8C8D',
        ida: [[-6.7950, -79.8450], [-6.8650, -79.8150]],
        vuelta: [[-6.8650, -79.8150], [-6.7950, -79.8450]]
    },
    "CHI_ET_070": {
        nombre: "Empresa de Transportes Lambayeque - Motupe",
        ruta: "Lambayeque - Motupe",
        color: '#D35400',
        ida: [[-6.7050, -79.9050], [-6.4000, -79.8200]],
        vuelta: [[-6.4000, -79.8200], [-6.7050, -79.9050]]
    },
    "CHI_ET_071": {
        nombre: "Empresa de Transportes Chiclayo - Mórrope",
        ruta: "Chiclayo - Mórrope",
        color: '#2ECC71',
        ida: [[-6.7700, -79.8350], [-6.5400, -79.9800]],
        vuelta: [[-6.5400, -79.9800], [-6.7700, -79.8350]]
    },
    "CHI_ET_072": {
        nombre: "Empresa de Transportes Ferreñafe - Pacora",
        ruta: "Ferreñafe - Pacora",
        color: '#E74C3C',
        ida: [[-6.6350, -79.7900], [-6.4950, -79.8800]],
        vuelta: [[-6.4950, -79.8800], [-6.6350, -79.7900]]
    },
    "CHI_ET_073": {
        nombre: "Empresa de Transportes Tumán - Picsi",
        ruta: "Tumán - Picsi",
        color: '#9B59B6',
        ida: [[-6.7450, -79.7400], [-6.7150, -79.7700]],
        vuelta: [[-6.7150, -79.7700], [-6.7450, -79.7400]]
    },
    "CHI_ET_074": {
        nombre: "Empresa de Transportes Zaña - Cayaltí",
        ruta: "Zaña - Cayaltí",
        color: '#34495E',
        ida: [[-6.9150, -79.5800], [-6.9000, -79.5500]],
        vuelta: [[-6.9000, -79.5500], [-6.9150, -79.5800]]
    },
    "CHI_ET_075": {
        nombre: "Empresa de Transportes Pomalca - Chiclayo Norte",
        ruta: "Pomalca - Chiclayo Norte",
        color: '#16A085',
        ida: [[-6.7650, -79.7750], [-6.7700, -79.8400]],
        vuelta: [[-6.7700, -79.8400], [-6.7650, -79.7750]]
    },
    "CHI_ET_076": {
        nombre: "Empresa de Transportes Jayanca - Olmos",
        ruta: "Jayanca - Olmos",
        color: '#F1C40F',
        ida: [[-6.4000, -79.8200], [-5.9900, -79.7500]],
        vuelta: [[-5.9900, -79.7500], [-6.4000, -79.8200]]
    },
    "CHI_ET_077": {
        nombre: "Empresa de Transportes Pimentel - Chiclayo",
        ruta: "Pimentel - Chiclayo Centro",
        color: '#2980B9',
        ida: [[-6.8350, -79.9350], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.8350, -79.9350]]
    },
    "CHI_ET_078": {
        nombre: "Empresa de Transportes Motupe - Chiclayo",
        ruta: "Motupe - Chiclayo",
        color: '#D35400',
        ida: [[-6.4000, -79.8200], [-6.7700, -79.8350]],
        vuelta: [[-6.7700, -79.8350], [-6.4000, -79.8200]]
    },
    "CHI_ET_079": {
        nombre: "Empresa de Transportes Reque - Chiclayo Norte",
        ruta: "Reque - Chiclayo Norte",
        color: '#27AE60',
        ida: [[-6.8650, -79.8150], [-6.7700, -79.8400]],
        vuelta: [[-6.7700, -79.8400], [-6.8650, -79.8150]]
    },
    "CHI_ET_080": {
        nombre: "Empresa de Transportes La Victoria - Pomalca",
        ruta: "La Victoria - Pomalca",
        color: '#8E44AD',
        ida: [[-6.7950, -79.8450], [-6.7650, -79.7750]],
        vuelta: [[-6.7650, -79.7750], [-6.7950, -79.8450]]
    },
};
