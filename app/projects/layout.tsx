export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-zinc-700/20 via-zinc-700/0 to-black ">
			{children}
		</div>
	);
}
