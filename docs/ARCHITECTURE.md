**Architecture**
 
                    CUSTOMER
                       │
                       ▼
                ┌──────────────┐
                │ React.js     │
                │ Frontend     │
                └──────┬───────┘
                       │
                   HTTP/JSON
                       │
                       ▼
                ┌──────────────┐
                │ Express.js   │
                │ REST API     │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │ PostgreSQL   │
                │ Database     │
                └──────────────┘

React
 ↓
User interface

Express
 ↓
API + business logic

PostgreSQL
 ↓
Persistent data