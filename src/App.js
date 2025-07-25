import React, { useState, useEffect } from 'react';
import { ZoomIn, X, Gamepad2, Coins, Shield, Zap, Users, Trophy, ExternalLink, Play, Book, Target, Gift, Sword, Star, Mountain, Flame, Droplets } from 'lucide-react';

const SuisterGoApp = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState({});

  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      id: 1,
      title: "Faucet",
      src: "./faucet.png",
      alt: "Get test tokens through the faucet"
    },
    {
      id: 2,
      title: "Shop",
      src: "shop.png",
      alt: "Game shop interface"
    },
    {
      id: 3,
      title: "Inventory",
      src: "inventory.png",
      alt: "Game inventory screen"
    },
    {
      id: 3,
      title: "PVE battle",
      src: "pve.png",
      alt: "Pve battle screen"
    },
    {
      id: 4,
      title: "Team formation for Pve Battle",
      src: "team.png",
      alt: "Team battle"
    },
    {
      id: 5,
      title: "Battle System",
      src: "prepare_battle.png",
      alt: "Game battle system"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting
            }));

            // Automatically update active section on scroll
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: [0.1, 0.5] }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // height of fixed navigation
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
  );

  const ElementCard = ({ element, color, icon: Icon, description }) => (
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${color} p-4 border border-opacity-20 hover:scale-105 transition-all duration-300`}>
        <div className="flex items-center space-x-3 mb-2">
          <Icon className="w-6 h-6 text-white" />
          <h4 className="text-lg font-bold text-white">{element}</h4>
        </div>
        <p className="text-white text-opacity-90 text-sm">{description}</p>
      </div>
  );

  const sections = [
    { id: 'overview', title: 'Overview', icon: Gamepad2 },
    { id: 'mechanics', title: 'Mechanics', icon: Target },
    { id: 'ecosystem', title: 'Ecosystem', icon: Users },
    { id: 'how-to-play', title: 'How to Play', icon: Book },
    { id: 'resources', title: 'Resources', icon: ExternalLink }
  ];

  const openFullscreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative container mx-auto px-6 py-20">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Web3 Gaming on Sui Blockchain</span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                SuisterGo
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                A Play-to-Earn game with collectible creatures inspired by Pokémon.
                Develop Suisters, battle, and earn tokens in the Sui ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() =>  window.open("https://testnet.suistergo.xyz/", "_blank")} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Playing
                </button>
                <button onClick={() =>  window.open("https://paperdocs.gitbook.io/suister-go-docs", "_blank")} className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-600">
                  Documentation
                </button>
              </div>
            </div>
          </div>
        </div>

        <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center space-x-1 py-4 overflow-x-auto">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                            activeSection === section.id
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-12">
          <section id="overview" className={`mb-16 transition-all duration-1000 ${isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">General Concept</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                SuisterGo is a web-based Play-to-Earn (P2E) game on the Sui blockchain, inspired by Pokémon and other collectible battle games.
                The main idea is developing unique creatures (Suisters), collecting, upgrading, and using them in battles to earn tokens, rare NFTs, and gaming bonuses.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-lg">
                  <Coins className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-medium">Play-to-Earn</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-medium">Sui Blockchain</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-lg">
                  <Trophy className="w-5 h-5 text-green-400" />
                  <span className="text-green-300 font-medium">NFT Collection</span>
                </div>
              </div>
            </div>
          </section>

          <section id="mechanics" className={`mb-16 transition-all duration-1000 ${isVisible.mechanics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Core Mechanics</h2>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Elemental Types of Suisters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <ElementCard
                    element="Fire"
                    color="from-red-600 to-orange-600"
                    icon={Flame}
                    description="Attack creatures with high damage"
                />
                <ElementCard
                    element="Water"
                    color="from-blue-600 to-cyan-600"
                    icon={Droplets}
                    description="Support creatures with healing and buffs"
                />
                <ElementCard
                    element="Earth"
                    color="from-green-600 to-yellow-600"
                    icon={Mountain}
                    description="Defenders with high endurance"
                />
                <ElementCard
                    element="Steel"
                    color="from-gray-600 to-gray-400"
                    icon={Shield}
                    description="Universal fighters"
                />
              </div>
              <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-lg font-bold text-white mb-2">Team Formation</h4>
                <p className="text-gray-300">
                  Optimal team: 1 attacker (Fire/Steel) + 2 supports (Water) + 2 defenders (Earth)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                  icon={Sword}
                  title="Battle System"
                  description="PvE against monsters and PvP against players. Each battle consumes energy, victories earn $STG tokens and bonuses."
                  gradient="from-red-500 to-orange-500"
              />
              <FeatureCard
                  icon={Zap}
                  title="Energy System"
                  description="12 energy units per day. Regenerates over time or instantly with potions. Plan your battles strategically!"
                  gradient="from-yellow-500 to-orange-500"
              />
              <FeatureCard
                  icon={Star}
                  title="Fusion System"
                  description="Merge identical Suisters to increase star rating up to 5★. Requires SUI tokens and has a chance of failure."
                  gradient="from-purple-500 to-pink-500"
              />
              <FeatureCard
                  icon={Gift}
                  title="Beer Tavern"
                  description="Spend accumulated 'beer' on drawings for rare creatures, items, potions, and tokens."
                  gradient="from-amber-500 to-yellow-500"
              />
              <FeatureCard
                  icon={Target}
                  title="Quests"
                  description="Daily tasks and check-ins. Get OG NFTs for future airdrops and limited rewards."
                  gradient="from-green-500 to-teal-500"
              />
              <FeatureCard
                  icon={Trophy}
                  title="Progression"
                  description="Develop your collection, participate in tournaments, and prepare for Guild Wars - team battles."
                  gradient="from-blue-500 to-purple-500"
              />
            </div>
          </section>

          <section id="ecosystem" className={`mb-16 transition-all duration-1000 ${isVisible.ecosystem ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Ecosystem & Advantages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Sui Advantages</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Fast transaction processing without delays</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Minimal fees for operations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>True ownership of NFTs and gaming resources</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Possibility of external asset trading</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-4">
                  Active interaction on social networks and platforms:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://t.me/suistergo" target="_blank" className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">Telegram</a>
                  <a href="https://discord.gg/H4S42stnAE" target="_blank" className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-lg text-sm">Discord</a>
                  <a href="https://app.galxe.com/quest/YYhMb82o5CqDYat7PT7bo7?sort=Trending" target="_blank" className="bg-green-600/20 text-green-300 px-3 py-1 rounded-lg text-sm">Galxe</a>
                  <a href="https://x.com/SuisterGo" target="_blank" className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-lg text-sm">Twitter/X</a>
                </div>
              </div>
            </div>
          </section>

          <section id="how-to-play" className={`mb-16 transition-all duration-1000 ${isVisible['how-to-play'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">How to Start Playing</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <h3 className="text-xl font-bold text-white">Wallet Setup</h3>
                  </div>
                  <p className="text-gray-300 mb-3">Install a Sui wallet (e.g., Slush wallet) and get test tokens through the faucet.</p>
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-3">
                    <p className="text-blue-300 text-sm">💡 Free test tokens are used for testing</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <h3 className="text-xl font-bold text-white">First Suisters</h3>
                  </div>
                  <p className="text-gray-300 mb-3">Visit the shop and buy unique eggs with creatures. Each egg contains a random Suister of a specific element.</p>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <h3 className="text-xl font-bold text-white">Team Formation</h3>
                  </div>
                  <p className="text-gray-300">Assemble a balanced team of 5 Suisters of different roles and elements for maximum efficiency in battles.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Main Game Sections</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300"><strong className="text-white">Shop</strong> — purchase eggs with creatures</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300"><strong className="text-white">Fusion</strong> — upgrade Suisters</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300"><strong className="text-white">Tavern</strong> — draws for "beer"</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300"><strong className="text-white">Battles</strong> — PvE and PvP combat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300"><strong className="text-white">Quests</strong> — daily tasks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-xl font-bold text-white mb-6">Game Screenshots</h3>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {screenshots.map((screenshot) => (
                        <div
                            key={screenshot.id}
                            className="group relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => openFullscreen(screenshot)}
                        >
                          <div className="aspect-video relative">
                            <img
                                src={screenshot.src}
                                alt={screenshot.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <ZoomIn className="w-8 h-8 text-white" />
                            </div>

                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                              <p className="text-white font-semibold text-sm">{screenshot.title}</p>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>

                  {/* Fullscreen Modal */}
                  {selectedImage && (
                      <div
                          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                          onClick={closeFullscreen}
                      >
                        <div className="relative max-w-7xl max-h-full">
                          {/* Close button */}
                          <button
                              onClick={closeFullscreen}
                              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                          >
                            <X className="w-8 h-8" />
                          </button>

                          {/* Full size image */}
                          <img
                              src={selectedImage.src}
                              alt={selectedImage.alt}
                              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                              onClick={(e) => e.stopPropagation()}
                          />

                          {/* Image title */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                            <h4 className="text-white text-xl font-bold">{selectedImage.title}</h4>
                          </div>
                        </div>
                      </div>
                  )}
                </div>
                {/*<div className="bg-gradient-to-br from-green-800/30 to-teal-800/30 rounded-xl p-6 border border-green-500/30">*/}
                {/*  <h3 className="text-xl font-bold text-white mb-3">Game Screenshots</h3>*/}
                {/*  <div className="grid grid-cols-2 gap-4">*/}
                {/*    <div className="bg-gray-700 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm text-center">*/}
                {/*      <img width={200} height={100} src={require('./faucet.png')} />*/}
                {/*    </div>*/}
                {/*    <div className="bg-gray-700 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm text-center">*/}
                {/*      Shop*/}
                {/*      <br />*/}
                {/*      <img width={200} height={100} src={require('./faucet.png')} />*/}
                {/*    </div>*/}
                {/*    <div className="bg-gray-700 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm text-center">*/}
                {/*      Battle System*/}
                {/*      <br />*/}
                {/*      <img width={200} height={100} src={require('./faucet.png')} />*/}
                {/*    </div>*/}
                {/*    <div className="bg-gray-700 rounded-lg h-24 flex items-center justify-center text-gray-400 text-sm text-center">*/}
                {/*      Collection*/}
                {/*      <br />*/}
                {/*      <img width={200} height={100} src={require('./faucet.png')} />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Useful Tips for Beginners</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Complete daily quests to get OG NFTs</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Plan energy usage - it's limited</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Start with PvE battles to learn mechanics</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Collect "beer" for tavern draws</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Study synergies between different elements</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">Participate in testing to get rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="resources" className={`mb-16 transition-all duration-1000 ${isVisible.resources ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Useful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="https://suistergo.xyz" target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <ExternalLink className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                  <h3 className="text-lg font-bold text-white">Official Website</h3>
                </div>
                <p className="text-gray-300 text-sm">suistergo.xyz</p>
              </a>

              <a href="https://testnet.suistergo.xyz" target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <Play className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                  <h3 className="text-lg font-bold text-white">Test Version</h3>
                </div>
                <p className="text-gray-300 text-sm">testnet.suistergo.xyz</p>
              </a>

              <a href="https://paperdocs.gitbook.io/suister-go-docs" target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-3">
                  <Book className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                  <h3 className="text-lg font-bold text-white">Documentation</h3>
                </div>
                <p className="text-gray-300 text-sm">paperdocs.gitbook.io</p>
              </a>
            </div>

            <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Join the Community</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://t.me/suistergo" target="_blank" className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg">📱 Telegram</a>
                <a href="https://discord.gg/H4S42stnAE" target="_blank" className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-lg">💬 Discord</a>
                <a href="https://app.galxe.com/quest/YYhMb82o5CqDYat7PT7bo7?sort=Trending" target="_blank" className="bg-green-600/20 text-green-300 px-4 py-2 rounded-lg">🎯 Galxe</a>
                <a href="https://x.com/SuisterGo" target="_blank" className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-lg">🐦 Twitter/X</a>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default SuisterGoApp;
