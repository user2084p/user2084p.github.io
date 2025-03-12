const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://user2084p.github.io',
  title: 'USER2084.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'User_2084',
  role: 'Individuo',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/user2084p',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Proyecto 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['QGIS', 'PYTHON', 'R'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Proyecto 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Earth Engine', 'QGIS', 'R'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Proyecto 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['LaTeX', 'Python', 'Copernicus', 'Sentinel-2'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Proyecto 4',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['', 'ALOHA', 'QGIS', 'MatLab'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'R',
  'QGis',
  'ArcGis',
  'Python',
  'Earth Engine',
  'Imagenes Satelitales',
  'Git',
  'Cartografía',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'user2084@mail.com',
}

export { header, about, projects, skills, contact }
