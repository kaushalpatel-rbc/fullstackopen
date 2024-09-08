```mermaid
sequenceDiagram
  actor U as user
  participant B as browser
  participant S as server

  U ->> B: Submit notes data via form

  activate B

  B ->> B: Add note to notes

  B ->> S: POST /new_note_spa
  activate S
  S -->> B: 201 Created
  deactivate S

  deactivate B
```
