function toggleNav() {
  const hamburgerElement = document.getElementById('KrabbyPatty');
  const mobileLinksElement = document.querySelector('.mobile-minus');
  hamburgerElement.classList.toggle('isHidden');
  mobileLinksElement.classList.toggle('isHidden');
}

document.getElementById('KrabbyPatty').addEventListener('click', toggleNav);
document.getElementsByClassName('close-btn')[0].addEventListener('click', toggleNav);

const speakerCards = [
  {
    speakerPicture: 'images/speaker_03_original.png',
    speakName: 'Himari Adachi',
    featureSubTitle: 'Director of the Science research team in LeMorsels',
    featureParagraph: 'She leads work on food and farming solutions.She is a writer, researcher,and advocate in environmental sustainability, food, agriculture, and environmental health',
  },

  {
    speakerPicture: 'images/speaker_01_original.png',
    speakName: 'Adam Fetcher',
    featureSubTitle: 'Chief of the Plant Geneticist team in LeMorsels',
    featureParagraph: 'He keeps track of the improved value of edible plants regarding nutrition, flavor, appearance, yield, and hardiness. Working in laboratories, they upgrade existing crops and birth new plant varieties.',
  },

  {
    speakerPicture: 'images/speaker_02_original.png',
    speakName: 'Freddy Torres',
    featureSubTitle: 'Field Botanist and plant physiologist',
    featureParagraph: 'Torres is focused with the engagement in plant propagation, growth, and cultivation, both in the laboratory and outdoors. Creating new methods to help invent new medicines and optimize crop production.',
  },

  {
    speakerPicture: 'images/speaker_04_original.png',
    speakName: 'Genesis Lasko',
    featureSubTitle: 'Naturalist Specialist',
    featureParagraph: 'She raises environmental awareness through education. In creative ways, she brings up in people an appreciation for nature. Also through lectures and tours, a naturalist explains the effects of human activities on the environment.',
  },

  {
    speakerPicture: 'images/speaker_06_original.png',
    speakName: 'Walter James',
    featureSubTitle: 'Organic agriculture manager',
    featureParagraph: 'James addresses the methods, practices and substances used in producing and handling crops, livestock and processed agricultural products. Managing other employees and carrying out essential tasks like marketing and selling food.',
  },

  {
    speakerPicture: 'images/speaker_05_original.png',
    speakName: 'Andrea Thompson',
    featureSubTitle: 'Degree as Holistic Nutritionist',
    featureParagraph: 'Thompson is a specialized nutritionists that heal patients using natural foods and products instead of conventional medical treatments. Also evaluates a patient’s lifestyle, Introduces healthy eating habits and creates customized meal plans.',
  },
];

function setSpeakerContainerChildren() {
  const SpeakerContainer = document.querySelector('section.features-container');
  for (let i = 0; i < speakerCards.length; i += 1) {
    // Create features parent (div)
    const feature = document.createElement('div');
    feature.classList.add('feature-card');

    // Create feature Picture (img)
    const featureImg = document.createElement('img');
    featureImg.classList.add('speaker-img');
    featureImg.src = speakerCards[i].speakerPicture;
    feature.appendChild(featureImg);

    // Create Speaker content (div)
    const speakContent = document.createElement('div');
    speakContent.classList.add('speaker-icontent');
    feature.appendChild(speakContent);

    // Create feature Name (h3)
    const featureName = document.createElement('h3');
    featureName.classList.add('feature-name');
    featureName.textContent = speakerCards[i].speakName;
    speakContent.appendChild(featureName);

    // Create feature Subtitle (h5)
    const featureProf = document.createElement('h5');
    featureProf.classList.add('feature-profession');
    featureProf.textContent = speakerCards[i].featureSubTitle;
    speakContent.appendChild(featureProf);

    // Add hr separator to icontent (hr)
    const hrSeparator = document.createElement('hr');
    speakContent.appendChild(hrSeparator);

    // Create feature paragraph (p)
    const featurePrgph = document.createElement('p');
    featurePrgph.classList.add('feature-p');
    featurePrgph.textContent = speakerCards[i].featureParagraph;
    speakContent.appendChild(featurePrgph);

    SpeakerContainer.appendChild(feature);
  }
}

setSpeakerContainerChildren();