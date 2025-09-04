{
    "builds": [
        {
            "src": "dist/main.js",
            "use": "@vercel/nest"
        }
    ],
        "routes": [
            {
                "src": "/(.*)",
                "dest": "dist/main.js"
            }
        ]
}