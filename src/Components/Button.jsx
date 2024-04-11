const Button = ({ label, iconURL, backgroundColor, borderColor, textColor,rounded }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor} ${rounded}` : 'bg-coral-red rounded-full text-white border-coral-red'}`}>
      {label}
      {iconURL && <img 
        src={iconURL}
        alt="arrowRight"
        className="ml-2 rounded-full w-5 h-5 focus:bg-slate-600"
      />}
    </button>
  );
};

export default Button;
