export interface NewsArticle {
	slug: string;
	title: string;
	description: string;
	image: string;
	date: string;
	readTime: string;
	tags: string[];
	content: string;
}

export const allNews: NewsArticle[] = [
	{
		slug: "torneo-nacional-2025",
		title: "Nuevo Torneo Nacional Anunciado",
		description: "Se ha anunciado el mayor torneo de Unmatched del año con premios increíbles y participación de los mejores jugadores del país",
		image: "/hero-news-1.jpg",
		date: "2025-03-10",
		readTime: "5 min",
		tags: ["Torneos", "Nacional", "Competitivo"],
		content: `
			<p>El próximo mes de abril se celebrará el torneo nacional más importante del año, con una bolsa de premios que supera los 5.000€ y la participación confirmada de los mejores jugadores del país.</p>
			
			<h2>Detalles del Torneo</h2>
			<p>El evento tendrá lugar en Madrid, en el Centro de Convenciones Internacional, los días 15 y 16 de abril. Se esperan más de 200 participantes de todas las comunidades autónomas.</p>
			
			<h3>Premios</h3>
			<ul>
				<li>1er lugar: 2.500€ + Trofeo</li>
				<li>2do lugar: 1.500€</li>
				<li>3er lugar: 1.000€</li>
				<li>Top 8: Productos oficiales</li>
			</ul>
			
			<h3>Inscripciones</h3>
			<p>Las inscripciones estarán abiertas hasta el 1 de abril. El coste de participación es de 25€ por jugador.</p>
			
			<h2>Formato del Torneo</h2>
			<p>El torneo seguirá el formato suizo de 6 rondas el sábado, seguido de un top 8 de eliminación directa el domingo. Todas las partidas serán mejor de 3 juegos.</p>
		`
	},
	{
		slug: "actualizacion-reglas",
		title: "Actualización de Reglas Oficiales",
		description: "Nuevas reglas oficiales para torneos competitivos que entrarán en vigor el próximo mes",
		image: "/hero-news-2.jpg",
		date: "2025-03-08",
		readTime: "3 min",
		tags: ["Reglas", "Competitivo", "Oficial"],
		content: `
			<p>La organización oficial ha anunciado una actualización importante en las reglas de torneos competitivos que entrará en vigor a partir del 1 de abril.</p>
			
			<h2>Principales Cambios</h2>
			<p>Los cambios más significativos afectan al tiempo de partida y a la gestión de las cartas.</p>
			
			<h3>Tiempo de Partida</h3>
			<p>El tiempo máximo por partida se reduce de 50 a 45 minutos. Esto permitirá agilizar los torneos y evitar retrasos.</p>
			
			<h3>Gestión de Cartas</h3>
			<p>Se introduce un nuevo sistema de verificación de mazos antes de cada ronda para garantizar la integridad del juego.</p>
			
			<h2>Impacto en el Meta</h2>
			<p>Estos cambios favorecerán estrategias más agresivas y penalizarán el juego excesivamente defensivo.</p>
		`
	},
	{
		slug: "entrevista-campeon",
		title: "Entrevista con el Campeón Nacional",
		description: "Hablamos con el ganador del último campeonato sobre estrategias, preparación y sus personajes favoritos",
		image: "/hero-news-3.jpg",
		date: "2025-03-05",
		readTime: "8 min",
		tags: ["Entrevista", "Campeón", "Estrategia"],
		content: `
			<p>Tuvimos la oportunidad de hablar con Carlos Martínez, ganador del último campeonato nacional, sobre su victoria y sus secretos para el éxito.</p>
			
			<h2>La Victoria</h2>
			<p>"Fue increíble. Después de meses de preparación, ver que todo el esfuerzo valió la pena es indescriptible", nos cuenta Carlos.</p>
			
			<h3>Preparación</h3>
			<p>Carlos nos revela que su preparación incluyó:</p>
			<ul>
				<li>Práctica diaria de al menos 2 horas</li>
				<li>Análisis de partidas de los mejores jugadores</li>
				<li>Estudio profundo del meta actual</li>
				<li>Preparación mental y física</li>
			</ul>
			
			<h2>Personajes Favoritos</h2>
			<p>"Mi personaje principal es Beowulf, pero también me siento muy cómodo con Medusa y King Arthur. La clave está en conocer bien tus opciones y adaptarte al rival."</p>
			
			<h3>Consejos para Nuevos Jugadores</h3>
			<p>"Lo más importante es practicar mucho y no tener miedo a perder. Cada derrota es una oportunidad de aprender. También recomiendo unirse a la comunidad, hay mucha gente dispuesta a ayudar."</p>
		`
	},
	{
		slug: "nuevos-personajes",
		title: "Análisis de los Nuevos Personajes",
		description: "Un análisis profundo de los últimos personajes añadidos al juego y cómo impactan en el meta competitivo",
		image: "/hero-news-1.jpg",
		date: "2025-03-01",
		readTime: "10 min",
		tags: ["Personajes", "Meta", "Análisis"],
		content: `
			<p>La última expansión ha traído personajes que están revolucionando el meta competitivo. Analizamos cada uno en detalle.</p>
			
			<h2>Nuevos Personajes</h2>
			<p>Esta expansión incluye 4 nuevos luchadores con mecánicas únicas que cambian la forma de jugar.</p>
			
			<h3>Análisis Individual</h3>
			<p>Cada personaje aporta algo único al juego y requiere estrategias específicas tanto para jugar con ellos como contra ellos.</p>
		`
	},
	{
		slug: "guia-principiantes",
		title: "Guía para Principiantes en Torneos",
		description: "Todo lo que necesitas saber para participar en tu primer torneo de Unmatched",
		image: "/hero-news-2.jpg",
		date: "2025-02-28",
		readTime: "6 min",
		tags: ["Guía", "Principiantes", "Torneos"],
		content: `
			<p>¿Estás pensando en participar en tu primer torneo? Esta guía te ayudará a prepararte y saber qué esperar.</p>
			
			<h2>Antes del Torneo</h2>
			<p>La preparación es clave para disfrutar de la experiencia.</p>
			
			<h3>Qué Llevar</h3>
			<ul>
				<li>Tus personajes y cartas en buen estado</li>
				<li>Dados y tokens necesarios</li>
				<li>Agua y snacks</li>
				<li>Actitud positiva</li>
			</ul>
		`
	},
	{
		slug: "mejores-combos",
		title: "Los 10 Mejores Combos del Meta Actual",
		description: "Descubre las combinaciones de personajes más efectivas en el meta competitivo actual",
		image: "/hero-news-3.jpg",
		date: "2025-02-25",
		readTime: "7 min",
		tags: ["Estrategia", "Meta", "Combos"],
		content: `
			<p>Analizamos las combinaciones de cartas y estrategias más efectivas del meta actual.</p>
			
			<h2>Top 10 Combos</h2>
			<p>Estas son las combinaciones que están dominando los torneos.</p>
		`
	}
];
