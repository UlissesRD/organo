import './Footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/pedro-ulisses-reis-de-dorneles-6047a626b" target="_blank" rel="noreferrer">
                        <img src="/imagens/li.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/UlissesRD" target="_blank" rel="noreferrer">
                        <img src="/imagens/gh.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/pedro_ulissesrd/" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Developed by Pedro Ulisses.
            </p>
        </section>
    </footer>)
}

export default Footer
