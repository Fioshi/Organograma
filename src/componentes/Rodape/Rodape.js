import "./Rodape.css"

export const Rodape = () => {
    return (
        <footer className="footer">
            <section className="footer__conteudo">
                <div className="footer__conteudo-links">
                    <a href="#1" target="__blank" ><img src="./imgs/fb.png" className="links" alt=""></img></a>
                    <a href="#2" target="__blank" ><img src="./imgs/tw.png" className="links" alt=""></img></a>
                    <a href="#3" target="__blank" ><img src="./imgs/ig.png" className="links" alt=""></img></a>
                </div>
                <div className="footer__conteudo-logo">
                    <img src="./imgs/logo.png" alt=""></img>
                </div>
                <div>
                    <p className="footer__conteudo-texto">
                        Desenvolvido por Alura/Fioshi
                    </p>
                </div>
            </section>
        </footer>
    )
}
