import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Dylan's Portfolio - MrScarySpaceCat",
	description:
		"I am Dylan, a programmer and creator. Explore my portfolio, learn more about my projects, and find out how to reach me!",
	openGraph: {
		siteName: "MrScarySpaceCat's Portfolio",
		title: "Dylan's Portfolio - MrScarySpaceCat",
		description:
			"I am Dylan, a programmer and creator. Explore my portfolio, learn more about my projects, and find out how to reach me!",
		images: [
			{
				url: "https://mrscaryspacecat.dev/img/online-profile.webp",
				width: 1200,
				height: 630,
				alt: "Dylan Online Profile Picture",
				type: "image/webp",
			},
		],
		url: "https://mrscaryspacecat.dev/",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Dylan's Portfolio - MrScarySpaceCat",
		description:
			"I am Dylan, a programmer and creator. Explore my portfolio, learn more about my projects, and find out how to reach me!",
		images: ["https://mrscaryspacecat.dev/img/online-profile.webp"],
		site: "@MrScarySpaceCat",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta name="color-scheme" content="light dark" />
				<link rel="canonical" href="https://mrscaryspacecat.dev/" />
			</head>
			<body>{children}</body>
		</html>
	);
}
