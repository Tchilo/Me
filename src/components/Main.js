import code from '../assets/code.svg'

const Main = () => {
  return (
    <div id='Home' className=" container mx-auto w-full h-screentext-center pt-40 flex items-center">
      <div className='max-w-[1240px] w-full h-full mx-auto p-5 flex justify-center items-center flex-col text-center'>
        <h1 className='mb-6 text-6xl bg-gradient-to-r from-red-500 to-purple-300 text-transparent bg-clip-text'>Hello, I&apos;m <span className="text-blue-400"> Taro</span><br /> Full-stack Software Engineer
</h1>
        <p className='max-w-[500px]'>I can build you fully responsive websites </p>
        <div className='mt-10'>
          {/* <p className='uppercase text-blue-500 tracking-widest'>Let&apos;s connect</p> */}
          {/* <ul className='flex items-center justify-between mt-4 md:w-[80%] gap-5'>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <a href='https://www.linkedin.com/in/taro-chilongoshi/' target='_blank'>
                
                  <FaLinkedinIn size={25} />
                
              </a>
            </li>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <a href='https://twitter.com/tchiloross' target='_blank'>
                  <AiOutlineTwitter size={25} />
              </a>
            </li>
            <li className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
              <a href='mailto:tchiloross@gmail.com' target='_blank'>
                  <AiOutlineMail size={25} />
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div>
        <img src={code} alt="" />
      </div>
    </div>
  )
}

export default Main
