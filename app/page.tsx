"use client";

// Renamed to index.tsx for Next.js with TypeScript
import { JSX } from "react/jsx-runtime";
import Image from "next/image";

export default function Home(): JSX.Element {
	return (
		<>
			<div className="container">
				{/* Profile Section */}
				<section className="profile">
					<Image
						src="/img/online-profile.webp"
						alt="Online Profile Picture"
						width={150}
						height={150}
						priority
					/>
					<Image
						src="/img/irl-profile.webp"
						alt="IRL Profile Picture"
						width={150}
						height={150}
					/>
				</section>
				<h1>Hi there! 👋</h1>
				<p>I am Dylan, or as the internet knows me, MrScarySpaceCat.</p>
				<h1>About Me</h1>
				<p>
					I am an 18-year-old programmer currently studying Computer Science. I
					primarily work with programming languages such as Python and
					TypeScript.
				</p>
				<p>
					I love hanging out and interacting with my friends, both online and in
					real life. Even though I&apos;m an introvert, I enjoy talking to and
					spending time with my friends. Whether I&apos;m playing video games
					like Garry&apos;s Mod, 7 Days to Die, Minecraft, or Roblox with my
					online friends, or hanging out with my reallife friends by the pool or
					exploring around our hometown, I always look forward to connecting and
					having fun.
				</p>
				<h1>Projects</h1>
				<div className="projects">
					<div className="project-card">
						<h2>Agent Kitten</h2>
						<p>
							A Discord bot that uses Qwen2.5, an open-source large language
							model, to interact with users. It can also play music.
						</p>
						<a
							href="https://agentkitten.com/"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							Check It Out
						</a>
					</div>
					<div className="project-card">
						<h2>ClowderTech</h2>
						<p>
							My company under which I put most of the projects that I make. I
							have some friends who help out in the company as well.
						</p>
						<a
							href="https://clowdertech.com/"
							className="button"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn More
						</a>
					</div>
				</div>
				<h1>Socials</h1>
				<p>
					Feel free to reach out to me through the following platforms. I will
					likely only respond if you DM me on Discord or shoot me an email.
				</p>
				<div className="social-links">
					<a
						href="https://www.instagram.com/wo.shi.dylan/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://simpleicons.org/icons/instagram.svg"
							alt="IRL Instagram"
							width={40}
							height={40}
						/>
					</a>
					<a
						href="https://www.instagram.com/mrscaryspacecat/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://simpleicons.org/icons/instagram.svg"
							alt="Online Instagram"
							width={40}
							height={40}
						/>
					</a>
					<a
						href="https://github.com/MrScarySpaceCat"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://simpleicons.org/icons/github.svg"
							alt="GitHub"
							width={40}
							height={40}
						/>
					</a>
					<a
						href="https://discord.com/users/1250923829761675336"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://simpleicons.org/icons/discord.svg"
							alt="Discord User"
							width={40}
							height={40}
						/>
					</a>
					<a
						href="mailto:me@mrscaryspacecat.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="https://simpleicons.org/icons/gmail.svg"
							alt="Email"
							width={40}
							height={40}
						/>
					</a>
				</div>
				<h1>Credits</h1>
				<p>
					Thank you to my friend{" "}
					<a
						href="https://dasunnydora.art/"
						target="_blank"
						rel="noopener noreferrer"
					>
						DaSunnyDora
					</a>{" "}
					for making my profile picture.
				</p>
			</div>
		</>
	);
}
