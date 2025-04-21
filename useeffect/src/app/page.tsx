"use client"
import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";

const page = () =>{
  const [playing, setPlaying] = useState(false)

  return (
    <div>
      <div className="border border-black p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button onClick={()=>setPlaying(!playing)} className="bg-blue-400 rounded-md p-3 text-black cursor-pointer">Pause/run</button>
      </div>
      <VideoPlayer 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />

    </div>
  )
}


export default page;