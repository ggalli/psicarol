import Image from "next/image";
import { Header, Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components";
import { MdDevices, MdMailOutline, MdWhatsapp } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="h-screen bg-slate-200 pt-40 border-b border-sand">
          <div className="container">
            <p className="uppercase text-sand tracking-[.25em] mb-2">Psicóloga CRP: 12/12345</p>
            <h1>Carol Godoy</h1>
            <p className="text-dark mt-10 mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit.</p>
            <button className="button">Entre em contato</button>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="flex flex-col border border-sand">
              <Image src="" alt="Foto da Carol Godoy" className="w-full h-[360px] border-b border-sand bg-slate-300" />

              <div className="p-6 bg-white/70 backdrop-blur-xl text-lg">
                <h2 className="mb-6">Sobre mim</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center mb-8">A importância da psicoterapia</h2>

            <div className="p-6 bg-white border border-sand text-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center mb-8">Quando fazer terapia?</h2>

            <div className="p-6 bg-white border border-sand text-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus iaculis, ut hendrerit metus scelerisque.</p>
            </div>
          </div>
        </section>

        <section className="bg-green">
          <div className="container">
            <h2 className="text-center mb-8">Temas abordados</h2>

            <div className="grid grid-cols-1 gap-8">
              {Array.from(Array(6)).map((i, j) => (
                <div key={j} className="p-6 border border-light/40 bg-white/25 backdrop-blur-lg text-light">
                  <p className="text-lg font-bold mb-4">Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center mb-8">Modalidades de atendimento</h2>

            <div className="flex flex-col border border-sand bg-white text-dark">
              <div className="flex justify-center items-center min-h-52 border-b border-sand">
                <MdDevices size={96} />
              </div>

              <div>
                <div className="p-6">
                  <p className="text-xl font-bold mb-4">Online</p>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sem et metus.</p>
                </div>

                <div className="uppercase text-sand text-lg text-center tracking-widest p-4 border-t border-sand cursor-pointer">
                  Entre em contato
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="text-center mb-8">Dúvidas frequentes</h2>

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

        <footer className="bg-green text-beige pt-14 pb-2">
          <div className="container">
            <div className="flex flex-col gap-10">
              <div className="w-32 h-32 bg-slate-300 border border-sand"></div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <GrLocation size={24} />
                  <p>São Paulo - SP</p>
                </div>
                <div className="flex gap-4">
                  <MdWhatsapp size={24} />
                  <p>(11) 91234-1234</p>
                </div>
                <div className="flex gap-4">
                  <MdMailOutline size={24} />
                  <p>psi.carolgodoy@gmail.com</p>
                </div>
                <div className="flex gap-4">
                  <FiInstagram size={24} />
                  <p>@psicologa.carol</p>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-beige mb-4 mt-10"></div>

            <p className="text-sm text-center">Todos os direitos reservados. <br /> Desenvolvido por Guilherme Galli </p>
          </div>
        </footer>
      </main>
    </>
  )
}
