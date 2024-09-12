import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 boredr-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum temporibus sequi voluptate obcaecati quibusdam voluptatem adipisci recusandae commodi odit? Itaque mollitia accusamus eveniet est quaerat libero facilis aspernatur labore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cum dicta hic vero quidem mollitia maiores repudiandae at laborum, pariatur harum sunt odio? Velit quis doloremque obcaecati eaque et beatae!</p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusamus tempore veritatis perferendis autem repudiandae libero et hic pariatur quis? Beatae nemo eveniet, facere id maxime fugiat facilis consequatur? Nesciunt.</p>
        </div>
      </div>

<div className='text-xl py-4'>
  <Title text1={'WHY'} text2={'CHOOSE US'} />
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, earum ea eaque voluptas iste, illum explicabo, voluptatibus sed architecto doloremque modi veniam alias delectus deserunt sit maiores eius optio? Esse?</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, earum ea eaque voluptas iste, illum explicabo, voluptatibus sed architecto doloremque modi veniam alias delectus deserunt sit maiores eius optio? Esse?</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, earum ea eaque voluptas iste, illum explicabo, voluptatibus sed architecto doloremque modi veniam alias delectus deserunt sit maiores eius optio? Esse?</p>
  </div>
</div>

<NewsLetterBox />

    </div>
  )
}

export default About