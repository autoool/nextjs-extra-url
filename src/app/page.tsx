'use client'
import Image from 'next/image'

export default function Home() {
  
  const hello = async ()=>{
    console.log(process.env.NEXT_PUBLIC_URL)
    const res= await fetch('/api/extra',{
      headers:{
        Accept:"applicaiont/json",
        method:"GET"
      }
    });
    if(res){
      const data = await res.json();
      console.log(data)
    }

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={hello}>hello</button>
      </div>
    </main>
  )
}
