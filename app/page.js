
import Image from 'next/image'
import styles from './styles/home.module.css'
import Button from './components/buttons/Button'
import Carrousel from './components/carrousel/Carrousel/Carrousel'




export default function Home() {


  return (
    <main>
      <section id='banner' className={`${styles.banner} bg-black text-white`}>
        <div className={styles.col}>
          <div className={`${styles.texts} `}>
            <h3 className='text-xl'>Olá, sou Vinicius Henrique</h3>
            <h1 className='text-3xl font-bold'>Eu Transformo <strong className='text-cyan-400'>Problemas </strong>em ideias lucrativas por meio do <strong className='text-cyan-400'>Design</strong > e <strong className='text-cyan-400'>Código</strong>.</h1>
            <p className='text-lg font-display font-400'>Como um desenvolvedor Fullstack UX Designer posso
projetar soluções end-to-end, desde a concepção de uma ideia e validação no mercado (UX Design & Research) até na construção do produto final (ReactJS & Java Spring Boot).</p>
          </div>
          <div className={styles.buttons}>
            <Button icon="true" style='ghost'>Curriculo</Button>
            <Button  icon="true" style='line'>Projetos</Button>
          </div>
        </div>
      
        <div className={styles.col}>
         <Image style={{borderRadius:'50%'}} src={require('../public/images/picture.jpg')}></Image>
        </div>
      </section>
      <section className='carrousel'>
        <Carrousel></Carrousel>
      </section>
    </main>
  )
}
