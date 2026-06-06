const experiences = [
  {
    year: 'May 2025 \u2013 Jul 2025',
    title: 'Gameplay Programmer',
    company: 'Byzantine Interactive',
    description: 'Joined an existing Unreal Engine 5 Gameplay Ability System codebase and resolved gameplay, ability, and networking issues. Worked within a production environment to improve reliability, gameplay behavior, and overall system stability.'
  },
  {
    year: 'Aug 2025 \u2013 Sep 2025',
    title: 'Sole Programmer',
    company: 'Repeat Games',
    description: 'Sole programmer responsible for developing a multiplayer MOBA-style prototype in Unreal Engine 5. Designed and implemented gameplay systems, abilities, networking features, and core architecture from the ground up.'
  }
]

function renderExperience() {
  const container = document.getElementById('experience-container')
  if (!container) return

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${exp.year}</span>
        <h3>${exp.title}</h3>
        <span class="timeline-company">${exp.company}</span>
        <p>${exp.description}</p>
      </div>
    </div>
  `).join('')
}

renderExperience()
