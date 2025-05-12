const cars = [
  // BMW
  {
    id: 1,
    resultImage: 'https://w7.pngwing.com/pngs/767/74/png-transparent-golden-car-top-view-thumbnail.png',
    specsImage: './images/bmw-top-view.png',
    model: 'BMW 2 Series',
    year: 2023,
    type: 'Coupe',
    mileage: '3,300',
    fuel: 'Gasoline',
    rating: 4.5,
    power: '250Hp',
    cc: 2000,
    acceleration: '5.3s',
    price: 38500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW TwinPower Turbo Engine',
      image: './images/engine-icon.jpg',
      text: 'The heart of the BMW 2 Series is its TwinPower Turbo engine. This 2.0-liter turbocharged powerplant delivers responsive acceleration and impressive efficiency, featuring advanced direct injection and variable valve timing.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-interior.png',
      text: 'The BMW 2 Series interior combines sporty design with premium comfort. Driver-focused controls, high-quality materials, and modern technology create an engaging driving environment. The intuitive layout emphasizes both luxury and performance.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw.png',
      text: 'BMW\'s wheels and suspension are engineered for dynamic handling. Lightweight alloy wheels and a sophisticated suspension system deliver precise control, excellent road grip, and a balanced ride that\'s both sporty and comfortable.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW 2 Series features a bold, athletic exterior design with the iconic kidney grille and distinctive LED headlights. Its compact yet muscular proportions emphasize performance, while precise lines enhance aerodynamics.'
    }
  },
  {
    id: 2,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+X3',
    specsImage: './images/bmw-suv-top-view.png',
    model: 'BMW X3',
    year: 2021,
    type: 'SUV',
    mileage: '13,000',
    fuel: 'Gasoline',
    rating: 4.6,
    power: '250Hp',
    cc: 2000,
    acceleration: '6.2s',
    price: 48900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW TwinPower Turbo Engine',
      image: './images/engine-icon.jpg',
      text: 'The BMW X3 is powered by a robust 2.0-liter TwinPower Turbo engine, delivering a balanced combination of power and efficiency. This advanced powertrain features innovative technologies for responsive acceleration across all driving conditions.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-interior.png',
      text: 'The BMW X3 interior offers premium comfort with versatile space. High-quality materials, ergonomic design, and cutting-edge technology create a refined cabin experience. The driver-oriented layout enhances both everyday driving and longer journeys.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw.png',
      text: 'BMW\'s X3 features an advanced suspension system paired with stylish alloy wheels. This combination provides exceptional stability, responsive handling, and impressive ride comfort across various road conditions and driving situations.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW X3 showcases a commanding presence with its bold proportions and distinctive design. The signature kidney grille, sculpted body lines, and premium detailing reflect both capability and elegance in this versatile SUV.'
    }
  },
  {
    id: 3,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+X7',
    specsImage: './images/bmw-suv-top-view.png',
    model: 'BMW X7',
    year: 2022,
    type: 'SUV',
    mileage: '6,700',
    fuel: 'Diesel',
    rating: 4.7,
    power: '325Hp',
    cc: 3000,
    acceleration: '5.8s',
    price: 85900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW TwinPower Turbo Diesel',
      image: './images/engine-icon.jpg',
      text: 'The BMW X7 features a powerful 3.0-liter TwinPower Turbo diesel engine. This sophisticated powertrain delivers exceptional torque, smooth performance, and impressive efficiency, making it ideal for this luxury flagship SUV.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-interior.png',
      text: 'The BMW X7 interior exemplifies luxury at its finest. Three rows of spacious seating, premium materials, and state-of-the-art technology create an atmosphere of refined comfort. Every detail is crafted to enhance the driving and passenger experience.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw.png',
      text: 'BMW\'s X7 rides on sophisticated air suspension and premium alloy wheels. This system automatically adjusts height and damping for optimal comfort and handling, providing a smooth, controlled ride regardless of road conditions.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW X7 presents an imposing yet elegant exterior. The largest kidney grille in the BMW lineup, precise character lines, and thoughtful details emphasize the vehicle\'s status as a luxury SUV with distinctive presence.'
    }
  },
  {
    id: 4,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+i3',
    specsImage: './images/bmw-electric-top-view.png',
    model: 'BMW i3',
    year: 2021,
    type: 'Hatchback',
    mileage: '10,100',
    fuel: 'Electric',
    rating: 4.4,
    power: '400Hp',
    cc: 0,
    acceleration: '6.9s',
    price: 45600,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW Electric Drivetrain',
      image: './images/electric-motor-icon.jpg',
      text: 'The BMW i3 features an innovative electric powertrain with instant torque delivery. This advanced electric motor system provides efficient, emissions-free performance with responsive acceleration and a smooth, quiet driving experience.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-i-interior.png',
      text: 'The BMW i3 interior showcases sustainable luxury with recycled materials and natural fibers. The open, airy cabin features a minimalist design with intuitive controls and advanced technology, creating a modern, eco-conscious environment.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw-i.png',
      text: 'BMW\'s i3 utilizes lightweight alloy wheels and a specialized suspension designed specifically for electric mobility. The system balances energy efficiency with responsive handling, enhancing both range and driving dynamics.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW i3 features a distinctive, futuristic design that stands apart from conventional vehicles. Its compact dimensions, unique silhouette, and innovative use of materials showcase BMW\'s forward-thinking approach to sustainable mobility.'
    }
  },
  {
    id: 5,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+M3',
    specsImage: './images/bmw-m-top-view.png',
    model: 'BMW M3',
    year: 2023,
    type: 'Sedan',
    mileage: '4,500',
    fuel: 'Gasoline',
    rating: 4.8,
    power: '300Hp',
    cc: 3000,
    acceleration: '3.9s',
    price: 72500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW M TwinPower Turbo',
      image: './images/engine-icon.jpg',
      text: 'The heart of the BMW M3 is its high-performance 3.0-liter M TwinPower Turbo engine. This motorsport-derived powerplant delivers exceptional output, rapid throttle response, and a distinctive soundtrack that defines the M driving experience.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-m-interior.png',
      text: 'The BMW M3 interior combines racing-inspired elements with luxury craftsmanship. Sport seats provide exceptional support, while M-specific controls and displays emphasize the performance character. Premium materials and finishes enhance the cabin\'s exclusive feel.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw-m.png',
      text: 'BMW\'s M3 features a track-tuned adaptive M suspension and forged alloy wheels. This performance-oriented system delivers precise handling, exceptional grip, and adjustable dynamics to suit both everyday driving and high-performance track use.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW M3 showcases aggressive styling with performance-enhancing design elements. Widened fenders, distinctive M grille, aerodynamic features, and quad exhaust tips express the vehicle\'s high-performance capabilities and motorsport heritage.'
    }
  },

  // Ferrari
  {
    id: 6,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+Roma',
    specsImage: './images/ferrari-top-view.png',
    model: 'Ferrari Roma',
    year: 2022,
    type: 'Coupe',
    mileage: '2,800',
    fuel: 'Gasoline',
    rating: 4.8,
    power: '350Hp',
    cc: 3900,
    acceleration: '3.4s',
    price: 247500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari V8 Twin-Turbo',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari Roma is powered by a 3.9-liter V8 twin-turbocharged engine that exemplifies Italian engineering excellence. This award-winning powerplant delivers extraordinary performance, immediate throttle response, and an exhilarating soundtrack.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari Roma interior offers a perfect blend of elegance and sportiness. The dual-cockpit design separates driver and passenger areas, while premium leathers, metals, and carbon fiber create an atmosphere of luxury and performance.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s Roma features specially designed alloy wheels and an advanced suspension system. This combination enables exceptional handling precision, road-holding, and a sophisticated ride that balances sporty dynamics with grand touring comfort.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari Roma showcases timeless Italian design with clean, flowing lines. Its elegant proportions and minimalist approach represent a contemporary interpretation of the carefree lifestyle of 1950s and 1960s Rome, creating a distinctive yet understated presence.'
    }
  },
  {
    id: 7,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+Portofino',
    specsImage: './images/ferrari-convertible-top-view.png',
    model: 'Ferrari Portofino',
    year: 2021,
    type: 'Coupe',
    mileage: '6,000',
    fuel: 'Gasoline',
    rating: 4.8,
    power: '400Hp',
    cc: 3900,
    acceleration: '3.5s',
    price: 215900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari V8 Twin-Turbo',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari Portofino is powered by a front-mounted 3.9-liter V8 turbo engine that combines exceptional power with remarkable efficiency. This versatile powerplant delivers thrilling performance in all driving conditions, from city cruising to track days.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari Portofino interior combines luxury with versatility. The retractable hardtop creates two cars in one, while the 2+ seating configuration offers practicality. Fine Italian craftsmanship and modern technology enhance the driving experience.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s Portofino features a sophisticated suspension system with electronic differential and magnetorheological dampers. Combined with specially designed wheels, this setup delivers agile handling, impressive comfort, and exceptional stability.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari Portofino showcases elegant, flowing lines that conceal the engineering complexity of its retractable hardtop. Its distinctive fastback silhouette transforms seamlessly to an open-top spider, emphasizing versatility without compromising Ferrari\'s design heritage.'
    }
  },
  {
    id: 8,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+F8',
    specsImage: './images/ferrari-top-view.png',
    model: 'Ferrari F8',
    year: 2022,
    type: 'Coupe',
    mileage: '3,900',
    fuel: 'Gasoline',
    rating: 4.9,
    power: '300Hp',
    cc: 3900,
    acceleration: '2.9s',
    price: 280500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari V8 Twin-Turbo',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari F8 Tributo houses the most powerful V8 in Ferrari history. This twin-turbocharged masterpiece delivers phenomenal power and torque with zero turbo lag. Advanced technologies and lightweight components maximize performance while maintaining efficiency.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari F8 Tributo interior focuses on driver engagement and performance. The cockpit integrates advanced functions with classic Ferrari design elements. Carbon fiber, Alcantara, and fine leather create a sophisticated environment that emphasizes the car\'s sporting character.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s F8 features a track-derived suspension system and specially designed forged wheels. This combination delivers extraordinary road-holding, precise handling, and responsive feedback, creating an immersive driving experience on both road and track.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari F8 Tributo showcases a design that perfectly balances aerodynamic efficiency with stunning aesthetics. Every surface and detail serves a performance purpose, from cooling vents to airflow channels, while maintaining the iconic Ferrari design language.'
    }
  },
  {
    id: 9,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+SF90',
    specsImage: './images/ferrari-hybrid-top-view.png',
    model: 'Ferrari SF90',
    year: 2023,
    type: 'Coupe',
    mileage: '1,100',
    fuel: 'Hybrid',
    rating: 5.0,
    power: '375Hp',
    cc: 4000,
    acceleration: '2.5s',
    price: 520000,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari Hybrid Powertrain',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari SF90 Stradale features a revolutionary hybrid powertrain combining a V8 turbo engine with three electric motors. This advanced system delivers unprecedented power and performance while showcasing Ferrari\'s commitment to technological innovation.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari SF90 Stradale interior represents a leap forward in design and technology. The completely digital interface and head-up display keep the focus on driving, while premium materials and exquisite detailing maintain Ferrari\'s luxury standards.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s SF90 features an advanced suspension system and specially designed wheels that work with the car\'s hybrid architecture. This integrated approach delivers exceptional handling precision, stability under extreme acceleration, and refined comfort.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari SF90 Stradale presents a radical evolution in Ferrari design, with aerodynamics driving the creative process. The result is a hypercar that generates exceptional downforce while maintaining the clean, pure lines that define Ferrari\'s design philosophy.'
    }
  },
  {
    id: 10,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+488+GTB',
    specsImage: './images/ferrari-top-view.png',
    model: 'Ferrari 488 GTB',
    year: 2021,
    type: 'Coupe',
    mileage: '4,400',
    fuel: 'Gasoline',
    rating: 4.9,
    power: '600Hp',
    cc: 3900,
    acceleration: '3.0s',
    price: 340000,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari V8 Twin-Turbo',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari 488 GTB is powered by a 3.9-liter twin-turbocharged V8 engine that redefined expectations for forced induction. This innovative powerplant delivers exceptional throttle response, broad torque band, and the thrilling performance Ferrari is renowned for.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari 488 GTB interior exemplifies the perfect balance of form and function. The driver-focused cockpit places all controls within easy reach, while premium materials and handcrafted details maintain the marque\'s tradition of luxury and exclusivity.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s 488 GTB features a highly advanced suspension system and specially designed wheels. This combination, along with sophisticated electronic controls, delivers exceptional precision, stability, and adaptability across various driving conditions.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari 488 GTB showcases a design where aerodynamic efficiency drives every sculptural element. From the signature central front air intake to the blown spoiler and underbody vortex generators, each component enhances performance while maintaining aesthetic beauty.'
    }
  },

  // Ford
  {
    id: 11,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+Bronco',
    specsImage: './images/ford-suv-top-view.png',
    model: 'Ford Bronco',
    year: 2022,
    type: 'SUV',
    mileage: '4,700',
    fuel: 'Gasoline',
    rating: 4.6,
    power: '490Hp',
    cc: 2700,
    acceleration: '6.7s',
    price: 49800,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford EcoBoost Engine',
      image: './images/ford-engine.jpg',
      text: 'The Ford Bronco features a potent 2.7-liter EcoBoost V6 engine. This twin-turbocharged powerplant delivers impressive output and torque, providing the perfect combination of on-road performance and off-road capability for adventurous driving.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-interior.png',
      text: 'The Ford Bronco interior blends rugged utility with modern comfort. Durable materials stand up to outdoor adventures, while thoughtful features and technologies enhance the experience. The functional design emphasizes versatility for both daily driving and off-road exploration.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s Bronco features specialized off-road suspension and terrain-management systems. The advanced HOSS (High-Performance Off-Road Stability Suspension) system, combined with all-terrain tires, delivers exceptional capability across challenging landscapes while maintaining on-road comfort.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford Bronco showcases a bold, retro-inspired design that pays homage to its heritage while incorporating modern elements. The boxy silhouette, round headlights, and removable roof and doors emphasize its go-anywhere versatility and adventurous spirit.'
    }
  },
  {
    id: 12,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+F-150+Lightning',
    specsImage: './images/ford-electric-top-view.png',
    model: 'Ford F-150 Lightning',
    year: 2023,
    type: 'Crossover',
    mileage: '1,900',
    fuel: 'Electric',
    rating: 4.9,
    power: '300Hp',
    cc: 0,
    acceleration: '4.5s',
    price: 58900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford Electric Powertrain',
      image: './images/electric-motor-icon.jpg',
      text: 'The Ford F-150 Lightning features a dual-motor electric powertrain delivering remarkable performance. This advanced system provides instant torque, exceptional acceleration, and impressive capability, revolutionizing the pickup truck segment with zero-emission power.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-engine.jpg',
      text: 'The Ford F-150 Lightning interior combines proven truck utility with next-generation technology. The spacious cabin offers innovative features like the fold-out work surface and onboard power supply, while premium materials and smart design enhance comfort and functionality.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s F-150 Lightning features an independent rear suspension specifically designed for the electric platform. This advanced system, paired with all-electric 4x4, delivers smooth handling, precise control, and exceptional capability both on and off the road.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford F-150 Lightning presents a forward-thinking design that honors the iconic F-Series while embracing its electric future. The seamless front light bar, aerodynamic enhancements, and purposeful details signal the truck\'s innovative character without sacrificing its tough identity.'
    }
  },
  {
    id: 13,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+Explorer',
    specsImage: './images/ford-suv-top-view.png',
    model: 'Ford Explorer ST',
    year: 2021,
    type: 'SUV',
    mileage: '7,800',
    fuel: 'Gasoline',
    rating: 4.6,
    power: '350Hp',
    cc: 3000,
    acceleration: '5.5s',
    price: 53200,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford EcoBoost V6',
      image: './images/engine-icon.jpg',
      text: 'The Ford Explorer ST is powered by a high-output 3.0-liter EcoBoost V6 engine. This performance-tuned powerplant delivers impressive horsepower and torque, providing exhilarating acceleration and confident passing power for this sport-oriented SUV.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-engine.jpg',
      text: 'The Ford Explorer ST interior features sport-themed details and premium amenities. Supportive seats with ST-specific styling, a spacious three-row layout, and advanced technology create a cabin that balances performance character with family-friendly functionality.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s Explorer ST features a sport-tuned suspension and performance-oriented wheels. This specially calibrated system delivers more responsive handling, reduced body roll, and a more engaging driving experience while maintaining reasonable ride comfort.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford Explorer ST showcases athletic styling with distinctive ST design cues. The blacked-out grille, special badging, unique wheels, and quad exhaust tips signal its performance credentials, while the muscular proportions emphasize its capability and presence.'
    }
  },
  {
    id: 14,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+Mustang+EcoBoost',
    specsImage: './images/ford-mustang-top-view.png',
    model: 'Ford Mustang EcoBoost',
    year: 2023,
    type: 'Coupe',
    mileage: '3,000',
    fuel: 'Gasoline',
    rating: 4.5,
    power: '310Hp',
    cc: 2300,
    acceleration: '5.1s',
    price: 45500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford EcoBoost Engine',
      image: './images/engine-icon.jpg',
      text: 'The Ford Mustang EcoBoost features a turbocharged 2.3-liter four-cylinder engine that delivers impressive performance with improved efficiency. This modern powerplant provides strong acceleration and responsive power delivery while honoring the Mustang\'s performance heritage.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-interior.png',
      text: 'The Ford Mustang interior combines classic design elements with modern technology. The aviation-inspired cockpit puts the focus on driving, while comfortable seats, premium materials, and thoughtful details create an environment that honors Mustang\'s heritage while looking forward.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s Mustang EcoBoost features a sport-tuned suspension and performance wheels that deliver the engaging handling expected from America\'s iconic pony car. The independent rear suspension provides impressive cornering ability while maintaining a comfortable ride.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford Mustang showcases an evolution of its iconic design with modern proportions and classic cues. The long hood, fastback profile, and signature tri-bar taillights honor the car\'s legendary heritage, while contemporary details keep it firmly in the present.'
    }
  },
  {
    id: 15,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+Focus+Hatchback',
    specsImage: './images/ford-hatchback-top-view.png',
    model: 'Ford Focus',
    year: 2021,
    type: 'Hatchback',
    mileage: '9,000',
    fuel: 'Gasoline',
    rating: 4.3,
    power: '180Hp',
    cc: 1500,
    acceleration: '8.2s',
    price: 24500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford EcoBoost Engine',
      image: './images/engine-icon.jpg',
      text: 'The Ford Focus is powered by a 1.5-liter EcoBoost engine that balances performance with efficiency. This responsive powerplant delivers spirited acceleration for urban driving and highway cruising while maintaining impressive fuel economy for the compact segment.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-interior.png',
      text: 'The Ford Focus interior offers a refined environment with high-quality materials and thoughtful design. The ergonomic layout, comfortable seating, and clever storage solutions enhance everyday usability, while modern technology keeps occupants connected and entertained.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s Focus features a sophisticated suspension system that delivers an engaging driving experience with responsive handling and a comfortable ride. The precise steering and well-tuned chassis make it enjoyable on winding roads while remaining composed in daily driving.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford Focus presents a dynamic, contemporary design with sharp character lines and athletic proportions. The distinctive front fascia, sculpted body sides, and practical hatchback silhouette create a visually appealing compact car with European-inspired styling cues.'
    }
  },

  // Porsche
  {
    id: 16,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+911',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche 911',
    year: 2023,
    type: 'Coupe',
    mileage: '3,200',
    fuel: 'Gasoline',
    rating: 5.0,
    power: '525Hp',
    cc: 3800,
    acceleration: '2.7s',
    price: 128500,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Flat-Six Engine',
      image: './images/porsche-engine.png',
      text: 'The heart of the Porsche 911 is its twin-turbocharged flat-six engine. This iconic boxer configuration delivers exceptional power, distinctive sound, and optimal weight distribution, continuing the legacy of Porsche\'s motorsport-derived engineering excellence.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche 911 interior blends luxury with performance. Premium materials, sculpted sport seats, and a driver-focused cockpit create an immersive, refined driving environment. Every detail is built for comfort, control, and unmistakable style.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-porsche.png',
      text: 'Porsche\'s 911 wheels and suspension are engineered for precision and agility. Lightweight alloys, performance tires, and adaptive suspension systems work together to deliver exceptional grip, sharp handling, and a smooth, confident ride.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Porsche 911 showcases a timeless design that has evolved while remaining instantly recognizable. The distinctive silhouette, round headlights, and sloping rear deck honor the model\'s heritage, while modern details and aerodynamic refinements enhance performance.'
    }
  },
  {
    id: 17,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+Cayenne',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche Cayenne',
    year: 2022,
    type: 'SUV',
    mileage: '6,500',
    fuel: 'Hybrid',
    rating: 4.8,
    power: '325Hp',
    cc: 3000,
    acceleration: '4.8s',
    price: 93400,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Hybrid Powertrain',
      image: './images/porsche-engine.png',
      text: 'The Porsche Cayenne Hybrid combines a turbocharged V6 engine with an electric motor for impressive performance and efficiency. This sophisticated powertrain delivers strong acceleration, responsive power delivery, and the ability to drive on electric power alone for short distances.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche Cayenne interior offers a premium environment with exceptional craftsmanship. The driver-focused cockpit, comfortable seating for five, and high-quality materials create a luxurious space, while advanced technology enhances both convenience and connectivity.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/porsche-wheel.png',
      text: 'Porsche\'s Cayenne features an advanced air suspension system and performance-oriented wheels. This sophisticated combination provides remarkable handling for an SUV, adaptable ride height for various conditions, and the comfort expected from a luxury vehicle.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/porsche-exterior.png',
      text: 'The Porsche Cayenne presents an athletic interpretation of the SUV form, with distinctive Porsche design elements and proportions. The wide stance, sculpted lines, and signature lighting create a powerful presence that conveys both luxury and performance capability.'
    }
  },
  {
    id: 18,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+Panamera',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche Panamera',
    year: 2021,
    type: 'Sedan',
    mileage: '8,800',
    fuel: 'Hybrid',
    rating: 4.7,
    power: '375Hp',
    cc: 2900,
    acceleration: '4.4s',
    price: 96700,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Hybrid Powertrain',
      image: './images/porsche-engine.png',
      text: 'The Porsche Panamera E-Hybrid combines a twin-turbo V6 engine with an electric motor for exceptional performance and efficiency. This advanced powertrain delivers impressive combined output, instant electric torque, and the option for zero-emission electric driving.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche Panamera interior features a perfect balance of luxury and sportiness. Four individual seats provide first-class comfort, while the driver-focused cockpit and advanced displays maintain Porsche\'s performance orientation, creating a sophisticated Gran Turismo experience.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/porsche-wheel.png',
      text: 'Porsche\'s Panamera features an adaptive air suspension system and performance wheels that deliver exceptional handling dynamics. This sophisticated setup provides both sporting capability and luxurious comfort, adapting to driving style and road conditions.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/porsche-exterior.png',
      text: 'The Porsche Panamera showcases elegant, flowing lines that emphasize its sporting character while accommodating four adults in comfort. The distinctive silhouette, refined details, and purposeful stance create a four-door sports car that is unmistakably Porsche.'
    }
  },
  {
    id: 19,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+Macan',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche Macan',
    year: 2022,
    type: 'SUV',
    mileage: '5,600',
    fuel: 'Gasoline',
    rating: 4.6,
    power: '275Hp',
    cc: 2000,
    acceleration: '6.2s',
    price: 65300,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Turbocharged Engine',
      image: './images/porsche-engine.png',
      text: 'The Porsche Macan is powered by a responsive 2.0-liter turbocharged four-cylinder engine. This efficient yet powerful unit delivers engaging performance with strong torque across the rev range, providing the spirited driving experience expected from a Porsche.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche Macan interior offers a sporty, driver-focused environment with premium appointments. The three-spoke steering wheel, rising center console, and supportive seats create a cockpit-like feel, while high-quality materials and craftsmanship emphasize its luxury positioning.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/porsche-wheel.png',
      text: 'Porsche\'s Macan features a sophisticated suspension system and performance-oriented wheels. This carefully tuned combination delivers the handling precision Porsche is known for in a compact SUV format, creating a vehicle that drives more like a sports car than a utility vehicle.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/porsche-exterior.png',
      text: 'The Porsche Macan presents a compact, athletic interpretation of Porsche design language. The sloping roofline, wide stance, and distinctive lighting signature create a dynamic appearance that stands apart from conventional SUVs, emphasizing its performance-oriented character.'
    }
  },
  {
    id: 20,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+Taycan',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche Taycan',
    year: 2023,
    type: 'Sedan',
    mileage: '1,200',
    fuel: 'Electric',
    rating: 5.0,
    power: '300Hp',
    cc: 0,
    acceleration: '3.2s',
    price: 88900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Electric Powertrain',
      image: './images/porsche-engine.png',
      text: 'The Porsche Taycan features an innovative all-electric powertrain with dual motors and an 800-volt architecture. This advanced system delivers extraordinary performance, instant torque, and repeatable acceleration with the driving dynamics Porsche is renowned for.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche Taycan interior blends traditional Porsche design elements with forward-thinking technology. Multiple digital displays, sustainable material options, and a minimalist approach create a cabin that honors Porsche heritage while embracing an electric future.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-porsche.png',
      text: 'Porsche\'s Taycan features an adaptive air suspension and innovative aerodynamic wheels. This sophisticated system optimizes both performance and efficiency, delivering the precise handling expected from a Porsche along with range-extending aerodynamic benefits.'
    },
    exterior: {
      top: '78%',
      left: '50%',
      title: 'Exterior',
      image: './images/porsche-exterior.png',
      text: 'The Porsche Taycan showcases a sleek, progressive design that establishes a new electric design language while remaining unmistakably Porsche. The low-slung silhouette, sculpted surfaces, and distinctive four-point LED lights create a modern interpretation of Porsche\'s sports car DNA.'
    }
  },

  // Additional to make 25
  {
    id: 21,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+iX',
    specsImage: './images/bmw-electric-suv-top-view.png',
    model: 'BMW iX',
    year: 2023,
    type: 'SUV',
    mileage: '1,800',
    fuel: 'Electric',
    rating: 4.9,
    power: '295Hp',
    cc: 0,
    acceleration: '4.6s',
    price: 87000,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW Electric Powertrain',
      image: './images/electric-motor-icon.jpg',
      text: 'The BMW iX features a cutting-edge electric powertrain with dual motors delivering all-wheel drive capability. This fifth-generation eDrive technology provides exceptional performance, efficiency, and range, representing BMW\'s most advanced electric vehicle platform.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-i-interior.png',
      text: 'The BMW iX interior showcases a minimalist, futuristic approach with sustainable materials and innovative technology. The panoramic glass roof, floating displays, and hexagonal steering wheel create a lounge-like environment that redefines luxury for the electric age.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw-i.png',
      text: 'BMW\'s iX features aerodynamically optimized wheels and a sophisticated adaptive suspension system. This advanced combination delivers both efficiency benefits for extended range and the precise handling dynamics expected from BMW, even in a large electric SUV.'
    },
    exterior: {
      top: '78%',
      left: '50%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW iX presents a bold vision of BMW\'s electric future with distinctive proportions and innovative details. The streamlined body, blanked-off kidney grille housing advanced sensors, and modern lighting create a progressive design that balances aerodynamic efficiency with presence.'
    }
  },
  {
    id: 22,
    resultImage: 'https://via.placeholder.com/300x200?text=Ford+Edge',
    specsImage: './images/ford-crossover-top-view.png',
    model: 'Ford Edge',
    year: 2022,
    type: 'Crossover',
    mileage: '5,200',
    fuel: 'Gasoline',
    rating: 4.4,
    power: '250Hp',
    cc: 2000,
    acceleration: '7.5s',
    price: 39800,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ford EcoBoost Engine',
      image: './images/engine-icon.jpg',
      text: 'The Ford Edge is powered by a responsive 2.0-liter EcoBoost turbocharged engine. This efficient powerplant delivers strong performance for everyday driving with good fuel economy, providing balanced power delivery across a wide range of driving conditions.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ford-interior.png',
      text: 'The Ford Edge interior offers a refined cabin with spacious seating for five and versatile cargo capacity. Premium materials, thoughtful design, and modern technology create a comfortable environment for both daily commuting and longer journeys.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ford.png',
      text: 'Ford\'s Edge features a well-tuned suspension system and stylish alloy wheels. This combination delivers a comfortable ride with good handling characteristics, striking a balance between responsive control and the smooth ride quality expected in a modern crossover.'
    },
    exterior: {
      top: '78%',
      left: '50%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ford Edge presents a bold, athletic design with strong character lines and a distinctive front grille. The well-proportioned body, sweeping roofline, and contemporary details create a modern crossover with presence and style that stands out in its segment.'
    }
  },
  {
    id: 23,
    resultImage: 'https://via.placeholder.com/300x200?text=Ferrari+California',
    specsImage: './images/ferrari-convertible-top-view.png',
    model: 'Ferrari California',
    year: 2020,
    type: 'Coupe',
    mileage: '6,300',
    fuel: 'Gasoline',
    rating: 4.7,
    power: '350Hp',
    cc: 3900,
    acceleration: '3.7s',
    price: 205000,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Ferrari V8 Twin-Turbo',
      image: './images/engine-icon.jpg',
      text: 'The Ferrari California T is powered by a 3.9-liter twin-turbocharged V8 engine. This sophisticated powerplant delivers impressive performance with reduced emissions and fuel consumption, combining the exhilarating Ferrari driving experience with greater efficiency.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/ferrari-interior.png',
      text: 'The Ferrari California interior offers a luxurious 2+ configuration with premium Italian craftsmanship. The retractable hardtop transforms the car from coupe to convertible, while the driver-focused cockpit and high-quality materials create an environment of sporting luxury.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-ferrari.png',
      text: 'Ferrari\'s California features a sophisticated suspension system with magnetorheological dampers and special wheels. This advanced combination delivers responsive handling with impressive ride comfort, making it ideal for both spirited driving and grand touring.'
    },
    exterior: {
      top: '78%',
      left: '50%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Ferrari California presents an elegant, flowing design that emphasizes its grand touring character. The distinctive front end, sculpted sides, and signature Ferrari details create a stylish convertible that balances performance aesthetics with sophisticated elegance.'
    }
  },
  {
    id: 24,
    resultImage: 'https://via.placeholder.com/300x200?text=Porsche+718+Cayman',
    specsImage: './images/porsche-top-view.png',
    model: 'Porsche 718 Cayman',
    year: 2022,
    type: 'Coupe',
    mileage: '2,200',
    fuel: 'Gasoline',
    rating: 4.8,
    power: '365Hp',
    cc: 2500,
    acceleration: '4.5s',
    price: 69900,
    engine: {
      top: '18%',
      left: '44%',
      title: 'Porsche Turbocharged Flat-Four',
      image: './images/engine-icon.jpg',
      text: 'The Porsche 718 Cayman features a mid-mounted 2.5-liter turbocharged flat-four engine. This powerful boxer engine delivers impressive output with a broad torque band, providing exhilarating acceleration and the distinctive character of Porsche\'s mid-engine sports car.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/porsche-interior.png',
      text: 'The Porsche 718 Cayman interior combines driver-focused design with premium craftsmanship. The perfectly positioned controls, supportive seats, and high-quality materials create a cockpit that emphasizes the direct connection between driver and machine.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-porsche.png',
      text: 'Porsche\'s 718 Cayman features a meticulously tuned mid-engine chassis and performance-oriented wheels. This perfectly balanced system delivers exceptional handling precision, responsiveness, and stability, creating one of the most engaging driving experiences available.'
    },
    exterior: {
      left: '50%',
      top: '78%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The Porsche 718 Cayman showcases a purposeful, athletic design with compact dimensions and perfect proportions. The distinctive headlights, muscular fenders, and flowing roofline create a pure sports car aesthetic that emphasizes the mid-engine layout and performance capability.'
    }
  },
  {
    id: 25,
    resultImage: 'https://via.placeholder.com/300x200?text=BMW+5+Series',
    specsImage: './images/bmw-sedan-top-view.png',
    model: 'BMW 5 Series',
    year: 2022,
    type: 'Sedan',
    mileage: '7,000',
    fuel: 'Gasoline',
    rating: 4.6,
    power: '290Hp',
    cc: 2500,
    acceleration: '5.8s',
    price: 63000,
    engine: {
      top: '18%',
      left: '44%',
      title: 'BMW TwinPower Turbo Engine',
      image: './images/engine-icon.jpg',
      text: 'The BMW 5 Series is powered by a refined 2.5-liter TwinPower Turbo engine. This sophisticated powerplant balances performance with efficiency, delivering smooth power delivery and impressive acceleration while maintaining the prestigious character expected of a luxury sedan.'
    },
    interior: {
      top: '47%',
      left: '52%',
      title: 'Interior',
      image: './images/bmw-interior.png',
      text: 'The BMW 5 Series interior exemplifies modern luxury with exceptional materials and craftsmanship. Spacious seating, advanced technology, and thoughtful design create a sophisticated environment that balances comfort, convenience, and driver engagement.'
    },
    wheels: {
      top: '63%',
      left: '33%',
      title: 'Wheels and Suspension',
      image: './images/wheelie-bmw.png',
      text: 'BMW\'s 5 Series features an adaptive suspension system and premium alloy wheels. This refined combination delivers the perfect balance between handling precision and ride comfort, adapting to both driver preferences and road conditions.'
    },
    exterior: {
      top: '78%',
      left: '50%',
      title: 'Exterior',
      image: './images/exterior-icon.png',
      text: 'The BMW 5 Series presents an elegant, executive design with perfect proportions and subtle athleticism. The distinctive kidney grille, precise character lines, and sophisticated details create a premium sedan with presence that communicates both luxury and performance.'
    }
  }
]