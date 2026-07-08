// Base de datos de transporte: Apurímac - Abancay (APU_ET_001-010)
const rutasApurimac = {
    "APU_ET_001": {
        nombre: "Empresa de Transportes 'Abancay Express'",
        ruta: "Terminal Terrestre - Plaza de Armas",
        color: '#C0392B',
        ida: [[-13.6350, -72.8800], [-13.6380, -72.8850], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6380, -72.8850], [-13.6350, -72.8800]]
    },
    "APU_ET_002": {
        nombre: "Empresa de Transportes 'Las Américas'",
        ruta: "Urb. Las Américas - Centro",
        color: '#2980B9',
        ida: [[-13.6300, -72.8700], [-13.6350, -72.8800], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6350, -72.8800], [-13.6300, -72.8700]]
    },
    "APU_ET_003": {
        nombre: "Empresa de Transportes 'San Cristóbal de Abancay'",
        ruta: "Barrio San Cristóbal - Mercado Central",
        color: '#27AE60',
        ida: [[-13.6450, -72.8950], [-13.6420, -72.8920], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6420, -72.8920], [-13.6450, -72.8950]]
    },
    "APU_ET_004": {
        nombre: "Empresa de Transportes 'El Valle Apurimeño'",
        ruta: "Patibamba - Plaza de Armas",
        color: '#F1C40F',
        ida: [[-13.6500, -72.8800], [-13.6450, -72.8850], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6450, -72.8850], [-13.6500, -72.8800]]
    },
    "APU_ET_005": {
        nombre: "Empresa de Transportes 'Confraternidad'",
        ruta: "Urb. Confraternidad - Av. Núñez",
        color: '#8E44AD',
        ida: [[-13.6350, -72.8950], [-13.6370, -72.8920], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6370, -72.8920], [-13.6350, -72.8950]]
    },
    "APU_ET_006": {
        nombre: "Empresa de Transportes 'Sol de Abancay'",
        ruta: "Salida a Cusco - Terminal",
        color: '#E67E22',
        ida: [[-13.6200, -72.8700], [-13.6280, -72.8750], [-13.6350, -72.8800]],
        vuelta: [[-13.6350, -72.8800], [-13.6280, -72.8750], [-13.6200, -72.8700]]
    },
    "APU_ET_007": {
        nombre: "Empresa de Transportes 'Virgen de Cocharcas'",
        ruta: "Urb. Cocharcas - Centro",
        color: '#1ABC9C',
        ida: [[-13.6400, -72.9000], [-13.6400, -72.8950], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6400, -72.8950], [-13.6400, -72.9000]]
    },
    "APU_ET_008": {
        nombre: "Empresa de Transportes 'La Integración'",
        ruta: "Barrio Bellavista - Plaza",
        color: '#34495E',
        ida: [[-13.6450, -72.8800], [-13.6420, -72.8850], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6420, -72.8850], [-13.6450, -72.8800]]
    },
    "APU_ET_009": {
        nombre: "Empresa de Transportes 'Santa Rosa Apurímac'",
        ruta: "Santa Rosa - Mercado",
        color: '#D35400',
        ida: [[-13.6300, -72.8950], [-13.6350, -72.8920], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6350, -72.8920], [-13.6300, -72.8950]]
    },
    "APU_ET_010": {
        nombre: "Empresa de Transportes 'San Pedro Abancay'",
        ruta: "San Pedro - Av. Arenas",
        color: '#7F8C8D',
        ida: [[-13.6350, -72.8750], [-13.6370, -72.8820], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6370, -72.8820], [-13.6350, -72.8750]]
    },
    "APU_ET_011": {
        nombre: "Empresa de Transportes 'Tamburco Express'",
        ruta: "Tamburco - Centro Abancay",
        color: '#E67E22',
        ida: [[-13.6200, -72.8600], [-13.6300, -72.8750], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6300, -72.8750], [-13.6200, -72.8600]]
    },
    "APU_ET_012": {
        nombre: "Empresa de Transportes 'Villa Gloria'",
        ruta: "Urb. Villa Gloria - Mercado Central",
        color: '#2980B9',
        ida: [[-13.6500, -72.9000], [-13.6450, -72.8950], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6450, -72.8950], [-13.6500, -72.9000]]
    },
    "APU_ET_013": {
        nombre: "Empresa de Transportes 'San Gabriel'",
        ruta: "San Gabriel - Plaza de Armas",
        color: '#27AE60',
        ida: [[-13.6300, -72.9050], [-13.6350, -72.8950], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6350, -72.8950], [-13.6300, -72.9050]]
    },
    "APU_ET_014": {
        nombre: "Empresa de Transportes 'Corredor Ampay'",
        ruta: "Santuario de Ampay - Abancay",
        color: '#F1C40F',
        ida: [[-13.5800, -72.9300], [-13.6100, -72.9100], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6100, -72.9100], [-13.5800, -72.9300]]
    },
    "APU_ET_015": {
        nombre: "Empresa de Transportes 'Los Héroes de Apurímac'",
        ruta: "Urb. Héroes - Av. Arenas",
        color: '#8E44AD',
        ida: [[-13.6450, -72.8750], [-13.6420, -72.8820], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6420, -72.8820], [-13.6450, -72.8750]]
    },
    "APU_ET_016": {
        nombre: "Empresa de Transportes 'San Jerónimo'",
        ruta: "San Jerónimo - Terminal",
        color: '#C0392B',
        ida: [[-13.6600, -72.8900], [-13.6500, -72.8900], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6500, -72.8900], [-13.6600, -72.8900]]
    },
    "APU_ET_017": {
        nombre: "Empresa de Transportes 'Belo Horizonte Abancay'",
        ruta: "Urb. Belo Horizonte - Plaza",
        color: '#1ABC9C',
        ida: [[-13.6300, -72.8800], [-13.6350, -72.8850], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6350, -72.8850], [-13.6300, -72.8800]]
    },
    "APU_ET_018": {
        nombre: "Empresa de Transportes 'Integración Apurimeña'",
        ruta: "Circunvalación Sur - Plaza",
        color: '#34495E',
        ida: [[-13.6500, -72.8850], [-13.6450, -72.8880], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6450, -72.8880], [-13.6500, -72.8850]]
    },
    "APU_ET_019": {
        nombre: "Empresa de Transportes 'Santa Rosa Andahuaylas'",
        ruta: "Urb. Santa Rosa - Mercado",
        color: '#D35400',
        ida: [[-13.6550, -72.8950], [-13.6480, -72.8920], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6480, -72.8920], [-13.6550, -72.8950]]
    },
    "APU_ET_020": {
        nombre: "Empresa de Transportes 'Los Incas de Abancay'",
        ruta: "Urb. Los Incas - Av. Núñez",
        color: '#7F8C8D',
        ida: [[-13.6350, -72.9000], [-13.6370, -72.8950], [-13.6400, -72.8900]],
        vuelta: [[-13.6400, -72.8900], [-13.6370, -72.8950], [-13.6350, -72.9000]]
    },
    "APU_ET_021": {
        nombre: "Empresa de Transportes 'Andahuaylas Express'",
        ruta: "Aeropuerto de Andahuaylas - Centro",
        color: '#E67E22',
        ida: [[-13.6700, -73.3500], [-13.6600, -73.3700], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6600, -73.3700], [-13.6700, -73.3500]]
    },
    "APU_ET_022": {
        nombre: "Empresa de Transportes 'Chanka Tour'",
        ruta: "Urb. Chanka - Plaza de Armas",
        color: '#2980B9',
        ida: [[-13.6600, -73.3900], [-13.6550, -73.3880], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6550, -73.3880], [-13.6600, -73.3900]]
    },
    "APU_ET_023": {
        nombre: "Empresa de Transportes 'San Jerónimo Andahuaylas'",
        ruta: "San Jerónimo - Mercado Central",
        color: '#27AE60',
        ida: [[-13.6750, -73.3900], [-13.6650, -73.3880], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6650, -73.3880], [-13.6750, -73.3900]]
    },
    "APU_ET_024": {
        nombre: "Empresa de Transportes 'Los Héroes de Andahuaylas'",
        ruta: "Urb. Los Héroes - Av. Perú",
        color: '#F1C40F',
        ida: [[-13.6450, -73.3950], [-13.6480, -73.3900], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6480, -73.3900], [-13.6450, -73.3950]]
    },
    "APU_ET_025": {
        nombre: "Empresa de Transportes 'Talavera Express'",
        ruta: "Distrito de Talavera - Centro",
        color: '#8E44AD',
        ida: [[-13.6400, -73.4000], [-13.6450, -73.3950], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6450, -73.3950], [-13.6400, -73.4000]]
    },
    "APU_ET_026": {
        nombre: "Empresa de Transportes 'Los Nogales'",
        ruta: "Urb. Los Nogales - Plaza de Armas",
        color: '#C0392B',
        ida: [[-13.6550, -73.3800], [-13.6520, -73.3820], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6520, -73.3820], [-13.6550, -73.3800]]
    },
    "APU_ET_027": {
        nombre: "Empresa de Transportes 'Belo Horizonte Andahuaylas'",
        ruta: "Urb. Belo Horizonte - Mercado",
        color: '#1ABC9C',
        ida: [[-13.6650, -73.3800], [-13.6580, -73.3820], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6580, -73.3820], [-13.6650, -73.3800]]
    },
    "APU_ET_028": {
        nombre: "Empresa de Transportes 'Integración Andahuaylina'",
        ruta: "Circunvalación Norte - Plaza",
        color: '#34495E',
        ida: [[-13.6350, -73.3850], [-13.6420, -73.3850], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6420, -73.3850], [-13.6350, -73.3850]]
    },
    "APU_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Andahuaylina'",
        ruta: "Santa Rosa - Av. Constitución",
        color: '#D35400',
        ida: [[-13.6500, -73.3700], [-13.6500, -73.3780], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6500, -73.3780], [-13.6500, -73.3700]]
    },
    "APU_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro Andahuaylas'",
        ruta: "San Pedro - Barrio Santa María",
        color: '#7F8C8D',
        ida: [[-13.6600, -73.3950], [-13.6550, -73.3900], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6550, -73.3900], [-13.6600, -73.3950]]
    },
    "APU_ET_021": {
        nombre: "Empresa de Transportes 'Andahuaylas Express'",
        ruta: "Aeropuerto de Andahuaylas - Centro",
        color: '#E67E22',
        ida: [[-13.6700, -73.3500], [-13.6600, -73.3700], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6600, -73.3700], [-13.6700, -73.3500]]
    },
    "APU_ET_022": {
        nombre: "Empresa de Transportes 'Chanka Tour'",
        ruta: "Urb. Chanka - Plaza de Armas",
        color: '#2980B9',
        ida: [[-13.6600, -73.3900], [-13.6550, -73.3880], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6550, -73.3880], [-13.6600, -73.3900]]
    },
    "APU_ET_023": {
        nombre: "Empresa de Transportes 'San Jerónimo Andahuaylas'",
        ruta: "San Jerónimo - Mercado Central",
        color: '#27AE60',
        ida: [[-13.6750, -73.3900], [-13.6650, -73.3880], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6650, -73.3880], [-13.6750, -73.3900]]
    },
    "APU_ET_024": {
        nombre: "Empresa de Transportes 'Los Héroes de Andahuaylas'",
        ruta: "Urb. Los Héroes - Av. Perú",
        color: '#F1C40F',
        ida: [[-13.6450, -73.3950], [-13.6480, -73.3900], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6480, -73.3900], [-13.6450, -73.3950]]
    },
    "APU_ET_025": {
        nombre: "Empresa de Transportes 'Talavera Express'",
        ruta: "Distrito de Talavera - Centro",
        color: '#8E44AD',
        ida: [[-13.6400, -73.4000], [-13.6450, -73.3950], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6450, -73.3950], [-13.6400, -73.4000]]
    },
    "APU_ET_026": {
        nombre: "Empresa de Transportes 'Los Nogales'",
        ruta: "Urb. Los Nogales - Plaza de Armas",
        color: '#C0392B',
        ida: [[-13.6550, -73.3800], [-13.6520, -73.3820], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6520, -73.3820], [-13.6550, -73.3800]]
    },
    "APU_ET_027": {
        nombre: "Empresa de Transportes 'Belo Horizonte Andahuaylas'",
        ruta: "Urb. Belo Horizonte - Mercado",
        color: '#1ABC9C',
        ida: [[-13.6650, -73.3800], [-13.6580, -73.3820], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6580, -73.3820], [-13.6650, -73.3800]]
    },
    "APU_ET_028": {
        nombre: "Empresa de Transportes 'Integración Andahuaylina'",
        ruta: "Circunvalación Norte - Plaza",
        color: '#34495E',
        ida: [[-13.6350, -73.3850], [-13.6420, -73.3850], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6420, -73.3850], [-13.6350, -73.3850]]
    },
    "APU_ET_029": {
        nombre: "Empresa de Transportes 'Santa Rosa Andahuaylina'",
        ruta: "Santa Rosa - Av. Constitución",
        color: '#D35400',
        ida: [[-13.6500, -73.3700], [-13.6500, -73.3780], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6500, -73.3780], [-13.6500, -73.3700]]
    },
    "APU_ET_030": {
        nombre: "Empresa de Transportes 'San Pedro Andahuaylas'",
        ruta: "San Pedro - Barrio Santa María",
        color: '#7F8C8D',
        ida: [[-13.6600, -73.3950], [-13.6550, -73.3900], [-13.6500, -73.3850]],
        vuelta: [[-13.6500, -73.3850], [-13.6550, -73.3900], [-13.6600, -73.3950]]
    },
};
