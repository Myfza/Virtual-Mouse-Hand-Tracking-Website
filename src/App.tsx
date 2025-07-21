import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Download, 
  Play, 
  Hand, 
  Target, 
  Camera, 
  Settings, 
  Monitor, 
  CheckCircle, 
  Code, 
  Coffee,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const downloadZIP = () => {
  const link = document.createElement('a');
  link.href = '/Virtual-Mouse-Using-Hand-Tracking.zip'; 
  link.download = 'Virtual-Mouse-Using-Hand-Tracking.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent)] animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Virtual Mouse
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="hover:text-blue-500 transition-colors">Overview</a>
              <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
              <a href="#demo" className="hover:text-blue-500 transition-colors">Demo</a>
              <a href="#installation" className="hover:text-blue-500 transition-colors">Installation</a>
              <a href="#github" className="hover:text-blue-500 transition-colors">GitHub</a>
              <a href="#license" className="hover:text-blue-500 transition-colors">Tips</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="#overview" className="py-2 hover:text-blue-500 transition-colors">Overview</a>
                <a href="#features" className="py-2 hover:text-blue-500 transition-colors">Features</a>
                <a href="#demo" className="py-2 hover:text-blue-500 transition-colors">Demo</a>
                <a href="#installation" className="py-2 hover:text-blue-500 transition-colors">Installation</a>
                <a href="https://github.com/Myfza" className="py-2 hover:text-blue-500 transition-colors">GitHub</a>
                <a href="#license" className="py-2 hover:text-blue-500 transition-colors">License</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent animate-pulse">
            Control Your Computer with Just Your Hand
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Virtual Mouse Using Hand Tracking – gesture-based control using Python, OpenCV, and MediaPipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Myfza/Virtual-Mouse-Using-Hand-Tracking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>View Source</span>
            </a>
            <button
                 onClick={downloadZIP}
                  className="bg-transparent border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  Download v1.0.0
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                What is Virtual Mouse?
              </h2>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                Transform your webcam into a powerful gesture control system. Our Python script uses advanced computer vision to track your hand movements in real-time, converting them into precise mouse actions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Real-time gesture recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>Virtual clicking with pinch gestures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span>No special hardware required</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 animate-pulse"></div>
                  <div className="absolute top-4 left-4 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 left-10 text-xs text-green-400 font-mono">● REC</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Hand className="w-16 h-16 text-blue-500 animate-bounce" />
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Hand tracking visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Hand className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Hand Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powered by MediaPipe for accurate and responsive hand detection
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Index Finger Control</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Precise cursor movement using your index finger position
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 text-white flex items-center justify-center text-sm font-bold">👌</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pinch to Click</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Natural clicking by pinching thumb and index finger together
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">OpenCV Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced computer vision for robust webcam feed processing
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Adjustable Sensitivity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fine-tune responsiveness to match your preferences
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Platform</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Works seamlessly on Windows, macOS, and Linux systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-4 md:p-8 mb-8">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img 
                  src="/Picture-1.jpg" 
                  alt="Virtual Mouse Hand Tracking Demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-mono bg-black/50 px-2 py-1 rounded">LIVE</span>
                </div>
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-medium">Hand Tracking Active</p>
                    <p className="text-xs text-gray-300">Real-time gesture detection</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Real demonstration of hand tracking and cursor control in action
            </p>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Quick Installation
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">Terminal</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">$ python --version</div>
                    <div className="text-gray-400">Python 3.7+ (Required)</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">Terminal</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">$ pip install opencv-python mediapipe pyautogui</div>
                    <div className="text-gray-400">Successfully installed opencv-python-4.8.1.78</div>
                    <div className="text-gray-400">Successfully installed mediapipe-0.10.7</div>
                    <div className="text-gray-400">Successfully installed pyautogui-0.9.54</div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">Terminal</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-green-400">$ python virtual_mouse.py</div>
                    <div className="text-blue-400">Starting Virtual Mouse...</div>
                    <div className="text-yellow-400">Camera initialized successfully</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">How to Use</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold">Run the script</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Execute the Python file - webcam window will open automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold">Position your hand</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Show your hand to the camera - landmarks will be detected automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold">Control cursor with index finger</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Move your index finger to control the mouse cursor position</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h4 className="font-semibold">Click by pinching</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Bring thumb and index finger close together (within 20px) to click</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Ensure good lighting for optimal hand detection</li>
                    <li>• Keep hand within camera frame</li>
                    <li>• Distance threshold: &lt;20px for click, &lt;100px for movement</li>
                    <li>• Press any key in terminal to exit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Console Output Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Console Output
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">virtual_mouse.py</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">$ python virtual_mouse.py</div>
                <div className="text-blue-400">Starting Virtual Mouse...</div>
                <div className="text-yellow-400">Camera initialized successfully</div>
                <div className="text-white">Hand landmarks detected</div>
                <div className="text-cyan-400">Index finger: (320, 240)</div>
                <div className="text-cyan-400">Thumb: (340, 260)</div>
                <div className="text-purple-400">outside 25.3</div>
                <div className="text-green-400">Moving cursor to (1280, 720)</div>
                <div className="text-red-400">outside 15.7</div>
                <div className="text-yellow-400">Click executed!</div>
                <div className="text-white animate-pulse">█</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tips & Notes
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Optimal Lighting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Works best in bright, consistent lighting conditions for accurate hand detection
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Camera Position</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keep your hand within the webcam frame for consistent tracking
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">For Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ideal for experimenting with computer vision and gesture recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="license" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-2xl font-bold">Virtual Mouse</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Open-source gesture control system built with Python, OpenCV, and MediaPipe. 
              Transform your webcam into a powerful input device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://github.com/Myfza"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View Source Code</span>
              </a>
              <a
                href="https://buymeacoffee.com/vizartt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Coffee className="w-5 h-5" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Virtual Mouse Project. by Muhammad Yusuf Aditiya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;