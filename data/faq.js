const faq = [
  {
    question: 'Do you work remotely?',
    answer: 'Yes. I work with clients worldwide, across Europe, the US, and beyond.'
  },
  {
    question: 'How does pricing work?',
    answer: 'Yes. Most projects are delivered using fixed-price milestones with clearly defined deliverables, review points, and payment stages.'
  },
  {
    question: 'Can you join an existing project?',
    answer: 'Yes. I can jump into ongoing work, whether you need bug fixes, new features, or help shipping an overdue release.'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes. Every project includes post-launch support. If implementation issues are discovered after launch, I\'ll work with you to resolve them at no additional cost.'
  },
  {
    question: 'What happens after delivery?',
    answer: 'Every project includes post-launch support. If implementation issues are discovered after launch, I\'ll work with you to resolve them at no additional cost.'
  },
  {
    question: 'Who do you typically work with?',
    answer: 'I primarily work with indie developers, startups, small studios, and small businesses looking for a reliable technical partner.'
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes. Happy to sign an NDA before we discuss anything.'
  }
]

function renderFaq() {
  const container = document.getElementById('faq-container')
  if (!container) return

  container.innerHTML = faq.map(item => `
    <div class="faq-item reveal">
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
    </div>
  `).join('')
}

renderFaq()
