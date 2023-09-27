import Sidebar from "../components/sidebar/Sidebar"
import SidebarMobile from "../components/sidebar/SidebarMobile"
import SidebarInformer from "../components/sidebar/SidebarInformer"

export default function Home() {
  return (

        <article className='bg-white rounded-lg p-2 lg:p-6 w-full'>
          <h1 className='text-center text-xl font-bold mb-3 lg:text-4xl lg:mb-6'>
            Добро пожаловать, уважаемые Друзья и Коллеги!
          </h1>
          <p className='mb-3 indent-5 lg:text-xl lg:mb-6 lg:leading-8'>
            Рады Вас приветствовать на web-сайте нашего проекта. Рискнем
            предположить, что если Вы нас посетили, то Ваша деятельность
            каким-то образом связано со сферой жилищно-коммунального хозяйства.
            Возможно, Вы руководитель управляющей организации, председатель ТСЖ
            (ТСН, ЖСК и т.п.) либо иное заинтересованное лицо. Как бы там ни
            было, надеемся, что на нашем портале Вы сможете найти то, что
            искали, и мы сможем разрешить Ваши проблемы.
          </p>
          <p className='indent-5 lg:text-xl lg:leading-8'>
            В связи с чем, рекомендуем Вам ознакомиться с перечнем услуг,
            предоставляемых нашей организацией, и, если Вас что-либо
            заинтересует, свяжитесь с нами по реквизитам, размещенных в разделе
            «Контакты».
          </p>
        </article>

  )
}
