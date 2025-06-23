'use client'
import { GridItem } from '@/components/grid-item';
import { calculateImc, Level, levels } from '@/helpers/imc';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null)

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('Coloque todos os campos')
        }
    }

    const handleBack = () =>{
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    }

    return (
        <div>
            <header>
                <div className="flex justify-center max-w-4xl my-15 mx-auto lg:justify-normal">
                    <Image src="/powered.png" alt="logo" width={150} height={150} />
                </div>
            </header>
            <div className="max-w-xl flex flex-col lg:max-w-4xl lg:flex-row mx-auto justify-between space-y-10">
                <div className="flex-1 mr-10">
                    <h1 className="text-4xl text-gray-700">Calcule o seu IMC</h1>
                    <p className="text-xl text-gray-500 mb-10">O IMC (Índice de Massa Corporal) é uma fórmula usada para avaliar se uma pessoa está com o peso adequado em relação à sua altura.</p>
                    <input
                        type="number"
                        placeholder="Digite a sua altura. EX: 1.5 (em metros)"
                        className="border-b-2 border-b-gray-300 outline-none p-2 w-full mb-5 disabled:opacity-30"
                        value={heightField > 0 ? heightField : ''}
                        onChange={e => setHeightField(parseFloat(e.target.value))}
                        disabled={toShow ? true: false}
                    />
                    <input
                        type="number"
                        placeholder="Digite a seu peso. EX: 75 (em kg)"
                        className="border-b-2 border-b-gray-300 outline-none p-2 w-full mb-5 disabled:opacity-30"
                        value={weightField > 0 ? weightField : ''}
                        onChange={e => setWeightField(parseFloat(e.target.value))}
                        disabled={toShow ? true: false}
                    />
                    <button onClick={handleCalculateButton} className='bg-sky-700 text-white w-full text-2xl py-3 rounded-2xl transition-all duration-[200ms] cursor-pointer mt-10 hover:opacity-70 disabled:opacity-30' disabled={toShow ? true: false}>Calcular</button>
                </div>
                <div className="flex flex-1 ml-10 mx-auto">
                    {!toShow &&
                        <div className="flex-1 grid grid-cols-2 gap-5">
                            {levels.map((item, key) => (
                                <GridItem key={key} item={item} color={item.color} />
                            ))}
                        </div>
                    }
                    {toShow &&
                        <div className="flex-1 flex">
                            <button onClick={handleBack} className="bg-sky-700 absolute w-16 h-16 rounded-full flex items-center justify-center -ml-7 mt-36 cursor-pointer">
                                <img src="/leftarrow.png" width={45}/>
                            </button>
                            <GridItem item={toShow} color={toShow.color} />
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Page;