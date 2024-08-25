import './global.css';  // Ensure the path to global.css is correct
import SessionWrapper from '../components/SessionWrapper';

export const metadata = {
  title: 'myfastx ',
};

export const viewport = 'minimum-scale=1, initial-scale=1, width=device-width';
<meta name="viewport" content={viewport} />
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* <head>
            <title>{metadata.title}</title>
            
        </head> */}
      <body>
        <SessionWrapper>
        {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
