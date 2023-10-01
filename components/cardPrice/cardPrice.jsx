
import Link from 'next/link'

const CardPrice = ({img, price, flets}) => {
  return (
    <div className='rounded-xl border-2 flex flex-col items-center max-w-xs py-5 justify-between'>
      <img src={img.src} alt={img.src} />
      <div className='mt-6 text-2xl'>
        <span className='text-4xl'>{price}</span>/в месяц
      </div>
      <div className='mt-6 flex flex-col items-center text-xl'>
        <p>{flets} квартир</p>
        <p>в обслуживаемом фонде.</p>
      </div>
      <div className='mt-10'>
        <Link className='rounded-xl border-2 flex h-12 px-4 items-center justify-center' href='/contacts'>Связаться с нами</Link>
      </div>
    </div>
  )
}

export default CardPrice
