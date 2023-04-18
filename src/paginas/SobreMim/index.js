import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Ricardo Rocha!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? então eu estou muito animado em compartilhar com vocês que sou aluno da AluraOne e estou me tornando um desenvolvedor front-end!
      </p>
      <p className={styles.paragrafo}>
        Minha história na programação começou no ano de 2020, em meio à pandemia, quando decidi buscar uma nova oportunidade no mercado de trabalho. Sempre tive uma paixão antiga pela área de Desenvolvimento Front-End e decidi me dedicar a essa transição de carreira.
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou tendo a oportunidade de me tornar um desenvolvedor completo, com diversas habilidades, graças a uma parceria entre a Alura e a OracleOne. Estou muito empolgado com todo o conhecimento que estou adquirindo e com as possibilidades que se abrem diante de mim nesse ramo tão promissor.
      </p>
      <p className={styles.paragrafo}>
        Além disso, estou bastante satisfeito com o suporte e a qualidade do conteúdo oferecido pela AluraOne. A plataforma de aprendizado é muito intuitiva e os professores são extremamente qualificados e atenciosos. Tenho certeza de que todo o conhecimento que estou adquirindo irá me ajudar a alcançar meus objetivos profissionais e a me destacar no mercado de trabalho.
      </p>
      <p className={styles.paragrafo}>
        Os desafios oferecidos pela plataforma têm sido excelentes para reforçar o conhecimento adquirido nos módulos anteriores. Com muita prática, tenho conseguido consolidar o que aprendi e desenvolver minhas habilidades de programação de forma efetiva.
      </p>
      <p className={styles.paragrafo}>
        Com certeza! Sou imensamente grato à oportunidade que a Alura me proporcionou. O acesso ao conteúdo de qualidade e a possibilidade de me desenvolver como profissional têm sido fundamentais para minha jornada na programação. Agradeço também aos professores pela dedicação. E grato a OracleOne, que tem aberto muitas portas para minha carreira e tantos outros.
      </p>
    </PostModelo>
  )
}