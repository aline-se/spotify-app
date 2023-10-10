import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    function Logout() {
        window.localStorage.clear();
        navigate('/auth');
    }

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 className="text-lg">Spotify Artist Search</h1>
                            </div>
                            <div className="items-center -my-px ml-6 flex space-x-8">
                                <button onClick={Logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </Disclosure>
                <div className="py-10">
                    <main>
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Layout;
