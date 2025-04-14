import React from 'react'

function FeaturesPage() {
  return (
    <div className="relative" id="home">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div>
            <div className="relative pt-36 ml-auto text-center text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                <h1>Cant make it to Work or Class? Liaison has you covered</h1>

               
            </div>
                <h2 className="relative pt-36 ml-auto text-center text-gray-900"> Liaison has you covered with the tools you need to access your docuemnts </h2>
        </div>
    </div>
  )
}

export default FeaturesPage