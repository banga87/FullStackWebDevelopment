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
    Browser->>Browser: Update DOM with new note
    note right of Browser: Browser updates the page without reloading
    Browser->>User: Display new note on page
    note right of Browser: User sees the new note immediately without a page refresh
