
import Image from 'next/image'
import styles from './styles/home.module.css'
import Button from './components/buttons/Button'
import Carrousel from './components/carrousel/Carrousel/Carrousel'
import Link from 'next/link'
import SlideIn from './components/motion/slideIn/SlideIn'
import SlideFadeAnimation from './components/motion/slideIn/SlideIn'
import FadeInAnimation from './components/motion/fadeIn/FadeIn'







export default function Home() {

  return (
    <main className={styles.main}>

        <div className={styles.background}>
      <section id='banner' className={`${styles.banner} bg-black text-white`}>

            
            <div className={styles.col}>
              <FadeInAnimation>

              <div className={`${styles.texts} `}>
                <h3 className='text-xl'>Olá, sou Vinicius Henrique</h3>
                <h1 className='text-3xl font-bold'>Eu Transformo <strong className='text-cyan-400'>Problemas </strong>em ideias lucrativas por meio do <strong className='text-cyan-400'>Design</strong > e <strong className='text-cyan-400'>Código</strong>.</h1>
                <p className='text-lg font-display font-400'>Como um desenvolvedor Fullstack UX Designer posso
    projetar soluções end-to-end, desde a concepção de uma ideia e validação no mercado (UX Design & Research) até na construção do produto final (ReactJS & Java Spring Boot).</p>
              </div>
              <div className={styles.buttons}>

              <Link target='_blank' href='https://pdfhost.io/v/Q1~2mxx8L_Vinicius_Henrique_Frontend'><Button icon="true" style='ghost'>Curriculo</Button></Link>
              <Link href='/projects/'><Button  icon="true" style='line'>Projetos</Button></Link>


              </div>
              </FadeInAnimation>
            </div>

          
            <div className={styles.col}>
            <FadeInAnimation direction='left'>
            <Image style={{borderRadius:'50%'}} src={require('../public/images/picture.jpg')}></Image>

            </FadeInAnimation>
            </div>
      </section>
        </div>
      <section className='carrousel'>
        <Carrousel></Carrousel>
      </section>
      <div class={styles.backgroundVideo}>
        <video loop autoplay="true" playsinline="true" muted="true" data-video-player-target="player"  src="https://static.vecteezy.com/system/resources/previews/002/015/336/mp4/binary-code-with-numbers-moving-downward-on-screen-free-video.mp4" type="video/mp4">
        </video>
        </div>
    </main>
  )
}
