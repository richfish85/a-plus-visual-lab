const connectorCards = [
  {
    id: "VIS-001",
    title: "RJ45 Ethernet Cable",
    image: "../assets/generated/VIS-001-rj45-ethernet-cable-photo-reference.png",
    alt: "RJ45 Ethernet cable connector with visible clip and gold contacts",
    zone: "network",
    answer: "Ethernet port",
    note: "Used for wired network connections."
  },
  {
    id: "VIS-002",
    title: "Ethernet Port",
    image: "../assets/generated/VIS-002-ethernet-port-photo-reference.png",
    alt: "Ethernet port on a generic computer with contact pins visible",
    zone: "network",
    answer: "RJ45 cable",
    note: "The RJ45 connector plugs into this port."
  },
  {
    id: "VIS-003",
    title: "HDMI Cable and Port",
    image: "../assets/generated/VIS-003-hdmi-cable-port-photo-reference.png",
    alt: "HDMI cable connector next to a matching HDMI port",
    zone: "display",
    answer: "Display connection",
    note: "HDMI carries video and audio to a display."
  },
  {
    id: "VIS-004",
    title: "USB-A and USB-C",
    image: "../assets/generated/VIS-004-usb-a-usb-c-blue-lineart.png",
    alt: "Blue lineart comparison of USB-A and USB-C connector shapes",
    zone: "usb",
    answer: "Shape sort",
    note: "USB-A is rectangular. USB-C is rounded and reversible."
  }
];

const connectorZones = [
  {
    id: "network",
    title: "Network Match",
    prompt: "RJ45 cable and Ethernet port belong here.",
    required: ["VIS-001", "VIS-002"]
  },
  {
    id: "display",
    title: "Display Path",
    prompt: "HDMI belongs here.",
    required: ["VIS-003"]
  },
  {
    id: "usb",
    title: "USB Shape Sort",
    prompt: "USB-A and USB-C comparison belongs here.",
    required: ["VIS-004"]
  }
];

const laptopParts = [
  {
    id: "LAP-001",
    title: "USB-C Port",
    visual: "USB-C",
    visualClass: "laptop-usbc",
    zone: "laptop-dock",
    prompt: "Small rounded port used for power, data, or a dock.",
    note: "USB-C can be reversible and may support charging or display output.",
    answers: ["usb-c", "usb c", "usbc", "usb-c port", "type-c", "type c", "thunderbolt"]
  },
  {
    id: "LAP-002",
    title: "HDMI Port",
    visual: "HDMI",
    visualClass: "laptop-hdmi",
    zone: "laptop-display",
    prompt: "Flat display port for an external monitor or projector.",
    note: "HDMI carries video and audio to a screen.",
    answers: ["hdmi", "hdmi port", "display port", "external display", "external display port"]
  },
  {
    id: "LAP-003",
    title: "SO-DIMM RAM",
    visual: "RAM",
    visualClass: "laptop-ram",
    zone: "laptop-memory",
    prompt: "Short memory stick seated inside the laptop.",
    note: "RAM is working memory. Handle by the edges.",
    answers: ["ram", "so-dimm", "sodimm", "so-dimm ram", "sodimm ram", "memory", "laptop memory"]
  },
  {
    id: "LAP-004",
    title: "M.2 SSD",
    visual: "M.2",
    visualClass: "laptop-storage",
    zone: "laptop-storage",
    prompt: "Thin storage card secured with a small screw.",
    note: "M.2 SSDs are common internal laptop storage devices.",
    answers: ["m.2", "m2", "m.2 ssd", "m2 ssd", "ssd", "storage", "internal storage"]
  },
  {
    id: "LAP-005",
    title: "Wi-Fi Card",
    visual: "Wi-Fi",
    visualClass: "laptop-wifi",
    zone: "laptop-wireless",
    prompt: "Small card with antenna leads for wireless networking.",
    note: "Wireless cards provide Wi-Fi and sometimes Bluetooth.",
    answers: ["wi-fi", "wifi", "wi-fi card", "wifi card", "wireless", "wireless card", "bluetooth"]
  }
];

const laptopZones = [
  {
    id: "laptop-dock",
    title: "Charge or Dock",
    number: "01",
    view: "external",
    viewLabel: "External ports view",
    mapLabel: "USB-C / Thunderbolt",
    mapClass: "anchor-usbc",
    prompt: "Power adapter, data, or docking path.",
    hint: "Look for the small rounded port on the external side view.",
    required: ["LAP-001"]
  },
  {
    id: "laptop-display",
    title: "External Display",
    number: "02",
    view: "external",
    viewLabel: "External ports view",
    mapLabel: "HDMI / Display",
    mapClass: "anchor-hdmi",
    prompt: "Monitor, projector, or TV output.",
    hint: "Look for the flat trapezoid port on the external side view.",
    required: ["LAP-002"]
  },
  {
    id: "laptop-memory",
    title: "Working Memory",
    number: "03",
    view: "internal",
    viewLabel: "Internal view",
    mapLabel: "RAM slots",
    mapClass: "anchor-ram",
    prompt: "Temporary workspace for running apps.",
    hint: "Look for the two long vertical slots inside the laptop.",
    required: ["LAP-003"]
  },
  {
    id: "laptop-storage",
    title: "Internal Storage",
    number: "04",
    view: "internal",
    viewLabel: "Internal view",
    mapLabel: "M.2 SSD storage",
    mapClass: "anchor-ssd",
    prompt: "Where OS, apps, and files live.",
    hint: "Look for the thin horizontal card near the lower internal board.",
    required: ["LAP-004"]
  },
  {
    id: "laptop-wireless",
    title: "Wireless Network",
    number: "05",
    view: "internal",
    viewLabel: "Internal view",
    mapLabel: "Wireless card",
    mapClass: "anchor-wifi",
    prompt: "Wi-Fi and short-range radio path.",
    hint: "Look for the small square card with antenna lead lines.",
    required: ["LAP-005"]
  }
];

const laptopModes = {
  learn: {
    title: "Learn mode",
    prompt: "Hover or focus a numbered hotspot to see a short popup."
  },
  practice: {
    title: "Practice mode",
    prompt: "Use the numbered diagram, then type each matching part name."
  },
  quiz: {
    title: "Quiz mode",
    prompt: "No answer key on the diagram. Type all five part names, then check."
  }
};

const symptomCards = [
  {
    id: "SYM-001",
    title: "No Display",
    clue: "Amber",
    visualClass: "display-clue",
    prompt: "Tower is on. Monitor light is amber.",
    zone: "display-check"
  },
  {
    id: "SYM-002",
    title: "No Websites",
    clue: "DNS?",
    visualClass: "network-clue",
    prompt: "Wi-Fi says connected. Browser times out.",
    zone: "network-check"
  },
  {
    id: "SYM-003",
    title: "Suspicious Email",
    clue: "Link",
    visualClass: "security-clue",
    prompt: "Urgent sign-in message from unknown sender.",
    zone: "security-check"
  },
  {
    id: "SYM-004",
    title: "Slow Startup",
    clue: "Disk",
    visualClass: "os-clue",
    prompt: "Storage bar is red. Login takes too long.",
    zone: "os-check"
  },
  {
    id: "SYM-005",
    title: "App Crash",
    clue: "Error",
    visualClass: "software-clue",
    prompt: "Same error appears when app opens.",
    zone: "software-check"
  }
];

const checkZones = [
  {
    id: "display-check",
    title: "Check Display Path",
    prompt: "Input source, video cable, then RAM seating.",
    required: ["SYM-001"]
  },
  {
    id: "network-check",
    title: "Check Network Settings",
    prompt: "IP address, gateway, DNS, then router status.",
    required: ["SYM-002"]
  },
  {
    id: "security-check",
    title: "Check Safely",
    prompt: "Do not click. Inspect sender, link, and urgency.",
    required: ["SYM-003"]
  },
  {
    id: "os-check",
    title: "Check OS Health",
    prompt: "Startup apps, disk space, updates, temp files.",
    required: ["SYM-004"]
  },
  {
    id: "software-check",
    title: "Check App Path",
    prompt: "Restart, update, event logs, then reinstall path.",
    required: ["SYM-005"]
  }
];

const ticketStages = [
  { id: "new", title: "New" },
  { id: "diagnose", title: "Diagnose" },
  { id: "fixing", title: "Fixing" },
  { id: "document", title: "Document" },
  { id: "done", title: "Done" }
];

const topologyNodes = [
  {
    id: "laptop",
    icon: "PC",
    title: "Laptop",
    prompt: "The user device starts the request."
  },
  {
    id: "router",
    icon: "RTR",
    title: "Router",
    prompt: "The gateway forwards traffic."
  },
  {
    id: "dns",
    icon: "DNS",
    title: "DNS",
    prompt: "Name lookup happens here."
  },
  {
    id: "website",
    icon: "WEB",
    title: "Website",
    prompt: "The destination responds."
  },
  {
    id: "switch",
    icon: "SW",
    title: "Switch",
    prompt: "Useful on a LAN, but not this trace."
  },
  {
    id: "desktop",
    icon: "DESK",
    title: "Desktop",
    prompt: "Another local device."
  }
];

const topologyPath = ["laptop", "router", "dns", "website"];

const tickets = [
  {
    id: "APLUS-001",
    title: "No display",
    clue: "Monitor amber light",
    next: "Check input and cable first."
  },
  {
    id: "APLUS-002",
    title: "No websites",
    clue: "Wi-Fi connected",
    next: "Check IP, gateway, and DNS."
  },
  {
    id: "APLUS-003",
    title: "Slow startup",
    clue: "Storage bar red",
    next: "Check startup apps and disk."
  },
  {
    id: "APLUS-004",
    title: "Suspicious email",
    clue: "Unknown sign-in link",
    next: "Do not click. Inspect safely."
  },
  {
    id: "APLUS-005",
    title: "App crash",
    clue: "Same error repeats",
    next: "Restart, update, then check logs."
  }
];

const sectionRoutes = [
  {
    id: "MAP-001",
    icon: "HW",
    ourMode: "Hardware Bench",
    status: "Built starter",
    statusType: "built",
    comptiaMode: "Hardware",
    courseTitle: "Hardware sequence",
    topics: ["Cable types", "Motherboards", "Cooling and power", "System memory", "BIOS/UEFI", "Storage device", "Printers and MFDs", "Printer types", "Laptop hardware"],
    role: "Identify physical parts and ports before troubleshooting.",
    nextBuild: "Add hardware visual selector.",
    routeModule: "drag",
    routeAction: "Start Connector Match",
    image: "../assets/generated/VIS-001-rj45-ethernet-cable-photo-reference.png",
    imageAlt: "RJ45 Ethernet cable used as a hardware route visual"
  },
  {
    id: "MAP-002",
    icon: "NET",
    ourMode: "Network Table",
    status: "Built starter",
    statusType: "built",
    comptiaMode: "Networking",
    courseTitle: "Networking sequence",
    topics: ["Cable types", "Networking basics", "Wireless networks", "Internet connections", "Network addressing and communication", "Network configurations", "Network servers and services"],
    role: "Trace network paths and match symptoms to first checks.",
    nextBuild: "Add network route tile to landing page.",
    routeModule: "topology",
    routeAction: "Trace Network Path",
    image: "../assets/generated/VIS-002-ethernet-port-photo-reference.png",
    imageAlt: "Ethernet port used as a networking route visual"
  },
  {
    id: "MAP-003",
    icon: "VM",
    ourMode: "OS and VM Station",
    status: "Docs ready",
    statusType: "planned",
    comptiaMode: "Virtualization and Cloud Computing",
    courseTitle: "Virtualization and cloud sequence",
    topics: ["Virtualization concepts", "Cloud computing", "Storage device"],
    role: "Enter VM and cloud concepts through small visual examples.",
    nextBuild: "Add VM and cloud flash cards.",
    routeModule: "flash",
    routeAction: "Review Visual Cards"
  },
  {
    id: "MAP-004",
    icon: "MOB",
    ourMode: "Mobile and Laptop Tray",
    status: "Built starter",
    statusType: "built",
    comptiaMode: "Mobile Devices",
    courseTitle: "Mobile and laptop sequence",
    topics: ["Laptops and mobile devices", "Mobile applications", "Laptop hardware", "Troubleshooting mobile devices"],
    role: "Match laptop parts before broader mobile-device practice.",
    nextBuild: "Add mobile app practice.",
    routeModule: "laptop",
    routeAction: "Open Laptop Hardware"
  },
  {
    id: "MAP-005",
    icon: "FIX",
    ourMode: "Troubleshooting Wall",
    status: "Built starter",
    statusType: "built",
    comptiaMode: "Hardware and Networking Troubleshooting",
    courseTitle: "Troubleshooting sequence",
    topics: ["Troubleshooting methodology", "Troubleshooting hardware issues", "Troubleshooting storage devices", "Troubleshooting video issues", "Troubleshooting networks", "Troubleshooting mobile devices", "Troubleshooting printer devices"],
    role: "Start from a symptom or ticket and move to evidence.",
    nextBuild: "Link tickets to domains.",
    routeModule: "tickets",
    routeAction: "Open Ticket Board"
  },
  {
    id: "MAP-006",
    icon: "SAFE",
    ourMode: "Security Station",
    status: "Docs ready",
    statusType: "planned",
    comptiaMode: "Later Core 2 and safety layer",
    courseTitle: "Safety intro sequence",
    topics: ["Intro", "Safe handling", "Suspicious-message practice", "Privacy checks"],
    role: "Keep safety visible without treating it as a Core 1 domain.",
    nextBuild: "Add Core 2 map later.",
    routeModule: "symptoms",
    routeAction: "Match Safe Checks"
  }
];

const courseSequenceModules = [
  { group: "Intro", modules: ["Intro"] },
  { group: "Hardware sequence", modules: ["Cable types", "Motherboards", "Cooling and power", "System memory", "BIOS/UEFI", "Storage device"] },
  { group: "Virtualization and cloud sequence", modules: ["Virtualization concepts", "Cloud computing"] },
  { group: "Networking sequence", modules: ["Networking basics", "Wireless networks", "Internet connections", "Network addressing and communication", "Network configurations", "Network servers and services"] },
  { group: "Mobile and laptop sequence", modules: ["Laptops and mobile devices", "Mobile applications", "Laptop hardware"] },
  { group: "Printer sequence", modules: ["Printers and MFDs", "Printer types"] },
  { group: "Troubleshooting sequence", modules: ["Troubleshooting methodology", "Troubleshooting hardware issues", "Troubleshooting storage devices", "Troubleshooting video issues", "Troubleshooting networks", "Troubleshooting mobile devices", "Troubleshooting printer devices"] }
];

const moduleLabels = {
  drag: "Connector Drag Match",
  flash: "Flash Cards",
  symptoms: "Symptom Match",
  laptop: "Laptop Hardware",
  topology: "Topology Trace",
  tickets: "Ticket Board",
  progress: "Progress",
  evidence: "Evidence"
};

const courseFocusProfiles = {
  drag: {
    default: {
      focusLabel: "Starter hardware drill",
      prompt: "Use the current connector cards as the hands-on starter for this hardware topic."
    },
    "Cable types": {
      cardId: "VIS-001",
      zoneId: "network",
      focusLabel: "RJ45 cable to Network Match",
      prompt: "Start with the RJ45 cable. Match it to the network zone, then compare it with the Ethernet port."
    },
    "Motherboards": {
      focusLabel: "Visual selector planned",
      prompt: "Use the connector cards for now. The next hardware build can add motherboard slots and ports."
    },
    "Cooling and power": {
      focusLabel: "Hardware visual set planned",
      prompt: "Use the connector cards as a warm-up. The next build can add fan, PSU, and power connector cards."
    },
    "System memory": {
      focusLabel: "Memory card set planned",
      prompt: "Use the starter hardware match now. A RAM seating and slot-orientation card set can come next."
    },
    "BIOS/UEFI": {
      focusLabel: "Firmware prompt planned",
      prompt: "Use the starter visual match now. A BIOS/UEFI screen-ordering activity can come next."
    },
    "Storage device": {
      focusLabel: "Storage visual set planned",
      prompt: "Use the starter hardware cards now. A storage connector and device match can come next."
    },
    "Printers and MFDs": {
      focusLabel: "Printer visual set planned",
      prompt: "Use the current connector match as the physical-identification starter before printer cards are added."
    },
    "Printer types": {
      focusLabel: "Printer type cards planned",
      prompt: "Use the current connector match as the physical-identification starter before printer type cards are added."
    },
    "Laptop hardware": {
      cardId: "VIS-004",
      zoneId: "usb",
      focusLabel: "USB shape sort",
      prompt: "Start with the USB-A and USB-C card. Laptop hardware often begins with recognizing small port shapes."
    }
  },
  flash: {
    default: {
      flashCardId: "VIS-001",
      focusLabel: "Starter visual recall",
      prompt: "Use this starter flash deck as a short visual recall warm-up while the dedicated topic deck is planned."
    },
    "Virtualization concepts": {
      flashCardId: "VIS-004",
      focusLabel: "Visual recall placeholder",
      prompt: "Use this as a quick recall warm-up. A VM concept card deck can add host, guest, snapshot, and resource visuals next."
    },
    "Cloud computing": {
      flashCardId: "VIS-002",
      focusLabel: "Networked service placeholder",
      prompt: "Review the idea of connecting to a service. A cloud card deck can add SaaS, IaaS, regions, and shared responsibility next."
    },
    "Storage device": {
      flashCardId: "VIS-003",
      focusLabel: "Device path placeholder",
      prompt: "Use this visual recall warm-up now. Storage device cards can add SSD, HDD, M.2, SATA, and external media next."
    }
  },
  symptoms: {
    default: {
      symptomId: "SYM-003",
      checkId: "security-check",
      focusLabel: "Safe first check",
      prompt: "Start with the suspicious email clue. The safe action is to inspect without clicking."
    },
    "Intro": {
      symptomId: "SYM-003",
      checkId: "security-check",
      focusLabel: "Do not click first",
      prompt: "Start with the suspicious email clue. This keeps safety visible before any technical fix."
    }
  },
  laptop: {
    default: {
      laptopPartId: "LAP-001",
      laptopZoneId: "laptop-dock",
      focusLabel: "Laptop part match",
      prompt: "Start with USB-C. Match the part token to the role it plays on a laptop."
    },
    "Laptops and mobile devices": {
      laptopPartId: "LAP-005",
      laptopZoneId: "laptop-wireless",
      focusLabel: "Wireless hardware focus",
      prompt: "Start with the Wi-Fi card. It connects the laptop to wireless networks."
    },
    "Mobile applications": {
      laptopPartId: "LAP-001",
      laptopZoneId: "laptop-dock",
      focusLabel: "Device access first",
      prompt: "Use USB-C as a physical-device warm-up. A mobile app troubleshooting module can come next."
    },
    "Laptop hardware": {
      laptopPartId: "LAP-003",
      laptopZoneId: "laptop-memory",
      focusLabel: "Internal part focus",
      prompt: "Start with SO-DIMM RAM. Match it to working memory, then continue with the other internal parts."
    }
  },
  tickets: {
    default: {
      ticketId: "APLUS-001",
      focusLabel: "Troubleshooting flow",
      prompt: "Start with one ticket, then move it through diagnose, fixing, document, and done."
    },
    "Laptops and mobile devices": {
      ticketId: "APLUS-002",
      focusLabel: "Mobile connectivity stand-in",
      prompt: "Start with the no-websites ticket. It works as a starter for mobile connectivity troubleshooting."
    },
    "Mobile applications": {
      ticketId: "APLUS-005",
      focusLabel: "Mobile app stand-in",
      prompt: "Start with the app-crash ticket. It mirrors the safest first steps for many mobile app issues."
    },
    "Laptop hardware": {
      ticketId: "APLUS-001",
      focusLabel: "Laptop display stand-in",
      prompt: "Start with the no-display ticket. It mirrors a common laptop hardware troubleshooting path."
    },
    "Troubleshooting methodology": {
      ticketId: "APLUS-001",
      focusLabel: "Move one card at a time",
      prompt: "Start with no display and practice the method: diagnose, fix, document, done."
    },
    "Troubleshooting hardware issues": {
      ticketId: "APLUS-001",
      focusLabel: "Hardware symptom",
      prompt: "Start with no display. Check the visible path before assuming a deeper hardware fault."
    },
    "Troubleshooting storage devices": {
      ticketId: "APLUS-003",
      focusLabel: "Storage symptom",
      prompt: "Start with slow startup. The clue points toward disk space, startup load, or storage health."
    },
    "Troubleshooting video issues": {
      ticketId: "APLUS-001",
      focusLabel: "Video symptom",
      prompt: "Start with no display. Check input and cable before moving deeper."
    },
    "Troubleshooting networks": {
      ticketId: "APLUS-002",
      focusLabel: "Network symptom",
      prompt: "Start with no websites. Check IP, gateway, DNS, and router status."
    },
    "Troubleshooting mobile devices": {
      ticketId: "APLUS-005",
      focusLabel: "Mobile symptom stand-in",
      prompt: "Start with app crash. Use the same calm troubleshooting flow for mobile-device issues."
    },
    "Troubleshooting printer devices": {
      ticketId: "APLUS-005",
      focusLabel: "Printer ticket planned",
      prompt: "Use app crash as a process stand-in for now. A printer-specific jam, queue, or driver ticket can come next."
    }
  },
  topology: {
    default: {
      nodeId: "laptop",
      focusLabel: "Trace from the start",
      prompt: "Start at the laptop, then trace the request toward router, DNS, and website."
    },
    "Cable types": {
      nodeId: "router",
      focusLabel: "Cable reaches the gateway",
      prompt: "Start the trace at the laptop, then notice how the path reaches the router."
    },
    "Networking basics": {
      nodeId: "laptop",
      focusLabel: "Endpoint starts the request",
      prompt: "Begin at the laptop. Networking basics start with who sends the request and where it goes next."
    },
    "Wireless networks": {
      nodeId: "router",
      focusLabel: "Gateway focus",
      prompt: "Begin at the laptop, then focus on the router as the wireless gateway."
    },
    "Internet connections": {
      nodeId: "router",
      focusLabel: "Gateway to internet",
      prompt: "Begin at the laptop, then follow the router toward the outside service."
    },
    "Network addressing and communication": {
      nodeId: "dns",
      focusLabel: "Name lookup focus",
      prompt: "Begin at the laptop. Watch for DNS in the path because names must become reachable addresses."
    },
    "Network configurations": {
      nodeId: "router",
      focusLabel: "Config focus",
      prompt: "Begin at the laptop, then focus on the gateway settings that make the path work."
    },
    "Network servers and services": {
      nodeId: "website",
      focusLabel: "Service focus",
      prompt: "Begin at the laptop. The website node stands in for the service the user is trying to reach."
    }
  }
};

const state = {
  selectedCardId: null,
  selectedSymptomId: null,
  laptopActiveZoneId: null,
  laptopHintZoneId: null,
  laptopMode: "practice",
  selectedTicketId: null,
  mapMode: "lab",
  selectedCourseModule: null,
  highlightedRouteId: null,
  launchFocus: null,
  placed: {},
  symptomPlaced: {},
  laptopAnswers: {},
  laptopChecked: {},
  known: new Set(),
  ticketStage: Object.fromEntries(tickets.map((ticket) => [ticket.id, "new"])),
  topologyStep: 0,
  flashIndex: 0,
  flashFlipped: false
};

const mapWorkspace = document.querySelector("#map-workspace");
const mapGrid = document.querySelector("#map-grid");
const mapModeBar = document.querySelector("#map-mode-bar");
const courseSequencePanel = document.querySelector("#course-sequence-panel");
const mapFeedback = document.querySelector("#map-feedback");
const dragGrid = document.querySelector("#draggable-grid");
const dropGrid = document.querySelector("#drop-grid");
const laptopPartGrid = document.querySelector("#laptop-part-grid");
const laptopZoneGrid = document.querySelector("#laptop-zone-grid");
const laptopModeBar = document.querySelector("#laptop-mode-bar");
const laptopDetailPanel = document.querySelector("#laptop-detail-panel");
const laptopMatchList = document.querySelector("#laptop-match-list");
const symptomGrid = document.querySelector("#symptom-grid");
const checkGrid = document.querySelector("#check-grid");
const ticketBoard = document.querySelector("#ticket-board");
const topologyMap = document.querySelector("#topology-map");
const pathStrip = document.querySelector("#path-strip");
const feedback = document.querySelector("#match-feedback");
const laptopFeedback = document.querySelector("#laptop-feedback");
const laptopHintButton = document.querySelector("#hint-laptop");
const laptopCheckButton = document.querySelector("#check-laptop");
const symptomFeedback = document.querySelector("#symptom-feedback");
const ticketFeedback = document.querySelector("#ticket-feedback");
const topologyFeedback = document.querySelector("#topology-feedback");
const matchScore = document.querySelector("#match-score");
const laptopScore = document.querySelector("#laptop-score");
const symptomScore = document.querySelector("#symptom-score");
const ticketScore = document.querySelector("#ticket-score");
const topologyScore = document.querySelector("#topology-score");
const flashCard = document.querySelector("#flash-card");
const flashImage = document.querySelector("#flash-image");
const flashId = document.querySelector("#flash-id");
const flashBackId = document.querySelector("#flash-back-id");
const flashTitle = document.querySelector("#flash-title-text");
const flashAnswer = document.querySelector("#flash-answer");
const flashNote = document.querySelector("#flash-note");
const flashPosition = document.querySelector("#flash-position");
const learnerNote = document.querySelector("#learner-note");
const evidenceSummary = document.querySelector("#evidence-summary");
const evidenceFeedback = document.querySelector("#evidence-feedback");
const focusPanelElements = {
  drag: document.querySelector("#drag-focus-panel"),
  flash: document.querySelector("#flash-focus-panel"),
  symptoms: document.querySelector("#symptoms-focus-panel"),
  laptop: document.querySelector("#laptop-focus-panel"),
  topology: document.querySelector("#topology-focus-panel"),
  tickets: document.querySelector("#tickets-focus-panel")
};

function titleForRoute(route) {
  if (state.mapMode === "comptia") return route.comptiaMode;
  if (state.mapMode === "course") return route.courseTitle;
  return route.ourMode;
}

function subtitleForRoute(route) {
  if (state.mapMode === "comptia") return `Mapped from ${route.ourMode}.`;
  if (state.mapMode === "course") return `Course topics mapped to ${route.comptiaMode}.`;
  return route.role;
}

function bridgeItemsForRoute(route) {
  const items = [
    { label: "Lab", value: route.ourMode, mode: "lab" },
    { label: "CompTIA", value: route.comptiaMode, mode: "comptia" },
    { label: "Course", value: route.courseTitle, mode: "course" }
  ];
  const index = items.findIndex((item) => item.mode === state.mapMode);
  if (index <= 0) return items;
  return [items[index], ...items.slice(0, index), ...items.slice(index + 1)];
}

function renderRouteVisual(route) {
  if (route.image) {
    return `<img src="${route.image}" alt="${route.imageAlt}">`;
  }
  return `<span>${route.icon}</span>`;
}

function materialSlug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function materialPathForTopic(topic) {
  return `wiki.html?topic=${materialSlug(topic)}`;
}

function materialIndexPath() {
  return "wiki.html";
}

function renderCourseSequencePanel() {
  if (!courseSequencePanel) return;

  courseSequencePanel.hidden = state.mapMode !== "course";
  if (state.mapMode !== "course") {
    courseSequencePanel.innerHTML = "";
    return;
  }

  courseSequencePanel.innerHTML = `
    <div class="course-panel-header">
      <span class="asset-pill">27 modules</span>
      <h3 id="course-panel-title">Course Sequence</h3>
      <p>Read opens the wiki page. Practice opens the closest app lab.</p>
    </div>
    <div class="course-module-list">
      ${courseSequenceModules.map((group) => `
        <section class="course-module-group">
          <h4>${group.group}</h4>
          <ol>
            ${group.modules.map((module) => {
              const route = routeForCourseModule(module, group.group);
              const isActive = state.selectedCourseModule === module;
              return `
                <li>
                  <div class="course-module-row ${isActive ? "active" : ""}">
                    <button
                      class="course-module-button ${isActive ? "active" : ""}"
                      type="button"
                      data-course-module="${module}"
                      data-route-id="${route.id}"
                      data-course-group="${group.group}"
                    >
                      <span>${module}</span>
                      <small>${route.courseTitle}</small>
                    </button>
                    <a
                      class="course-read-button"
                      href="${materialPathForTopic(module)}"
                      target="_blank"
                      rel="noopener"
                      aria-label="Read material for ${module}"
                    >Read</a>
                    <button
                      class="course-start-button"
                      type="button"
                      data-course-start-module="${module}"
                      data-route-id="${route.id}"
                      data-course-group="${group.group}"
                      title="${route.routeAction}"
                      aria-label="${route.routeAction} for ${module}"
                    >Practice</button>
                  </div>
                </li>
              `;
            }).join("")}
          </ol>
        </section>
      `).join("")}
    </div>
  `;
}

function renderSectionMap() {
  if (!mapGrid) return;

  document.querySelectorAll(".map-mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mapMode === state.mapMode);
  });
  mapWorkspace?.classList.toggle("course-mode", state.mapMode === "course");
  renderCourseSequencePanel();

  mapGrid.innerHTML = sectionRoutes.map((route) => {
    const topics = route.topics.map((topic) => `<span>${topic}</span>`).join("");
    const isHighlighted = state.highlightedRouteId === route.id;
    const bridge = bridgeItemsForRoute(route).map((item) => `
      <div class="map-bridge-item ${item.mode === state.mapMode ? "active" : ""}">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `).join("");

    return `
      <article class="map-card ${route.statusType} ${isHighlighted ? "highlighted" : ""}" data-map-card-id="${route.id}">
        <div class="map-card-top">
          <div class="map-thumb" aria-hidden="true">${renderRouteVisual(route)}</div>
          <span class="route-status">${route.status}</span>
        </div>
        <h3>${titleForRoute(route)}</h3>
        <p>${subtitleForRoute(route)}</p>
        <div class="map-bridge">${bridge}</div>
        <div class="topic-strip" aria-label="${route.courseTitle} topics">${topics}</div>
        <div class="map-card-footer">
          <small>${route.nextBuild}</small>
          <div class="map-card-actions">
            <a class="secondary-button material-link" href="${materialIndexPath()}" target="_blank" rel="noopener">Read Map</a>
            <button class="secondary-button route-button" type="button" data-route-id="${route.id}" data-route-module="${route.routeModule}">${route.routeAction}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function routeForCourseModule(moduleName, groupName = "") {
  const groupRoute = sectionRoutes.find((route) => (
    route.courseTitle === groupName && route.topics.includes(moduleName)
  ));
  if (groupRoute) return groupRoute;

  if (groupName === "Intro") {
    const introRoute = sectionRoutes.find((route) => route.courseTitle === "Safety intro sequence");
    if (introRoute) return introRoute;
  }

  return sectionRoutes.find((route) => route.topics.includes(moduleName))
    || sectionRoutes.find((route) => route.courseTitle === "Safety intro sequence")
    || sectionRoutes[0];
}

function focusRouteFromCourseModule(moduleName, routeId, groupName = "") {
  const route = sectionRoutes.find((item) => item.id === routeId) || routeForCourseModule(moduleName, groupName);
  state.selectedCourseModule = moduleName;
  state.highlightedRouteId = route.id;
  renderSectionMap();
  setFeedback(mapFeedback, `${moduleName} maps to ${route.courseTitle}.`, "good");
  document.querySelector(`[data-map-card-id="${route.id}"]`)?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function courseFocusProfile(moduleName, targetModule) {
  const profiles = courseFocusProfiles[targetModule] || {};
  return profiles[moduleName] || profiles.default || {
    focusLabel: "Starter activity",
    prompt: "Open the nearest activity for this course topic."
  };
}

function buildCourseLaunchFocus(moduleName, route, groupName = "") {
  const profile = courseFocusProfile(moduleName, route.routeModule);
  return {
    courseModule: moduleName,
    groupName,
    routeId: route.id,
    routeTitle: route.courseTitle,
    targetModule: route.routeModule,
    activityLabel: moduleLabels[route.routeModule] || "Activity",
    routeAction: route.routeAction,
    ...profile
  };
}

function primeCourseFocus(focus) {
  if (focus.cardId && !state.placed[focus.cardId]) {
    state.selectedCardId = focus.cardId;
  }
  if (focus.symptomId && !state.symptomPlaced[focus.symptomId]) {
    state.selectedSymptomId = focus.symptomId;
  }
  if (focus.laptopPartId || focus.laptopZoneId) {
    const part = laptopPartById(focus.laptopPartId);
    const zoneId = focus.laptopZoneId || part?.zone || null;
    state.laptopActiveZoneId = zoneId;
    state.laptopHintZoneId = zoneId;
  }
  if (focus.ticketId) {
    state.selectedTicketId = focus.ticketId;
  }
  if (focus.flashCardId) {
    const flashIndex = connectorCards.findIndex((card) => card.id === focus.flashCardId);
    if (flashIndex !== -1) {
      state.flashIndex = flashIndex;
      state.flashFlipped = false;
    }
  }
  if (focus.targetModule === "topology") {
    state.topologyStep = 0;
  }
}

function setCourseFocusFeedback(focus) {
  if (focus.targetModule === "drag") {
    setFeedback(feedback, focus.cardId ? "Course focus selected one visual card. Choose the matching zone." : focus.prompt, "good");
  } else if (focus.targetModule === "symptoms") {
    setFeedback(symptomFeedback, focus.symptomId ? "Course focus selected one clue. Choose the safest first check." : focus.prompt, "good");
  } else if (focus.targetModule === "laptop") {
    setFeedback(laptopFeedback, focus.laptopPartId ? "Course focus selected one laptop part. Choose the matching role zone." : focus.prompt, "good");
  } else if (focus.targetModule === "tickets") {
    setFeedback(ticketFeedback, focus.ticketId ? "Course focus selected one ticket. Move it through the board." : focus.prompt, "good");
  } else if (focus.targetModule === "topology") {
    setFeedback(topologyFeedback, "Course focus loaded. Start with the laptop.", "good");
  }
}

function startActivityFromCourseModule(moduleName, routeId, groupName = "") {
  const route = sectionRoutes.find((item) => item.id === routeId) || routeForCourseModule(moduleName, groupName);
  state.selectedCourseModule = moduleName;
  state.highlightedRouteId = route.id;
  state.launchFocus = buildCourseLaunchFocus(moduleName, route, groupName);
  primeCourseFocus(state.launchFocus);
  renderAll();
  setCourseFocusFeedback(state.launchFocus);
  activateRoute(route.routeModule, `${moduleName}: ${route.routeAction} opened.`, { keepCourseFocus: true });
}

function renderDragCards() {
  dragGrid.innerHTML = connectorCards.map((card) => {
    const isPlaced = Boolean(state.placed[card.id]);
    const isSelected = state.selectedCardId === card.id;
    const isCourseFocused = state.launchFocus?.targetModule === "drag" && state.launchFocus.cardId === card.id;
    return `
      <button
        class="drag-card ${isPlaced ? "placed" : ""} ${isSelected ? "selected" : ""} ${isCourseFocused ? "course-focused" : ""}"
        type="button"
        draggable="${isPlaced ? "false" : "true"}"
        data-card-id="${card.id}"
        aria-pressed="${isSelected}"
        ${isPlaced ? "disabled" : ""}
      >
        <img src="${card.image}" alt="${card.alt}">
        <span class="drag-card-footer">
          <span>${card.title}</span>
          <span class="asset-id">${card.id}</span>
        </span>
      </button>
    `;
  }).join("");
}

function renderDropZones() {
  dropGrid.innerHTML = connectorZones.map((zone) => {
    const zoneItems = Object.entries(state.placed)
      .filter(([, zoneId]) => zoneId === zone.id)
      .map(([cardId]) => connectorCards.find((card) => card.id === cardId))
      .filter(Boolean);
    const complete = zone.required.every((id) => state.placed[id] === zone.id);
    const isCourseFocused = state.launchFocus?.targetModule === "drag" && state.launchFocus.zoneId === zone.id;
    return `
      <button class="drop-zone ${complete ? "correct" : ""} ${isCourseFocused ? "course-focused" : ""}" type="button" data-zone-id="${zone.id}">
        <h4>${zone.title}</h4>
        <p>${zone.prompt}</p>
        <div class="drop-items">
          ${zoneItems.map((item) => `<span class="placed-chip">${item.id} ${item.title}</span>`).join("")}
        </div>
      </button>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderLaptopParts() {
  if (state.laptopMode === "learn") {
    laptopPartGrid.innerHTML = `
      <div class="laptop-study-list" aria-label="Laptop study key">
        ${laptopZones.map((zone) => {
          const part = laptopPartForZone(zone.id);
          const isActive = state.laptopActiveZoneId === zone.id;
          const isCourseFocused = state.launchFocus?.targetModule === "laptop" && state.launchFocus.laptopZoneId === zone.id;
          return `
            <button
              class="laptop-study-row ${isActive ? "active" : ""} ${isCourseFocused ? "course-focused" : ""}"
              type="button"
              data-study-zone-id="${zone.id}"
            >
              <span class="answer-index">${zone.number}</span>
              <span class="study-copy">
                <strong>${part.title}</strong>
                <small>${zone.viewLabel} | ${zone.prompt}</small>
              </span>
            </button>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  laptopPartGrid.innerHTML = `
    <div class="laptop-answer-grid" aria-label="Numbered laptop answers">
      ${laptopZones.map((zone) => {
        const value = state.laptopAnswers[zone.id] || "";
        const wasChecked = Boolean(state.laptopChecked[zone.id]);
        const isCorrect = laptopAnswerIsCorrect(zone.id);
        const statusClass = wasChecked ? (isCorrect ? "correct" : "wrong") : value.trim() ? "pending" : "";
        const statusText = wasChecked
          ? (isCorrect ? "Correct" : state.laptopMode === "quiz" ? "Try again" : "Check the hotspot clue")
          : value.trim()
            ? "Ready to check"
            : "Waiting";
        const helperText = state.laptopMode === "quiz" ? "Numbered hotspot" : zone.viewLabel;

        return `
          <label class="laptop-answer-row ${statusClass}" data-answer-row-zone-id="${zone.id}">
            <span class="answer-index">${zone.number}</span>
            <span class="answer-copy">
              <strong>Part ${zone.number}</strong>
              <small>${helperText}</small>
            </span>
            <input
              class="answer-input"
              type="text"
              data-laptop-answer-zone-id="${zone.id}"
              value="${escapeHtml(value)}"
              placeholder="${state.laptopMode === "quiz" ? "Answer" : "Type part name"}"
              autocomplete="off"
              spellcheck="false"
              aria-label="Answer for laptop hotspot ${zone.number}"
            >
            <button class="mini-check-button" type="button" data-check-answer-zone-id="${zone.id}">Check</button>
            <small class="answer-status">${statusText}</small>
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function renderLaptopAnchor(zone) {
  const targetPart = laptopPartForZone(zone.id);
  const complete = laptopZoneIsComplete(zone.id);
  const isActive = state.laptopActiveZoneId === zone.id;
  const isHinted = state.laptopHintZoneId === zone.id;
  const isCourseFocused = state.launchFocus?.targetModule === "laptop" && state.launchFocus.laptopZoneId === zone.id;
  const revealAnswer = state.laptopMode === "learn";
  const popupTitle = revealAnswer ? `${zone.number} ${targetPart.title}` : `${zone.number} ${zone.title}`;
  const popupText = revealAnswer ? targetPart.note : zone.hint;
  const ariaLabel = revealAnswer
    ? `${zone.number}. ${targetPart.title}. ${zone.prompt}`
    : `${zone.number}. ${zone.viewLabel}. ${zone.prompt}`;

  return `
    <button
      class="laptop-map-zone laptop-hotspot ${zone.mapClass} ${complete ? "correct" : ""} ${isActive ? "active" : ""} ${isHinted ? "hinted" : ""} ${isCourseFocused ? "course-focused" : ""}"
      type="button"
      data-laptop-zone-id="${zone.id}"
      aria-label="${ariaLabel}"
    >
      <span class="anchor-number">${zone.number}</span>
      ${state.laptopMode === "quiz" ? "" : `
        <span class="hotspot-popup" role="tooltip">
          <strong>${popupTitle}</strong>
          <small>${popupText}</small>
        </span>
      `}
    </button>
  `;
}

function renderLaptopAnchors(view) {
  return laptopZones
    .filter((zone) => zone.view === view)
    .map(renderLaptopAnchor)
    .join("");
}

function renderLaptopZones() {
  const mode = laptopModes[state.laptopMode];

  laptopZoneGrid.innerHTML = `
    <div class="laptop-stage-header">
      <span class="asset-pill">${mode.title}</span>
      <h3>Laptop hardware map</h3>
      <p>${mode.prompt}</p>
    </div>

    <section class="laptop-view-card laptop-open-view" aria-label="Open laptop view">
      <div class="laptop-view-title">
        <span>Open laptop view</span>
        <small>Display, keyboard, touchpad, speakers</small>
      </div>
      <img src="../assets/generated/VIS-013A-laptop-open-view-gpt-unnumbered.png" alt="Blue line art open laptop view">
    </section>

    <div class="laptop-view-grid">
      <section class="laptop-view-card laptop-external-view" aria-label="External ports view">
        <div class="laptop-view-title">
          <span>External ports view</span>
          <small>USB-C, HDMI, Ethernet, power</small>
        </div>
        <div class="laptop-art-wrap">
          <img src="../assets/generated/VIS-013B-laptop-external-ports-view-gpt-unnumbered.png" alt="Blue line art external laptop ports view">
          ${renderLaptopAnchors("external")}
        </div>
      </section>

      <section class="laptop-view-card laptop-internal-view-card" aria-label="Internal laptop view">
        <div class="laptop-view-title">
          <span>Internal view</span>
          <small>Memory, storage, wireless card</small>
        </div>
        <div class="laptop-art-wrap">
          <img src="../assets/generated/VIS-013C-laptop-internal-view-gpt-unnumbered.png" alt="Blue line art internal laptop hardware view">
          ${renderLaptopAnchors("internal")}
        </div>
      </section>

      <section class="laptop-view-card laptop-front-view-card" aria-label="Front LED view">
        <div class="laptop-view-title">
          <span>Front LED view</span>
          <small>Power, battery, drive, wireless indicators</small>
        </div>
        <img src="../assets/generated/VIS-013D-laptop-front-led-view-gpt-unnumbered.png" alt="Blue line art laptop front LED view">
      </section>
    </div>

    <p class="map-note">Ports and internal layouts vary by make and model.</p>
  `;
}

function renderLaptopControls() {
  const activeZone = laptopZoneById(state.laptopActiveZoneId)
    || nextLaptopZone()
    || laptopZones[0];
  const focusPart = laptopPartForZone(activeZone.id);
  const isConfirmed = laptopAnswerIsConfirmed(activeZone.id);
  const revealAnswer = state.laptopMode === "learn" || isConfirmed;
  const detailTitle = revealAnswer ? focusPart.title : `Hotspot ${activeZone.number}`;
  const detailCopy = revealAnswer ? focusPart.note : activeZone.prompt;

  laptopModeBar.querySelectorAll("[data-laptop-mode]").forEach((button) => {
    const active = button.dataset.laptopMode === state.laptopMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  laptopDetailPanel.innerHTML = `
    <span class="asset-pill">${state.laptopMode === "learn" ? "Hover study" : isConfirmed ? "Confirmed" : "Current clue"}</span>
    <h3>${detailTitle}</h3>
    <p>${detailCopy}</p>
    <dl class="laptop-detail-grid">
      <div>
        <dt>Number</dt>
        <dd>${activeZone.number}</dd>
      </div>
      <div>
        <dt>View</dt>
        <dd>${activeZone.viewLabel}</dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>${activeZone.prompt}</dd>
      </div>
    </dl>
    <p class="laptop-guidance">${state.laptopMode === "quiz" ? "Use the numbered hotspot and your memory before checking." : activeZone.hint}</p>
  `;

  laptopMatchList.innerHTML = `
    <h3>Number Progress</h3>
    <ol>
      ${laptopZones.map((zone) => {
        const part = laptopPartForZone(zone.id);
        const checked = Boolean(state.laptopChecked[zone.id]);
        const confirmed = laptopAnswerIsConfirmed(zone.id);
        const active = state.laptopActiveZoneId === zone.id;
        const filled = Boolean((state.laptopAnswers[zone.id] || "").trim());
        const label = state.laptopMode === "learn" || confirmed ? part.title : `Answer ${zone.number}`;
        const status = confirmed
          ? "Correct"
          : checked
            ? "Try again"
            : filled
              ? "Ready"
              : "Waiting";
        return `
          <li class="${confirmed ? "done" : ""} ${checked && !confirmed ? "wrong" : ""} ${active ? "active" : ""}">
            <span>${zone.number}</span>
            <strong>${label}</strong>
            <small>${status}</small>
          </li>
        `;
      }).join("")}
    </ol>
  `;
}

function renderSymptomCards() {
  symptomGrid.innerHTML = symptomCards.map((card) => {
    const isPlaced = Boolean(state.symptomPlaced[card.id]);
    const isSelected = state.selectedSymptomId === card.id;
    const isCourseFocused = state.launchFocus?.targetModule === "symptoms" && state.launchFocus.symptomId === card.id;
    return `
      <button
        class="symptom-card ${isPlaced ? "placed" : ""} ${isSelected ? "selected" : ""} ${isCourseFocused ? "course-focused" : ""}"
        type="button"
        draggable="${isPlaced ? "false" : "true"}"
        data-symptom-id="${card.id}"
        aria-pressed="${isSelected}"
        ${isPlaced ? "disabled" : ""}
      >
        <span class="clue-visual ${card.visualClass}">${card.clue}</span>
        <h4>${card.title}</h4>
        <p>${card.prompt}</p>
      </button>
    `;
  }).join("");
}

function renderCheckZones() {
  checkGrid.innerHTML = checkZones.map((zone) => {
    const zoneItems = Object.entries(state.symptomPlaced)
      .filter(([, zoneId]) => zoneId === zone.id)
      .map(([symptomId]) => symptomCards.find((card) => card.id === symptomId))
      .filter(Boolean);
    const complete = zone.required.every((id) => state.symptomPlaced[id] === zone.id);
    const isCourseFocused = state.launchFocus?.targetModule === "symptoms" && state.launchFocus.checkId === zone.id;
    return `
      <button class="check-zone ${complete ? "correct" : ""} ${isCourseFocused ? "course-focused" : ""}" type="button" data-check-id="${zone.id}">
        <h4>${zone.title}</h4>
        <p>${zone.prompt}</p>
        <div class="drop-items">
          ${zoneItems.map((item) => `<span class="placed-chip">${item.id} ${item.title}</span>`).join("")}
        </div>
      </button>
    `;
  }).join("");
}

function renderTicketBoard() {
  ticketBoard.innerHTML = ticketStages.map((stage) => {
    const stageTickets = tickets.filter((ticket) => state.ticketStage[ticket.id] === stage.id);
    return `
      <section class="ticket-column" aria-label="${stage.title} tickets">
        <header><h3>${stage.title}</h3></header>
        <div class="ticket-list">
          ${stageTickets.map((ticket) => renderTicket(ticket, stage.id)).join("")}
        </div>
      </section>
    `;
  }).join("");
}

function renderTicket(ticket, stageId) {
  const isSelected = state.selectedTicketId === ticket.id;
  const isCourseFocused = state.launchFocus?.targetModule === "tickets" && state.launchFocus.ticketId === ticket.id;
  return `
    <article
      class="ticket-card ${stageId === "done" ? "done" : ""} ${isSelected ? "selected" : ""} ${isCourseFocused ? "course-focused" : ""}"
      role="button"
      tabindex="0"
      data-ticket-id="${ticket.id}"
      aria-pressed="${isSelected}"
    >
      <span class="ticket-id">${ticket.id}</span>
      <h4>${ticket.title}</h4>
      <p>${ticket.clue}</p>
      <p>${ticket.next}</p>
      <div class="stage-controls">
        <button class="stage-button" type="button" data-ticket-action="prev" data-ticket-id="${ticket.id}">Back</button>
        <button class="stage-button" type="button" data-ticket-action="next" data-ticket-id="${ticket.id}">Next</button>
      </div>
    </article>
  `;
}

function renderTopology() {
  topologyMap.innerHTML = topologyNodes.map((node) => {
    const pathIndex = topologyPath.indexOf(node.id);
    const isPathNode = pathIndex !== -1;
    const isTraced = isPathNode && pathIndex < state.topologyStep;
    const isCurrent = topologyPath[state.topologyStep] === node.id;
    const isCourseFocused = state.launchFocus?.targetModule === "topology" && state.launchFocus.nodeId === node.id;
    return `
      <button
        class="topology-node ${isTraced ? "traced" : ""} ${isCurrent ? "current" : ""} ${isPathNode ? "" : "decoy"} ${isCourseFocused ? "course-focused" : ""}"
        type="button"
        data-topology-id="${node.id}"
        aria-pressed="${isTraced}"
      >
        <span class="node-icon">${node.icon}</span>
        <h4>${node.title}</h4>
        <p>${node.prompt}</p>
      </button>
    `;
  }).join("");

  pathStrip.innerHTML = topologyPath.map((nodeId, index) => {
    const node = topologyNodes.find((item) => item.id === nodeId);
    const isDone = index < state.topologyStep;
    const isCurrent = index === state.topologyStep;
    return `
      <span class="path-step ${isDone ? "done" : ""} ${isCurrent ? "current" : ""}">
        <span>${index + 1}. ${node.title}</span>
        <span>${isDone ? "Done" : isCurrent ? "Next" : "Wait"}</span>
      </span>
    `;
  }).join("");
}

function placedCount() {
  return Object.keys(state.placed).length;
}

function symptomCount() {
  return Object.keys(state.symptomPlaced).length;
}

function laptopCount() {
  return laptopZones.filter((zone) => laptopAnswerIsConfirmed(zone.id)).length;
}

function laptopPartById(partId) {
  return laptopParts.find((part) => part.id === partId);
}

function laptopZoneById(zoneId) {
  return laptopZones.find((zone) => zone.id === zoneId);
}

function laptopPartForZone(zoneId) {
  return laptopParts.find((part) => part.zone === zoneId);
}

function nextLaptopPart() {
  const zone = nextLaptopZone();
  return zone ? laptopPartForZone(zone.id) : null;
}

function nextLaptopZone() {
  return laptopZones.find((zone) => !laptopAnswerIsConfirmed(zone.id));
}

function laptopZoneIsComplete(zoneId) {
  return laptopAnswerIsConfirmed(zoneId);
}

function normalizeLaptopAnswer(value) {
  return String(value)
    .toLowerCase()
    .replace(/\./g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function laptopAnswerIsCorrect(zoneId) {
  const part = laptopPartForZone(zoneId);
  const answer = normalizeLaptopAnswer(state.laptopAnswers[zoneId] || "");
  if (!part || !answer) return false;
  return part.answers.some((accepted) => normalizeLaptopAnswer(accepted) === answer);
}

function laptopAnswerIsConfirmed(zoneId) {
  return Boolean(state.laptopChecked[zoneId] && laptopAnswerIsCorrect(zoneId));
}

function doneTicketCount() {
  return Object.values(state.ticketStage).filter((stage) => stage === "done").length;
}

function progressSnapshot() {
  const matchCount = placedCount();
  const knownCount = state.known.size;
  const symptomMatchCount = symptomCount();
  const laptopMatchCount = laptopCount();
  const ticketDoneCount = doneTicketCount();
  const topologyCount = state.topologyStep;
  const totalPercent = Math.round(((matchCount + knownCount + symptomMatchCount + laptopMatchCount + topologyCount + ticketDoneCount) / 27) * 100);

  return {
    matchCount,
    knownCount,
    symptomMatchCount,
    laptopMatchCount,
    topologyCount,
    ticketDoneCount,
    totalPercent
  };
}

function buildEvidenceSummary() {
  const snapshot = progressSnapshot();
  const dateLabel = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const prompt = document.querySelector("#reflection-prompt")?.textContent || "Explain one completed step in one sentence.";
  const note = learnerNote?.value.trim() || "Not added yet.";

  return [
    "CompTIA A+ Visual Lab Evidence",
    `Date: ${dateLabel}`,
    "",
    "Modules:",
    `- Connector Match: ${snapshot.matchCount}/4`,
    `- Flash Cards: ${snapshot.knownCount}/4`,
    `- Symptoms: ${snapshot.symptomMatchCount}/5`,
    `- Laptop Hardware: ${snapshot.laptopMatchCount}/5`,
    `- Topology Trace: ${snapshot.topologyCount}/4`,
    `- Tickets Done: ${snapshot.ticketDoneCount}/5`,
    `- Total Progress: ${snapshot.totalPercent}%`,
    "",
    "Reflection Prompt:",
    prompt,
    "",
    "Learner Note:",
    note,
    "",
    "Next Artifact:",
    "Screenshot or lab note showing one completed ticket."
  ].join("\n");
}

function renderEvidenceSummary(message = "", type = "") {
  if (!evidenceSummary) return;
  evidenceSummary.value = buildEvidenceSummary();
  if (message) {
    setFeedback(evidenceFeedback, message, type);
  }
}

async function copyEvidenceSummary() {
  renderEvidenceSummary();
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(evidenceSummary.value);
    } else {
      evidenceSummary.select();
      document.execCommand("copy");
      evidenceSummary.setSelectionRange(0, 0);
    }
    setFeedback(evidenceFeedback, "Evidence summary copied.", "good");
  } catch (error) {
    evidenceSummary.select();
    setFeedback(evidenceFeedback, "Copy is blocked here. Select the summary text instead.", "bad");
  }
}

function downloadEvidenceSummary() {
  renderEvidenceSummary();
  const blob = new Blob([evidenceSummary.value], { type: "text/plain" });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = "a-plus-visual-lab-evidence.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
  setFeedback(evidenceFeedback, "Evidence summary download started.", "good");
}

function updateProgress() {
  const {
    matchCount,
    knownCount,
    symptomMatchCount,
    laptopMatchCount,
    topologyCount,
    ticketDoneCount,
    totalPercent
  } = progressSnapshot();

  matchScore.textContent = String(matchCount);
  laptopScore.textContent = String(laptopMatchCount);
  symptomScore.textContent = String(symptomMatchCount);
  ticketScore.textContent = String(ticketDoneCount);
  topologyScore.textContent = String(topologyCount);
  document.querySelector("#progress-matches").textContent = `${matchCount}/4`;
  document.querySelector("#progress-known").textContent = `${knownCount}/4`;
  document.querySelector("#progress-symptoms").textContent = `${symptomMatchCount}/5`;
  document.querySelector("#progress-laptop").textContent = `${laptopMatchCount}/5`;
  document.querySelector("#progress-topology").textContent = `${topologyCount}/4`;
  document.querySelector("#progress-tickets").textContent = `${ticketDoneCount}/5`;
  document.querySelector("#progress-total").textContent = `${totalPercent}%`;

  const prompt = document.querySelector("#reflection-prompt");
  if (totalPercent === 100) {
    prompt.textContent = "Explain one ticket from symptom to done in one sentence.";
  } else if (ticketDoneCount > 0) {
    prompt.textContent = "Pick one completed ticket and say what made it safe to close.";
  } else if (laptopMatchCount > 0) {
    prompt.textContent = "Pick one laptop part and say what role it plays.";
  } else if (topologyCount > 0) {
    prompt.textContent = "Say the network path from laptop to website.";
  } else if (symptomMatchCount > 0) {
    prompt.textContent = "Pick one symptom and say the safest first check.";
  } else if (matchCount > 0 || knownCount > 0) {
    prompt.textContent = "Pick one completed item and say what it connects to.";
  } else {
    prompt.textContent = "Complete one match or mark one card known to unlock a prompt.";
  }

  renderEvidenceSummary();
}

function setFeedback(element, message, type = "") {
  element.textContent = message;
  element.className = `feedback ${type}`.trim();
}

function placeConnectorCard(cardId, zoneId) {
  const card = connectorCards.find((item) => item.id === cardId);
  if (!card || state.placed[cardId]) return;

  if (card.zone !== zoneId) {
    setFeedback(feedback, `${card.title} does not belong there. Try ${connectorZoneTitle(card.zone)}.`, "bad");
    state.selectedCardId = null;
    renderAll();
    return;
  }

  state.placed[cardId] = zoneId;
  state.selectedCardId = null;
  setFeedback(feedback, `${card.title} placed correctly.`, "good");
  renderAll();
}

function focusLaptopAnswer(zoneId) {
  if (state.laptopMode === "learn") return;
  const input = laptopPartGrid.querySelector(`[data-laptop-answer-zone-id="${zoneId}"]`);
  if (input) input.focus();
}

function checkLaptopAnswer(zoneId) {
  const zone = laptopZoneById(zoneId);
  const part = laptopPartForZone(zoneId);
  if (!zone || !part) return;

  state.laptopChecked[zoneId] = true;
  state.laptopActiveZoneId = zoneId;
  state.laptopHintZoneId = laptopAnswerIsCorrect(zoneId) ? null : zoneId;

  if (laptopAnswerIsCorrect(zoneId)) {
    setFeedback(laptopFeedback, `Correct: ${zone.number} is ${part.title}.`, "good");
  } else if (state.laptopMode === "quiz") {
    setFeedback(laptopFeedback, `Not yet on ${zone.number}. Try that answer again.`, "bad");
  } else {
    setFeedback(laptopFeedback, `Not yet on ${zone.number}. Hint: ${zone.hint}`, "bad");
  }

  renderAll();
  if (!laptopAnswerIsCorrect(zoneId)) focusLaptopAnswer(zoneId);
}

function checkAllLaptopAnswers() {
  const filledZones = laptopZones.filter((zone) => (state.laptopAnswers[zone.id] || "").trim());
  if (!filledZones.length) {
    const nextZone = nextLaptopZone() || laptopZones[0];
    state.laptopActiveZoneId = nextZone.id;
    setFeedback(laptopFeedback, "Type at least one numbered answer before checking.");
    renderAll();
    focusLaptopAnswer(nextZone.id);
    return;
  }

  filledZones.forEach((zone) => {
    state.laptopChecked[zone.id] = true;
  });
  const correctCount = laptopCount();
  const allDone = correctCount === laptopZones.length;
  const nextZone = nextLaptopZone();
  state.laptopActiveZoneId = nextZone?.id || filledZones[filledZones.length - 1].id;
  state.laptopHintZoneId = allDone ? null : nextZone?.id || null;
  setFeedback(
    laptopFeedback,
    allDone
      ? "Laptop hardware check complete. All five numbered answers are correct."
      : `${correctCount} of ${laptopZones.length} correct. Keep the diagram clear and try the remaining numbers.`,
    allDone ? "good" : ""
  );
  renderAll();
  if (nextZone) focusLaptopAnswer(nextZone.id);
}

function placeSymptomCard(symptomId, zoneId) {
  const card = symptomCards.find((item) => item.id === symptomId);
  if (!card || state.symptomPlaced[symptomId]) return;

  if (card.zone !== zoneId) {
    const correctZone = checkZones.find((zone) => zone.id === card.zone);
    setFeedback(symptomFeedback, `${card.title} needs ${correctZone.title}.`, "bad");
    state.selectedSymptomId = null;
    renderAll();
    return;
  }

  state.symptomPlaced[symptomId] = zoneId;
  state.selectedSymptomId = null;
  setFeedback(symptomFeedback, `${card.title} matched to a safe first check.`, "good");
  renderAll();
}

function connectorZoneTitle(zoneId) {
  return connectorZones.find((zone) => zone.id === zoneId)?.title || "matching";
}

function laptopZoneTitle(zoneId) {
  return laptopZones.find((zone) => zone.id === zoneId)?.title || "matching";
}

function renderFlashCard() {
  const card = connectorCards[state.flashIndex];
  flashCard.classList.toggle("flipped", state.flashFlipped);
  flashCard.classList.toggle("course-focused", state.launchFocus?.targetModule === "flash");
  flashImage.src = card.image;
  flashImage.alt = card.alt;
  flashId.textContent = card.id;
  flashBackId.textContent = card.id;
  flashTitle.textContent = card.title;
  flashAnswer.textContent = card.answer;
  flashNote.textContent = card.note;
  flashPosition.textContent = String(state.flashIndex + 1);
}

function focusDetailLabel(focus) {
  if (focus.cardId) {
    return connectorCards.find((card) => card.id === focus.cardId)?.title || focus.cardId;
  }
  if (focus.symptomId) {
    return symptomCards.find((card) => card.id === focus.symptomId)?.title || focus.symptomId;
  }
  if (focus.laptopPartId) {
    return laptopParts.find((part) => part.id === focus.laptopPartId)?.title || focus.laptopPartId;
  }
  if (focus.ticketId) {
    return tickets.find((ticket) => ticket.id === focus.ticketId)?.title || focus.ticketId;
  }
  if (focus.nodeId) {
    return topologyNodes.find((node) => node.id === focus.nodeId)?.title || focus.nodeId;
  }
  if (focus.flashCardId) {
    return connectorCards.find((card) => card.id === focus.flashCardId)?.title || focus.flashCardId;
  }
  return focus.focusLabel;
}

function renderCourseFocusPanels() {
  Object.entries(focusPanelElements).forEach(([moduleName, panel]) => {
    if (!panel) return;
    const focus = state.launchFocus;
    if (!focus || focus.targetModule !== moduleName) {
      panel.hidden = true;
      panel.innerHTML = "";
      return;
    }

    panel.hidden = false;
    panel.innerHTML = `
      <div class="course-focus-copy">
        <span class="asset-pill">Course Focus</span>
        <h3>${focus.courseModule}</h3>
        <p>${focus.prompt}</p>
      </div>
      <div class="course-focus-steps" aria-label="Course focus path">
        <span>${focus.routeTitle}</span>
        <span>${focus.activityLabel}</span>
        <span>${focusDetailLabel(focus)}</span>
      </div>
      <div class="course-focus-actions">
        <button class="secondary-button focus-action" type="button" data-return-course>Course List</button>
        <button class="secondary-button focus-action" type="button" data-clear-course-focus>Clear Focus</button>
      </div>
    `;
  });
}

function renderAll() {
  renderSectionMap();
  renderDragCards();
  renderDropZones();
  renderLaptopParts();
  renderLaptopZones();
  renderLaptopControls();
  renderSymptomCards();
  renderCheckZones();
  renderTicketBoard();
  renderTopology();
  renderFlashCard();
  renderCourseFocusPanels();
  updateProgress();
}

function moduleNames() {
  return Array.from(document.querySelectorAll(".tab-button"))
    .map((button) => button.dataset.module)
    .filter(Boolean);
}

function normalizeModuleName(moduleName) {
  const cleanName = String(moduleName || "").replace(/^module-/, "");
  return moduleNames().includes(cleanName) ? cleanName : "start";
}

function moduleFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!hash) return "start";

  if (hash.includes("=")) {
    const params = new URLSearchParams(hash);
    return normalizeModuleName(params.get("module") || params.get("m"));
  }

  return normalizeModuleName(hash);
}

function updateModuleHash(moduleName) {
  const targetHash = `#module=${moduleName}`;
  if (window.location.hash !== targetHash) {
    window.history.replaceState(null, "", targetHash);
  }
}

function activateModule(moduleName, options = {}) {
  const targetModule = normalizeModuleName(moduleName);
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.module === targetModule);
  });
  document.querySelectorAll(".module").forEach((module) => {
    module.classList.toggle("active", module.id === `module-${targetModule}`);
  });
  if (!options.skipHash) {
    updateModuleHash(targetModule);
  }
  if (targetModule === "evidence") {
    renderEvidenceSummary("Summary refreshed.", "good");
  }
}

function activateRoute(moduleName, message = "", options = {}) {
  if (!options.keepCourseFocus) {
    state.launchFocus = null;
    renderCourseFocusPanels();
  }
  activateModule(moduleName);
  if (message) {
    setFeedback(mapFeedback, message, "good");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveTicket(ticketId, direction) {
  const currentStage = state.ticketStage[ticketId];
  const currentIndex = ticketStages.findIndex((stage) => stage.id === currentStage);
  const nextIndex = direction === "next"
    ? Math.min(ticketStages.length - 1, currentIndex + 1)
    : Math.max(0, currentIndex - 1);
  const nextStage = ticketStages[nextIndex];
  state.ticketStage[ticketId] = nextStage.id;
  state.selectedTicketId = ticketId;
  setFeedback(ticketFeedback, `${ticketId} moved to ${nextStage.title}.`, nextStage.id === "done" ? "good" : "");
  renderAll();
}

function traceTopology(nodeId) {
  if (state.topologyStep >= topologyPath.length) {
    setFeedback(topologyFeedback, "Topology trace is complete.", "good");
    return;
  }

  const expectedId = topologyPath[state.topologyStep];
  const expectedNode = topologyNodes.find((node) => node.id === expectedId);
  const selectedNode = topologyNodes.find((node) => node.id === nodeId);

  if (nodeId !== expectedId) {
    setFeedback(topologyFeedback, `${selectedNode.title} is not next. Tap ${expectedNode.title}.`, "bad");
    return;
  }

  state.topologyStep += 1;
  if (state.topologyStep === topologyPath.length) {
    setFeedback(topologyFeedback, "Trace complete: Laptop to router to DNS to website.", "good");
  } else {
    const nextNode = topologyNodes.find((node) => node.id === topologyPath[state.topologyStep]);
    setFeedback(topologyFeedback, `${selectedNode.title} traced. Next: ${nextNode.title}.`, "good");
  }
  renderAll();
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => activateModule(button.dataset.module));
});

window.addEventListener("hashchange", () => {
  activateModule(moduleFromHash(), { skipHash: true });
});

document.addEventListener("click", (event) => {
  const returnButton = event.target.closest("[data-return-course]");
  if (returnButton) {
    state.mapMode = "course";
    activateModule("start");
    renderSectionMap();
    setFeedback(mapFeedback, "Course Sequence reopened.", "good");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const clearButton = event.target.closest("[data-clear-course-focus]");
  if (clearButton) {
    state.launchFocus = null;
    renderAll();
  }
});

mapModeBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-map-mode]");
  if (!button) return;
  state.mapMode = button.dataset.mapMode;
  if (state.mapMode !== "course") {
    state.selectedCourseModule = null;
    state.highlightedRouteId = null;
  }
  const label = button.textContent.trim();
  setFeedback(mapFeedback, `${label} map selected.`, "good");
  renderSectionMap();
});

courseSequencePanel.addEventListener("click", (event) => {
  const startButton = event.target.closest("[data-course-start-module]");
  if (startButton) {
    startActivityFromCourseModule(
      startButton.dataset.courseStartModule,
      startButton.dataset.routeId,
      startButton.dataset.courseGroup
    );
    return;
  }
  const button = event.target.closest("[data-course-module]");
  if (!button) return;
  focusRouteFromCourseModule(button.dataset.courseModule, button.dataset.routeId, button.dataset.courseGroup);
});

mapGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-route-module]");
  if (!button) return;
  const route = sectionRoutes.find((item) => item.id === button.dataset.routeId);
  const routeLabel = route ? titleForRoute(route) : "Selected route";
  activateRoute(button.dataset.routeModule, `${routeLabel} opened.`);
});

document.querySelector("[data-route-module=\"progress\"]").addEventListener("click", () => {
  activateRoute("progress", "Progress opened from the route map.");
});

dragGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-card-id]");
  if (!button || button.disabled) return;
  const cardId = button.dataset.cardId;
  state.selectedCardId = state.selectedCardId === cardId ? null : cardId;
  setFeedback(feedback, state.selectedCardId ? "Now choose a match zone." : "Pick one card to begin.");
  renderAll();
});

dragGrid.addEventListener("dragstart", (event) => {
  const button = event.target.closest("[data-card-id]");
  if (!button || button.disabled) return;
  event.dataTransfer.setData("text/plain", button.dataset.cardId);
  event.dataTransfer.effectAllowed = "move";
});

dropGrid.addEventListener("click", (event) => {
  const zone = event.target.closest("[data-zone-id]");
  if (!zone) return;
  if (!state.selectedCardId) {
    setFeedback(feedback, "Pick a visual card first.");
    return;
  }
  placeConnectorCard(state.selectedCardId, zone.dataset.zoneId);
});

dropGrid.addEventListener("dragover", (event) => {
  const zone = event.target.closest("[data-zone-id]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("over");
});

dropGrid.addEventListener("dragleave", (event) => {
  const zone = event.target.closest("[data-zone-id]");
  if (!zone) return;
  zone.classList.remove("over");
});

dropGrid.addEventListener("drop", (event) => {
  const zone = event.target.closest("[data-zone-id]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("over");
  placeConnectorCard(event.dataTransfer.getData("text/plain"), zone.dataset.zoneId);
});

laptopModeBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-laptop-mode]");
  if (!button) return;
  state.laptopMode = button.dataset.laptopMode;
  state.laptopHintZoneId = null;
  const mode = laptopModes[state.laptopMode];
  setFeedback(laptopFeedback, mode.prompt, "good");
  renderAll();
});

laptopPartGrid.addEventListener("click", (event) => {
  const studyButton = event.target.closest("[data-study-zone-id]");
  if (studyButton) {
    const zone = laptopZoneById(studyButton.dataset.studyZoneId);
    const part = laptopPartForZone(zone.id);
    state.laptopActiveZoneId = zone.id;
    state.laptopHintZoneId = null;
    setFeedback(laptopFeedback, `${zone.number}: ${part.title}. ${part.note}`, "good");
    renderAll();
    return;
  }

  const checkButton = event.target.closest("[data-check-answer-zone-id]");
  if (!checkButton) return;
  checkLaptopAnswer(checkButton.dataset.checkAnswerZoneId);
});

laptopPartGrid.addEventListener("input", (event) => {
  const input = event.target.closest("[data-laptop-answer-zone-id]");
  if (!input) return;
  const zoneId = input.dataset.laptopAnswerZoneId;
  state.laptopAnswers[zoneId] = input.value;
  delete state.laptopChecked[zoneId];
  state.laptopActiveZoneId = zoneId;
  state.laptopHintZoneId = null;
  const row = input.closest(".laptop-answer-row");
  if (row) {
    row.classList.remove("correct", "wrong");
    row.classList.toggle("pending", Boolean(input.value.trim()));
    const status = row.querySelector(".answer-status");
    if (status) status.textContent = input.value.trim() ? "Ready to check" : "Waiting";
  }
  setFeedback(laptopFeedback, "Answer saved. Press Check when you are ready.");
  renderLaptopControls();
  updateProgress();
});

laptopZoneGrid.addEventListener("click", (event) => {
  const zone = event.target.closest("[data-laptop-zone-id]");
  if (!zone) return;
  const zoneId = zone.dataset.laptopZoneId;
  const targetZone = laptopZoneById(zoneId);
  state.laptopActiveZoneId = zoneId;
  state.laptopHintZoneId = null;
  setFeedback(laptopFeedback, state.laptopMode === "learn" ? `Study ${targetZone.number}: hover for the popup.` : `Hotspot ${targetZone.number} selected. Type answer ${targetZone.number}.`);
  renderAll();
  focusLaptopAnswer(zoneId);
});

symptomGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-symptom-id]");
  if (!button || button.disabled) return;
  const symptomId = button.dataset.symptomId;
  state.selectedSymptomId = state.selectedSymptomId === symptomId ? null : symptomId;
  setFeedback(symptomFeedback, state.selectedSymptomId ? "Now choose the safest first check." : "Pick one clue to begin.");
  renderAll();
});

symptomGrid.addEventListener("dragstart", (event) => {
  const button = event.target.closest("[data-symptom-id]");
  if (!button || button.disabled) return;
  event.dataTransfer.setData("text/plain", button.dataset.symptomId);
  event.dataTransfer.effectAllowed = "move";
});

checkGrid.addEventListener("click", (event) => {
  const zone = event.target.closest("[data-check-id]");
  if (!zone) return;
  if (!state.selectedSymptomId) {
    setFeedback(symptomFeedback, "Pick a symptom clue first.");
    return;
  }
  placeSymptomCard(state.selectedSymptomId, zone.dataset.checkId);
});

checkGrid.addEventListener("dragover", (event) => {
  const zone = event.target.closest("[data-check-id]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("over");
});

checkGrid.addEventListener("dragleave", (event) => {
  const zone = event.target.closest("[data-check-id]");
  if (!zone) return;
  zone.classList.remove("over");
});

checkGrid.addEventListener("drop", (event) => {
  const zone = event.target.closest("[data-check-id]");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("over");
  placeSymptomCard(event.dataTransfer.getData("text/plain"), zone.dataset.checkId);
});

ticketBoard.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-ticket-action]");
  if (actionButton) {
    moveTicket(actionButton.dataset.ticketId, actionButton.dataset.ticketAction);
    return;
  }
  const ticket = event.target.closest("[data-ticket-id]");
  if (!ticket) return;
  state.selectedTicketId = state.selectedTicketId === ticket.dataset.ticketId ? null : ticket.dataset.ticketId;
  setFeedback(ticketFeedback, state.selectedTicketId ? "Use Next to move the selected ticket." : "Pick a ticket, then move it to the next stage.");
  renderAll();
});

ticketBoard.addEventListener("keydown", (event) => {
  const ticket = event.target.closest("[data-ticket-id]");
  if (!ticket) return;
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    state.selectedTicketId = ticket.dataset.ticketId;
    moveTicket(ticket.dataset.ticketId, "next");
  }
});

topologyMap.addEventListener("click", (event) => {
  const node = event.target.closest("[data-topology-id]");
  if (!node) return;
  traceTopology(node.dataset.topologyId);
});

document.querySelector("#reset-match").addEventListener("click", () => {
  state.placed = {};
  state.selectedCardId = null;
  setFeedback(feedback, "Match activity reset.");
  renderAll();
});

laptopHintButton.addEventListener("click", () => {
  const zone = state.laptopActiveZoneId
    ? laptopZoneById(state.laptopActiveZoneId)
    : nextLaptopZone();
  if (!zone) {
    setFeedback(laptopFeedback, "All laptop hardware answers are already correct.", "good");
    return;
  }
  state.laptopActiveZoneId = zone.id;
  state.laptopHintZoneId = zone.id;
  setFeedback(laptopFeedback, `Hint for ${zone.number}: ${zone.hint}`, "good");
  renderAll();
  focusLaptopAnswer(zone.id);
});

laptopCheckButton.addEventListener("click", () => {
  if (state.laptopMode === "learn") {
    setFeedback(laptopFeedback, "Switch to Practice or Quiz when you are ready to type answers.", "good");
    return;
  }
  checkAllLaptopAnswers();
});

document.querySelector("#reset-laptop").addEventListener("click", () => {
  state.laptopAnswers = {};
  state.laptopChecked = {};
  state.laptopActiveZoneId = null;
  state.laptopHintZoneId = null;
  setFeedback(laptopFeedback, "Laptop answer fields reset.");
  renderAll();
});

document.querySelector("#reset-symptoms").addEventListener("click", () => {
  state.symptomPlaced = {};
  state.selectedSymptomId = null;
  setFeedback(symptomFeedback, "Symptom activity reset.");
  renderAll();
});

document.querySelector("#reset-tickets").addEventListener("click", () => {
  state.ticketStage = Object.fromEntries(tickets.map((ticket) => [ticket.id, "new"]));
  state.selectedTicketId = null;
  setFeedback(ticketFeedback, "Ticket board reset.");
  renderAll();
});

document.querySelector("#reset-topology").addEventListener("click", () => {
  state.topologyStep = 0;
  setFeedback(topologyFeedback, "Start with the laptop.");
  renderAll();
});

document.querySelector("#flip-card").addEventListener("click", () => {
  state.flashFlipped = !state.flashFlipped;
  renderFlashCard();
});

flashCard.addEventListener("click", () => {
  state.flashFlipped = !state.flashFlipped;
  renderFlashCard();
});

flashCard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    state.flashFlipped = !state.flashFlipped;
    renderFlashCard();
  }
});

document.querySelector("#prev-card").addEventListener("click", () => {
  state.flashIndex = (state.flashIndex + connectorCards.length - 1) % connectorCards.length;
  state.flashFlipped = false;
  renderAll();
});

document.querySelector("#next-card").addEventListener("click", () => {
  state.flashIndex = (state.flashIndex + 1) % connectorCards.length;
  state.flashFlipped = false;
  renderAll();
});

document.querySelector("#known-card").addEventListener("click", () => {
  state.known.add(connectorCards[state.flashIndex].id);
  state.flashIndex = (state.flashIndex + 1) % connectorCards.length;
  state.flashFlipped = false;
  renderAll();
});

document.querySelector("#refresh-evidence").addEventListener("click", () => {
  renderEvidenceSummary("Summary refreshed.", "good");
});

document.querySelector("#copy-evidence").addEventListener("click", copyEvidenceSummary);
document.querySelector("#download-evidence").addEventListener("click", downloadEvidenceSummary);

learnerNote.addEventListener("input", () => {
  renderEvidenceSummary();
});

document.querySelector("#reset-all").addEventListener("click", () => {
  state.selectedCardId = null;
  state.selectedSymptomId = null;
  state.laptopActiveZoneId = null;
  state.laptopHintZoneId = null;
  state.laptopMode = "practice";
  state.selectedTicketId = null;
  state.placed = {};
  state.symptomPlaced = {};
  state.laptopAnswers = {};
  state.laptopChecked = {};
  state.known = new Set();
  state.ticketStage = Object.fromEntries(tickets.map((ticket) => [ticket.id, "new"]));
  state.topologyStep = 0;
  state.mapMode = "lab";
  state.selectedCourseModule = null;
  state.highlightedRouteId = null;
  state.launchFocus = null;
  state.flashIndex = 0;
  state.flashFlipped = false;
  setFeedback(feedback, "All progress reset.");
  setFeedback(laptopFeedback, "Pick one laptop part to begin.");
  setFeedback(symptomFeedback, "Pick one clue to begin.");
  setFeedback(ticketFeedback, "Pick a ticket, then move it to the next stage.");
  setFeedback(topologyFeedback, "Start with the laptop.");
  setFeedback(mapFeedback, "Choose a route card or switch map modes.");
  activateModule("start");
  renderAll();
});

renderAll();
activateModule(moduleFromHash(), { skipHash: true });
