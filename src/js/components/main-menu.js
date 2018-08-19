const elementData = {
  "group1": {"color": "red",
              "name": "Alkalai Metals",
              "elements": [
                {number: "3", symbol:"Li", name:"Lithium", weight:"6.941"},
                {number: "11", symbol:"Na", name:"Sodium", weight:"22.98976..."},
                {number: "19", symbol:"K", name:"Potassium", weight:"39.948"},
                {number: "37", symbol:"Rb", name:"Rubidium", weight:"85.4678"},
                {number: "55", symbol:"Cs", name:"Caesium", weight:"132.9054"},
                {number: "87", symbol:"Fr", name:"Francium", weight:"(223)"}
            ]
          },
  "group2": {"color": "orange",
            "name": "Alkaline Earth Metals",
            "elements": [
              {number: "4", symbol:"Be", name:"Beryllium", weight:"9.012182"},
              {number: "12", symbol:"Mg", name:"Magnesium", weight:"24.305"},
              {number: "20", symbol:"Ca", name:"Calcium", weight:"40.078"},
              {number: "38", symbol:"Sr", name:"Strontium", weight:"87.62"},
              {number: "54", symbol:"Ba", name:"Barium", weight:"132.9054"},
              {number: "88", symbol:"Ra", name:"Radium", weight:"(226)"}
            ]
          },
  "group3": {"color": "yellow",
            "name": "Lanthanides",
            "elements": [
              {number: "57", symbol:"La", name:"Lanthanum", weight:"138.90547"},
              {number: "58", symbol:"Ce", name:"Cerium", weight:"140.116"},
              {number: "59", symbol:"Pr", name:"Praseodymium", weight:"140.90765"},
              {number: "60", symbol:"Nd", name:"Neodymium", weight:"144.242"},
              {number: "61", symbol:"Pm", name:"Promethium", weight:"(145)"},
              {number: "62", symbol:"Sm", name:"Samarium", weight:"150.36"},
              {number: "63", symbol:"Eu", name:"Europium", weight:"151.964"},
              {number: "64", symbol:"Gd", name:"Gadolinium", weight:"157.25"},
              {number: "65", symbol:"Tb", name:"Terbium", weight:"158.92535"},
              {number: "66", symbol:"Dy", name:"Dysprosium", weight:"162.5"},
              {number: "67", symbol:"Ho", name:"Holmium", weight:"164.93032"},
              {number: "68", symbol:"Er", name:"Erbium", weight:"167.259"},
              {number: "69", symbol:"Tm", name:"Thulium", weight:"168.93421"},
              {number: "70", symbol:"Yb", name:"Ytterbium", weight:"173.054"},
              {number: "71", symbol:"Lu", name:"Lutetium", weight:"174.9668"}
            ]
          },
  "group4": {"color": "green",
            "name": "Actinides",
            "elements": [
              {number: "89", symbol:"Ac", name:"Actinium", weight:"(227)"},
              {number: "90", symbol:"Th", name:"Thorium", weight:"232.03806"},
              {number: "91", symbol:"Pa", name:"Protactinium", weight:"231.0588"},
              {number: "92", symbol:"U", name:"Uranium", weight:"238.02891"},
              {number: "93", symbol:"Np", name:"Neptunium", weight:"(237)"},
              {number: "94", symbol:"Pu", name:"Plutonium", weight:"(244)"},
              {number: "95", symbol:"Am", name:"Americium", weight:"(243)"},
              {number: "96", symbol:"Cm", name:"Curium", weight:"(247)"},
              {number: "97", symbol:"Bk", name:"Berkelium", weight:"(247)"},
              {number: "98", symbol:"Cf", name:"Californium", weight:"(251)"},
              {number: "99", symbol:"Es", name:"Einstenium", weight:"(252)"},
              {number: "100", symbol:"Fm", name:"Fermium", weight:"(257)"},
              {number: "101", symbol:"Md", name:"Mendelevium", weight:"(258)"},
              {number: "102", symbol:"No", name:"Nobelium", weight:"(259)"},
              {number: "105", symbol:"Lr", name:"Lawrencium", weight:"(262)"}
            ]
          },
  "group5": {"color": "blue",
            "name": "Transition Metals",
            "elements": [
              {number: "21", symbol:"Sc", name:"Scandium", weight:"44.955912"},
              {number: "22", symbol:"Ti", name:"Titanium", weight:"47.867"},
              {number: "23", symbol:"V", name:"Vanadium", weight:"50.9415"},
              {number: "24", symbol:"Cr", name:"Chromium", weight:"51.9961"},
              {number: "25", symbol:"Mn", name:"Manganese", weight:"54.938045"},
              {number: "26", symbol:"Fe", name:"Iron", weight:"55.845"},
              {number: "27", symbol:"Co", name:"Cobalt", weight:"58.933195"},
              {number: "28", symbol:"Ni", name:"Nickel", weight:"58.6934"},
              {number: "29", symbol:"Cu", name:"Copper", weight:"63.546"},
              {number: "30", symbol:"Zn", name:"Zinc", weight:"65.38"},
              {number: "39", symbol:"Y", name:"Yttrium", weight:"88.90585"},
              {number: "40", symbol:"Zr", name:"Zirconium", weight:"91.224"},
              {number: "41", symbol:"Nb", name:"Niobium", weight:"92.90628"},
              {number: "42", symbol:"Mo", name:"Molybdenum", weight:"95.96"},
              {number: "43", symbol:"Tc", name:"Technetium", weight:"(98)"},
              {number: "44", symbol:"Ru", name:"Ruthenium", weight:"101.07"},
              {number: "45", symbol:"Rh", name:"Rhodium", weight:"102.9055"},
              {number: "46", symbol:"Pd", name:"Palladium", weight:"106.42"},
              {number: "47", symbol:"Ag", name:"Silver", weight:"107.8682"},
              {number: "48", symbol:"Cd", name:"Cadmium", weight:"112.411"},
              {number: "72", symbol:"Hf", name:"Hafnium", weight:"178.49"},
              {number: "73", symbol:"Ta", name:"Tantalum", weight:"180.94788"},
              {number: "74", symbol:"W", name:"Tungsten", weight:"183.84"},
              {number: "75", symbol:"Re", name:"Rhenium", weight:"186.207"},
              {number: "76", symbol:"Os", name:"Osmium", weight:"190.23"},
              {number: "77", symbol:"Ir", name:"Iridium", weight:"192.217"},
              {number: "78", symbol:"Pt", name:"Platinum", weight:"195.084"},
              {number: "79", symbol:"Au", name:"Gold", weight:"196.966569"},
              {number: "80", symbol:"Hg", name:"Mercury", weight:"200.59"},
              {number: "104", symbol:"Rf", name:"Rutherfordium", weight:"(267)"},
              {number: "105", symbol:"Db", name:"Dubnium", weight:"(268)"},
              {number: "106", symbol:"Sg", name:"Seaborgium", weight:"(271)"},
              {number: "107", symbol:"Bh", name:"Bohrium", weight:"(272)"},
              {number: "108", symbol:"Hs", name:"Hassium", weight:"(270)"},
              {number: "112", symbol:"Cn", name:"Copernicium", weight:"(285)"}
            ]
          },
  "group6": {"color": "purple",
            "name": "Post Transiton Metals",
            "elements": [
              {number: "13", symbol:"Al", name:"Aluminium", weight:"26.9815386"},
              {number: "31", symbol:"Ga", name:"Gallium", weight:"69.723"},
              {number: "49", symbol:"In", name:"Indium", weight:"114.818"},
              {number: "50", symbol:"Sn", name:"Tin", weight:"118.71"},
              {number: "81", symbol:"Tl", name:"Thallium", weight:"204.3833"},
              {number: "82", symbol:"Pb", name:"Lead", weight:"207.2"},
              {number: "83", symbol:"Bi", name:"Bismuth", weight:"208.9804"},
              {number: "84", symbol:"Po", name:"Polonium", weight:"(209)"}
            ]
          },
  "group7": {"color": "brown",
            "name": "Metalloid",
            "elements": [
              {number: "5", symbol:"B", name:"Boron", weight:"10.811"},
              {number: "14", symbol:"Si", name:"Silicon", weight:"28.0855"},
              {number: "32", symbol:"Ge", name:"Germanium", weight:"72.63"},
              {number: "33", symbol:"As", name:"Arsenic", weight:"74.9216"},
              {number: "51", symbol:"Sb", name:"Antimony", weight:"121.76"},
              {number: "52", symbol:"Te", name:"Tellurium", weight:"127.6"}
            ]
          },
  "group8": {"color": "pink",
            "name": "Non Metals",
            "elements": [
              {number: "1", symbol: "H", name:'Hydrogen', weight: "1.00794"},
              {number: "6", symbol:"C", name:"Carbon", weight:"12.0107"},
              {number: "7", symbol:"N", name:"Nitrogen", weight:"14.0067"},
              {number: "8", symbol:"O", name:"Oxygen", weight:"15.9994"},
              {number: "15", symbol:"P", name:"Phosphorus", weight:"30.973762"},
              {number: "16", symbol:"S", name:"Sulfur", weight:"32.065"},
              {number: "34", symbol:"Se", name:"Selenium", weight:"78.96"}
            ]
          },
  "group9": {"color": "white",
            "name": "Halogens",
            "elements": [
              {number: "9", symbol:"F", name:"Fluorine", weight:"18.9984032"},
              {number: "17", symbol:"Cl", name:"Chlorine", weight:"35.453"},
              {number: "35", symbol:"Br", name:"Bromine", weight:"79.904"},
              {number: "53", symbol:"I", name:"Iodine", weight:"126.90447"},
              {number: "85", symbol:"At", name:"Astatine", weight:"(210)"},
            ]
          },
  "group10": {"color": "#1AFFF1",
              "name": "Noble Gases",
              "elements": [
                {number: "2", symbol:"He", name:"Helium", weight:"4.002602"},
                {number: "10", symbol:"Ne", name:"Neon", weight:"20.1797"},
                {number: "18", symbol:"Ar", name:"Argon", weight:"39.948"},
                {number: "36", symbol:"Kr", name:"Krypton", weight:"83.798"},
                {number: "54", symbol:"Xe", name:"Xenon", weight:"131.293"},
                {number: "86", symbol:"Rn", name:"Radon", weight:"(222)"},
              ]
            },
  "group11": {"color": "#FF07FE",
              "name": "Unknown Properties",
              "elements": [
                {number: "109", symbol:"Mt", name:"Meitnerium", weight:"(276)"},
                {number: "110", symbol:"Ds", name:"Darmstadium", weight:"(281)"},
                {number: "111", symbol:"Rg", name:"Roentgenium", weight:"(280)"},
                {number: "113", symbol:"Uut", name:"Unutrium", weight:"(284)"},
                {number: "114", symbol:"Fl", name:"Flerovium", weight:"(289)"},
                {number: "115", symbol:"Uup", name:"Ununpentium", weight:"(288)"},
                {number: "116", symbol:"Lv", name:"Livermorium", weight:"(293)"},
                {number: "117", symbol:"Uus", name:"Ununseptium", weight:"(294)"},
                {number: "118", symbol:"Uuo", name:"Ununoctium", weight:"(294)"}
              ]
            }
};

function renderMainMenu() {
  for (let property in elementData) {
    let menuContainer = document.getElementById('#menu');

    let sphereContainer = document.createElement('a-sphere');
    sphereContainer.setAttribute('group-spheres',{color: elementData[property]["color"],
                                                  elements: elementData[property]["elements"]});

    let elText = document.createElement('a-text');
    elText.setAttribute('group-menu-text', {text: elementData[property]["name"]});

    sphereContainer.appendChild(elText);
    menuContainer.appendChild(sphereContainer);
  }
}

renderMainMenu();
