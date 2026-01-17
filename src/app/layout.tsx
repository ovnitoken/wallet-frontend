export const metadata = {
  title: 'OVNI Wallet',
  description: 'OVNI crypto wallet',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body style={{ margin: 0, background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
