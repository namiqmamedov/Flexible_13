import './globals.css'

export const metadata = {
    title: 'Flexxible',
    description: 'Showcase and discover remerable developer projects'
}

export default function RootLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                Navbar
                <main>
                   {children}
                </main>
                Footer
                {children}
            </body>
        </html>
    )
}