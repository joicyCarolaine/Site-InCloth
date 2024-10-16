import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PaymentsLogos from "./PaymentsLogos";


export default function Footer() {
  return (
    <div className="mainMargin">
      <div className="flex flex-wrap justify-between items-center p-10 bg-black mt-10 rounded-3xl">
        <div className="bolded text-3xl xsm:text-4xl text-white mb-10 max-w-[600px]">FIQUE ATUALIZADO SOBRE NOSSAS ÚLTIMAS OFERTAS</div>
        <form className="flex flex-col gap-5 flex-grow" action="">
          <div className="rounded-3xl bg-white p-2 flex w-full">
            <MdOutlineEmail size={25}/>
            <input className=" text-black outline-none ml-2 w-full" placeholder="Insira seu endereço de e-mail"/>
          </div>
          <button type="submit" className="rounded-3xl bg-white p-2 text-black text-center">Assinar Newsletter</button>
        </form>
      </div>
      <footer>
        <div className="flex flex-wrap justify-between mt-10 gap-10">
          <div className="flex-grow flex flex-col gap-10">
            <h1 className="bolded text-3xl">InCloth</h1>
            <p className="max-w-72">Temos roupas Femeninas e Masculinas que combinaram com seu estilo.</p>
            <div className="flex gap-5">
              <FaXTwitter size={25}/>
              <FaFacebook size={25}/>
              <FaInstagram size={25}/>
              <FaGithub size={25}/>
            </div>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-20">Empresa</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Sobre</li>
              <li className="Links">Recursos</li>
              <li className="Links">Trabalhos</li>
              <li className="Links">Carreira</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-24">Ajuda</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Suporte ao cliente</li>
              <li className="Links">Detalhes da entrega</li>
              <li className="Links">Termos e Condições</li>
              <li className="Links">Política de Privacidade</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center">
            <h1 className="font-semibold -ml-24">Perguntas frequentes</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">Conta</li>
              <li className="Links">Gerenciar entregas</li>
              <li className="Links">Pedidos</li>
              <li className="Links">Pagamentos</li>
            </ul>
          </div>
          <div className="flex-grow flex gap-5 flex-col justify-center items-center"> 
            <h1 className="font-semibold -ml-20">Recursos</h1>
            <ul className="flex flex-col gap-5">
              <li className="Links">E-books grátis</li>
              <li className="Links">Tutorial de desenvolvimento</li>
              <li className="Links">Como fazer - Blog</li>
              <li className="Links">Playlist do Youtube</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-y-5 border-t-4 items-center flex-wrap">
          <div className="flex-grow text-center md:text-left">
            InCloth © 2000-2024, Todos os direitos reservados
          </div>
          <div className="w-fit">
            <PaymentsLogos/>
          </div>
        </div>
      </footer>
    </div>
  )
}
