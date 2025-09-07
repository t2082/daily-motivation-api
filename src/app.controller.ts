import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quote Motivation API</title>
        <style>
          body {
            background: #0f0f0f;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #e0e0e0;
          }
          h1 {
            color: #00ffcc;
            font-size: 3rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 4px;
            animation: glow 2s ease-in-out infinite alternate;
            margin-bottom: 2rem;
          }
          button {
            padding: 1rem 2.5rem;
            font-size: 1.2rem;
            background: transparent;
            color: #00ffcc;
            border: 2px solid #00ffcc;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 0 0 5px #00ffcc, 0 0 10px #00e6b8;
            box-shadow: 0 0 5px #00ffcc, 0 0 10px #00e6b8 inset;
          }
          
          @keyframes glow {
            from {
              text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 
                           0 0 30px #00cc99, 0 0 40px #009977;
            }
            to {
              text-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffcc, 
                           0 0 40px #00ffcc, 0 0 50px #00e6b8, 
                           0 0 60px #00cca3;
            }
          }
        </style>
      </head>
      <body>
        <h1>🚀 Quote Motivation API 🚀</h1>
        <button onclick="window.location.href='/guide'">View API Guide</button>
      </body>
      </html>
    `;
    res.send(html);
  }

  @Get('guide')
  getGuide(@Res() res: Response) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API Guide</title>
        <style>
          body {
            background: #0f0f0f;
            color: #e0e0e0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 2rem;
          }
          h1 {
            color: #00ffcc;
            text-align: center;
            margin-bottom: 2rem;
            text-transform: uppercase;
            letter-spacing: 4px;
            animation: glow 2s ease-in-out infinite alternate;
          }
          h2 {
            color: #00e6b8;
            margin-top: 2rem;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin: 0.5rem 0;
            padding: 0.5rem;
            background: #1a1a1a;
            border-radius: 8px;
          }
          code {
            color: #00ffcc;
          }
          @keyframes glow {
            from {
              text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 
                           0 0 30px #00cc99, 0 0 40px #009977;
            }
            to {
              text-shadow: 0 0 20px #00ffcc, 0 0 30px #00ffcc, 
                           0 0 40px #00ffcc, 0 0 50px #00e6b8, 
                           0 0 60px #00cca3;
            }
          }
        </style>
      </head>
      <body>
        <h1>📖 API Guide</h1>
        
        <h2>Available Endpoints</h2>
        <ul>
          <li><code>GET /quotes</code> → Get all quotes (optionally <code>?limit=10</code>)</li>
          <li><code>GET /quotes/:id</code> → Get a quote by ID</li>
          <li><code>GET /quotes/random</code> → Get random quotes (optionally <code>?limit=5</code> and/or <code>?tags=life|inspiration</code>)</li>
          <li><code>GET /quotes/by-tag/:slug</code> → Get quotes by tag</li>
          <li><code>GET /quotes/by-author/:author</code> → Get quotes by author</li>
        </ul>

        <h2>Example Requests</h2>
        <ul>
          <li><code>/quotes?limit=5</code></li>
          <li><code>/quotes/1</code></li>
          <li><code>/quotes/random?limit=3</code></li>
          <li><code>/quotes/random?tags=success-and-failure|entrepreneurship-and-spirit&limit=10</code></li>
          <li><code>/quotes/by-tag/inspiration</code></li>
          <li><code>/quotes/by-author/Mark%20Twain</code></li>
        </ul>
      </body>
      </html>
    `;
    res.send(html);
  }
}
