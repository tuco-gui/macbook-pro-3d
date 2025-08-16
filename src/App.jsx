@@ -0,0 +1,54 @@
import React from 'react';
import './assets/css/style.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './components/MacContainer';

const App = () => {
    return (
        <div className='relative w-full h-screen font-mono'>
            <nav className='hidden md:flex absolute gap-8 sm:gap-6 md:gap-10 lg:gap-12 top-0 left-1/2 -translate-x-1/2 py-5 sm:py-8 md:py-10 text-center'>
                {["store", "mac", "ipad", "iphone", "watch", "vision", "airPods", "accessories", "support"].map((elem, key) => (
                    <a key={key} href='#' className='text-white font-bold text-sm sm:text-base md:text-lg capitalize'>
                        {elem}
                    </a>
                ))}
            </nav>

            <div className="md:hidden absolute top-5 left-5">
                <label htmlFor="menu-drawer" className="btn btn-circle btn-ghost text-white text-2xl">
                    ☰
                </label>
            </div>

            <input type="checkbox" id="menu-drawer" className="drawer-toggle hidden" />
            <div className="drawer-side">
                <label htmlFor="menu-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 bg-gray-900 text-white min-h-full">
                    {["store", "mac", "ipad", "iphone", "watch", "vision", "airPods", "accessories", "support"].map((elem, key) => (
                        <li key={key} className='py-2'>
                            <a href='#' className='text-white font-bold text-lg capitalize'>{elem}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='absolute flex flex-col items-center top-32 sm:top-36 md:top-40 left-1/2 -translate-x-1/2 text-white text-center w-11/12 sm:w-3/4'>
                <h3 className='masked text-5xl sm:text-6xl md:text-7xl tracking-tighter font-semibold mb-2'>macbook pro.</h3>
                <h5 className='font-extrabold text-sm sm:text-base md:text-lg mb-3'>Oh so pro !</h5>
                <p className='w-full sm:w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, omnis!</p>
            </div>

            <Canvas camera={{ fov: 20, position: [0, -10, 180] }}>
                <Environment files={[
                    'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
                ]} />
                <ScrollControls pages={3}>
                    <MacContainer />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default App;

export default App;
