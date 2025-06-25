import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Custom Business Website for Four Principals Solutions',
      subtitle:
        'A fully customized business website built with Angular & PrimeNG',
      description:
        'Developed and deployed a fully customized business website for Four Principals Solutions, designed to enhance its online presence. The project was built using Angular, TypeScript, and PrimeNG, ensuring a responsive and user-friendly experience. Integrated EmailJS for seamless contact form functionality.',
      techStack: ['Angular,', 'TypeScript,', 'PrimeNG,', 'EmailJS'],
      liveDemo: '',
      gitRepo: '',
      thumbnail: ['assets/images/Home page.PNG'],
    },
    {
      title: 'My Personal Portfolio Website',
      subtitle: 'Showcasing my skills, projects, and freelancing journey',
      description:
        'This portfolio website highlights my web development skills and showcases my technical projects and services. Built using Angular, TypeScript, and Bootstrap, the site features a clean, responsive layout and intuitive navigation. It’s designed to attract potential clients and employers while reflecting my personal brand.',
      techStack: ['Angular,', 'TypeScript,', 'Bootstrap,', 'EmailJs'],
      liveDemo: 'https://varads-portfolio.vercel.app',
      gitRepo: 'https://github.com/varadsalokhe99/portfolio-website',
      thumbnail: ['assets/images/portfoilio.PNG'],
    },
    {
      title: 'Job Listing Web Application',
      subtitle:
        'A full-stack job portal with role-based access for Employers and Job Seekers',
      description:
        'Developed a secure and feature-rich Job Listing Web App that allows Employers to post jobs and Job Seekers to apply. Built with React.js, Spring Boot, and MySQL, the app includes JWT-based authentication, dynamic job filtering, and user-specific dashboards. Designed to streamline the job application process with a clean and responsive interface.',
      techStack: ['React.js,', 'Spring Boot,', 'MySQL,', 'JWT'],
      liveDemo: '',
      gitRepo: 'https://github.com/varadsalokhe99/job-listing-webapp',
      thumbnail: ['https://thavamedu.org/not-image-available.png'],
    },
  ];
}
