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
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          h1 {
            color: #00ffcc;
            font-size: 3rem;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 4px;
            animation: glow 2s ease-in-out infinite alternate;
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
      </body>
      </html>
    `;
    res.send(html);
  }
}
