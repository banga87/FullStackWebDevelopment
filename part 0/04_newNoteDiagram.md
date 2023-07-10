sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter text in field
    note right of User: User types note into form
    User->>Browser: Click submit
    note right of User: User submits form
    Browser->>Server: HTTP POST /notes
    note right of Browser: Browser sends new note data
    Server->>Browser: HTTP 200 OK
    note right of Server: Server acknowledges receipt
    Browser->>User: Display confirmation
    note right of Browser: Browser confirms note save
