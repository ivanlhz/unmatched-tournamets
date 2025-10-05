import { Dialog } from '@ark-ui/react/dialog';
import { Menu, X, Trophy, Newspaper, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Portal } from '@ark-ui/react/portal';

export function MobileMenu() {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-5 w-5" />
				</Button>
			</Dialog.Trigger>
			
			<Portal>
				<Dialog.Backdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
				
				<Dialog.Positioner className="fixed inset-y-0 right-0 z-50 flex items-stretch">
					<Dialog.Content className="w-[280px] bg-background border-l border-border shadow-2xl flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
						{/* Header */}
						<div className="flex items-center justify-between p-6 border-b border-border">
							<Dialog.Title className="text-2xl font-bold text-primary drop-shadow-[0_0_8px_hsl(151_100%_50%/0.8)]">
								UT
							</Dialog.Title>
							<Dialog.CloseTrigger asChild>
								<button className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group">
									<X className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
								</button>
							</Dialog.CloseTrigger>
						</div>
						
						{/* Navigation */}
						<nav className="flex-1 p-4 space-y-1">
							<a 
								href="/tournaments" 
								className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group hover:shadow-[0_0_15px_hsl(151_100%_50%/0.2)] hover:border hover:border-primary/20"
							>
								<Trophy className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
								<span className="font-medium text-foreground group-hover:text-primary transition-colors">Torneos</span>
							</a>
							
							<a 
								href="/news" 
								className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group hover:shadow-[0_0_15px_hsl(151_100%_50%/0.2)] hover:border hover:border-primary/20"
							>
								<Newspaper className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
								<span className="font-medium text-foreground group-hover:text-primary transition-colors">Noticias</span>
							</a>
							
							<a 
								href="/dashboard/organizer" 
								className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group hover:shadow-[0_0_15px_hsl(151_100%_50%/0.2)] hover:border hover:border-primary/20"
							>
								<Calendar className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
								<span className="font-medium text-foreground group-hover:text-primary transition-colors">Organizar</span>
							</a>
						</nav>
						
						{/* Footer */}
						<div className="p-6 border-t border-border">
							<Button className="w-full hover:shadow-[0_0_25px_hsl(151_100%_50%/0.5)] transition-all duration-300">
								Acceder
							</Button>
						</div>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}
