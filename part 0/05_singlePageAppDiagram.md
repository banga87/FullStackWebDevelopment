```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter text in field
    note right of User: User types note into form
    User->>Browser: Click submit
    note right of User: User submits form
    Browser->>Server: AJAX POST /notes
    note right of Browser: Browser sends new note data asynchronously
    Server-->>Browser: HTTP 200 OK, { note data }
    note right of Server: Server acknowledges receipt and sends back the saved note data
    Browser->>Browser: Render new note
    note right of Browser: Browser updates the UI to include the new note
    Browser->>User: Display confirmation
    note right of Browser: Browser confirms note save
