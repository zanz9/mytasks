import React from "react";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div className={'flex flex-col p-10'}>
            <div className={'col-span-2 mb-5'}>
                <div className={'flex justify-between items-center'}>
                    <h1 className={'text-3xl font-bold'}>Task Manager</h1>
                    <div>Manage your tasks efficiently</div>
                </div>
            </div>
            <div className={'flex flex-row justify-center'}>
                <div className={'flex flex-col items-center bg-content px-20 py-14 gap-3 rounded-l-2xl'}>
                    <h2 className={'text-2xl font-bold'}>Organize your tasks with ease.</h2>
                    <h3 className={'text-xl'}>Navigate seamlessly with the docked bar.</h3>
                    <Image
                        src={'/img.png'}
                        alt={'sad'}
                        width={256}
                        height={256}
                    />
                    <p className={'text-sm text-gray-400 mt-4'}>Access your tasks from anywhere</p>
                </div>
                <div className={'flex flex-col items-center px-20 py-14 gap-3'}>
                    <h2 className={'text-2xl font-bold'}>Get started with TaskDock.</h2>
                    <p className={'text-lg text-gray-400 '}>Explore the features free.</p>
                    <Input placeholder={'Enter your full name'}/>
                    <Input placeholder={'Create a unique username'}/>
                    <Input placeholder={'Set your password'}/>
                    <Input placeholder={'Confirm your password'}/>

                    <Button variant="outline" className={'w-full'}> Sign up</Button>

                    <div>or sign in with</div>

                    <div className={'flex gap-2'}>
                        <Button variant="outline" className={'w-1/2'}>Google</Button>
                        <Button variant="outline" className={'w-1/2'}>GitHub</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}