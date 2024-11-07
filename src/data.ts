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

export const academicProjects: Projects = {
    header: "Academic Projects",
    projects: [
        {
            timeSpan: '2023',
            title: 'Bachelor Thesis: Development of a device for the digitalization of paper-based diagnostic markers',
            description: `This digitalization of paper-based diagnosis markers combines knowledge of
            hardware, software, LFA prototyping, and 3D printing techniques. Hardware
            toolchains provide communication with a microcontroller, the color sensor, and
            the LED. The software provides the user with an interface for easy data manipulation and easy control of the testing process. Finally, knowledge of LFA
            prototyping and 3D printing techniques is required to develop and test the device aimed to be developed in this thesis.`,
            keywords: ['LFA Prototyping', '3D Printing (resin + PLA)', 'Color Sensor', 'User Interface (touchscreen display)', 'MicroPython', 'ESP32', 'HTML', 'CSS', 'JavaScript', 'REST API', 'Node.js', 'Electron', 'chart.js'],
        },
        {
            timeSpan: '2022',
            title: 'RoboRally: A Multiplayer (Board)Game',
            link: 'https://github.com/JiananAlvin/02160_roborally',
            description: 'This project is a digital adaptation of the board game RoboRally. The game is a turn-based multiplayer game where players control robots and compete with each other. The server is implemented with Node.js and Express.js, and the client is implemented with Java (MVC). The server and client communicate through web sockets. The game is deployed on Heroku and Netlify.',
            keywords: ['Java', 'Agile', 'MVC', 'Node.js', 'Express.js', 'Web Sockets', 'Heroku', 'Netlify', 'TDD', 'CI/CD', 'Git', 'MongoDB', 'Cucumber', 'Postman'],
        },
        {
            timeSpan: '2022',
            title: 'DB-4: Autonomous devices for controlling and studying living',
            link: 'https://github.com/neluchetraru/DB4',
            description: `The DB-4 project aims to develop a device that can control and study living organisms. The device is developed with a modular approach, allowing for easy expansion and customization. The device is controlled through a web interface, and it is equipped with a camera, sensors, and actuators. The project is developed with a focus on sustainability and modularity.`,
            keywords: ['MQTT', 'CAD', 'MicroPython', 'ESP32', 'PID Control']
        }
    ],
    followUp: {
        title: "View Full Resume",
        link: "/cv.pdf"
    }
}


export const personalProjects: Projects = {
    header: "Personal Projects",
    projects: [
        {
            title: 'Link-sharing App',
            link: 'https://github.com/neluchetraru/link-sharing-app',
            description: 'A modern link-sharing application built as a solution to the Frontend Mentor challenge. This full-stack application allows users to create and share their social media profiles through a clean, intuitive interface. Built with Next.js 14, the app features secure authentication via Kinde, seamless image uploads with uploadthing, and robust form handling using @tanstack/react-query. The UI is crafted using shadcn-ui components, ensuring a polished and responsive user experience.',
            keywords: ['Next.js 14', 'TypeScript', 'shadcn-ui', 'Kinde Auth', 'uploadthing', '@tanstack/react-query', 'Prisma'],
            image: '/link-sharing-app.png',
        },
        {
            image: '/recipes-project.png',
            title: 'Recipe Project',
            link: 'https://github.com/neluchetraru/recipes-project',
            description: 'The "Recipes Project" is a web application created with Vite, React, and TypeScript, offering users a seamless experience in searching, creating, and saving recipes. Leveraging Axios, the application connects to a third-party API for a diverse recipe database. Zustand ensures efficient state management, maintaining a clean structure. Firebase is utilized for both basic and Google authentication, enhancing security. The result is a modern, responsive platform that combines powerful front-end technologies, streamlined API access, and robust state management, providing users with a centralized hub for all their recipe-related needs.',
            keywords: ['Vite', 'React', 'TypeScript', 'Axios', 'Zustand', 'Firebase', 'MUI'],
        },
        {
            image: '/chat-app.jpg',
            title: 'Chat App',
            link: 'https://github.com/neluchetraru/nodeJS-chat-app-v1',
            description: '"Chat-app" is a web application that facilitates real-time communication through web sockets, employing Node.js and Express.js to construct the backend infrastructure. The seamless socket communication is made possible with the integration of Socket.io. On the frontend, basic web technologies are utilized to create a user-friendly interface, ensuring a smooth and intuitive chat experience. With Node.js and Socket.io working in tandem, "Chat-app" provides a robust platform for users to engage in real-time conversations.',
            keywords: ['Express.js', 'Socket.io', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            image: '/task-manager.png',
            title: 'Task Manager API',
            link: 'https://github.com/neluchetraru/task-manager',
            description: `The "Task Manager API" is a RESTful backend built with Node.js and Express.js, offering a robust foundation for managing tasks. The API incorporates secure authentication through jsonwebtoken (JWT) and bcryptjs, ensuring data integrity and user privacy. MongoDB, facilitated by mongoose, is employed for efficient schema design and aggregations, enabling seamless storage and retrieval of task-related information. To handle media uploads, Multer is integrated, enhancing the API's versatility. Altogether, the "Task Manager API" provides a scalable and secure solution for managing tasks, with a well-designed architecture that incorporates authentication, MongoDB, and media handling features.`,
            keywords: ['Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Multer', 'JWT', 'bcryptjs'],
        },


    ],
}

