import video from "../images/videomobile.mp4";
import './styles.css'

function Objetivos() {
    return (
        <div className="objtivos-container">

            <div className="objetivos-left">
                <p>Ei, você! Cansado de gastar uma fortuna em pacotes turísticos?<br /><br />

                    Com o Guiede, você tem todas as informações de que precisa para aproveitar ao máximo sua viagem sem pagar caro. Nosso software foi desenvolvido para ajudar turistas (nacionais e internacionais) e residentes de Manaus a explorar a cidade de forma prática e rápida.

                    <br /><br /><br />Escolha a cidade que deseja conhecer e tenha, na palma da sua mão, todos os pontos turísticos, restaurantes, opções de lazer e serviços públicos, com descrições detalhadas e localização precisa.

                </p>
            </div>

            <div className="objetivos-right">
                <video
                    src={video}
                    alt="Logo"
                    controls
                    autoplay
                    style={{
                        marginTop: '30px',
                        width: '350px',
                        height: 'auto',
                        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)', // Adiciona a sombra ao vídeo
                        borderRadius: '3px', // Opcional: Adiciona bordas arredondadas
                        overflow: 'hidden', // Garante que as bordas arredondadas apareçam
                    }}
                ></video>
            </div>

        </div>
    );
}

export default Objetivos;
