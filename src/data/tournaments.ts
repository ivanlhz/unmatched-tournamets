export interface Tournament {
	id: string;
	slug: string;
	title: string;
	description: string;
	date: string;
	time: string;
	type: "presencial" | "online";
	location?: {
		venue: string;
		city: string;
	};
	image: string;
	status: "upcoming" | "past";
	participants?: number;
	maxParticipants?: number;
	prize?: string;
}

export const allTournaments: Tournament[] = [
	{
		id: "1",
		slug: "torneo-primavera-madrid",
		title: "Torneo Primavera Madrid",
		description: "El torneo más esperado de la temporada en Madrid con premios increíbles y la participación de los mejores jugadores",
		date: "2025-03-15",
		time: "10:00",
		type: "presencial",
		location: {
			venue: "Centro Cívico Delicias",
			city: "Madrid"
		},
		image: "/hero-news-1.jpg",
		status: "upcoming",
		participants: 45,
		maxParticipants: 64,
		prize: "500€ + Trofeo"
	},
	{
		id: "2",
		slug: "copa-online-internacional",
		title: "Copa Online Internacional",
		description: "Torneo online abierto a jugadores de todo el mundo con transmisión en directo",
		date: "2025-03-20",
		time: "18:00",
		type: "online",
		image: "/hero-news-2.jpg",
		status: "upcoming",
		participants: 128,
		maxParticipants: 256,
		prize: "300€"
	},
	{
		id: "3",
		slug: "torneo-barcelona-open",
		title: "Torneo Barcelona Open",
		description: "Competición presencial en Barcelona con formato suizo y top 8 de eliminación directa",
		date: "2025-03-25",
		time: "11:30",
		type: "presencial",
		location: {
			venue: "Librería Gigamesh",
			city: "Barcelona"
		},
		image: "/hero-news-3.jpg",
		status: "upcoming",
		participants: 32,
		maxParticipants: 48,
		prize: "400€"
	},
	{
		id: "4",
		slug: "liga-online-europea",
		title: "Liga Online Europea",
		description: "Liga online con múltiples jornadas y clasificación acumulativa",
		date: "2025-04-01",
		time: "20:00",
		type: "online",
		image: "/hero-news-1.jpg",
		status: "upcoming",
		participants: 64,
		maxParticipants: 128,
		prize: "200€"
	},
	{
		id: "5",
		slug: "campeonato-valencia",
		title: "Campeonato Valencia",
		description: "Campeonato regional con clasificación para el torneo nacional",
		date: "2025-04-08",
		time: "10:00",
		type: "presencial",
		location: {
			venue: "Tienda Freaks",
			city: "Valencia"
		},
		image: "/hero-news-2.jpg",
		status: "upcoming",
		participants: 28,
		maxParticipants: 40,
		prize: "350€"
	},
	// Torneos pasados
	{
		id: "6",
		slug: "torneo-invierno-madrid",
		title: "Torneo Invierno Madrid",
		description: "Torneo de invierno con gran participación y partidas épicas",
		date: "2025-02-15",
		time: "10:00",
		type: "presencial",
		location: {
			venue: "Centro Cívico Delicias",
			city: "Madrid"
		},
		image: "/hero-news-3.jpg",
		status: "past",
		participants: 64,
		maxParticipants: 64,
		prize: "500€"
	},
	{
		id: "7",
		slug: "copa-online-febrero",
		title: "Copa Online Febrero",
		description: "Torneo online mensual con gran nivel competitivo",
		date: "2025-02-20",
		time: "19:00",
		type: "online",
		image: "/hero-news-1.jpg",
		status: "past",
		participants: 128,
		maxParticipants: 128,
		prize: "250€"
	},
	{
		id: "8",
		slug: "torneo-sevilla-masters",
		title: "Torneo Sevilla Masters",
		description: "Primer torneo oficial en Sevilla con excelente organización",
		date: "2025-02-10",
		time: "11:00",
		type: "presencial",
		location: {
			venue: "Club de Juegos Sevilla",
			city: "Sevilla"
		},
		image: "/hero-news-2.jpg",
		status: "past",
		participants: 32,
		maxParticipants: 32,
		prize: "300€"
	}
];

// Funciones helper
export const getUpcomingTournaments = () => 
	allTournaments.filter(t => t.status === "upcoming").sort((a, b) => 
		new Date(a.date).getTime() - new Date(b.date).getTime()
	);

export const getPastTournaments = () => 
	allTournaments.filter(t => t.status === "past").sort((a, b) => 
		new Date(b.date).getTime() - new Date(a.date).getTime()
	);
