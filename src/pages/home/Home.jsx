import React from 'react'
import { Header } from '../../components/export'

const Home = () => {
  return (
    <>
        <Header />
        <div className='container flex justify-center px-[10%]'>
          {/* right div */}
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora numquam quo? Corrupti a sapiente nisi alias, quidem, veritatis incidunt non harum fugiat tempore sunt magnam, amet qui cupiditate tenetur?
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nam illum eligendi repellat dolorem asperiores beatae. Iure nemo dignissimos deleniti amet placeat ab dolore, id praesentium voluptates maiores quasi dolor!</p>
          </div>
          {/* left div */}
          <div className='w-2/3'> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis earum atque deleniti enim veniam illo voluptatem, eum ut corporis repudiandae eveniet facilis eligendi. Quidem consequatur unde ipsum consectetur nobis!</p>
          </div>
        </div>
    </>
  )
}

export default Home