const faq = [
  {
    question: 'Do you work remotely?',
    answer: 'Yes. I work with clients worldwide.'
  },
  {
    question: 'Can you join existing projects?',
    answer: 'Yes. I can integrate into ongoing development work.'
  },
  {
    question: 'Do you work with fixed-price contracts?',
    answer: 'Depends on project scope. I\'m flexible.'
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes. Happy to sign before discussing details.'
  },
  {
    question: 'Do you provide maintenance and support?',
    answer: 'Yes. I offer ongoing support after delivery.'
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
