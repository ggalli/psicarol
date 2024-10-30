import NextLink from 'next/link';
import Image from "next/image";
import { Header, Accordion, AccordionContent, AccordionItem, AccordionTrigger, Logo } from "./components";
import { MdDevices, MdMailOutline, MdWhatsapp } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_LINK, WPP_LINK, QUESTIONS, TOPICS } from "./utils";
import carolImg from '../../public/images/carol-3.jpg'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero h-screen bg-slate-200 pt-40 border-b-2 border-sand bg-hero-mobile bg-no-repeat bg-cover bg-[80%] md:bg-hero-tablet md:bg-[80%] md:max-h-[662px] lg:bg-[100%] xl:bg-hero-desktop">
          <div className="container">
            <p className="flex flex-col uppercase text-sand tracking-[.25em] mb-2 lg:text-lg lg:flex-row lg:gap-2">
              <span>Carol Godoy</span>
              <span className='hidden lg:inline'>-</span>
              <span>Psicóloga CRP: 06/18333</span>
            </p>
            <h1 className='md:w-4/5'>O passado te condiciona, <br /> mas não te determina</h1>
            <p className="text-dark text-lg mt-4 mb-16 max-w-64 md:max-w-full md:mt-6 md:mb-10">Ajudando a promover qualidade de vida há 7 anos.</p>
            <NextLink href={WPP_LINK} target='_blank' className="btn" aria-label='Entre em contato via WhatsApp'>Entre em contato</NextLink>
          </div>
        </section>

        <section className="md:p-0">
          <div className="container">
            <div className="relative md:-top-20 flex flex-col items-center md:flex-row md:items-start">
              <Image src={carolImg} alt='Foto da psicóloga Carol Godoy sentada em uma cadeira com uma estante com livros atrás' className='md:max-w-[340px] border border-sand' quality={90} priority />

              <div className="p-6 bg-white/40 backdrop-blur-xl border border-sand lg:text-lg">
                <h2 className="mb-6 text-4xl">Sobre mim</h2>
                <p className="mb-4">Sou bacharel em psicologia e ajudo a desenvolver pessoas há sete anos. Minha experiência clínica é pautada nas bases da Análise Existencial e Logoterapia de Viktor Frankl, que se configura pela busca de sentido.</p>
                <p className="mb-4">O passado nos condiciona, mas não nos determina: é a partir dessa premissa que construo  minha caminhada profissional, afinal, sem acreditar que o ser humano tem o poder de reinventar e ressignificar, nenhuma psicoterapia seria justificada.</p>
                <p>Nós somos seres coletivos, mas o sofrimento psíquico é vivenciado de maneira única para cada um, portanto, ainda que levando em conta as influências culturais, históricas e externas, aqui o olhar é voltado para cada história de vida, para além somente dos diagnósticos e rótulos. É sob a luz dessa ótica, que conduzo meus atendimentos, com escuta especializada e cuidadosa, em um espaço de acolhimento seguro, pautado nas normas do sigilo e confidencialidade.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0 lg:pt-14">
          <div className="container">
            <h2 className="text-center mb-14">Por que fazer terapia?</h2>

            <div className="p-6 bg-white border border-sand lg:text-lg">
              <p>Para muito além do tabu, a psicoterapia tem sido evidenciada como fator referência para garantir maior qualidade de vida e para promover saúde. Ela nos ajuda a lidar com traumas, conflitos e situações difíceis em geral, além de promover autoconhecimento e desenvolver a nossa inteligência emocional.</p>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <h2 className="text-center mb-14">Quando fazer terapia?</h2>

            <div className="p-6 bg-white border border-sand lg:text-lg">
              <p>O sofrimento emocional, em suas diversas manifestações, é o motivo que mais leva as pessoas a refletirem sobre a necessidade da psicoterapia, entretanto, ele não é o único. Os motivos podem estar relacionados à busca pelo autoconhecimento, promoção da inteligência emocional, da saúde e do bem-estar em geral, ou até mesmo a um “ultimato” de amigos e familiares para que essa pessoa procure ajuda profissional - e são todos legítimos.</p>
            </div>
          </div>
        </section>

        <section id="temas" className="bg-green border-y-2 border-sand bg-green-plants-mobile bg-no-repeat bg-cover bg-right md:bg-green-plants-tablet md:bg-left lg:bg-green-plants-desktop">
          <div className="container">
            <h2 className="text-center mb-14">Temas abordados</h2>

            <div className="flex flex-wrap justify-center lg:justify-between gap-8">
              {TOPICS.map((topic) => (
                <div key={topic} className="flex justify-center items-center p-6 border border-light/40 bg-white/10 backdrop-blur-lg text-light w-full md:w-72 h-28 justify-self-center">
                  <p className="text-xl lg:text-2xl text-center" dangerouslySetInnerHTML={{ __html: topic }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modalidades">
          <div className="container">
            <h2 className="text-center mb-14">Atendimento online</h2>

            <div className="flex flex-col border border-sand bg-white text-dark md:flex-row">
              <div className="flex justify-center items-center min-h-52 border-b border-sand md:border-0 md:border-r md:w-2/5">
                <MdDevices size={96} />
              </div>

              <div className="md:w-3/5">
                <div className="p-6">
                  <p className="mb-4">O formato online dos atendimentos oferece a liberdade geográfica necessária para que o paciente consiga dar continuidade ao acompanhamento psicológico independente de onde estiver, seja por motivo de viagens, mudança de endereço ou outros. Isso garante uma consistência essencial na frequência dos atendimentos, além de poupar tempo e dinheiro gastos na locomoção até um consultório físico.</p>
                </div>

                <NextLink href={WPP_LINK} target='_blank' className="block uppercase text-sand text-lg text-center tracking-widest p-4 border-t border-sand cursor-pointer hover:bg-sand/10 transition" aria-label='Entre em contato via WhatsApp'>
                  Entre em contato
                </NextLink>
              </div>
            </div>
          </div>
        </section>

        <section id="como-comecar" className="bg-green border-y-2 border-sand bg-green-plants-mobile bg-no-repeat bg-cover bg-right md:bg-green-plants-tablet md:bg-left lg:bg-green-plants-desktop">
          <div className="container">
            <h2 className="text-center mb-14">Como começar?</h2>

            <div className="flex flex-col items-center lg:flex-row">
              <div className="relative p-6 border border-light/40 bg-white/10 backdrop-blur-lg text-light w-full md:w-72 h-52 justify-self-center">
                <p className="text-lg font-bold mb-4">Entrar em contato</p>
                <p>Entre em contato via Whatsapp, ou <NextLink href={WPP_LINK} target='_blank' className='underline' aria-label='Entre em contato via WhatsApp'>clique aqui</NextLink>.</p>
                <span className='absolute bottom-0 right-2 text-[10rem] leading-none text-sand opacity-30'>1</span>
              </div>

              <div className="w-[2px] h-20 bg-light/40 lg:h-[2px] lg:w-auto lg:flex-1"></div>

              <div className="relative p-6 border border-light/40 bg-white/10 backdrop-blur-lg text-light w-full md:w-72 h-52 justify-self-center">
                <p className="text-lg font-bold mb-4">Agendar a sessão de apresentação</p>
                <p>A sessão é gratuita e tem duração média de 30 minutos, servindo para contato inicial e possíveis dúvidas.</p>
                <span className='absolute bottom-0 right-2 text-[10rem] leading-none text-sand opacity-30'>2</span>
              </div>

              <div className="w-[2px] h-20 bg-light/40 lg:h-[2px] lg:w-auto lg:flex-1"></div>

              <div className="relative p-6 border border-light/40 bg-white/10 backdrop-blur-lg text-light w-full md:w-72 h-52 justify-self-center">
                <p className="text-lg font-bold mb-4">Iniciar o acompanhamento</p>
                <p>Se após a apresentação você desejar iniciar o acompanhamento, será feito o agendamento conforme disponibilidade.</p>
                <span className='absolute bottom-0 right-2 text-[10rem] leading-none text-sand opacity-30'>3</span>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas">
          <div className="container">
            <h2 className="text-center mb-14">Dúvidas frequêntes</h2>

            {QUESTIONS.map(({ title, text }, index) => (
              <Accordion type="single" collapsible key={title}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>
                    {title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {text}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>

        <footer className="bg-green text-beige pt-14 pb-2 border-t-2 border-sand">
          <div className="container">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              <div className='border border-beige/40 p-3 w-fit h-fit'>
                <Logo width={120} />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <GrLocation size={24} />
                  <p>São Paulo - SP</p>
                </div>
                <NextLink href={WPP_LINK} target="_blank" className="flex gap-4" aria-label='Entre em contato via WhatsApp'>
                  <MdWhatsapp size={24} />
                  <p>(11) 95437-2430</p>
                </NextLink>
                <NextLink href={INSTAGRAM_LINK} target="_blank" className="flex gap-4">
                  <FiInstagram size={24} />
                  <p>@psicologa.carol</p>
                </NextLink>
                <NextLink href='mailto:psi.carolgodoy@gmail.com' className="flex gap-4">
                  <MdMailOutline size={24} />
                  <p>psi.carolgodoy@gmail.com</p>
                </NextLink>
              </div>
            </div>

            <div className="h-px w-full bg-beige mb-4 mt-10"></div>

            <div className="flex flex-col text-sm text-center md:flex-row md:justify-between">
              <p>&copy; Todos os direitos reservados.</p>
              <p>Desenvolvido por Guilherme Galli</p>
            </div>
          </div>
        </footer>
      </main >
    </>
  )
}
