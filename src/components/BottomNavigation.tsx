import { Activity, CircleUserRound, Gem, Home, Wallet } from 'lucide-react'
import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='fixed bottom-0 w-[500px] bg-[url("/bottom-bg.png")] px-6 py-2 -ml-4 bg-cover bg-center flex justify-between text-golden'>
  <div className="flex w-full justify-between">
    <div className="flex flex-col items-center"><Home color='#d4a87d'/>Home</div>
    <div className="flex flex-col items-center"><Activity color='#d4a87d'/>Activity</div>
    <div className="flex flex-col items-center -mt-1"><Gem color='#d4a87d' size={40}/>Promotion</div>
    <div className="flex flex-col items-center"><Wallet color='#d4a87d'/>Wallet</div>
    <div className="flex flex-col items-center"><CircleUserRound color='#d4a87d'/>Account</div>
  </div>
</div>
  )
}

export default BottomNavigation
