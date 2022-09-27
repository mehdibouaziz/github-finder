const Spinner = () => {
  return (
    <div className=''>
        <div className="absolute w-7 h-7 bg-spinner rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 animate-spin-inner">
            <div class="absolute rounded-full border-4 w-16 h-16 border-transparent border-l-spinner -translate-x-1/2 -translate-y-1/2 rotate-[65deg]"></div>
            <div class="absolute rounded-full border-4 w-16 h-16 border-transparent border-t-spinner -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
            <div class="absolute rounded-full border-4 w-16 h-16 border-transparent border-l-spinner -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100"></div>
            <div class="absolute rounded-full border-4 w-16 h-16 border-transparent border-t-spinner -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100"></div>
            
            <div class="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-spinner rounded-full -translate-y-1/2 translate-x-6"></div>
            <div class="absolute top-1/2 left-1/2 w-3 h-3 bg-spinner rounded-full -translate-y-1/2 -translate-x-9"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 animate-spin-outer">
            <div class="absolute rounded-full border-4 w-24 h-24 border-transparent border-l-spinner -translate-x-1/2 -translate-y-1/2 rotate-[65deg]"></div>
            <div class="absolute rounded-full border-4 w-24 h-24 border-transparent border-t-spinner -translate-x-1/2 -translate-y-1/2 rotate-[45deg]"></div>
            <div class="absolute rounded-full border-4 w-24 h-24 border-transparent border-l-spinner -translate-x-1/2 -translate-y-1/2 rotate-[65deg] -scale-100"></div>
            <div class="absolute rounded-full border-4 w-24 h-24 border-transparent border-t-spinner -translate-x-1/2 -translate-y-1/2 rotate-[45deg] -scale-100"></div>
            
            <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-spinner rounded-full -translate-y-1/2 translate-x-[38px]"></div>
            <div class="absolute top-1/2 left-1/2 w-3 h-3 bg-spinner rounded-full -translate-y-1/2 -translate-x-[52px]"></div>
        </div>
    </div>
  )
}

export default Spinner