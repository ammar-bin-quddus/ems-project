const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update project documentation",
        "description": "Revise the API documentation for the current project.",
        "date": "2024-10-20",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Fix login issue",
        "description": "Resolve the bug causing login failures for certain users.",
        "date": "2024-10-15",
        "category": "Bug Fix"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Design new landing page",
        "description": "Create a fresh design for the main landing page.",
        "date": "2024-10-25",
        "category": "Design"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Optimize database queries",
        "description": "Improve the performance of slow database queries.",
        "date": "2024-10-22",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Review pull requests",
        "description": "Review and merge open pull requests from the team.",
        "date": "2024-10-18",
        "category": "Code Review"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Add unit tests for the new feature implemented.",
        "date": "2024-10-23",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare client report",
        "description": "Generate a report for the client based on recent data.",
        "date": "2024-10-21",
        "category": "Reporting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Fix CSS layout issue",
        "description": "Resolve the layout issues on the mobile version.",
        "date": "2024-10-19",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Implement user authentication",
        "description": "Add OAuth2 authentication to the platform.",
        "date": "2024-10-16",
        "category": "Backend"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Organize team meeting",
        "description": "Set up and organize the team meeting for the new sprint.",
        "date": "2024-10-24",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Review project timeline",
        "description": "Evaluate the current project timeline and update milestones.",
        "date": "2024-10-14",
        "category": "Planning"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Conduct code review session",
        "description": "Hold a team session to review the recent code commits.",
        "date": "2024-10-21",
        "category": "Code Review"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Debug payment gateway",
        "description": "Identify and resolve issues in the payment gateway integration.",
        "date": "2024-10-19",
        "category": "Backend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Write API documentation",
        "description": "Document the newly added API endpoints for external users.",
        "date": "2024-10-22",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Set up CI/CD pipeline",
        "description": "Automate the deployment pipeline for the project.",
        "date": "2024-10-17",
        "category": "DevOps"
      }
    ]
  }
];


const admin = [
    {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
   }
]


export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return {employees, admin};
}