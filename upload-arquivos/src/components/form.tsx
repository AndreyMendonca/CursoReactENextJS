'use client'
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Form = () => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
    const [selectedFile, setSelectedFile] = useState<File>();
    const [legend, setLegend] = useState("");
    const [progressUpload, setProgressUpload] = useState(0);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setSelectedFile(file);
        }

        console.log(e.target.files)
    }

    const handleSubmit = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('legend', legend);

            const url = 'https://b7web.com.br/uploadtest/'

            const req = await axios.post(url, formData, {
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const pct = (progressEvent.loaded / progressEvent.total) * 100;
                        setProgressUpload(pct);
                    }
                }
            })

            console.log(req.data)
        }
    }

    const handleSubmit2 = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('legend', legend);
            const req = await fetch('https://b7web.com.br/uploadtest/', {
                method: 'POST',
                body: formData
            })
            const json = await req.json();
            console.log(json);
        }
    }

    const handleDropzoneSubmit = async () => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('legend', legend);

        const url = 'https://b7web.com.br/uploadtest/'

        const req = await axios.post(url, formData, {
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const pct = (progressEvent.loaded / progressEvent.total) * 100;
                    setProgressUpload(pct);
                }
            }
        });
    }

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            setSelectedFile(acceptedFiles[0]);
            handleDropzoneSubmit();
        }
    }, [acceptedFiles])

    return (
        <div>
            <div className="bg-gray-400 h-96 p-5" {...getRootProps()}>
                <input {...getInputProps()} />
            </div>

            <div>ARQUIVOS: {acceptedFiles.length}</div>

            <input
                type="file"
                className="block my-3 p-2 border"
                onChange={handleFileChange} />
            <input
                type="text"
                className="block my-3 p-2 border"
                placeholder="Digite um legenda"
                onChange={e => setLegend(e.target.value)}
            />
            <button className="block my-3" onClick={handleSubmit}>
                Enviar
            </button>
            <div className="w-[500px] h-5 bg-green-200">
                <div className="h-5 bg-green-800" style={{ width: progressUpload + '%' }}></div>

            </div>

            <div>
                {progressUpload.toFixed(0)} / 100
            </div>
        </div>
    )
}