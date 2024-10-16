import Undraw404 from "../components/Undraw404"
import {Link} from "react-router-dom"
import Reavel from "../Reavel"
import {motion} from "framer-motion"
import Img from "../components/Img"
export default function Page404() {
  return (
    <div className="mainMargin flex-col-reverse lg:flex-row flex items-center">
    <div className="text-center flex flex-col items-center gap-5">
      <Reavel><h1 className="bolded text-4xl xsm:text-5xl">Algo deu errado</h1></Reavel>
      <Reavel><p>Não conseguimos encontrar a página que você está procurando</p></Reavel>
      <Reavel className="p-4"><Link className="btn w-fit" to='/'>Voltar para o inicio</Link></Reavel>
    </div>
      <motion.div
        initial={{opacity:0, y:75}}
        animate={{opacity:1, y:0}} transition={{type:'just'}} 
        className="flex-grow relative w-full nav:w-fit">
          <Img  src="../Undraw404.png" alt="" img="Error" />
      </motion.div>
  </div>
  )
}
