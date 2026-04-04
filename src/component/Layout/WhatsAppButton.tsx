import whatsapp from '../../assets/logo/whatsapp_new.gif'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9897976962"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 rounded-full p-2 shadow-md z-50 bg-white/10 text-slate-900 border border-slate-200/70 hover:bg-emerald-500 hover:text-white dark:bg-slate-950/20 dark:text-slate-100 dark:border-slate-700/70 dark:hover:bg-emerald-500 transition-all duration-200 backdrop-blur-md hover:bg-opacity-100"
      style={{ opacity: 0.85 }}
    >
      <img src={whatsapp} alt="whatsapp logo" width={42} height={42} className="transition-opacity duration-200 opacity-90 hover:opacity-100" />
    </a>
  );
};

export default WhatsAppButton;
