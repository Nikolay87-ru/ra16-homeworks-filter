import { useState } from 'react';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';

const projectsData = [
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
    category: 'Flayers',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
    category: 'Websites',
  },
  {
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
    category: 'Flayers',
  },
];

export const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

  const selectedImage =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedFilter);

  return (
    <div className="container mx-auto p-4">
      <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={setSelectedFilter} />
      <ProjectList projects={selectedImage} />
    </div>
  );
};
