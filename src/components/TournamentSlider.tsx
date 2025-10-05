import { useState } from 'react';
import { Carousel } from '@ark-ui/react/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Tournament {
	id: string;
	title: string;
	date: string;
	time: string;
	type: 'presencial' | 'online';
	location?: {
		venue: string;
		city: string;
	};
	image: string;
}

interface Props {
	tournaments: Tournament[];
}

export const TournamentSlider = ({ tournaments }: Props) => {
	const [filter, setFilter] = useState<'all' | 'online' | 'presencial'>('all');
	const [locationFilter, setLocationFilter] = useState<string>('all');

	// Obtener ciudades únicas
	const cities = ['all', ...new Set(
		tournaments
			.filter(t => t.type === 'presencial' && t.location?.city)
			.map(t => t.location!.city)
	)];

	// Filtrar torneos
	const filteredTournaments = tournaments.filter(tournament => {
		const typeMatch = filter === 'all' || tournament.type === filter;
		const locationMatch = locationFilter === 'all' || tournament.location?.city === locationFilter;
		return typeMatch && locationMatch;
	});

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('es-ES', { 
			day: 'numeric', 
			month: 'short',
			year: 'numeric'
		});
	}

	return (
		<div className="space-y-6">
			{/* Filtros */}
			<div className="flex flex-wrap gap-4 items-center">
				<div className="flex gap-2">
					<button
						onClick={() => setFilter('all')}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
							filter === 'all'
								? 'bg-primary text-primary-foreground shadow-[0_0_15px_hsl(151_100%_50%/0.3)]'
								: 'bg-card border border-border hover:border-primary/50'
						}`}
					>
						Todos
					</button>
					<button
						onClick={() => setFilter('online')}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
							filter === 'online'
								? 'bg-primary text-primary-foreground shadow-[0_0_15px_hsl(151_100%_50%/0.3)]'
								: 'bg-card border border-border hover:border-primary/50'
						}`}
					>
						🌐 Online
					</button>
					<button
						onClick={() => setFilter('presencial')}
						className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
							filter === 'presencial'
								? 'bg-primary text-primary-foreground shadow-[0_0_15px_hsl(151_100%_50%/0.3)]'
								: 'bg-card border border-border hover:border-primary/50'
						}`}
					>
						📍 Presencial
					</button>
				</div>

				{/* Filtro de ubicación */}
				{filter !== 'online' && (
					<select
						value={locationFilter}
						onChange={(e) => setLocationFilter(e.target.value)}
						className="px-4 py-2 rounded-lg text-sm font-medium bg-card border border-border hover:border-primary/50 transition-all"
					>
						<option value="all">Todas las ubicaciones</option>
						{cities.filter(city => city !== 'all').map(city => (
							<option key={city} value={city}>{city}</option>
						))}
					</select>
				)}
			</div>

			{/* Carousel de Ark UI */}
			<Carousel.Root 
				slideCount={filteredTournaments.length}
				slidesPerPage={3}
				spacing="8px"
				allowMouseDrag
				className="relative"
			>
				<Carousel.Control className="flex items-center justify-end gap-2 mb-4">
					<Carousel.PrevTrigger className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
						<ChevronLeft className="h-5 w-5" />
					</Carousel.PrevTrigger>
					<Carousel.NextTrigger className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
						<ChevronRight className="h-5 w-5" />
					</Carousel.NextTrigger>
				</Carousel.Control>

				<Carousel.ItemGroup className="flex gap-2">
					{filteredTournaments.map((tournament, index) => (
						<Carousel.Item key={tournament.id} index={index} className="flex-shrink-0">
							<div className="group relative bg-card border border-border rounded-lg overflow-hidden hover-lift flex h-40 w-full">
								{/* Imagen diagonal a la izquierda */}
								<div className="relative w-32 flex-shrink-0 overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
									<img 
										src={tournament.image} 
										alt={tournament.title}
										className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
										style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
									/>
								</div>

								{/* Contenido */}
								<div className="flex-1 p-4 flex flex-col justify-between">
									<div>
										<h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
											{tournament.title}
										</h3>
										
										<div className="space-y-1 text-xs text-muted-foreground">
											<div className="flex items-center gap-2">
												<span className="text-primary">📅</span>
												<span>{formatDate(tournament.date)} • {tournament.time}</span>
											</div>
											
											<div className="flex items-center gap-2">
												{tournament.type === 'presencial' ? (
													<>
														<span className="text-primary">📍</span>
														<span className="truncate">{tournament.location?.city}</span>
													</>
												) : (
													<>
														<span className="text-primary">🌐</span>
														<span>Online</span>
													</>
												)}
											</div>
										</div>
									</div>

									<div className="flex items-center justify-between mt-2">
										<span className={`text-xs px-2 py-1 rounded ${tournament.type === 'online' ? 'bg-primary/10 text-primary' : 'bg-secondary text-secondary-foreground'}`}>
											{tournament.type === 'online' ? 'Online' : 'Presencial'}
										</span>
										<a href="#" className="text-xs text-primary hover:underline font-medium">
											Ver más →
										</a>
									</div>
								</div>
							</div>
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
			</Carousel.Root>

			{filteredTournaments.length === 0 && (
				<div className="text-center py-12 text-muted-foreground">
					No se encontraron torneos con los filtros seleccionados
				</div>
			)}
		</div>
	);
};
