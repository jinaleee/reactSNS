import './globals.css'
import MenuBar from './menubar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{backgroundColor:'#37303f;', color:'white'}}>
        {children}
        <MenuBar></MenuBar>
      </body>
    </html>
  )
}
