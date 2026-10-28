import {
  Building2,
  Compass,
  Factory,
  Landmark,
  Layers,
  Map,
  Route,
  Scan,
  ShieldCheck,
} from "lucide-react";

const asset = (name) =>
  `https://ranemanagementconsultant.com/uploads/Main-img/${name}`;

export const SERVICE_CATALOG = [
  {
    slug: "engineering-survey",
    group: "Expertise",
    title: "Engineering Survey",
    icon: Compass,
    tagline:
      "Crafting tomorrow's infrastructure with civil engineering, surveying and design excellence.",
    summary:
      "Licensed surveyors, engineers, GIS specialists and former Maharashtra Revenue Department professionals deliver land, topographic and alignment surveys using DGPS, ETS and drone technology.",
    image: asset("SRA.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Top_land_survey",
    subservices: [
      {
        title: "Land & Contour Survey",
        image: asset("SRA.webp"),
        description:
          "Topographic and contour surveys record physical land features and elevation changes, with CAD deliverables prepared for direct use in design and planning workflows.",
        projects: [
          "Tarapur — 500 Acres",
          "Panvel — 250 Acres",
          "Ghatkopar–Versova — 500 Acres",
          "Wankhede Stadium — 7 Acres",
        ],
        features: ["75,000 Ha. land surveyed", "200+ satisfied clients"],
      },
      {
        title: "Cadastral & Revenue Survey",
        image: asset("Cadastral-Revenue-Survey-New.webp"),
        description:
          "Cadastral surveys establish ownership, boundaries, easements and encumbrances, supported by Maharashtra revenue records including 7/12 extracts, 8A abstracts, village maps, gut books, mutation records and property cards.",
        projects: [
          "Jaigarh Port, Ratnagiri — 2,500 Acres",
          "Solapur–Osmanabad Central Railway — 80 Kms",
          "Thane–Diva Central Railway — 10 Kms",
          "Boisar — 150 Acres",
        ],
        features: [
          "Extensive revenue records database",
          "25+ years of land revenue expertise",
        ],
      },
      {
        title: "GIS–GPS Survey",
        image: asset("GIS-GPS-Survey.webp"),
        description:
          "DGPS equipment and modern mapping software capture precise geographic information for land surveys, asset management, environmental mapping and other geospatial programmes.",
        projects: [
          "MBMC — 19,520 Acres",
          "Navi Mumbai — 24,650 Acres",
          "Wana River, Wardha — 25 Kms",
          "MCGM Region — 1,000 Kms",
        ],
        features: [
          "Cutting-edge surveying equipment and software",
          "Highly skilled and trained professionals",
        ],
      },
      {
        title: "Route & Final Location Survey",
        image: asset("Route-Final-Location.webp"),
        description:
          "Route planning and final-location surveys support roads, railways, power lines, gas pipelines, water and sewer networks, and mobile tower installations.",
        projects: [
          "Talegaon–Kalwa — 14 Kms",
          "Optical Fibre Cable, Kalyan–Murbad — 31 Kms",
          "Jal Jeevan Mission — 3,183 Kms",
          "Raigad — 6.50 Kms",
        ],
        features: [
          "Decades of industry knowledge",
          "Effective communication with project-affected persons",
        ],
      },
      {
        title: "Drone Survey",
        image: asset("Drone-Survey.webp"),
        description:
          "DGCA-approved pilots and registered drones provide aerial surveying and mapping for land, infrastructure inspection and environmental monitoring assignments.",
        projects: [
          "Pen — 300 Acres",
          "Uttan — 250 Acres",
          "Virar — 250 Acres",
          "Poladpur — 870 Acres",
        ],
        features: ["Trained drone pilots", "Over 1,000 hectares surveyed"],
      },
      {
        title: "SRA Survey",
        image: asset("SRA-(Slum-Rehabilitation-Authority)-copy.webp"),
        description:
          "As an SRA Mumbai empanelled agency, the team conducts biometric and topographic surveys, with WGS 84 data GIS-mapped and referenced to SRA base stations.",
        projects: [
          "Andheri — 14 Acres",
          "Thane — 9 Acres",
          "Malad — 5 Acres",
          "Kurla — 8 Acres",
        ],
        features: ["Government empanelment", "Pioneering work in Mumbai"],
      },
      {
        title: "Licensed Surveyor Site Elevation Certificate",
        image: asset("Licensed-Survey-Certfied-Newer.webp"),
        description:
          "Licensed surveyors certify plot coordinates and site elevations for building approvals, with survey information also supplied in CAD format.",
        projects: [
          "Vikhroli — 35 Acres",
          "Thane — 5 Acres",
          "Mahim — 5 Acres",
          "Thane — 2 Acres",
        ],
        features: ["Expert liaison capability", "Proficient submissions and filings"],
      },
    ],
  },
  {
    slug: "land-acquisition",
    group: "Expertise",
    title: "Land Acquisition",
    icon: Landmark,
    tagline: "From vision to possession—your partner in land acquisition.",
    summary:
      "End-to-end support for government, semi-government and private infrastructure projects, from acquisition proposals and joint measurement through disbursement support and mutation updates.",
    image: asset("Land-Acquisition-Proposal-copy.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Top_land_acquisition_consultants_in_Mumbai",
    subservices: [
      {
        title: "Land Acquisition Proposal",
        image: asset("Land-Acquisition-Proposal-copy.webp"),
        description:
          "Revenue records and ownership details for project-affected persons are researched, compiled and submitted to the Collector's Office, with support for verification, correction and statutory notices.",
        projects: [
          "Rail Connectivity to Dighi Port — 35 Kms",
          "Kalyan–Kasara 3rd Line Project — 67 Kms",
          "Kalyan–Murbad Central Railway — 28 Kms",
          "JNPT–Bhilad — 200 Kms",
        ],
        features: ["Ownership identification precision", "Transparent surveying practices"],
      },
      {
        title: "Joint Measurement Survey / Government Survey",
        image: asset("Joint-Measurement-Survey-copy.webp"),
        description:
          "The team supports Revenue Department surveys with DGPS and drones, preparing Joint Measurement Survey sheets and Vivaran Patra area statements in the presence of stakeholders.",
        projects: [
          "Nagpur–Mumbai Super Communication Expressway — 1,300 Ha.",
          "Thane–Diva Central Railway — 10 Kms",
          "JNPT–Bhilad — 200 Kms",
          "Dolvi Industrial Area — 209 Ha.",
        ],
        features: ["Efficient measurement process", "Verification and authentication"],
      },
      {
        title: "Government Revenue Record Compilation",
        image: asset("Govt-Revenue-copy.webp"),
        description:
          "Government land records are gathered, checked and cross-referenced to verify ownership and boundaries before final land plans and area statements are authenticated.",
        projects: [
          "Nagpur–Mumbai Super Communication Expressway — 1,300 Ha.",
          "Panvel — 250 Acres",
          "Kalyan–Murbad Central Railway — 28 Kms",
          "Kalyan–Kasara 3rd Line Project — 67 Kms",
        ],
        features: ["Thorough ownership examination", "Accuracy and compliance assurance"],
      },
      {
        title: "Trees & Structure Valuation",
        image: asset("Trees-Structure-Valuation-copy.webp"),
        description:
          "Photographic inventories and dimensional assessments record tree and structure details for valuation by Agriculture, Forest and Public Works departments.",
        projects: [
          "JNPT–Bhilad — 200 Kms",
          "Panvel — 250 Acres",
          "Thane–Diva Central Railway — 10 Kms",
          "Nagpur–Mumbai Super Communication Expressway — 1,300 Ha.",
        ],
        features: [],
      },
      {
        title: "Mutation of Land",
        image: asset("Mutation-of-Land-copy.webp"),
        description:
          "Following compensation disbursement, the team coordinates with acquiring bodies, the Collector's Office and Revenue Department to transfer ownership details to the acquiring body.",
        projects: [],
        features: ["Comprehensive data integration", "Transparent surveying practices"],
      },
    ],
  },
  {
    slug: "land-record-verification-modification",
    group: "Expertise",
    title: "Land Record Verification & Modification",
    icon: Scan,
    tagline: "A trusted partner for land record verification and modification.",
    summary:
      "Procurement, verification and updating of government land records, supported by TILR surveys, cadastral expertise and liaison with revenue authorities.",
    image: asset("Revenue-Update-copy.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Land_Record_Village_Map",
    subservices: [
      {
        title: "Revenue Data Procurement",
        image: asset("Revenue-Update-copy.webp"),
        description:
          "The team obtains 7/12 and 8A abstracts, village and survey maps, gutbook maps, CTS maps and related village forms to establish the legal, geographic and mutation status of land.",
        projects: [
          "JNPT–Bhilad — 200 Kms",
          "Kalyan–Kasara 3rd Line Project — 67 Kms",
          "Samruddhi Mahamarg, Bhiwandi–Shahpur — 1,300 Ha.",
          "Barvi Dam — 260 Ha.",
        ],
        features: ["Streamlined revenue data procurement", "Comprehensive property knowledge"],
      },
      {
        title: "Assistance in Government Survey (T.I.L.R. Survey)",
        image: asset("Assistance-in-Government-copy.webp"),
        description:
          "Procedural and field support helps individuals, builders and government bodies complete TILR and Dy.SLR surveys for permissions, development-plan annotations and boundary measurement.",
        projects: [
          "Ahmednagar — 360 Cases",
          "Mira–Bhayander — 100 Acres",
          "Mira–Bhayander — 35 Acres",
          "Kalyan–Kasara 3rd Line Project — 67 Kms",
        ],
        features: ["Expedited government survey processes", "Support for development goals"],
      },
      {
        title: "Land Ownership Records Update",
        image: asset("Land-Ownership-Records-Update-copy.webp"),
        description:
          "Historic ownership records are traced across government departments and mutation entries are updated so current land ownership is accurately documented.",
        projects: [
          "Land Details Evaluation, Palghar — 22 Kms",
          "Land Clearance, Thane — 5 Kms",
          "Kalyan–Kasara 3rd Line Project — 67 Kms",
          "Kalyan–Asangaon, Mumbai Division — 30 Kms",
        ],
        features: ["Streamlined ownership information retrieval", "Timely mutation updates"],
      },
      {
        title: "Sub-Division of Land",
        image: asset("Land_Contour@2x.png"),
        description:
          "Topographic survey, notional boundary formation, government measurement fees and liaison with Dy.SLR and Tahsildar offices are coordinated through the full subdivision process.",
        projects: [
          "Six-Lane Road, Bhiwandi–Kalyan Shilphata — 18 Kms",
          "Ahmednagar — 360 Cases",
        ],
        features: ["Integrated subdivision support", "Expert land demarcation assistance"],
      },
    ],
  },
  {
    slug: "master-planning",
    group: "Expertise",
    title: "Master Planning",
    icon: Map,
    tagline: "Empowering governance through masterful mapping strategies.",
    summary:
      "Survey, revenue-record integration and statutory planning come together to create existing land use and development plans for towns, cities and urban local bodies.",
    image: asset("City-Survey-copy.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Master_planning_in_city_survey",
    subservices: [
      {
        title: "City Survey",
        image: asset("City-Survey-copy.webp"),
        description:
          "Topographic and cadastral survey data is integrated with digitised government revenue records to produce current city plans, assign property numbers and support property-card issuance.",
        projects: [
          "Thane Municipal Corporation",
          "Mira Bhayander Municipal Corporation",
          "Vasai Virar Municipal Corporation",
          "Kalyan Dombivli Municipal Corporation",
        ],
        features: ["Pioneering expertise", "Extensive revenue-document knowledge"],
      },
      {
        title: "Existing Land Use Plan Analysis & Evaluation (ELU)",
        image: asset("ELU-Ne.webp"),
        description:
          "Topographic survey, city-survey sheets and revenue records are combined into an Existing Land Use plan and taken through Town Planning and Dy.SLR approval before public verification.",
        projects: [
          "Talasari Nagar Panchayat",
          "Kankavli Nagar Panchayat",
          "Mangaon Nagar Panchayat",
          "Khalapur Nagar Panchayat",
        ],
        features: ["Comprehensive data integration", "Transparent planning practices"],
      },
      {
        title: "Development Plan",
        image: asset("Development-Plan.webp"),
        description:
          "Development plans build on a verified ELU and address zoning, infrastructure improvement and future land use for sustainable urban growth.",
        projects: [
          "Talasari Nagar Panchayat",
          "Kankavli Nagar Panchayat",
          "Mangaon Nagar Panchayat",
          "Khalapur Nagar Panchayat",
        ],
        features: ["Empanelled by Maharashtra State Town Planning Department"],
      },
    ],
  },
  {
    slug: "geospatial-it-solutions",
    group: "Expertise",
    title: "Geospatial & IT Solutions",
    icon: Layers,
    tagline: "Unlocking geospatial potential, powering your digital future.",
    summary:
      "Resource mapping, municipal GIS and purpose-built software convert field and revenue information into accessible systems for infrastructure management and public decision-making.",
    image: asset("Resource-Mapping-copy.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Geospatial_Land_Surveyor",
    subservices: [
      {
        title: "Resource Mapping",
        image: asset("Resource-Mapping-copy.webp"),
        description:
          "GIS datasets and attributes support the management of transmission lines, electrical systems, sewer and water networks, roads and fibre-optic infrastructure.",
        projects: [
          "Talegaon — 13.5 Kms",
          "Vasai — 10 Ha.",
          "Optical Fibre Cable, Kalyan–Murbad — 37.50 Kms",
          "Optical Fibre Cable, Mira–Bhayander — 5 Kms",
        ],
        features: ["Detailed network information", "Informed decision-making"],
      },
      {
        title: "Municipal GIS",
        image: asset("Muncipal-GIS-copy.webp"),
        description:
          "Custom GIS solutions combine topographic features, state revenue data and other municipal information, with the supporting software maintained for each programme.",
        projects: [
          "Navi Mumbai — 20,394 Parcels",
          "Road Utilities & Encroachments — 79 Sq. Kms",
        ],
        features: ["Public-service solutions", "Integrated mapping"],
      },
      {
        title: "Software Development",
        image: asset("Software-Development-copy.webp"),
        description:
          "Custom applications and system improvements are designed, developed and maintained for organisations that need reliable, purpose-built digital tools.",
        projects: ["Tree Inventory Android App"],
        features: ["Tailored solutions", "Reliable systems"],
      },
    ],
  },
  {
    slug: "project-planning-management",
    group: "Capabilities",
    title: "Project Planning & Management",
    icon: Route,
    tagline: "From concept to completion—your project, our expertise.",
    summary:
      "Feasibility, detailed project reporting, design and construction management for transport, water, drainage and public-realm infrastructure.",
    image: asset("Road-Network.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Construction_Project_management_company",
    subservices: [
      {
        title: "Road Network",
        image: asset("Road-Network.webp"),
        description:
          "Road feasibility and DPR services cover route alignment, layout, environmental impact, risk and construction-phase project management.",
        projects: [],
        features: [],
      },
      {
        title: "Rail Network",
        image: asset("Rail-Network.webp"),
        description:
          "Rail network, foot-over-bridge and road-over-bridge planning covers alignment, curves, track layout, design, impact assessment, DPRs and construction management.",
        projects: [],
        features: [],
      },
      {
        title: "Water Supply",
        image: asset("Water-Supply.webp"),
        description:
          "Water-supply planning includes treatment-plant siting, distribution networks, treatment systems, pumping stations, risk analysis, DPRs and project management.",
        projects: [],
        features: [],
      },
      {
        title: "Sewage",
        image: asset("Sewage.webp"),
        description:
          "Sewer-network and treatment-plant design addresses flows, treatment stages, sludge, reuse or disposal, controls, safety, costs and construction oversight.",
        projects: [],
        features: [],
      },
      {
        title: "Storm Water",
        image: asset("Storm-Water.webp"),
        description:
          "Storm-water systems are designed from site conditions, rainfall and environmental factors, with sizing, component selection, green infrastructure and construction management included.",
        projects: [],
        features: [],
      },
      {
        title: "Skywalks",
        image: asset("Land_Contour@2x_(1).png"),
        description:
          "Skywalk planning combines pedestrian flow, traffic, architectural integration, structural design, materials and construction management.",
        projects: [],
        features: [],
      },
      {
        title: "Bridges",
        image: asset("Land_Contour@2x_(2).png"),
        description:
          "Bridge and flyover services cover traffic and load assessment, structural and architectural design, tendering, quality control and programme oversight.",
        projects: [],
        features: [],
      },
    ],
  },
  {
    slug: "project-clearance",
    group: "Capabilities",
    title: "Project Clearance",
    icon: ShieldCheck,
    tagline: "Seamless approvals, stress-free projects.",
    summary:
      "Specialist coordination for environmental, forest, wildlife, coastal and aviation approvals—from documentation and portal submissions through conditions and post-clearance compliance.",
    image: asset("Land-Contour-grass.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Environmental_and_crz_Clearance",
    subservices: [
      {
        title: "Forest Clearance / Forest Land Diversion",
        image: asset("Land-Contour-grass.webp"),
        description:
          "PARIVESH applications, impact information, stakeholder coordination and compliance monitoring are managed through the forest diversion and MoEFCC process.",
        projects: [],
        features: [],
      },
      {
        title: "Wildlife Clearances",
        image: asset("Wildlife-Clearances.webp"),
        description:
          "Clearance support for national parks, wildlife sanctuaries, reserves and eco-sensitive zones includes applications, studies, inspections, consultations and ongoing compliance.",
        projects: [],
        features: [],
      },
      {
        title: "Environmental Clearances",
        image: asset("Forest-Clearances.webp"),
        description:
          "EIA-aligned applications, environmental reports, authority engagement, consultations, hearings and post-approval reporting are coordinated with the relevant appraisal committee.",
        projects: [],
        features: [],
      },
      {
        title: "Coastal Regulation Zone (CRZ) Clearances",
        image: asset("Coastal-Zone-Newer.webp"),
        description:
          "Documentation and authority coordination support projects through applicable Coastal Regulation Zone requirements and approval stages.",
        projects: [],
        features: [],
      },
      {
        title: "Height Clearance from Airport Authority of India (AAI)",
        image: asset("Height-Clearance.webp"),
        description:
          "Licensed survey certification, CCZM review, permissible elevation checks and NOCAS filing are coordinated until the final AAI height NOC is issued.",
        projects: [],
        features: [],
      },
    ],
  },
  {
    slug: "architecture",
    group: "Capabilities",
    title: "Architecture",
    icon: Building2,
    tagline: "Architectural brilliance, redefining possibilities.",
    summary:
      "Building approvals, NOCs, design development, cost planning, interior design and project management form an integrated architectural service.",
    image: asset("Building-Plan.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Building_plan_approval",
    subservices: [
      {
        title: "Building Plan Approval",
        image: asset("Building-Plan.webp"),
        description:
          "New-build and redevelopment plans are prepared for local approval with careful attention to permitted use, space planning, FSI, functionality and regulatory compliance.",
        projects: [],
        features: [],
      },
      {
        title: "No Objection Certificates (NOCs)",
        image: asset("NOC-02.webp"),
        description:
          "Applications and liaison cover the internal and external authorities whose NOCs may be required for building approval, including aviation, coastal, heritage, rail, port and environmental bodies.",
        projects: [],
        features: [],
      },
      {
        title: "Design Development",
        image: asset("Design-Development.webp"),
        description:
          "Building plans and elevations balance aesthetics, usable space, stakeholder needs, functionality and sustainability.",
        projects: [],
        features: [],
      },
      {
        title: "Cost Estimation & Budgeting",
        image: asset("Cost-Estimation-Budgeting.webp"),
        description:
          "Market research, detailed estimates and project budgeting establish realistic financial expectations and support informed decisions through delivery.",
        projects: [],
        features: [],
      },
      {
        title: "Interior Design",
        image: asset("Interior-Design.webp"),
        description:
          "Interior assignments progress from brief and concept through material selection, execution planning, quality reviews and final handover.",
        projects: [],
        features: [],
      },
      {
        title: "Building Project Management",
        image: asset("Building-Project-Management.webp"),
        description:
          "Tendering, contracts, consultant and agency appointments, bill verification, quality control and BIM coordination support efficient construction delivery.",
        projects: [],
        features: [],
      },
    ],
  },
  {
    slug: "land-building-valuation",
    group: "Capabilities",
    title: "Land & Building Valuation",
    icon: Factory,
    tagline: "Valuing real estate with expertise and integrity.",
    summary:
      "Property valuation and technical-financial assessment for lenders, individuals and corporate organisations across transactions, financing, compliance and disputes.",
    image: asset("Banking-copy.webp"),
    sourceUrl:
      "https://ranemanagementconsultant.com/Service/Land_report_advisory",
    subservices: [
      {
        title: "Banking & Financial Institutes",
        image: asset("Banking-copy.webp"),
        description:
          "Pre- and post-valuation, technical and financial assessment, collateral valuation and periodic asset review support lending and investment decisions.",
        projects: [],
        features: [],
      },
      {
        title: "Individuals",
        image: asset("Individual-copy.webp"),
        description:
          "Valuation advice supports tax and legal matters, visas, asset sale and purchase, insurance, education loans, mortgages and secondary real-estate investments.",
        projects: [],
        features: [],
      },
      {
        title: "Corporates",
        image: asset("Corporates-copy.webp"),
        description:
          "Corporate work includes M&A, bank finance and solvency, insurance, arbitration and litigation, public issues, insolvency advice and loan-against-property valuations.",
        projects: [],
        features: [],
      },
    ],
  },
];

export const SERVICE_GROUPS = ["Expertise", "Capabilities"].map((name) => ({
  name,
  services: SERVICE_CATALOG.filter((service) => service.group === name),
}));

export const getServiceBySlug = (slug) =>
  SERVICE_CATALOG.find((service) => service.slug === slug);

export const PROJECT_SERVICE_GROUPS = SERVICE_CATALOG.map((service) => ({
  serviceSlug: service.slug,
  serviceTitle: service.title,
  sourceUrl: service.sourceUrl,
  entries: service.subservices.filter((subservice) => subservice.projects.length > 0),
})).filter((group) => group.entries.length > 0);

