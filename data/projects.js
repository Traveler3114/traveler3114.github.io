const projects = [
  {
    category: 'gamedev',
    imgStyle: 'background: linear-gradient(135deg, #1a1a2e, #16213e);',
    imgIcon: 'fa-users',
    tag: 'Unreal Engine 5 / C++ / GAS / Multiplayer',
    title: 'Splitstream',
    type: 'Personal',
    status: 'In Progress',
    sections: [
      { label: 'Problem', text: 'Building a multiplayer co-op heist game where player actions reshape future mission states through a shared timeline system \u2014 without breaking synchronization.' },
      { label: 'What I built', text: 'A 4-player cooperative heist game in Unreal Engine 5 with a cause\u2011and\u2011effect timeline system. Actions in the present reshape the future environment. Built fully networked multiplayer, synchronized objectives, AI guard behavior, and cross\u2011timeline coordination using UE5 replication and the Gameplay Ability System (GAS).' },
      { label: 'Result', text: 'Fully networked 4-player co-op with cross-timeline coordination, AI guard behavior, and synchronized mission phases \u2014 maintaining determinism across all clients.' },
      { label: 'Technical challenge', text: 'Implementing deterministic timeline state synchronization across clients while maintaining performance. Solved with custom replicated state management and RPC batching.' }
    ],
    role: 'Lead Developer',
    duration: 'Ongoing',
    tech: ['Unreal Engine 5', 'C++', 'GAS', 'UE5 replication', 'Behavior Trees', 'EQS'],
    metricsLabel: 'Metrics',
    metrics: '4-player co-op \u00b7 3 AI guard types \u00b7 5 mission phases',
    links: [{ icon: 'fab fa-github', text: 'Private \u2013 contact for access', url: null }]
  },
  {
    category: 'fullstack',
    imgStyle: 'background: linear-gradient(135deg, #667eea, #764ba2);',
    imgIcon: 'fa-broom',
    tag: 'ASP.NET Core / C# / SQL Server / JWT',
    title: 'CleaningPlatform',
    type: 'Personal',
    status: 'In Progress',
    sections: [
      { label: 'Problem', text: 'Cleaning service businesses often manage bookings, staff, clients, and invoices through separate tools \u2013 no central source of truth.' },
      { label: 'What I built', text: 'Architected and led development of a full\u2011stack operations platform that consolidates CRM, booking management, workforce coordination, SOP execution, and invoicing into one system. Designed a backend\u2011driven API with JWT auth, permission\u2011based authorization, 16 controllers, 15 business logic managers, and 29 entities.' },
      { label: 'Result', text: 'Consolidates client management, workforce coordination, SOP execution, and invoicing into a single operational platform.' },
      { label: 'Technical challenge', text: 'Building a granular permission system that supports multiple user roles (admin, manager, field staff) without hard\u2011coding role logic. Solved with claim\u2011based authorization and a flexible manager layer.' }
    ],
    role: 'Lead Developer',
    duration: 'Ongoing',
    tech: ['C#', '.NET 10', 'ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
    metricsLabel: 'Platform',
    metrics: 'CRM &bull; Scheduling &bull; Workforce Management &bull; Invoicing',
    links: [{ icon: 'fab fa-github', text: 'Code', url: 'https://github.com/Traveler3114/CleaningPlatform' }]
  },
  {
    category: 'gamedev',
    imgStyle: 'background: linear-gradient(135deg, #f093fb, #f5576c);',
    imgIcon: 'fa-dove',
    tag: 'C++ / C# / Python / Raylib / ASP.NET API',
    title: 'Pigeon Invaders',
    type: 'Personal',
    status: null,
    sections: [
      { label: 'Problem', text: 'Porting a game across different languages and frameworks is the fastest way to surface architectural weaknesses \u2014 but most projects optimize for one stack and never build the cross\u2011platform insight that makes architecture truly portable.' },
      { label: 'What I built', text: 'A game rebuilt across three versions \u2014 Python/Pygame (rapid prototype), C#/Windows Forms + Firebase (desktop with cloud storage), and C++/Raylib + ASP.NET API + MySQL (high\u2011performance with full backend). Each iteration improved architecture and performance, demonstrating adaptability across stacks.' },
      { label: 'Result', text: 'Three complete, playable versions across Python, C#, and C++ stacks \u2014 each with progressively better architecture, performance, and backend integration.' },
      { label: 'Technical challenge', text: 'Porting game logic between fundamentally different frameworks while preserving gameplay feel and improving performance. Solved by abstracting core game rules and re\u2011implementing rendering/input layers.' }
    ],
    role: 'Sole Developer',
    duration: 'Multiple iterations',
    tech: ['C++', 'C#', 'Python', 'Raylib', 'ASP.NET', 'MySQL'],
    metricsLabel: 'Metrics',
    metrics: '3 complete rewrites \u00b7 3 distinct tech stacks',
    links: [{ icon: 'fab fa-github', text: 'Code', url: 'https://github.com/Traveler3114/PigeonInvaders' }]
  },
  {
    category: 'fullstack',
    imgStyle: 'background: linear-gradient(135deg, #43e97b, #38f9d7);',
    imgIcon: 'fa-bus',
    tag: 'Modular backend / .NET / Plugin architecture',
    title: 'GetThere',
    type: 'Personal',
    status: 'In Progress',
    sections: [
      { label: 'Problem', text: 'Travel and mobility apps are fragmented \u2013 users need separate accounts, wallets, and tickets for different transport modes.' },
      { label: 'What I built', text: 'A modular transport platform with a unified wallet and account system across multiple mobility operators. Designed the backend architecture to allow rapid integration of new operator APIs via a plugin pattern. Implemented core wallet system and plugin\u2011based operator integration with a focus on clean, extensible architecture.' },
      { label: 'Result', text: 'Provides a unified account and wallet system across multiple transport operators from a single platform.' },
      { label: 'Technical challenge', text: 'Designing a plugin system that lets new operators be added without modifying core code. Solved with interface\u2011based contracts and dynamic service registration.' }
    ],
    role: 'Lead Developer',
    duration: 'Ongoing',
    tech: ['C#', '.NET', 'SQL', 'REST API design', 'Plugin architecture'],
    metricsLabel: 'Metrics',
    metrics: 'Designed to support rapid integration of new transport operators through a plugin architecture \u00b7 Unified wallet for all transport modes',
    links: [{ icon: 'fab fa-github', text: 'Code', url: 'https://github.com/Traveler3114/GetThere' }]
  }
]

function renderProjects() {
  const container = document.getElementById('projects-container')
  if (!container) return

  container.innerHTML = projects.map(p => `
    <div class="project-card reveal" data-category="${p.category}">
      <div class="project-img" style="${p.imgStyle}">
        <i class="fas ${p.imgIcon}"></i>
      </div>
      <div class="project-info">
        <span class="project-tag">${p.tag}</span>
        <h3>${p.title}${p.type ? ` <span class="project-type">${p.type}</span>` : ''}${p.status ? ` <span class="project-status">${p.status}</span>` : ''}</h3>
        ${p.sections.map(s => `<p><strong>${s.label}:</strong> ${s.text}</p>`).join('')}
        <div class="project-role">Role: ${p.role}</div>
        <div class="project-duration">Duration: ${p.duration}</div>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-metrics"><strong>${p.metricsLabel}:</strong> ${p.metrics}</div>
        <div class="project-links">
          ${p.links.map(l => l.url
            ? `<a href="${l.url}" target="_blank" class="project-link"><i class="${l.icon}"></i> ${l.text}</a>`
            : `<a href="#" class="project-link" style="opacity:0.7;"><i class="${l.icon}"></i> ${l.text}</a>`
          ).join('')}
        </div>
      </div>
    </div>
  `).join('')
}

renderProjects()
