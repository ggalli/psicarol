import Image from "next/image";
import NextLink from 'next/link';
import { Header, Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components";
import { MdDevices, MdMailOutline, MdWhatsapp } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_LINK, WPP_LINK } from "./utils";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero h-screen bg-slate-200 pt-40 border-b-2 border-sand bg-hero-mobile bg-no-repeat bg-cover bg-fixed bg-[80%] md:bg-hero-tablet md:bg-[80%] md:max-h-[662px] lg:bg-[100%] xl:bg-hero-desktop">
          <div className="container">
            <p className="uppercase text-sand tracking-[.25em] mb-2 lg:text-lg">Psicóloga CRP: 12/12345</p>
            <h1>Carol Godoy</h1>
            <p className="text-dark mt-10 mb-16 max-w-96 md:mt-6 md:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit.</p>
            <NextLink href={WPP_LINK} className="button">Entre em contato</NextLink>
          </div>
        </section>

        <section className="md:p-0">
          <div className="container">
            <div className="flex flex-col border border-sand relative md:-top-20 md:flex-row">
              <Image src="" alt="Foto da Carol Godoy" className="w-full min-h-[360px] border-b border-sand bg-slate-300 md:border-0 md:border-r md:w-2/5" />

              <div className="p-6 bg-white/40 backdrop-blur-xl lg:text-lg md:w-3/5">
                <h3 className="mb-6">Sobre mim</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0 lg:pt-14">
          <div className="container">
            <h2 className="text-center mb-14">A importância da psicoterapia</h2>

            <div className="p-6 bg-white border border-sand lg:text-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
            </div>
          </div>
        </section>

        <section className="pt-0">
          <div className="container">
            <h2 className="text-center mb-14">Quando fazer terapia?</h2>

            <div className="p-6 bg-white border border-sand lg:text-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
            </div>
          </div>
        </section>

        <section id="temas" className="bg-green border-y-2 border-sand bg-green-plants-mobile bg-no-repeat bg-cover bg-right bg-fixed md:bg-green-plants-tablet md:bg-left lg:bg-green-plants-desktop">
          <div className="container">
            <h2 className="text-center mb-14">Temas abordados</h2>

            <div className="flex flex-wrap justify-center lg:justify-between gap-8">
              {Array.from(Array(6)).map((i, j) => (
                <div key={j} className="p-6 border border-light/40 bg-white/20 backdrop-blur-lg text-light md:max-w-72 justify-self-center">
                  <p className="text-lg font-bold mb-4">Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modalidades" className="pb-0">
          <div className="container">
            <h2 className="text-center mb-14">Modalidades de atendimento</h2>

            <div className="flex flex-col border border-sand bg-white text-dark md:flex-row">
              <div className="flex justify-center items-center min-h-52 border-b border-sand md:border-0 md:border-r md:w-2/5">
                <MdDevices size={96} />
              </div>

              <div className="md:w-3/5">
                <div className="p-6">
                  <p className="text-xl font-bold mb-4">Online</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                </div>

                <NextLink href={WPP_LINK} className="block uppercase text-sand text-lg text-center tracking-widest p-4 border-t border-sand cursor-pointer hover:bg-sand/10 transition">
                  Entre em contato
                </NextLink>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas">
          <div className="container">
            <h2 className="text-center mb-14">Dúvidas frequentes</h2>

            {Array.from(Array(5)).map((i, j) => (
              <Accordion type="single" collapsible key={j}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Lorem ipsum dolor sit amet
                  </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>

        <footer className="bg-green text-beige pt-14 pb-2 border-t-2 border-sand">
          <div className="container">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
              <div className="w-32 h-32 bg-slate-300 border border-sand"></div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <GrLocation size={24} />
                  <p>São Paulo - SP</p>
                </div>
                <NextLink href={WPP_LINK} target="_blank" className="flex gap-4">
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
              <p>Todos os direitos reservados.</p>
              <p>Desenvolvido por Guilherme Galli</p>
            </div>
          </div>
        </footer>
      </main >
    </>
  )
}
