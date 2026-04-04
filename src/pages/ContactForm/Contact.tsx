import { BsArrowRight } from 'react-icons/bs';
import ContactForm from './ContactForm';
import SocialMedia from './SocailMedia';

export default function Contact() {
  return (
    <>
      {/* Laptop Screen */}
      <section className="hidden lg:flex items-center h-screen">
        <section className="w-1/2 p-8 pr-24 flex justify-end items-center">
          <div className="flex flex-col items-center">
            <p className="text-lg text-slate-900 dark:text-slate-100">
              Let’s make something new, different, and more meaningful or think more visual or conceptual?
              <br/>
              <span className='text-2xl mt-2 animate-bounce text-emerald-500'>Just say hello!</span>
            </p>
            <span className='text-4xl mt-4 text-slate-900 dark:text-slate-100'><BsArrowRight /></span>
          </div>
        </section>
        <section className="w-1/2 bg-white dark:bg-slate-950/90 p-6 rounded-3xl shadow-xl dark:shadow-black/20">
          <ContactForm />
        </section>
      </section>

      {/* Mobile Screen */}
      <main className="flex flex-col items-center justify-center lg:hidden bg-white dark:bg-slate-950/90">
        <section className="w-full p-8 text-center">
          <div className="flex flex-col items-center">
            <p className="text-lg text-slate-900 dark:text-slate-100">
              Let’s make something new, different, and more meaningful or think more visual or conceptual?
              <span className='text-2xl mt-2 animate-bounce text-emerald-500'>Just say hello!</span>
            </p>
            <span className='text-4xl mt-4 text-slate-900 dark:text-slate-100'><BsArrowRight /></span>
          </div>
        </section>
        <section className="w-full px-4 pb-8">
          <div className="bg-white dark:bg-slate-950/90 p-6 rounded-3xl shadow-xl dark:shadow-black/20">
            <ContactForm />
          </div>
        </section>
      </main>
      <section className="socialMedia bg-slate-200 dark:bg-slate-900 flex-none w-full h-[13rem] lg:h-[11rem]">
        <SocialMedia />
      </section>
    </>
  );
}
