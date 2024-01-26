interface Project {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    timeSpan?: string;
    link?: string;
}

interface Projects {
    header: string;
    projects: Project[];
    followUp?: {
        title: string;
        link: string;
    }
}

export const academicProjects = {
    header: "Academic Projects",
    projects: [
        {
            id: 1,
            timeSpan: '2020 - 2021',
            title: 'Project 1',
            description: 'This is project 1',
            keywords: ['keyword1', 'keyword2'],
            completed: false
        }
    ],
    followUp: {
        title: "View Full Resume",
        link: "https://www.google.com"
    }
}


export const personalProjects: Projects = {
    header: "Personal Projects",
    projects: [
        {
            image: 'https://via.placeholder.com/150',
            title: 'Recipe Project',
            link: 'https://github.com/neluchetraru/recipes-project',
            description: 'The "Recipes Project" is a web application created with Vite, React, and TypeScript, offering users a seamless experience in searching, creating, and saving recipes. Leveraging Axios, the application connects to a third-party API for a diverse recipe database. Zustand ensures efficient state management, maintaining a clean structure. Firebase is utilized for both basic and Google authentication, enhancing security. The result is a modern, responsive platform that combines powerful front-end technologies, streamlined API access, and robust state management, providing users with a centralized hub for all their recipe-related needs.',
            keywords: ['Vite', 'React', 'TypeScript', 'Axios', 'Zustand', 'Firebase', 'MUI'],
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Chat App',
            link: 'https://github.com/neluchetraru/nodeJS-chat-app-v1',
            description: '"Chat-app" is a web application that facilitates real-time communication through web sockets, employing Node.js and Express.js to construct the backend infrastructure. The seamless socket communication is made possible with the integration of Socket.io. On the frontend, basic web technologies are utilized to create a user-friendly interface, ensuring a smooth and intuitive chat experience. With Node.js and Socket.io working in tandem, "Chat-app" provides a robust platform for users to engage in real-time conversations.',
            keywords: ['Express.js', 'Socket.io', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            image: 'https://via.placeholder.com/150',
            title: 'Chat App',
            link: 'https://github.com/neluchetraru/task-manager',
            description: `The "Task Manager API" is a RESTful backend built with Node.js and Express.js, offering a robust foundation for managing tasks. The API incorporates secure authentication through jsonwebtoken (JWT) and bcryptjs, ensuring data integrity and user privacy. MongoDB, facilitated by mongoose, is employed for efficient schema design and aggregations, enabling seamless storage and retrieval of task-related information. To handle media uploads, Multer is integrated, enhancing the API's versatility. Altogether, the "Task Manager API" provides a scalable and secure solution for managing tasks, with a well-designed architecture that incorporates authentication, MongoDB, and media handling features.`,
            keywords: ['Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Multer', 'JWT', 'bcryptjs'],
        }

    ],
}

