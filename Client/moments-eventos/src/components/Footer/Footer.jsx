import React from 'react';

function Footer() {
    return (
        <div className="footer-basic">
            <footer className="footer-basic" style={{ position: 'relative', bottom: 0, left: 0, width: '100%', backgroundColor: 'black', color: '#4b4c4d', padding: '10px 0', textAlign: 'center' }}>
                <div className="social text-center">
                    <a href="https://github.com/MicaListe/Moments" target='_blank' className="btn" style={{color: 'gray', marginRight: '10px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>
                    <a href="#" className="btn" style={{color: 'gray'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                        </svg>
                    </a>
                </div>
                <ul className="list-inline" style={{ padding: '0', listStyle: 'none', fontSize: '14px', lineHeight: '1.6', marginBottom: '5px' }}>
                    <li className="list-inline-item" style={{ margin: '0 10px' }}><a href="#" className="text-white" style={{ color:'inherit', textDecoration: 'none' }}>Calendario</a></li>
                    <li className="list-inline-item" style={{ margin: '0 10px' }}><a href="#" className="text-white" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre Nosotros</a></li>
                    <li className="list-inline-item" style={{ margin: '0 10px' }}><a href="#" className="text-white" style={{ color: 'inherit', textDecoration: 'none' }}>Equipo</a></li>
                    <li className="list-inline-item" style={{ margin: '0 10px' }}><a href="#" className="text-white" style={{ color: 'inherit', textDecoration: 'none' }}>Nuestras Sucursales</a></li>
                </ul>
                <p className="text-center text-white" style={{ fontSize: '12px', color: '#fff', marginBottom: '0' }}>Moments Events © 2024</p>
            </footer>
        </div>
    );
}

export default Footer;
