import React from "react"
function Header(){
    return (
        <header className="app-header">
            {/* Navigation */}
            <nav className="py-4 px-6 border-b border-gray-100 bg-white">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-700">
                        Pollosophy
                    </div>
        
                    <div className="flex items-center space-x-3">
                        <button className="text-white text-sm hover:bg-blue-700 font-bold bg-blue-600 px-3 py-2 rounded-md">
                            Home
                        </button>
                        <img src="logo.png" alt="Pollosophy Logo" className="w-8 h-8" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;