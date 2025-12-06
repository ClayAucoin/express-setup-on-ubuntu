// app.js

import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!")
})

// IMPORTANT: bind to 0.0.0.0 
// so it listens on all interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})