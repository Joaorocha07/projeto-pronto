'use client'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../styles/home.module.css";
import joao from "../../public/pessoas/joao.png";
import samuel from "../../public/pessoas/samuel.png";
import arthur from "../../public/pessoas/arthur.png";
import marcos from "../../public/pessoas/marcos.png";
import brennda from "../../public/pessoas/brennda.png";
import monique from "../../public/pessoas/monique.png";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.center}>
          <div className={styles.logo}>
            <Image 
              src={logo} 
              alt="logo" 
              height={140} 
              width={140} 
            />
          </div> 
          <div className={styles.menu}>
            <Link className={styles.a} href="/login">Login</Link>
            <Link className={styles.a} href="/cadastro">Cadastre-se</Link>
          </div> 
        </div> 
      </header>
      <section className={styles.sobre}>
        <div className={styles.extras}>
          <Image 
              src={logo} 
              alt="logo" 
              height={600} 
              width={600} 
            />
            <div className={styles.social}>
              <FacebookIcon className={styles.icons} />
              <InstagramIcon className={styles.icons} />
              <GitHubIcon className={styles.icons} />
            </div>
        </div>
        <div className={styles.center}>
          <div className={styles.textoSobre}>
            <h1 className={styles.h1}>
              Task Hive <br /> Gerenciador de
              <span style={{ color: "purple" }}> tarefas </span>
            </h1> 
            <p className={styles.p}>
              Nosso aplicativo é uma ferramenta essencial para otimizar a produtividade e manter a vida organizada. Com a capacidade de criar listas de afazeres, estabelecer prioridades e definir prazos, ele simplifica as demandas diárias, permitindo que você se concentre no que realmente importa. 
            </p>
          </div>
        </div>
        <div className={styles.grupo}>
          <div className={styles.circle}>
            <Image 
              className={styles.grupoBox}
              src={joao} 
              alt="joao" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
        <div className={styles.grupo1}>
          <div className={styles.circle1}>
            <Image 
              className={styles.grupoBox}
              src={samuel} 
              alt="samuel" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
        <div className={styles.grupo2}>
          <div className={styles.circle2}>
            <Image 
              className={styles.grupoBox}
              src={marcos} 
              alt="marcos" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
        <div className={styles.grupo3}>
          <div className={styles.circle3}>
            <Image 
              className={styles.grupoBox}
              src={arthur} 
              alt="arthur" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
        <div className={styles.grupo4}>
          <div className={styles.circle4}>
            <Image 
              className={styles.grupoBox}
              src={brennda} 
              alt="brennda" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
        <div className={styles.grupo5}>
          <div className={styles.circle5}>
            <Image 
              className={styles.grupoBox}
              src={monique} 
              alt="monique" 
              height={120} 
              width={120} 
            />
          </div>
        </div>
      </section>
    </>
  )
}
