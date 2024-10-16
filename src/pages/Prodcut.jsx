import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Products } from '../store/Constants'
import Page404 from './Page404'
import RateCost from '../components/RateCost'
import { motion } from "framer-motion"
import AddToCart from '../store/AddToCart'
import { CartCtx } from '../store/CartContext'
import HomeSliders from '../components/HomeSliders'
import { IoIosArrowForward } from "react-icons/io";
import Img from '../components/Img'

export default function Prodcut() {
  const [MyProdcut, setMyProdcut] = useState({})
  const { setCart } = useContext(CartCtx)
  const { setCost } = useContext(CartCtx)
  const [Color, setColor] = useState('')
  const [Size, setSize] = useState('Any')
  const [Quantity, setQuantity] = useState(1)
  const { name } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    const test = name.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const Filtered = Products.filter(e => e.type !== 'newarrival' && e.type !== 'topselling' && e.type !== 'onsale')
    const item = Filtered.find(e => e.name.replace(/[^a-zA-Z]/g, '').toLowerCase() === test)
    setMyProdcut(item);
  }, [name])

  const handleSubmit = () => {
    const color = Color === 1 ? 'Yellow' :
      Color === 2 ? 'Red' :
      Color === 3 ? 'Green' :
      Color === 4 ? 'Blue' :
      Color === 5 ? 'Light Yellow' :
      Color === 6 ? 'Light Red' :
      Color === 7 ? 'Light Green' :
      Color === 8 ? 'Light Blue' : 'Any'
    const size = Size;
    AddToCart({ ...MyProdcut, color, size, Quantity }, setCart, setCost)
  }

  const Veri = () => {
    return (
      <div className='flex justify-center items-center'>
        <svg className="text-white w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }

  const handleSizeChanges = (el) => {
    if (el === Size) {
      return () => setSize('')
    }
    return () => setSize(el)
  }

  const handleColorChanges = (el) => {
    if (el === Color) {
      return () => setColor('')
    }
    return () => setColor(el)
  }

  const handleQuantityChange = (num) => {
    return () => {
      if (num === -1 && Quantity === 1) {
        return
      }
      setQuantity(Quantity + num)
    }
  }

  if (!MyProdcut) {
    return <Page404 />
  }

  return (
    <>
      <div className='flex my-5 mainMargin items-center gap-4'>
        <Link to='/' className='text-gray-400'>Inicio</Link>
        <IoIosArrowForward color='gray' />
        <Link to='/Shop' className='text-gray-400'>Loja</Link>
        <IoIosArrowForward color='gray' />
        <p className=''>{MyProdcut.name}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-x-10 mainMargin h-fit'>
        <div className='bg-gray-100 flex-grow rounded-xl flex justify-center '>
          <Img className='w-[80%]' src={MyProdcut.src} alt=''
            img={MyProdcut.src?.split('/').pop().split('.')[0]} />
        </div>
        <div className='relative w-[100%-40px]'>
          <RateCost from='Prodcut' name={MyProdcut.name} stars={MyProdcut.stars} cost={MyProdcut.cost} discount={MyProdcut.discount} />
          <div>
            <div className='mt-10'></div>
            <hr />
            <div className='absolute -translate-y-4 right-10 bg-white'>Selecione a Cor</div>

            <div className='flex flex-wrap gap-3 items-end h-24'>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                onClick={handleColorChanges(1)}
                className='bg-yellow-900 w-8 h-8 rounded-full cursor-pointer'
                title="Marrom Escuro"  // Nome da cor como dica
              >
                {Color === 1 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={handleColorChanges(2)}
                className='bg-red-900 w-8 h-8 rounded-full cursor-pointer'
                title="Vermelho Escuro"  // Nome da cor como dica
              >
                {Color === 2 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={handleColorChanges(3)}
                className='bg-green-900 w-8 h-8 rounded-full cursor-pointer'
                title="Verde Escuro"  // Nome da cor como dica
              >
                {Color === 3 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleColorChanges(4)}
                className='bg-blue-900 w-8 h-8 rounded-full cursor-pointer'
                title="Azul Escuro"  // Nome da cor como dica
              >
                {Color === 4 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleColorChanges(5)}
                className='bg-yellow-500 w-8 h-8 rounded-full cursor-pointer'
                title="Amarelo"  // Nome da cor como dica
              >
                {Color === 5 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleColorChanges(6)}
                className='bg-red-500 w-8 h-8 rounded-full cursor-pointer'
                title="Vermelho Claro"  // Nome da cor como dica
              >
                {Color === 6 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleColorChanges(7)}
                className='bg-green-500 w-8 h-8 rounded-full cursor-pointer'
                title="Verde Claro"  // Nome da cor como dica
              >
                {Color === 7 && <Veri />}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                onClick={handleColorChanges(8)}
                className='bg-blue-500 w-8 h-8 rounded-full cursor-pointer'
                title="Azul Claro"  // Nome da cor como dica
              >
                {Color === 8 && <Veri />}
              </motion.div>
            </div>

            <div className='mt-10'></div>
            <hr />
            <div className='absolute -translate-y-4 right-10 bg-white'>Escolha o tamanho</div>
            <div className='flex flex-wrap gap-4 mt-10'>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }} onClick={handleSizeChanges('SM')} className={`border px-5 py-1 cursor-pointer ${Size === 'SM' ? 'bg-gray-500 text-white border-gray-500' : 'border-black'}`}>
                P
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }} onClick={handleSizeChanges('MD')} className={`border px-5 py-1 cursor-pointer ${Size === 'MD' ? 'bg-gray-500 text-white border-gray-500' : 'border-black'}`}>
                M
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }} onClick={handleSizeChanges('LG')} className={`border px-5 py-1 cursor-pointer ${Size === 'LG' ? 'bg-gray-500 text-white border-gray-500' : 'border-black'}`}>
                G
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -75 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }} onClick={handleSizeChanges('Any')} className={`border px-5 py-1 cursor-pointer ${Size === 'Any' ? 'bg-gray-500 text-white border-gray-500' : 'border-black'}`}>
                GG
              </motion.div>
            </div>

            <div className='mt-10'></div>
            <hr />
            <div className='flex items-center mt-10 gap-2'>
              <div className=''>Quantidade</div>
              <div className='border px-2 cursor-pointer' onClick={handleQuantityChange(-1)}>-</div>
              <div className=''>{Quantity}</div>
              <div className='border px-2 cursor-pointer' onClick={handleQuantityChange(1)}>+</div>
            </div>

            <motion.button
              onClick={handleSubmit}
              initial={{ opacity: 0, x: -75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className='bg-black text-white w-full rounded-full py-3 mt-5'>
              Adicionar ao carrinho
            </motion.button>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <HomeSliders title='It also can like' type={MyProdcut.type} exclude={MyProdcut.id} />
      </div>
    </>
  )
}