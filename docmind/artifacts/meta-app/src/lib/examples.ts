export const examples = {
  profile: {
    "type": "page",
    "title": "User Profile",
    "components": [
      {
        "type": "form",
        "title": "Edit Profile",
        "fields": [
          { "type": "text", "name": "firstName", "label": "First Name", "required": true },
          { "type": "text", "name": "lastName", "label": "Last Name", "required": true },
          { "type": "email", "name": "email", "label": "Email", "required": true },
          { "type": "select", "name": "role", "label": "Role", "options": [
            { "label": "Admin", "value": "admin" },
            { "label": "Editor", "value": "editor" },
            { "label": "Viewer", "value": "viewer" }
          ]},
          { "type": "textarea", "name": "bio", "label": "Bio", "placeholder": "Tell us about yourself" }
        ],
        "submitLabel": "Save Profile"
      }
    ]
  },
  sales: {
    "type": "page",
    "title": "Sales Dashboard",
    "components": [
      {
        "type": "dashboard",
        "title": "Q4 Overview",
        "widgets": [
          { "type": "stat", "title": "Total Revenue", "value": "$124,500", "label": "This quarter", "trend": "up" },
          { "type": "stat", "title": "New Customers", "value": 342, "label": "Last 30 days", "trend": "up" },
          { "type": "stat", "title": "Churn Rate", "value": "2.4%", "label": "Monthly", "trend": "down" },
          { "type": "progress", "title": "Sales Target", "value": 78, "label": "78% of $160k goal" },
          { "type": "chart", "title": "Monthly Sales", "data": [
            { "label": "Oct", "value": 42000 },
            { "label": "Nov", "value": 58000 },
            { "label": "Dec", "value": 24500 }
          ]}
        ]
      }
    ]
  },
  table: {
    "type": "page",
    "title": "Customer Records",
    "components": [
      {
        "type": "table",
        "title": "All Customers",
        "columns": [
          { "key": "name", "label": "Name", "sortable": true },
          { "key": "email", "label": "Email" },
          { "key": "plan", "label": "Plan", "type": "badge" },
          { "key": "mrr", "label": "MRR", "type": "number", "sortable": true },
          { "key": "status", "label": "Status", "type": "badge" }
        ],
        "rows": [
          { "name": "Acme Corp", "email": "billing@acme.com", "plan": "Enterprise", "mrr": 4500, "status": "active" },
          { "name": "Globex Inc", "email": "admin@globex.io", "plan": "Pro", "mrr": 299, "status": "active" },
          { "name": "Initech", "email": "ops@initech.com", "plan": "Starter", "mrr": 49, "status": "trial" },
          { "name": "Umbrella LLC", "email": "tech@umbrella.co", "plan": "Pro", "mrr": 299, "status": "churned" },
          { "name": "Dunder Mifflin", "email": "hr@dundermifflin.com", "plan": "Enterprise", "mrr": 2100, "status": "active" }
        ],
        "pagination": true
      }
    ]
  },
  workflow: {
    "type": "page",
    "title": "Onboarding Flow",
    "components": [
      {
        "type": "workflow",
        "title": "Getting Started",
        "currentStep": 1,
        "steps": [
          { "id": "account", "label": "Create Account", "description": "Set up your profile and preferences", "status": "complete" },
          { "id": "connect", "label": "Connect Data Source", "description": "Link your database or upload a CSV", "status": "active", "actions": [
            { "label": "Connect Database", "type": "primary" },
            { "label": "Upload CSV", "type": "secondary" }
          ]},
          { "id": "configure", "label": "Configure Schema", "description": "Map your fields to MetaForge components", "status": "pending" },
          { "id": "preview", "label": "Preview & Deploy", "description": "Review and publish your generated app", "status": "pending" }
        ]
      }
    ]
  },
  invalid: {
    "type": "page",
    "title": "Resilience Demo",
    "components": [
      { "type": "unknownWidget", "id": "mystery", "someField": "value" },
      { "type": "form", "fields": [
        { "type": "text", "name": "valid" },
        { "type": "unknownFieldType", "name": "broken" },
        { "name": "noType" }
      ]},
      { "type": "table", "columns": null, "rows": "not-an-array" },
      { "type": "dashboard", "widgets": [
        { "type": "stat" },
        { "type": "unknownWidget", "title": "Mystery Widget" }
      ]}
    ]
  }
};
