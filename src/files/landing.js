export const getLandingPage = () => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express Simplicity</title>
        <style>
        body {
            background: linear-gradient(135deg, #FFF7D4, #FFD95A, #C07F00, #4C3D3D);
            font-family: Arial, sans-serif;
            color: #4C3D3D;
            margin: 0;
            padding: 0;
            animation: gradientAnimation 15s ease infinite;
        }
        
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        
        .welcome-message {
            text-align: center;
            padding: 20px;
            max-width: 900px;
        }
        
        h1 {
            font-size: 70px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        
        p {
            font-size: 28px;
            margin-bottom: 30px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 20px;
            font-size: 20px;
            text-decoration: none;
            background-color: #C07F00;
            color: #FFF7D4;
            border-radius: 10px;
            transition: background-color 0.3s ease;
        }
        
        .btn:hover {
            background-color: #FFD95A;
        }
        
        @keyframes gradientAnimation {
            0% {
            background-position: 0% 50%;
            }
            50% {
            background-position: 100% 50%;
            }
            100% {
            background-position: 0% 50%;
            }
        }
        
        @media (max-width: 768px) {
            h1 {
            font-size: 36px;
            }
            
            p {
            font-size: 20px;
            }
            
            .btn {
            font-size: 18px;
            padding: 10px 16px;
            }
        }
        </style>
    </head>
    <body>
        <div class="container">
        <div class="welcome-message">
            <h1>Express Simplicity</h1>
            <p>Hope this project will help speed up your journey with Express.js.</p>
            <a href="#" class="btn">Get Started</a>
        </div>
        </div>
    </body>
</html>
`
};